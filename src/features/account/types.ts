// Customer Account Types for Shopify Storefront API

export interface CustomerAddress {
  id: string;
  firstName: string;
  lastName: string;
  company?: string;
  address1: string;
  address2?: string;
  city: string;
  province: string;
  zip: string;
  country: string;
  phone?: string;
  isDefault: boolean;
}

export interface CustomerOrder {
  id: string;
  orderNumber: string;
  createdAt: string;
  totalPrice: string;
  fulfillmentStatus: 'FULFILLED' | 'UNFULFILLED' | 'PARTIALLY_FULFILLED' | 'CANCELLED';
  lineItems: {
    id: string;
    title: string;
    quantity: number;
    price: string;
  }[];
}

export interface CustomerOrdersPageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
  endCursor: string | null;
}

export interface Customer {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  acceptsMarketing: boolean;
  createdAt: string;
}

export interface CustomerAccessToken {
  accessToken: string;
  expiresAt: string;
}

export interface AuthContextType {
  customer: Customer | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<Customer>) => Promise<void>;
  refreshCustomerData: () => Promise<void>;
  requestPasswordReset: (email: string) => Promise<void>;
  resetPassword: (resetUrl: string, password: string) => Promise<void>;
}

export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface PasswordResetRequestData {
  email: string;
}

export interface PasswordResetData {
  password: string;
  confirmPassword: string;
}
