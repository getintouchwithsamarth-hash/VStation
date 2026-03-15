/**
 * Shopify API helper functions for backend proxy access.
 *
 * Storefront API:
 * Use for public product data, collections, cart, checkout, customer-facing data,
 * and metafields that are exposed to the storefront.
 *
 * Admin API:
 * Use for taxonomy categories, `shopify` namespace metafields, metaobject references,
 * and other admin-only product enrichment.
 */

export type ShopifyApiKind = 'storefront' | 'admin';

export interface GraphQLRequest<TVariables = Record<string, unknown>> {
  query: string;
  variables?: TVariables;
}

export interface GraphQLErrorShape {
  message: string;
  field?: string[];
  code?: string;
}

export interface GraphQLResponse<TData = unknown> {
  data?: TData;
  errors?: GraphQLErrorShape[];
}

export class ShopifyProxyError extends Error {
  constructor(
    message: string,
    public status: number,
    public api: ShopifyApiKind,
    public details?: unknown
  ) {
    super(message);
    this.name = 'ShopifyProxyError';
  }
}

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';
const STOREFRONT_ENDPOINT =
  import.meta.env.VITE_SHOPIFY_STOREFRONT_ENDPOINT ||
  import.meta.env.VITE_SHOPIFY_PROXY_ENDPOINT ||
  '/api/shopify';
const ADMIN_ENDPOINT =
  import.meta.env.VITE_SHOPIFY_ADMIN_ENDPOINT ||
  import.meta.env.VITE_SHOPIFY_ADMIN_PROXY_ENDPOINT ||
  '/api/shopify/admin';

export const SHOPIFY_API_DECISION_GUIDE = [
  { dataType: 'Product title, price, images', api: 'storefront' },
  { dataType: 'Product variants and options', api: 'storefront' },
  { dataType: 'Collections', api: 'storefront' },
  { dataType: 'Cart and checkout', api: 'storefront' },
  { dataType: 'Custom metafields exposed to storefront', api: 'storefront' },
  { dataType: 'Product taxonomy category', api: 'admin' },
  { dataType: 'Shopify namespace metafields', api: 'admin' },
  { dataType: 'Metaobject references', api: 'admin' },
  { dataType: 'Admin-only enriched product data', api: 'admin' }
] as const;

function buildProxyUrl(endpoint: string): string {
  if (endpoint.startsWith('http://') || endpoint.startsWith('https://')) {
    return endpoint;
  }

  return `${BACKEND_URL.replace(/\/+$/, '')}/${endpoint.replace(/^\/+/, '')}`;
}

async function parseErrorPayload(response: Response): Promise<unknown> {
  const raw = await response.text();
  if (!raw) {
    return undefined;
  }

  try {
    return JSON.parse(raw);
  } catch {
    return raw;
  }
}

async function proxyGraphQL<TData, TVariables = Record<string, unknown>>(
  api: ShopifyApiKind,
  endpoint: string,
  request: GraphQLRequest<TVariables>
): Promise<GraphQLResponse<TData>> {
  const response = await fetch(buildProxyUrl(endpoint), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request)
  });

  if (!response.ok) {
    const details = await parseErrorPayload(response);
    throw new ShopifyProxyError(
      `${api === 'storefront' ? 'Storefront' : 'Admin'} API error: ${response.status} ${response.statusText}`,
      response.status,
      api,
      details
    );
  }

  return (await response.json()) as GraphQLResponse<TData>;
}

/**
 * Storefront API helper.
 *
 * Use for:
 * - product listings and PDP basics
 * - collections
 * - cart and checkout
 * - customer-facing data
 * - `custom` namespace metafields that have storefront access
 */
export async function storefrontAPI<TData, TVariables = Record<string, unknown>>(
  request: GraphQLRequest<TVariables>
): Promise<GraphQLResponse<TData>> {
  return proxyGraphQL<TData, TVariables>('storefront', STOREFRONT_ENDPOINT, request);
}

/**
 * Admin API helper.
 *
 * Use for:
 * - product taxonomy categories
 * - `shopify` namespace metafields
 * - metaobject references
 * - admin-only enriched product data
 */
export async function adminAPI<TData, TVariables = Record<string, unknown>>(
  request: GraphQLRequest<TVariables>
): Promise<GraphQLResponse<TData>> {
  return proxyGraphQL<TData, TVariables>('admin', ADMIN_ENDPOINT, request);
}
