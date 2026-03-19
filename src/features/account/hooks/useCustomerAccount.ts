import { useEffect, useState } from 'react';
import {
  getCustomerAccessTokenExpiry,
  getCustomerData,
  loginCustomer,
  logout as logoutCustomer,
  refreshCustomerToken,
  registerCustomer,
  requestPasswordReset as requestCustomerPasswordReset,
  resetPassword as resetCustomerPassword,
  updateCustomerProfile
} from '../../../lib/shopify-customer';
import type { Customer, RegisterData } from '../types';
import { mapCustomerProfileToAccountCustomer } from './mappers';

export function useCustomerAccount() {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refreshCustomerData = async () => {
    const session = getCustomerAccessTokenExpiry();
    if (!session.accessToken) {
      setCustomer(null);
      setAccessToken(null);
      return;
    }

    const renewedTokenResult = await refreshCustomerToken(session.accessToken);
    if (!renewedTokenResult.ok) {
      logoutCustomer();
      setCustomer(null);
      setAccessToken(null);
      throw new Error(renewedTokenResult.error.message || 'Customer session expired.');
    }

    const customerResult = await getCustomerData(renewedTokenResult.data.accessToken);
    if (!customerResult.ok || !customerResult.data) {
      throw new Error(customerResult.error.message || 'Unable to load customer data.');
    }

    setCustomer(mapCustomerProfileToAccountCustomer(customerResult.data, customer?.createdAt));
    setAccessToken(renewedTokenResult.data.accessToken);
  };

  useEffect(() => {
    let cancelled = false;

    const initialize = async () => {
      try {
        const session = getCustomerAccessTokenExpiry();
        if (!session.accessToken) {
          if (!cancelled) {
            setCustomer(null);
            setAccessToken(null);
            setIsLoading(false);
          }
          return;
        }

        const renewedTokenResult = await refreshCustomerToken(session.accessToken);
        if (!renewedTokenResult.ok) {
          if (!cancelled) {
            logoutCustomer();
            setCustomer(null);
            setAccessToken(null);
          }
          return;
        }

        const customerResult = await getCustomerData(renewedTokenResult.data.accessToken);
        if (!customerResult.ok || !customerResult.data) {
          throw new Error(customerResult.error?.message || 'Unable to load customer data.');
        }

        if (!cancelled) {
          setCustomer(mapCustomerProfileToAccountCustomer(customerResult.data));
          setAccessToken(renewedTokenResult.data.accessToken);
        }
      } catch (_error) {
        if (!cancelled) {
          logoutCustomer();
          setCustomer(null);
          setAccessToken(null);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    void initialize();

    return () => {
      cancelled = true;
    };
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const loginResult = await loginCustomer(email, password);
      if (!loginResult.ok) {
        throw new Error(loginResult.error.message || 'Unable to sign in.');
      }

      const customerResult = await getCustomerData(loginResult.data.accessToken);
      if (!customerResult.ok || !customerResult.data) {
        throw new Error(customerResult.error.message || 'Unable to load customer data.');
      }

      setCustomer(mapCustomerProfileToAccountCustomer(customerResult.data));
      setAccessToken(loginResult.data.accessToken);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (data: RegisterData) => {
    setIsLoading(true);
    try {
      const registerResult = await registerCustomer(data);
      if (!registerResult.ok) {
        throw new Error(registerResult.error.message || 'Unable to create the account.');
      }

      const loginResult = await loginCustomer(data.email, data.password);
      if (!loginResult.ok) {
        throw new Error(loginResult.error.message || 'Account created but sign-in failed.');
      }

      const customerResult = await getCustomerData(loginResult.data.accessToken);
      if (!customerResult.ok || !customerResult.data) {
        throw new Error(customerResult.error.message || 'Unable to load customer data.');
      }

      setCustomer(mapCustomerProfileToAccountCustomer(customerResult.data, new Date().toISOString()));
      setAccessToken(loginResult.data.accessToken);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    logoutCustomer();
    setCustomer(null);
    setAccessToken(null);
  };

  const updateProfile = async (data: {
    email?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    password?: string;
  }): Promise<void> => {
    const token = accessToken || getCustomerAccessTokenExpiry().accessToken;
    if (!token) {
      throw new Error('No active customer session was found.');
    }

    setIsLoading(true);
    try {
      const updateResult = await updateCustomerProfile(token, data);
      if (!updateResult.ok) {
        throw new Error(updateResult.error.message || 'Unable to update the profile.');
      }

      setCustomer((currentCustomer) =>
        mapCustomerProfileToAccountCustomer(updateResult.data, currentCustomer?.createdAt)
      );
    } finally {
      setIsLoading(false);
    }
  };

  const requestPasswordReset = async (email: string) => {
    const result = await requestCustomerPasswordReset(email);
    if (!result.ok) {
      throw new Error(result.error.message || 'Unable to send the password reset email.');
    }
  };

  const resetPassword = async (resetUrl: string, password: string) => {
    const result = await resetCustomerPassword(resetUrl, password);
    if (!result.ok) {
      throw new Error(result.error.message || 'Unable to reset the password.');
    }
  };

  return {
    customer,
    accessToken,
    isAuthenticated: Boolean(customer && accessToken),
    isLoading,
    login,
    register,
    logout,
    updateProfile,
    refreshCustomerData,
    requestPasswordReset,
    resetPassword
  };
}
