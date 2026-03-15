const SHIPROCKET_BASE_URL = (import.meta.env.VITE_SHIPROCKET_BASE_URL || 'https://apiv2.shiprocket.in').replace(/\/+$/, '');
const SHIPROCKET_PROXY_ENDPOINT = import.meta.env.VITE_SHIPROCKET_SERVICEABILITY_PROXY_ENDPOINT || '';
const SHIPROCKET_EMAIL = import.meta.env.VITE_SHIPROCKET_EMAIL || '';
const SHIPROCKET_PASSWORD = import.meta.env.VITE_SHIPROCKET_PASSWORD || '';

type ShiprocketAuthResponse = {
  token?: string;
};

type ShiprocketCourierCompany = {
  courier_name?: string;
  etd?: string;
  estimated_delivery_days?: number | string | null;
  rate?: number | string | null;
  freight_charge?: number | string | null;
  cod_charges?: number | string | null;
};

type ShiprocketServiceabilityResponse = {
  status?: number;
  message?: string;
  data?: {
    available_courier_companies?: ShiprocketCourierCompany[];
  };
  available_courier_companies?: ShiprocketCourierCompany[];
};

export type ShiprocketServiceabilityParams = {
  pickupPostcode: string;
  deliveryPostcode: string;
  orderId?: string;
  weight?: number;
  cod?: boolean;
  mode?: 'Surface' | 'Air';
};

export type ShiprocketDeliveryEstimate = {
  available: boolean;
  message: string;
  courierName: string | null;
  etd: string | null;
  estimatedDeliveryDays: number | null;
  rate: number | null;
  courierCount: number;
};

let cachedAuthToken: { token: string; expiresAt: number | null } | null = null;

const normalizePostcode = (value: string): string => value.replace(/\D+/g, '').slice(0, 6);

const parseNumber = (value: unknown): number | null => {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === 'string') {
    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  return null;
};

const getTokenExpiry = (token: string): number | null => {
  const parts = token.split('.');
  if (parts.length < 2 || typeof atob !== 'function') {
    return null;
  }

  try {
    const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/'))) as { exp?: number };
    return typeof payload.exp === 'number' ? payload.exp * 1000 : null;
  } catch {
    return null;
  }
};

const buildShiprocketUrl = (path: string): string => `${SHIPROCKET_BASE_URL}/${path.replace(/^\/+/, '')}`;

const getAvailableCouriers = (payload: ShiprocketServiceabilityResponse): ShiprocketCourierCompany[] =>
  payload.data?.available_courier_companies || payload.available_courier_companies || [];

const normalizeEstimate = (payload: ShiprocketServiceabilityResponse): ShiprocketDeliveryEstimate => {
  const couriers = getAvailableCouriers(payload)
    .map((courier) => ({
      courierName: courier.courier_name || null,
      etd: courier.etd || null,
      estimatedDeliveryDays: parseNumber(courier.estimated_delivery_days),
      rate: parseNumber(courier.rate) ?? parseNumber(courier.freight_charge)
    }))
    .sort((left, right) => {
      const dayDelta = (left.estimatedDeliveryDays ?? Number.POSITIVE_INFINITY) - (right.estimatedDeliveryDays ?? Number.POSITIVE_INFINITY);
      if (dayDelta !== 0) {
        return dayDelta;
      }

      return (left.rate ?? Number.POSITIVE_INFINITY) - (right.rate ?? Number.POSITIVE_INFINITY);
    });

  const bestCourier = couriers[0];
  if (!bestCourier) {
    return {
      available: false,
      message: payload.message || 'Delivery is unavailable for this pincode.',
      courierName: null,
      etd: null,
      estimatedDeliveryDays: null,
      rate: null,
      courierCount: 0
    };
  }

  return {
    available: true,
    message: payload.message || 'Delivery is available.',
    courierName: bestCourier.courierName,
    etd: bestCourier.etd,
    estimatedDeliveryDays: bestCourier.estimatedDeliveryDays,
    rate: bestCourier.rate,
    courierCount: couriers.length
  };
};

const getDirectAuthToken = async (): Promise<string> => {
  if (cachedAuthToken && (!cachedAuthToken.expiresAt || cachedAuthToken.expiresAt - Date.now() > 60_000)) {
    return cachedAuthToken.token;
  }

  if (!SHIPROCKET_EMAIL || !SHIPROCKET_PASSWORD) {
    throw new Error(
      'Shiprocket credentials are missing. Configure VITE_SHIPROCKET_SERVICEABILITY_PROXY_ENDPOINT or direct Shiprocket credentials.'
    );
  }

  const response = await fetch(buildShiprocketUrl('/v1/external/auth/login'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: SHIPROCKET_EMAIL,
      password: SHIPROCKET_PASSWORD
    })
  });

  if (!response.ok) {
    throw new Error(`Shiprocket auth failed with HTTP ${response.status}.`);
  }

  const payload = (await response.json()) as ShiprocketAuthResponse;
  if (!payload.token) {
    throw new Error('Shiprocket auth response did not include a bearer token.');
  }

  cachedAuthToken = {
    token: payload.token,
    expiresAt: getTokenExpiry(payload.token)
  };

  return payload.token;
};

const fetchViaProxy = async (params: ShiprocketServiceabilityParams): Promise<ShiprocketDeliveryEstimate> => {
  const response = await fetch(SHIPROCKET_PROXY_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(params)
  });

  if (!response.ok) {
    throw new Error(`Shiprocket proxy failed with HTTP ${response.status}.`);
  }

  const payload = (await response.json()) as ShiprocketServiceabilityResponse | ShiprocketDeliveryEstimate;
  if ('available' in payload && 'courierCount' in payload) {
    return payload;
  }

  return normalizeEstimate(payload);
};

const fetchDirect = async (params: ShiprocketServiceabilityParams): Promise<ShiprocketDeliveryEstimate> => {
  const token = await getDirectAuthToken();
  const searchParams = new URLSearchParams({
    pickup_postcode: params.pickupPostcode,
    delivery_postcode: params.deliveryPostcode
  });

  if (params.orderId) {
    searchParams.set('order_id', params.orderId);
  } else {
    if (typeof params.weight !== 'number' || !Number.isFinite(params.weight)) {
      throw new Error('Shiprocket serviceability requires `weight` when `orderId` is not provided.');
    }

    searchParams.set('weight', String(params.weight));
    searchParams.set('cod', params.cod ? '1' : '0');
  }

  if (params.mode) {
    searchParams.set('mode', params.mode);
  }

  const response = await fetch(buildShiprocketUrl(`/v1/external/courier/serviceability/?${searchParams.toString()}`), {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error(`Shiprocket serviceability failed with HTTP ${response.status}.`);
  }

  return normalizeEstimate((await response.json()) as ShiprocketServiceabilityResponse);
};

export const isShiprocketConfigured = (): boolean =>
  Boolean(SHIPROCKET_PROXY_ENDPOINT || (SHIPROCKET_EMAIL && SHIPROCKET_PASSWORD));

export async function getShiprocketDeliveryEstimate(
  params: ShiprocketServiceabilityParams
): Promise<ShiprocketDeliveryEstimate> {
  const pickupPostcode = normalizePostcode(params.pickupPostcode);
  const deliveryPostcode = normalizePostcode(params.deliveryPostcode);

  if (pickupPostcode.length !== 6) {
    throw new Error('A valid 6-digit pickup pincode is required.');
  }

  if (deliveryPostcode.length !== 6) {
    throw new Error('A valid 6-digit delivery pincode is required.');
  }

  const normalizedParams: ShiprocketServiceabilityParams = {
    ...params,
    pickupPostcode,
    deliveryPostcode
  };

  if (SHIPROCKET_PROXY_ENDPOINT) {
    return fetchViaProxy(normalizedParams);
  }

  return fetchDirect(normalizedParams);
}
