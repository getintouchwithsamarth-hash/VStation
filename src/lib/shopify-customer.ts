import { Money, StorefrontAPIError, storefrontFetch } from './shopify-storefront';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';
const CUSTOMER_AUTH_BRIDGE_PATH = import.meta.env.VITE_SHOPIFY_AUTH_BRIDGE_PATH || '/pages/auth-bridge';

export interface CustomerUserError {
  code?: string;
  field?: string[];
  message: string;
}

export interface CustomerAccessToken {
  accessToken: string;
  expiresAt: string;
}

export interface CustomerAccessTokenExpiry {
  accessToken: string | null;
  expiresAt: string | null;
  isExpired: boolean;
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

export interface CustomerAddress {
  id: string;
  address1: string | null;
  address2: string | null;
  city: string | null;
  province: string | null;
  country: string | null;
  zip: string | null;
}

export interface CustomerOrderLineItem {
  title: string;
  quantity: number;
}

export interface CustomerOrder {
  id: string;
  orderNumber: number;
  totalPriceV2: Money;
  processedAt: string;
  fulfillmentStatus: string | null;
  lineItems: {
    edges: Array<{
      node: CustomerOrderLineItem;
    }>;
  };
}

export interface CustomerOrdersPageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
  endCursor: string | null;
}

export interface CustomerOrderConnection {
  pageInfo: CustomerOrdersPageInfo;
  edges: Array<{
    cursor: string;
    node: CustomerOrder;
  }>;
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
      node: CustomerAddress;
    }>;
  };
  orders: {
    edges: Array<{
      node: CustomerOrder;
    }>;
  };
}

export interface CustomerOperationError {
  type: 'validation' | 'api' | 'network' | 'session' | 'unknown';
  message: string;
  code?: string;
  field?: string[];
  details?: string[];
}

export type CustomerResult<T> =
  | {
      ok: true;
      data: T;
      error: null;
    }
  | {
      ok: false;
      data: null;
      error: CustomerOperationError;
    };

export interface PasswordResetRequestResult {
  email: string;
  submitted: true;
}

export interface PasswordResetUrlParts {
  id: string;
  resetToken: string;
}

const CUSTOMER_TOKEN_STORAGE_KEY = 'customer_token';
const CUSTOMER_TOKEN_EXPIRES_AT_STORAGE_KEY = 'token_expires_at';

const CUSTOMER_PROFILE_FIELDS = `
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
`;

const CUSTOMER_ORDER_FIELDS = `
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
`;

const buildAbsoluteUrl = (path: string): string => {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  return `${BACKEND_URL.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`;
};

const isBrowser = (): boolean => typeof window !== 'undefined';

const hasTokenExpired = (expiresAt: string | null): boolean => {
  if (!expiresAt) {
    return true;
  }

  const expiresAtTimestamp = Date.parse(expiresAt);
  if (Number.isNaN(expiresAtTimestamp)) {
    return true;
  }

  return expiresAtTimestamp <= Date.now();
};

const saveCustomerSession = (token: CustomerAccessToken): void => {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(CUSTOMER_TOKEN_STORAGE_KEY, token.accessToken);
  window.localStorage.setItem(CUSTOMER_TOKEN_EXPIRES_AT_STORAGE_KEY, token.expiresAt);
};

const getStoredCustomerToken = (): string | null => {
  if (!isBrowser()) {
    return null;
  }

  return window.localStorage.getItem(CUSTOMER_TOKEN_STORAGE_KEY);
};

const getStoredCustomerTokenExpiryValue = (): string | null => {
  if (!isBrowser()) {
    return null;
  }

  return window.localStorage.getItem(CUSTOMER_TOKEN_EXPIRES_AT_STORAGE_KEY);
};

const getUserErrorMessage = (error: CustomerUserError): string => {
  const fieldLabel = error.field?.length ? ` for ${error.field.join('.')}` : '';

  switch (error.code) {
    case 'TAKEN':
      return `A customer already exists${fieldLabel}.`;
    case 'INVALID':
      return `Shopify rejected the value${fieldLabel}. ${error.message}`;
    case 'UNIDENTIFIED_CUSTOMER':
      return 'The email or password is incorrect.';
    case 'CUSTOMER_DISABLED':
      return 'This customer account is disabled.';
    case 'BAD_DOMAIN':
      return `The email address domain is invalid${fieldLabel}.`;
    case 'TOKEN_INVALID':
      return 'The customer session is invalid. Please sign in again.';
    default:
      return error.message;
  }
};

const toCustomerOperationError = (
  error: unknown,
  fallbackCode: string,
  fallbackMessage: string
): CustomerOperationError => {
  if (error instanceof StorefrontAPIError) {
    return {
      type: error.code === 'HTTP_ERROR' || error.code === 'RATE_LIMIT' ? 'network' : 'api',
      message: error.message || fallbackMessage,
      code: error.code || fallbackCode,
      field: error.field
    };
  }

  if (error instanceof TypeError) {
    return {
      type: 'network',
      message: 'Network request failed while contacting Shopify.',
      code: fallbackCode
    };
  }

  return {
    type: 'unknown',
    message: fallbackMessage,
    code: fallbackCode
  };
};

const errorResult = <T>(error: CustomerOperationError): CustomerResult<T> => ({
  ok: false,
  data: null,
  error
});

const successResult = <T>(data: T): CustomerResult<T> => ({
  ok: true,
  data,
  error: null
});

const assertCustomerUserErrors = (errors: CustomerUserError[], code: string): void => {
  if (errors.length === 0) {
    return;
  }

  const firstError = errors[0];
  throw new StorefrontAPIError(getUserErrorMessage(firstError), code, firstError.field);
};

const requireValidCustomerToken = (): CustomerResult<string> => {
  const accessToken = getStoredCustomerToken();
  const expiresAt = getStoredCustomerTokenExpiryValue();

  if (!accessToken || !expiresAt) {
    clearCustomerSession();
    return errorResult({
      type: 'session',
      message: 'No active customer session was found.',
      code: 'CUSTOMER_SESSION_MISSING'
    });
  }

  if (hasTokenExpired(expiresAt)) {
    clearCustomerSession();
    return errorResult({
      type: 'session',
      message: 'The customer session has expired. Please sign in again.',
      code: 'CUSTOMER_SESSION_EXPIRED'
    });
  }

  return successResult(accessToken);
};

const executeCustomerOperation = async <T>(
  run: () => Promise<T>,
  fallbackCode: string,
  fallbackMessage: string
): Promise<CustomerResult<T>> => {
  try {
    return successResult(await run());
  } catch (error) {
    return errorResult(toCustomerOperationError(error, fallbackCode, fallbackMessage));
  }
};

const extractResetUrlParts = (resetUrl: string): PasswordResetUrlParts | null => {
  try {
    const url = new URL(resetUrl);
    const id = url.searchParams.get('id');
    const resetToken = url.searchParams.get('token') || url.searchParams.get('reset_token');

    if (id && resetToken) {
      return { id, resetToken };
    }

    const match = url.pathname.match(/\/account\/reset\/([^/]+)\/([^/?#]+)/);
    if (match) {
      return {
        id: decodeURIComponent(match[1]),
        resetToken: decodeURIComponent(match[2])
      };
    }

    return null;
  } catch {
    return null;
  }
};

/**
 * Returns the optional auth bridge URL for legacy customer account flows.
 */
export function getCustomerAuthBridgeUrl(): string {
  return buildAbsoluteUrl(CUSTOMER_AUTH_BRIDGE_PATH);
}

/**
 * Removes all stored customer session state from local storage.
 */
export function clearCustomerSession(): void {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.removeItem(CUSTOMER_TOKEN_STORAGE_KEY);
  window.localStorage.removeItem(CUSTOMER_TOKEN_EXPIRES_AT_STORAGE_KEY);
}

/**
 * Returns the currently stored customer token and expiry, including expiry validation.
 */
export function getCustomerAccessTokenExpiry(): CustomerAccessTokenExpiry {
  const accessToken = getStoredCustomerToken();
  const expiresAt = getStoredCustomerTokenExpiryValue();

  return {
    accessToken,
    expiresAt,
    isExpired: hasTokenExpired(expiresAt)
  };
}

/**
 * Clears the local legacy customer session.
 */
export function logout(): void {
  clearCustomerSession();
}

/**
 * Returns `true` when a valid, non-expired customer token exists in local storage.
 */
export function isCustomerLoggedIn(): boolean {
  const { accessToken, expiresAt, isExpired } = getCustomerAccessTokenExpiry();

  if (!accessToken || !expiresAt || isExpired) {
    clearCustomerSession();
    return false;
  }

  return true;
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

export const customerAccessTokenRenew = `
  mutation customerAccessTokenRenew($customerAccessToken: String!) {
    customerAccessTokenRenew(customerAccessToken: $customerAccessToken) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const customerRecover = `
  mutation customerRecover($email: String!) {
    customerRecover(email: $email) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

export const customerReset = `
  mutation customerReset($id: ID!, $input: CustomerResetInput!) {
    customerReset(id: $id, input: $input) {
      customer {
        id
        email
        firstName
        lastName
      }
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
      ${CUSTOMER_PROFILE_FIELDS}
    }
  }
`;

export const customerOrdersQuery = `
  query customerOrders($customerAccessToken: String!, $first: Int!, $after: String) {
    customer(customerAccessToken: $customerAccessToken) {
      orders(first: $first, after: $after) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        edges {
          cursor
          node {
            ${CUSTOMER_ORDER_FIELDS}
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
        ${CUSTOMER_PROFILE_FIELDS}
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

export const customerDefaultAddressUpdate = `
  mutation customerDefaultAddressUpdate($customerAccessToken: String!, $addressId: ID!) {
    customerDefaultAddressUpdate(customerAccessToken: $customerAccessToken, addressId: $addressId) {
      customer {
        defaultAddress {
          id
          address1
          address2
          city
          province
          country
          zip
        }
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

/**
 * Registers a new legacy Shopify customer using the Storefront API.
 */
export async function registerCustomer(input: {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
}): Promise<
  CustomerResult<{
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
  }>
> {
  return executeCustomerOperation(async () => {
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
  }, 'CUSTOMER_CREATE_ERROR', 'Unable to create the customer account.');
}

/**
 * Creates and stores a legacy Shopify customer access token in local storage.
 */
export async function loginCustomer(
  email: string,
  password: string
): Promise<CustomerResult<CustomerAccessToken>> {
  return executeCustomerOperation(async () => {
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

    saveCustomerSession(data.customerAccessTokenCreate.customerAccessToken);
    return data.customerAccessTokenCreate.customerAccessToken;
  }, 'CUSTOMER_LOGIN_ERROR', 'Unable to sign in the customer.');
}

/**
 * Renews the current legacy customer access token and persists the new expiry.
 */
export async function refreshCustomerToken(
  customerAccessToken?: string
): Promise<CustomerResult<CustomerAccessToken>> {
  const accessTokenResult = customerAccessToken
    ? successResult(customerAccessToken)
    : requireValidCustomerToken();

  if (!accessTokenResult.ok) {
    return accessTokenResult;
  }

  return executeCustomerOperation(async () => {
    const data = await storefrontFetch<{
      customerAccessTokenRenew: {
        customerAccessToken: CustomerAccessToken | null;
        userErrors: Array<{ field?: string[]; message: string }>;
      };
    }>(customerAccessTokenRenew, {
      customerAccessToken: accessTokenResult.data
    });

    if (data.customerAccessTokenRenew.userErrors.length > 0) {
      const firstError = data.customerAccessTokenRenew.userErrors[0];
      throw new StorefrontAPIError(firstError.message, 'CUSTOMER_TOKEN_RENEW_ERROR', firstError.field);
    }

    if (!data.customerAccessTokenRenew.customerAccessToken) {
      throw new StorefrontAPIError('Customer access token renewal did not return a token', 'MISSING_CUSTOMER_TOKEN');
    }

    saveCustomerSession(data.customerAccessTokenRenew.customerAccessToken);
    return data.customerAccessTokenRenew.customerAccessToken;
  }, 'CUSTOMER_TOKEN_RENEW_ERROR', 'Unable to renew the customer session.');
}

/**
 * Requests a Shopify password recovery email for the specified customer.
 */
export async function requestPasswordReset(email: string): Promise<CustomerResult<PasswordResetRequestResult>> {
  return executeCustomerOperation(async () => {
    const data = await storefrontFetch<{
      customerRecover: {
        customerUserErrors: CustomerUserError[];
      };
    }>(customerRecover, { email });

    assertCustomerUserErrors(data.customerRecover.customerUserErrors, 'CUSTOMER_RECOVER_ERROR');
    return {
      email,
      submitted: true
    };
  }, 'CUSTOMER_RECOVER_ERROR', 'Unable to request a password reset.');
}

/**
 * Resets a customer password from a Shopify recovery URL and stores the new access token.
 */
export async function resetPassword(
  resetUrl: string,
  password: string
): Promise<CustomerResult<CustomerAccessToken>> {
  const resetUrlParts = extractResetUrlParts(resetUrl);
  if (!resetUrlParts) {
    return errorResult({
      type: 'validation',
      message: 'The password reset URL is invalid or missing the required token.',
      code: 'CUSTOMER_RESET_URL_INVALID'
    });
  }

  return executeCustomerOperation(async () => {
    const data = await storefrontFetch<{
      customerReset: {
        customerAccessToken: CustomerAccessToken | null;
        customerUserErrors: CustomerUserError[];
      };
    }>(customerReset, {
      id: resetUrlParts.id,
      input: {
        password,
        resetToken: resetUrlParts.resetToken
      }
    });

    assertCustomerUserErrors(data.customerReset.customerUserErrors, 'CUSTOMER_RESET_ERROR');
    if (!data.customerReset.customerAccessToken) {
      throw new StorefrontAPIError(
        'Customer password reset did not return a new access token',
        'MISSING_CUSTOMER_TOKEN'
      );
    }

    saveCustomerSession(data.customerReset.customerAccessToken);
    return data.customerReset.customerAccessToken;
  }, 'CUSTOMER_RESET_ERROR', 'Unable to reset the customer password.');
}

/**
 * Fetches the current customer profile for a valid legacy customer access token.
 */
export async function getCustomerData(customerAccessToken: string): Promise<CustomerResult<CustomerProfile | null>> {
  return executeCustomerOperation(async () => {
    const data = await storefrontFetch<{ customer: CustomerProfile | null }>(customerQuery, {
      customerAccessToken
    });

    return data.customer;
  }, 'CUSTOMER_FETCH_ERROR', 'Unable to load customer data.');
}

/**
 * Returns customer orders with cursor pagination support.
 */
export async function getCustomerOrders(
  customerAccessToken: string,
  first = 10,
  after?: string
): Promise<CustomerResult<CustomerOrderConnection | null>> {
  return executeCustomerOperation(async () => {
    const data = await storefrontFetch<{
      customer: {
        orders: CustomerOrderConnection;
      } | null;
    }>(customerOrdersQuery, {
      customerAccessToken,
      first,
      after: after || null
    });

    return data.customer?.orders || null;
  }, 'CUSTOMER_ORDERS_FETCH_ERROR', 'Unable to load customer orders.');
}

/**
 * Updates customer profile fields for a legacy customer account.
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
): Promise<CustomerResult<CustomerProfile>> {
  return executeCustomerOperation(async () => {
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
  }, 'CUSTOMER_UPDATE_ERROR', 'Unable to update the customer profile.');
}

/**
 * Creates a customer address for a legacy customer account.
 */
export async function createCustomerAddress(
  customerAccessToken: string,
  address: CustomerAddressInput
): Promise<CustomerResult<{ id: string }>> {
  return executeCustomerOperation(async () => {
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
  }, 'CUSTOMER_ADDRESS_CREATE_ERROR', 'Unable to create the customer address.');
}

/**
 * Updates an existing customer address for a legacy customer account.
 */
export async function updateCustomerAddress(
  customerAccessToken: string,
  id: string,
  address: CustomerAddressInput
): Promise<CustomerResult<{ id: string }>> {
  return executeCustomerOperation(async () => {
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
  }, 'CUSTOMER_ADDRESS_UPDATE_ERROR', 'Unable to update the customer address.');
}

/**
 * Deletes a customer address for a legacy customer account.
 */
export async function deleteCustomerAddress(
  customerAccessToken: string,
  id: string
): Promise<CustomerResult<string>> {
  return executeCustomerOperation(async () => {
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
  }, 'CUSTOMER_ADDRESS_DELETE_ERROR', 'Unable to delete the customer address.');
}

/**
 * Sets the default customer address for the current legacy customer account.
 */
export async function setDefaultAddress(
  customerAccessToken: string,
  addressId: string
): Promise<CustomerResult<CustomerProfile['defaultAddress']>> {
  return executeCustomerOperation(async () => {
    const data = await storefrontFetch<{
      customerDefaultAddressUpdate: {
        customer: Pick<CustomerProfile, 'defaultAddress'> | null;
        customerUserErrors: CustomerUserError[];
      };
    }>(customerDefaultAddressUpdate, { customerAccessToken, addressId });

    assertCustomerUserErrors(
      data.customerDefaultAddressUpdate.customerUserErrors,
      'CUSTOMER_DEFAULT_ADDRESS_UPDATE_ERROR'
    );

    if (!data.customerDefaultAddressUpdate.customer) {
      throw new StorefrontAPIError('Customer was not returned by Shopify', 'MISSING_CUSTOMER');
    }

    return data.customerDefaultAddressUpdate.customer.defaultAddress;
  }, 'CUSTOMER_DEFAULT_ADDRESS_UPDATE_ERROR', 'Unable to update the default address.');
}
