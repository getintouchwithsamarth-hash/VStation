import { useState } from 'react';
import { getShiprocketDeliveryEstimate, type ShiprocketDeliveryEstimate } from '../../../lib/shiprocket';

type UseDeliveryEstimateParams = {
  pickupPostcode?: string | null;
  weightKg: number | null;
  cod: boolean;
};

type DeliveryEstimateState = {
  estimate: ShiprocketDeliveryEstimate | null;
  error: string | null;
  isLoading: boolean;
};

export function useDeliveryEstimate({ pickupPostcode, weightKg, cod }: UseDeliveryEstimateParams) {
  const [state, setState] = useState<DeliveryEstimateState>({
    estimate: null,
    error: null,
    isLoading: false
  });

  const checkDelivery = async (deliveryPostcode: string) => {
    if (typeof weightKg !== 'number' || !Number.isFinite(weightKg)) {
      setState({
        estimate: null,
        error: 'Delivery estimate is unavailable because the shipment weight is not configured.',
        isLoading: false
      });
      return;
    }

    setState((current) => ({
      ...current,
      error: null,
      isLoading: true
    }));

    try {
      const estimate = await getShiprocketDeliveryEstimate({
        pickupPostcode: pickupPostcode || undefined,
        deliveryPostcode,
        weight: weightKg,
        cod
      });

      setState({
        estimate,
        error: null,
        isLoading: false
      });
    } catch (error) {
      setState({
        estimate: null,
        error: error instanceof Error ? error.message : 'Failed to fetch delivery estimate.',
        isLoading: false
      });
    }
  };

  return {
    ...state,
    checkDelivery
  };
}
