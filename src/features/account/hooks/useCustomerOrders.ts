import { useEffect, useState } from 'react';
import { getCustomerAccessTokenExpiry, getCustomerOrders } from '../../../lib/shopify-customer';
import type { CustomerOrder, CustomerOrdersPageInfo } from '../types';
import { useAuth } from '../AuthContext';
import { mapCustomerOrders } from './mappers';

export function useCustomerOrders() {
  const { accessToken, isAuthenticated } = useAuth();
  const [orders, setOrders] = useState<CustomerOrder[]>([]);
  const [pageInfo, setPageInfo] = useState<CustomerOrdersPageInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resolvedAccessToken = accessToken || getCustomerAccessTokenExpiry().accessToken;

  const loadOrders = async (after?: string, append = false) => {
    if (!resolvedAccessToken || !isAuthenticated) {
      setOrders([]);
      setPageInfo(null);
      setIsLoading(false);
      return;
    }

    if (append) {
      setIsLoadingMore(true);
    } else {
      setIsLoading(true);
    }

    setError(null);

    try {
      const result = await getCustomerOrders(resolvedAccessToken, 10, after);
      if (!result.ok) {
        throw new Error(result.error.message || 'Unable to load orders.');
      }

      const mappedOrders = mapCustomerOrders(result.data);
      setOrders((current) => (append ? [...current, ...mappedOrders] : mappedOrders));
      setPageInfo(
        result.data
          ? {
              hasNextPage: result.data.pageInfo.hasNextPage,
              hasPreviousPage: result.data.pageInfo.hasPreviousPage,
              startCursor: result.data.pageInfo.startCursor,
              endCursor: result.data.pageInfo.endCursor
            }
          : null
      );
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'Unable to load orders.');
    } finally {
      setIsLoading(false);
      setIsLoadingMore(false);
    }
  };

  useEffect(() => {
    void loadOrders();
  }, [resolvedAccessToken, isAuthenticated]);

  return {
    orders,
    pageInfo,
    hasMore: Boolean(pageInfo?.hasNextPage && pageInfo?.endCursor),
    isLoading,
    isLoadingMore,
    error,
    refresh: async () => loadOrders(),
    loadMore: async () => {
      if (pageInfo?.endCursor) {
        await loadOrders(pageInfo.endCursor, true);
      }
    }
  };
}
