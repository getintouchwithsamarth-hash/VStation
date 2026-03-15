import { adminAPI as proxyAdminAPI } from './shopify-api';
import { StorefrontAPIError } from './shopify-storefront';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';
const ADMIN_ENDPOINT =
  import.meta.env.VITE_SHOPIFY_ADMIN_ENDPOINT ||
  import.meta.env.VITE_SHOPIFY_ADMIN_PROXY_ENDPOINT ||
  '/api/shopify/admin';
const ADMIN_PRODUCT_METADATA_ENDPOINT =
  import.meta.env.VITE_SHOPIFY_ADMIN_PRODUCT_METADATA_ENDPOINT ||
  '/api/shopify/admin/product-metadata';

export interface MetaobjectField {
  key: string;
  value: string | null;
}

export interface MetaobjectReference {
  id: string;
  handle: string;
  type: string;
  displayName?: string;
  fields: MetaobjectField[];
}

export interface ShopifyNamespaceMetafield {
  id?: string;
  namespace: string;
  key: string;
  value: string;
  type: string;
  reference?: MetaobjectReference | null;
  references?: {
    edges: Array<{ node: MetaobjectReference }>;
  };
}

export interface PublicAdminProductMetadata {
  id: string;
  title: string;
  handle?: string;
  category?: {
    id: string;
    name: string;
    fullName: string;
  } | null;
  shopifyMetafields: Array<{
    id?: string;
    namespace: string;
    key: string;
    value: string;
    type: string;
    reference?: MetaobjectReference | null;
    references?: MetaobjectReference[];
  }>;
}

export interface ProductWithShopifyMetafields {
  id: string;
  title: string;
  handle?: string;
  category?: {
    id: string;
    name: string;
    fullName: string;
  } | null;
  shopifyMetafields?: {
    edges: Array<{ node: ShopifyNamespaceMetafield }>;
  };
}

export interface MetafieldValidation {
  name: string;
  value: string | null;
}

export interface ProductMetafieldDefinition {
  id: string;
  name: string;
  key: string;
  namespace: string;
  type: {
    name: string;
  };
  validations: MetafieldValidation[];
  access: {
    storefront: string;
  };
}

type AdminGraphQLResponse<T> = {
  data?: T;
  errors?: Array<{
    message: string;
    field?: string[];
  }>;
};

const buildAdminUrl = (): string => {
  if (ADMIN_ENDPOINT.startsWith('http://') || ADMIN_ENDPOINT.startsWith('https://')) {
    return ADMIN_ENDPOINT;
  }

  return `${BACKEND_URL.replace(/\/+$/, '')}/${ADMIN_ENDPOINT.replace(/^\/+/, '')}`;
};

const buildAdminProductMetadataUrl = (handle: string): string => {
  const normalizedEndpoint = ADMIN_PRODUCT_METADATA_ENDPOINT.startsWith('http://') ||
    ADMIN_PRODUCT_METADATA_ENDPOINT.startsWith('https://')
    ? ADMIN_PRODUCT_METADATA_ENDPOINT
    : `${BACKEND_URL.replace(/\/+$/, '')}/${ADMIN_PRODUCT_METADATA_ENDPOINT.replace(/^\/+/, '')}`;

  return `${normalizedEndpoint.replace(/\/+$/, '')}/${encodeURIComponent(handle)}`;
};

const adminFetch = async <TData>(
  query: string,
  variables: Record<string, unknown> = {}
): Promise<TData> => {
  const response = await fetch(buildAdminUrl(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ query, variables })
  });

  if (!response.ok) {
    if (response.status === 429) {
      throw new StorefrontAPIError('Rate limit exceeded', 'RATE_LIMIT');
    }

    throw new StorefrontAPIError(`HTTP ${response.status}`, 'HTTP_ERROR');
  }

  const { data, errors } = (await response.json()) as AdminGraphQLResponse<TData>;
  if (errors && errors.length > 0) {
    throw new StorefrontAPIError(errors[0].message, 'GRAPHQL_ERROR', errors[0].field);
  }

  if (!data) {
    throw new StorefrontAPIError('Missing response data', 'EMPTY_DATA');
  }

  return data;
};

/**
 * Calls the backend Admin API proxy and returns the raw GraphQL envelope.
 */
export async function adminAPI<TData, TVariables = Record<string, unknown>>(request: {
  query: string;
  variables?: TVariables;
}): Promise<{ data?: TData; errors?: Array<{ message: string }> }> {
  const response = await proxyAdminAPI<TData, TVariables>(request);
  return response as { data?: TData; errors?: Array<{ message: string }> };
}

const PRODUCT_WITH_TAXONOMY_QUERY = `
  query GetProductWithTaxonomy($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      handle
      category {
        id
        name
        fullName
      }
      shopifyMetafields: metafields(first: 50, namespace: "shopify") {
        edges {
          node {
            id
            namespace
            key
            value
            type
            references(first: 20) {
              edges {
                node {
                  ... on Metaobject {
                    id
                    handle
                    type
                    displayName
                    fields {
                      key
                      value
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const ADMIN_PRODUCT_SHOPIFY_METAFIELDS_BY_HANDLE_QUERY = `
  query GetAdminProductShopifyMetafields($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      handle
      shopifyMetafields: metafields(first: 50, namespace: "shopify") {
        edges {
          node {
            id
            namespace
            key
            value
            type
            reference {
              ... on Metaobject {
                id
                handle
                type
                displayName
                fields {
                  key
                  value
                }
              }
            }
            references(first: 20) {
              edges {
                node {
                  ... on Metaobject {
                    id
                    handle
                    type
                    displayName
                    fields {
                      key
                      value
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const PRODUCT_SHOPIFY_METAFIELDS_QUERY = ADMIN_PRODUCT_SHOPIFY_METAFIELDS_BY_HANDLE_QUERY;

const PRODUCT_CATEGORY_QUERY = `
  query GetProductCategory($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      category {
        id
        name
        fullName
      }
    }
  }
`;

export const PRODUCT_METAFIELD_DEFINITIONS_QUERY = `
  query GetProductCategoryMetafields {
    metafieldDefinitions(
      first: 50
      ownerType: PRODUCT
      namespace: "shopify"
    ) {
      edges {
        node {
          id
          name
          key
          namespace
          type {
            name
          }
          validations {
            name
            value
          }
          access {
            storefront
          }
        }
      }
    }
  }
`;

/**
 * Fetches a product with taxonomy category and `shopify` namespace metafields.
 */
export async function getProductWithTaxonomy(handle: string) {
  return adminAPI<{ productByHandle: ProductWithShopifyMetafields | null }, { handle: string }>({
    query: PRODUCT_WITH_TAXONOMY_QUERY,
    variables: { handle }
  });
}

/**
 * Fetches only `shopify` namespace metafields for a product.
 */
export async function getProductShopifyMetafields(handle: string) {
  return adminAPI<{ productByHandle: ProductWithShopifyMetafields | null }, { handle: string }>({
    query: ADMIN_PRODUCT_SHOPIFY_METAFIELDS_BY_HANDLE_QUERY,
    variables: { handle }
  });
}

/**
 * Fetches only the Shopify taxonomy category for a product.
 */
export async function getProductCategory(handle: string) {
  return adminAPI<{
    productByHandle: {
      id: string;
      title: string;
      category: {
        id: string;
        name: string;
        fullName: string;
      } | null;
    } | null;
  }, { handle: string }>({
    query: PRODUCT_CATEGORY_QUERY,
    variables: { handle }
  });
}

/**
 * Returns the admin product metafields payload as a typed object and throws on failure.
 */
export async function getAdminProductShopifyMetafieldsByHandle(
  handle: string
): Promise<ProductWithShopifyMetafields | null> {
  const data = await adminFetch<{ productByHandle: ProductWithShopifyMetafields | null }>(
    ADMIN_PRODUCT_SHOPIFY_METAFIELDS_BY_HANDLE_QUERY,
    { handle }
  );

  return data.productByHandle;
}

/**
 * Backward-compatible alias for fetching Shopify namespace metafields by product handle.
 */
export async function getProductWithShopifyMetafields(
  handle: string
): Promise<ProductWithShopifyMetafields | null> {
  return getAdminProductShopifyMetafieldsByHandle(handle);
}

/**
 * Returns product metafield definitions from the Admin API.
 */
export async function getProductMetafieldDefinitions(): Promise<ProductMetafieldDefinition[]> {
  const data = await adminFetch<{
    metafieldDefinitions: {
      edges: Array<{
        node: ProductMetafieldDefinition;
      }>;
    };
  }>(PRODUCT_METAFIELD_DEFINITIONS_QUERY);

  return data.metafieldDefinitions.edges.map((edge) => edge.node);
}

export async function getPublicAdminProductMetadata(
  handle: string
): Promise<PublicAdminProductMetadata | null> {
  const response = await fetch(buildAdminProductMetadataUrl(handle), {
    method: 'GET',
    credentials: 'include'
  });

  if (!response.ok) {
    if (response.status === 429) {
      throw new StorefrontAPIError('Rate limit exceeded', 'RATE_LIMIT');
    }

    throw new StorefrontAPIError(`HTTP ${response.status}`, 'HTTP_ERROR');
  }

  const payload = (await response.json()) as { product?: PublicAdminProductMetadata | null };
  return payload.product ?? null;
}
