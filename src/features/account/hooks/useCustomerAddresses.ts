import { useEffect, useState } from 'react';
import {
  createCustomerAddress,
  deleteCustomerAddress,
  getCustomerAccessTokenExpiry,
  getCustomerData,
  setDefaultAddress,
  updateCustomerAddress
} from '../../../lib/shopify-customer';
import type { CustomerAddress } from '../types';
import { useAuth } from '../AuthContext';
import { mapAddressFormToShopifyInput, mapCustomerProfileToAddresses } from './mappers';

function buildOperationError(message: string, code?: string): Error & { code?: string } {
  const error = new Error(message) as Error & { code?: string };
  error.code = code;
  return error;
}

export function useCustomerAddresses() {
  const { accessToken, isAuthenticated } = useAuth();
  const [addresses, setAddresses] = useState<CustomerAddress[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resolvedAccessToken = accessToken || getCustomerAccessTokenExpiry().accessToken;

  const refresh = async () => {
    if (!resolvedAccessToken || !isAuthenticated) {
      setAddresses([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const profileResult = await getCustomerData(resolvedAccessToken);
      if (!profileResult.ok || !profileResult.data) {
        throw buildOperationError(
          profileResult.error?.message || 'Unable to load addresses.',
          profileResult.error?.code
        );
      }

      setAddresses(mapCustomerProfileToAddresses(profileResult.data));
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'Unable to load addresses.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void refresh();
  }, [resolvedAccessToken, isAuthenticated]);

  const runMutation = async (operation: () => Promise<void>) => {
    setIsSaving(true);
    setError(null);

    try {
      await operation();
      await refresh();
    } catch (mutationError) {
      const message = mutationError instanceof Error ? mutationError.message : 'Unable to update addresses.';
      setError(message);
      throw mutationError;
    } finally {
      setIsSaving(false);
    }
  };

  return {
    addresses,
    isLoading,
    isSaving,
    error,
    refresh,
    createAddress: async (address: Omit<CustomerAddress, 'id' | 'isDefault'>) => {
      if (!resolvedAccessToken) {
        throw new Error('No active customer session was found.');
      }

      await runMutation(async () => {
        const result = await createCustomerAddress(resolvedAccessToken, mapAddressFormToShopifyInput(address));
        if (!result.ok) {
          throw buildOperationError(result.error.message || 'Unable to create address.', result.error.code);
        }
      });
    },
    editAddress: async (address: CustomerAddress) => {
      if (!resolvedAccessToken) {
        throw new Error('No active customer session was found.');
      }

      await runMutation(async () => {
        const result = await updateCustomerAddress(
          resolvedAccessToken,
          address.id,
          mapAddressFormToShopifyInput(address)
        );
        if (!result.ok) {
          throw buildOperationError(result.error.message || 'Unable to update address.', result.error.code);
        }
      });
    },
    removeAddress: async (addressId: string) => {
      if (!resolvedAccessToken) {
        throw new Error('No active customer session was found.');
      }

      await runMutation(async () => {
        const result = await deleteCustomerAddress(resolvedAccessToken, addressId);
        if (!result.ok) {
          throw buildOperationError(result.error.message || 'Unable to delete address.', result.error.code);
        }
      });
    },
    makeDefaultAddress: async (addressId: string) => {
      if (!resolvedAccessToken) {
        throw new Error('No active customer session was found.');
      }

      await runMutation(async () => {
        const result = await setDefaultAddress(resolvedAccessToken, addressId);
        if (!result.ok) {
          throw buildOperationError(
            result.error.message || 'Unable to set the default address.',
            result.error.code
          );
        }
      });
    }
  };
}
