import { createContext, useContext, type ReactNode } from 'react';
import { type AuthContextType, type RegisterData } from './types';
import { useCustomerAccount } from './hooks';

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const account = useCustomerAccount();

  const value: AuthContextType = {
    customer: account.customer,
    accessToken: account.accessToken,
    isAuthenticated: account.isAuthenticated,
    isLoading: account.isLoading,
    login: async (email: string, password: string) => {
      await account.login(email, password);
    },
    register: async (data: RegisterData) => {
      await account.register(data);
    },
    logout: () => {
      account.logout();
    },
    updateProfile: async (data) => {
      await account.updateProfile(data);
    },
    refreshCustomerData: async () => {
      await account.refreshCustomerData();
    },
    requestPasswordReset: async (email: string) => {
      await account.requestPasswordReset(email);
    },
    resetPassword: async (resetUrl: string, password: string) => {
      await account.resetPassword(resetUrl, password);
    }
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
