import { Money, StorefrontAPIError, storefrontFetch } from './shopify-storefront';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';
const CUSTOMER_AUTH_BRIDGE_PATH = import.meta.env.VITE_SHOPIFY_AUTH_BRIDGE_PATH || '/pages/auth-bridge';
const DIRECT_ACCOUNT_BASE_URL = import.meta.env.VITE_SHOPIFY_DIRECT_ACCOUNT_BASE_URL || '';

export interface CustomerUserError {
  code?: string;
  field?: string[];
  message: string;
}

export interface CustomerAccessToken {
  accessToken: string;
  expiresAt: string;
}

export interface CustomerAddressInput {
  address1?: string;
  address2?: string;
  city?: string;
  company?: string;
  country?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  province?: string;
  zip?: string;
}

export interface CustomerProfile {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  defaultAddress: {
    id?: string;
    address1?: string;
    address2?: string;
    city?: string;
    province?: string;
    country?: string;
    zip?: string;
  } | null;
  addresses: {
    edges: Array<{
      node: {
        id: string;
        address1: string | null;
        address2: string | null;
        city: string | null;
        province: string | null;
        country: string | null;
        zip: string | null;
      };
    }>;
  };
  orders: {
    edges: Array<{
      node: {
        id: string;
        orderNumber: number;
        totalPriceV2: Money;
        processedAt: string;
        fulfillmentStatus: string | null;
        lineItems: {
          edges: Array<{
            node: {
              title: string;
              quantity: number;
            };
          }>;
        };
      };
    }>;
  };
}

const CUSTOMER_TOKEN_STORAGE_KEY = 'customer_token';

const normalizeBaseUrl = (value: string): string => value.replace(/\/+$/, '');

const buildAbsoluteUrl = (path: string): string => {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  return `${BACKEND_URL.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`;
};

const getDirectAccountUrl = (path = ''): string => {
  const base = normalizeBaseUrl(DIRECT_ACCOUNT_BASE_URL);
  if (!base) {
    throw new StorefrontAPIError(
      'Shopify Customer Account base URL is not configured',
      'SHOPIFY_CUSTOMER_NOT_CONFIGURED'
    );
  }

  const normalizedPath = path.replace(/^\/+/, '');
  return normalizedPath ? `${base}/${normalizedPath}` : base;
};

const assertCustomerUserErrors = (errors: CustomerUserError[], code: string): void => {
  if (errors.length > 0) {
    const firstError = errors[0];
    throw new StorefrontAPIError(firstError.message, code, firstError.field);
  }
};

/**
 * Returns the optional auth bridge URL for customer account flows.
 */
export function getCustomerAuthBridgeUrl(): string {
  return buildAbsoluteUrl(CUSTOMER_AUTH_BRIDGE_PATH);
}

/**
 * Redirects the browser to Shopify customer login.
 */
export function redirectToLogin(): void {
  if (typeof window === 'undefined') {
    return;
  }

  window.location.href = getDirectAccountUrl('login');
}

/**
 * Redirects the browser to Shopify customer registration.
 */
export function redirectToRegister(): void {
  if (typeof window === 'undefined') {
    return;
  }

  window.location.href = getDirectAccountUrl('register');
}

/**
 * Redirects the browser to the Shopify customer account page.
 */
export function redirectToAccount(): void {
  if (typeof window === 'undefined') {
    return;
  }

  window.location.href = getDirectAccountUrl();
}

/**
 * Clears local customer state and redirects to Shopify logout.
 */
export function logout(): void {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.removeItem(CUSTOMER_TOKEN_STORAGE_KEY);
  window.location.href = getDirectAccountUrl('logout');
}

/**
 * Returns `true` when a customer token exists in local storage.
 */
export function isCustomerLoggedIn(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  return Boolean(window.localStorage.getItem(CUSTOMER_TOKEN_STORAGE_KEY));
}

export const customerCreate = `
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        id
        email
        firstName
        lastName
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

export const customerAccessTokenCreate = `
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

export const customerQuery = `
  query customer($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      id
      email
      firstName
      lastName
      phone
      defaultAddress {
        id
        address1
        address2
        city
        province
        country
        zip
      }
      addresses(first: 10) {
        edges {
          node {
            id
            address1
            address2
            city
            province
            country
            zip
          }
        }
      }
      orders(first: 10) {
        edges {
          node {
            id
            orderNumber
            totalPriceV2 {
              amount
              currencyCode
            }
            processedAt
            fulfillmentStatus
            lineItems(first: 10) {
              edges {
                node {
                  title
                  quantity
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const customerUpdate = `
  mutation customerUpdate($customerAccessToken: String!, $customer: CustomerUpdateInput!) {
    customerUpdate(customerAccessToken: $customerAccessToken, customer: $customer) {
      customer {
        id
        email
        firstName
        lastName
        phone
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

export const customerAddressCreate = `
  mutation customerAddressCreate($customerAccessToken: String!, $address: MailingAddressInput!) {
    customerAddressCreate(customerAccessToken: $customerAccessToken, address: $address) {
      customerAddress {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

export const customerAddressUpdate = `
  mutation customerAddressUpdate($customerAccessToken: String!, $id: ID!, $address: MailingAddressInput!) {
    customerAddressUpdate(customerAccessToken: $customerAccessToken, id: $id, address: $address) {
      customerAddress {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

export const customerAddressDelete = `
  mutation customerAddressDelete($customerAccessToken: String!, $id: ID!) {
    customerAddressDelete(customerAccessToken: $customerAccessToken, id: $id) {
      deletedCustomerAddressId
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

/**
 * Registers a new Shopify customer.
 */
export async function registerCustomer(input: {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
}): Promise<{
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
}> {
  const data = await storefrontFetch<{
    customerCreate: {
      customer: { id: string; email: string; firstName: string | null; lastName: string | null } | null;
      customerUserErrors: CustomerUserError[];
    };
  }>(customerCreate, { input });

  assertCustomerUserErrors(data.customerCreate.customerUserErrors, 'CUSTOMER_CREATE_ERROR');
  if (!data.customerCreate.customer) {
    throw new StorefrontAPIError('Customer was not returned by Shopify', 'MISSING_CUSTOMER');
  }

  return data.customerCreate.customer;
}

/**
 * Creates a Shopify customer access token.
 */
export async function loginCustomer(email: string, password: string): Promise<CustomerAccessToken> {
  const data = await storefrontFetch<{
    customerAccessTokenCreate: {
      customerAccessToken: CustomerAccessToken | null;
      customerUserErrors: CustomerUserError[];
    };
  }>(customerAccessTokenCreate, { input: { email, password } });

  assertCustomerUserErrors(data.customerAccessTokenCreate.customerUserErrors, 'CUSTOMER_LOGIN_ERROR');
  if (!data.customerAccessTokenCreate.customerAccessToken) {
    throw new StorefrontAPIError('Customer access token was not returned by Shopify', 'MISSING_CUSTOMER_TOKEN');
  }

  if (typeof window !== 'undefined') {
    window.localStorage.setItem(CUSTOMER_TOKEN_STORAGE_KEY, data.customerAccessTokenCreate.customerAccessToken.accessToken);
  }

  return data.customerAccessTokenCreate.customerAccessToken;
}

/**
 * Fetches the current customer profile.
 */
export async function getCustomerData(customerAccessToken: string): Promise<CustomerProfile | null> {
  const data = await storefrontFetch<{ customer: CustomerProfile | null }>(customerQuery, {
    customerAccessToken
  });

  return data.customer;
}

/**
 * Updates the customer profile.
 */
export async function updateCustomerProfile(
  customerAccessToken: string,
  customer: {
    email?: string;
    firstName?: string;
    lastName?: string;
    password?: string;
    phone?: string;
  }
): Promise<CustomerProfile> {
  const data = await storefrontFetch<{
    customerUpdate: {
      customer: CustomerProfile | null;
      customerUserErrors: CustomerUserError[];
    };
  }>(customerUpdate, { customerAccessToken, customer });

  assertCustomerUserErrors(data.customerUpdate.customerUserErrors, 'CUSTOMER_UPDATE_ERROR');
  if (!data.customerUpdate.customer) {
    throw new StorefrontAPIError('Customer was not returned by Shopify', 'MISSING_CUSTOMER');
  }

  return data.customerUpdate.customer;
}

/**
 * Creates a customer address.
 */
export async function createCustomerAddress(
  customerAccessToken: string,
  address: CustomerAddressInput
): Promise<{ id: string }> {
  const data = await storefrontFetch<{
    customerAddressCreate: {
      customerAddress: { id: string } | null;
      customerUserErrors: CustomerUserError[];
    };
  }>(customerAddressCreate, { customerAccessToken, address });

  assertCustomerUserErrors(data.customerAddressCreate.customerUserErrors, 'CUSTOMER_ADDRESS_CREATE_ERROR');
  if (!data.customerAddressCreate.customerAddress) {
    throw new StorefrontAPIError('Customer address was not returned by Shopify', 'MISSING_CUSTOMER_ADDRESS');
  }

  return data.customerAddressCreate.customerAddress;
}

/**
 * Updates a customer address.
 */
export async function updateCustomerAddress(
  customerAccessToken: string,
  id: string,
  address: CustomerAddressInput
): Promise<{ id: string }> {
  const data = await storefrontFetch<{
    customerAddressUpdate: {
      customerAddress: { id: string } | null;
      customerUserErrors: CustomerUserError[];
    };
  }>(customerAddressUpdate, { customerAccessToken, id, address });

  assertCustomerUserErrors(data.customerAddressUpdate.customerUserErrors, 'CUSTOMER_ADDRESS_UPDATE_ERROR');
  if (!data.customerAddressUpdate.customerAddress) {
    throw new StorefrontAPIError('Customer address was not returned by Shopify', 'MISSING_CUSTOMER_ADDRESS');
  }

  return data.customerAddressUpdate.customerAddress;
}

/**
 * Deletes a customer address.
 */
export async function deleteCustomerAddress(customerAccessToken: string, id: string): Promise<string> {
  const data = await storefrontFetch<{
    customerAddressDelete: {
      deletedCustomerAddressId: string | null;
      customerUserErrors: CustomerUserError[];
    };
  }>(customerAddressDelete, { customerAccessToken, id });

  assertCustomerUserErrors(data.customerAddressDelete.customerUserErrors, 'CUSTOMER_ADDRESS_DELETE_ERROR');
  if (!data.customerAddressDelete.deletedCustomerAddressId) {
    throw new StorefrontAPIError('Deleted customer address id was not returned by Shopify', 'MISSING_CUSTOMER_ADDRESS');
  }

  return data.customerAddressDelete.deletedCustomerAddressId;
}
