import { useEffect, useState } from 'react';
import { getCustomerAccessTokenExpiry, getCustomerOrder } from '../../../lib/shopify-customer';
import type { CustomerOrderDetail } from '../types';
import { useAuth } from '../AuthContext';
import { mapCustomerOrderDetail } from './mappers';

export function useCustomerOrder(orderId: string | null) {
  const { accessToken, isAuthenticated } = useAuth();
  const [order, setOrder] = useState<CustomerOrderDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const resolvedAccessToken = accessToken || getCustomerAccessTokenExpiry().accessToken;

  useEffect(() => {
    let isCancelled = false;

    const loadOrder = async () => {
      if (!orderId) {
        setOrder(null);
        setError('Order not found.');
        setIsLoading(false);
        return;
      }

      if (!resolvedAccessToken || !isAuthenticated) {
        setOrder(null);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const result = await getCustomerOrder(resolvedAccessToken, orderId);
        if (!result.ok) {
          throw new Error(result.error.message || 'Unable to load the order.');
        }

        if (!isCancelled) {
          const mappedOrder = mapCustomerOrderDetail(result.data);
          setOrder(mappedOrder);
          setError(mappedOrder ? null : 'Order not found.');
        }
      } catch (loadError) {
        if (!isCancelled) {
          setOrder(null);
          setError(loadError instanceof Error ? loadError.message : 'Unable to load the order.');
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    };

    void loadOrder();

    return () => {
      isCancelled = true;
    };
  }, [orderId, resolvedAccessToken, isAuthenticated]);

  return {
    order,
    isLoading,
    error,
    refresh: async () => {
      if (!orderId || !resolvedAccessToken || !isAuthenticated) {
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const result = await getCustomerOrder(resolvedAccessToken, orderId);
        if (!result.ok) {
          throw new Error(result.error.message || 'Unable to load the order.');
        }

        const mappedOrder = mapCustomerOrderDetail(result.data);
        setOrder(mappedOrder);
        setError(mappedOrder ? null : 'Order not found.');
      } catch (loadError) {
        setOrder(null);
        setError(loadError instanceof Error ? loadError.message : 'Unable to load the order.');
      } finally {
        setIsLoading(false);
      }
    }
  };
}
