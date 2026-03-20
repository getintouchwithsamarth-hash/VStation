const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";
const ETA_CHECK_ENDPOINT = import.meta.env.VITE_ETA_CHECK_ENDPOINT || "/eta/check";

export interface EtaWindow {
  dispatchBusinessDays: number;
  transitMinBusinessDays: number;
  transitMaxBusinessDays: number;
  estimatedMinDate: string;
  estimatedMaxDate: string;
}

export interface EtaResponse {
  serviceable: boolean;
  pickupPincode: string | null;
  deliveryPincode: string | null;
  originZone: string | null;
  destinationZone: string | null;
  eta: EtaWindow | null;
  dispatchDays: number | null;
  transitDays: { min: number; max: number } | null;
  estimatedMinDate: string | null;
  estimatedMaxDate: string | null;
  message: string;
  ruleVersion: string;
  reasonCode?: string;
}

function buildEtaUrl(): string {
  if (
    ETA_CHECK_ENDPOINT.startsWith("http://") ||
    ETA_CHECK_ENDPOINT.startsWith("https://")
  ) {
    return ETA_CHECK_ENDPOINT;
  }

  return `${BACKEND_URL.replace(/\/+$/, "")}/${ETA_CHECK_ENDPOINT.replace(
    /^\/+/,
    "",
  )}`;
}

export async function checkEta(deliveryPincode: string): Promise<EtaResponse> {
  const response = await fetch(buildEtaUrl(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ deliveryPincode }),
  });

  const payload = (await response.json()) as EtaResponse;

  if (!payload || typeof payload !== "object" || typeof payload.message !== "string") {
    throw new Error("ETA service returned an unexpected response.");
  }

  return payload;
}
