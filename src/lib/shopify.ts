const SHOPIFY_STORE_DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN || 'your-store.myshopify.com';
const SHOPIFY_STOREFRONT_ACCESS_TOKEN =
  import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN || 'YOUR_STOREFRONT_ACCESS_TOKEN';
const SHOPIFY_STOREFRONT_API_VERSION = import.meta.env.VITE_SHOPIFY_STOREFRONT_API_VERSION || '2026-01';
const SHOPIFY_BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';
const SHOPIFY_BACKEND_TOKEN_ENDPOINT =
  import.meta.env.VITE_SHOPIFY_TOKEN_ENDPOINT || '/api/shopify/access-token';
const SHOPIFY_BACKEND_PROXY_ENDPOINT = import.meta.env.VITE_SHOPIFY_PROXY_ENDPOINT || '/api/shopify';
const SHOPIFY_BACKEND_TOKEN_METHOD = (import.meta.env.VITE_SHOPIFY_TOKEN_METHOD || 'GET').toUpperCase();
const SHOPIFY_AUTH_HEADER = import.meta.env.VITE_SHOPIFY_AUTH_HEADER || 'X-Shopify-Storefront-Access-Token';
const SHOPIFY_GRAPHQL_URL = `https://${SHOPIFY_STORE_DOMAIN}/api/${SHOPIFY_STOREFRONT_API_VERSION}/graphql.json`;
const CART_ID_KEY = 'shopify_cart_id';
const TOKEN_REFRESH_BUFFER_MS = 60 * 1000;

export type ProductSortKey = 'BEST_SELLING' | 'CREATED_AT' | 'PRICE' | 'RELEVANCE' | 'TITLE';

export interface Money {
  amount: string;
  currencyCode: string;
}

export interface Image {
  id?: string;
  url: string;
  altText: string | null;
  width?: number;
  height?: number;
}

export interface Metafield {
  value: string;
  type?: string;
  reference?: unknown;
  references?: {
    edges: Array<{ node: unknown }>;
  };
}

export interface ProductOption {
  id: string;
  name: string;
  values: string[];
}

export interface ProductVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  quantityAvailable?: number;
  price: Money;
  compareAtPrice?: Money;
  selectedOptions: Array<{
    name: string;
    value: string;
  }>;
  image?: Image | null;
}

export interface Product {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  tags: string[];
  availableForSale: boolean;
  totalInventory?: number;
  priceRange: {
    minVariantPrice: Money;
    maxVariantPrice?: Money;
  };
  compareAtPriceRange?: {
    minVariantPrice: Money;
  };
  featuredImage: Image | null;
  images: {
    edges: Array<{ node: Image }>;
  };
  variants?: {
    edges: Array<{ node: ProductVariant }>;
  };
  options?: ProductOption[];
  featureLine?: Metafield | null;
  badge?: Metafield | null;
  shortDescription?: Metafield | null;
  shippingInfo?: Metafield | null;
  subtitle?: Metafield | null;
  bulletFeatures?: Metafield | null;
  specifications?: Metafield | null;
  whatsInBox?: Metafield | null;
  deliveryInfo?: Metafield | null;
  returnsPolicy?: Metafield | null;
  supportInfo?: Metafield | null;
  ctaLabel?: Metafield | null;
  ctaSubtext?: Metafield | null;
  seo?: {
    title: string | null;
    description: string | null;
  };
}

export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  endCursor: string | null;
  startCursor: string | null;
}

export interface ProductConnection {
  pageInfo: PageInfo;
  edges: Array<{ node: Product }>;
}

export interface DeliveryOption {
  handle: string;
  title: string;
  description?: string;
  estimatedCost: Money;
}

export interface CartLine {
  id: string;
  quantity: number;
  cost: {
    totalAmount: Money;
  };
  merchandise: ProductVariant & {
    product: {
      id: string;
      title: string;
      handle: string;
      featuredImage: Image | null;
    };
  };
}

export interface Cart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: {
    subtotalAmount: Money;
    totalAmount: Money;
    totalTaxAmount?: Money;
  };
  lines: {
    edges: Array<{ node: CartLine }>;
  };
  deliveryGroups?: {
    edges: Array<{
      node: {
        deliveryOptions: DeliveryOption[];
      };
    }>;
  };
}

export interface CollectionFilter {
  id: string;
  label: string;
  type: string;
  values: Array<{
    id: string;
    label: string;
    count: number;
    input: string;
  }>;
}

export interface StorefrontError {
  message: string;
  field?: string[];
}

export class StorefrontAPIError extends Error {
  constructor(
    message: string,
    public code?: string,
    public field?: string[]
  ) {
    super(message);
    this.name = 'StorefrontAPIError';
  }
}

type BackendTokenResponse = {
  access_token?: string;
  token?: string;
  expires_in?: number;
  expiresAt?: number | string;
};

let tokenCache: { value: string; expiresAt: number } | null = null;
let inFlightTokenRequest: Promise<string> | null = null;

const hasStaticStorefrontToken = (): boolean => {
  return (
    SHOPIFY_STOREFRONT_ACCESS_TOKEN !== 'YOUR_STOREFRONT_ACCESS_TOKEN' &&
    SHOPIFY_STOREFRONT_ACCESS_TOKEN.length > 0
  );
};

const hasStoreDomainConfig = (): boolean => {
  return SHOPIFY_STORE_DOMAIN !== 'your-store.myshopify.com' && SHOPIFY_STORE_DOMAIN.length > 0;
};

const hasBackendTokenConfig = (): boolean => {
  return SHOPIFY_BACKEND_BASE_URL.length > 0 && SHOPIFY_BACKEND_TOKEN_ENDPOINT.length > 0;
};

const hasBackendProxyConfig = (): boolean => {
  return SHOPIFY_BACKEND_BASE_URL.length > 0 && SHOPIFY_BACKEND_PROXY_ENDPOINT.length > 0;
};

const getBackendTokenUrl = (): string => {
  if (SHOPIFY_BACKEND_TOKEN_ENDPOINT.startsWith('http://') || SHOPIFY_BACKEND_TOKEN_ENDPOINT.startsWith('https://')) {
    return SHOPIFY_BACKEND_TOKEN_ENDPOINT;
  }
  return `${SHOPIFY_BACKEND_BASE_URL.replace(/\/+$/, '')}/${SHOPIFY_BACKEND_TOKEN_ENDPOINT.replace(/^\/+/, '')}`;
};

const getBackendProxyUrl = (): string => {
  if (SHOPIFY_BACKEND_PROXY_ENDPOINT.startsWith('http://') || SHOPIFY_BACKEND_PROXY_ENDPOINT.startsWith('https://')) {
    return SHOPIFY_BACKEND_PROXY_ENDPOINT;
  }
  return `${SHOPIFY_BACKEND_BASE_URL.replace(/\/+$/, '')}/${SHOPIFY_BACKEND_PROXY_ENDPOINT.replace(/^\/+/, '')}`;
};

const shouldUseBackendProxy = (): boolean => {
  return hasBackendProxyConfig() && !hasStoreDomainConfig();
};

const parseTokenExpiry = (payload: BackendTokenResponse): number => {
  if (typeof payload.expiresAt === 'number') {
    return payload.expiresAt;
  }
  if (typeof payload.expiresAt === 'string') {
    const parsed = Date.parse(payload.expiresAt);
    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }
  if (typeof payload.expires_in === 'number') {
    return Date.now() + payload.expires_in * 1000;
  }
  return Date.now() + 23 * 60 * 60 * 1000;
};

const requestBackendToken = async (): Promise<string> => {
  const response = await fetch(getBackendTokenUrl(), {
    method: SHOPIFY_BACKEND_TOKEN_METHOD,
    headers: {
      Accept: 'application/json'
    },
    credentials: 'include'
  });

  if (!response.ok) {
    throw new StorefrontAPIError(`Token endpoint HTTP ${response.status}`, 'TOKEN_HTTP_ERROR');
  }

  const payload = (await response.json()) as BackendTokenResponse;
  const token = payload.access_token || payload.token;
  if (!token) {
    throw new StorefrontAPIError('Token endpoint did not return access_token', 'TOKEN_MISSING');
  }

  tokenCache = {
    value: token,
    expiresAt: parseTokenExpiry(payload)
  };
  return token;
};

const getShopifyAuthToken = async (): Promise<string> => {
  if (tokenCache && Date.now() < tokenCache.expiresAt - TOKEN_REFRESH_BUFFER_MS) {
    return tokenCache.value;
  }

  if (hasBackendTokenConfig()) {
    if (!inFlightTokenRequest) {
      inFlightTokenRequest = requestBackendToken().finally(() => {
        inFlightTokenRequest = null;
      });
    }

    try {
      return await inFlightTokenRequest;
    } catch (error) {
      if (hasStaticStorefrontToken()) {
        console.warn('Falling back to static storefront token after backend token fetch failure.', error);
        return SHOPIFY_STOREFRONT_ACCESS_TOKEN;
      }
      throw error;
    }
  }

  if (hasStaticStorefrontToken()) {
    return SHOPIFY_STOREFRONT_ACCESS_TOKEN;
  }

  throw new StorefrontAPIError('No Shopify auth token source configured', 'SHOPIFY_NOT_CONFIGURED');
};

export const isShopifyConfigured = (): boolean => {
  if (shouldUseBackendProxy()) {
    return true;
  }
  return hasStoreDomainConfig() && (hasStaticStorefrontToken() || hasBackendTokenConfig());
};

type GraphQLResponse<T> = {
  data?: T;
  errors?: StorefrontError[];
};

async function shopifyFetch<TData>(
  query: string,
  variables: Record<string, unknown> = {}
): Promise<TData> {
  if (!isShopifyConfigured()) {
    throw new StorefrontAPIError('Shopify is not configured', 'SHOPIFY_NOT_CONFIGURED');
  }
  let response: Response;
  if (shouldUseBackendProxy()) {
    response = await fetch(getBackendProxyUrl(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ query, variables })
    });
  } else {
    const authToken = await getShopifyAuthToken();
    response = await fetch(SHOPIFY_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        [SHOPIFY_AUTH_HEADER]: authToken
      },
      body: JSON.stringify({ query, variables })
    });
  }

  if (!response.ok) {
    if (response.status === 429) {
      throw new StorefrontAPIError('Rate limit exceeded', 'RATE_LIMIT');
    }
    throw new StorefrontAPIError(`HTTP ${response.status}`, 'HTTP_ERROR');
  }

  const { data, errors } = (await response.json()) as GraphQLResponse<TData>;
  if (errors && errors.length > 0) {
    throw new StorefrontAPIError(errors[0].message, 'GRAPHQL_ERROR', errors[0].field);
  }
  if (!data) {
    throw new StorefrontAPIError('Missing response data', 'EMPTY_DATA');
  }

  return data;
}

const PRODUCT_CARD_FIELDS = `
  id
  handle
  title
  description
  descriptionHtml
  tags
  priceRange {
    minVariantPrice {
      amount
      currencyCode
    }
  }
  compareAtPriceRange {
    minVariantPrice {
      amount
      currencyCode
    }
  }
  featuredImage {
    url
    altText
    width
    height
  }
  images(first: 1) {
    edges {
      node {
        url
        altText
      }
    }
  }
  availableForSale
  totalInventory
  featureLine: metafield(namespace: "custom", key: "feature_line") {
    value
  }
  badge: metafield(namespace: "custom", key: "badge_label") {
    value
  }
  shortDescription: metafield(namespace: "custom", key: "short_description") {
    value
  }
  shippingInfo: metafield(namespace: "custom", key: "shipping_snippet") {
    value
  }
`;

export const PRODUCT_LIST_QUERY = `
  query ProductList(
    $first: Int = 24
    $after: String
    $sortKey: ProductSortKeys = BEST_SELLING
    $reverse: Boolean = false
    $query: String
  ) {
    products(first: $first, after: $after, sortKey: $sortKey, reverse: $reverse, query: $query) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      edges {
        node {
          ${PRODUCT_CARD_FIELDS}
        }
      }
    }
  }
`;

export const PRODUCTS_BY_COLLECTION_QUERY = `
  query ProductsByCollection($handle: String!, $first: Int = 24, $after: String) {
    collection(handle: $handle) {
      id
      handle
      title
      products(first: $first, after: $after) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          endCursor
          startCursor
        }
        edges {
          node {
            ${PRODUCT_CARD_FIELDS}
          }
        }
      }
    }
  }
`;

export const PRODUCT_SEARCH_QUERY = `
  query ProductSearch($query: String!, $first: Int = 10) {
    search(query: $query, first: $first, types: PRODUCT) {
      edges {
        node {
          ... on Product {
            id
            handle
            title
            featuredImage {
              url
              altText
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
`;

export const PREDICTIVE_SEARCH_QUERY = `
  query PredictiveSearch($query: String!, $limit: Int = 5) {
    predictiveSearch(query: $query, limit: $limit, types: PRODUCT) {
      products {
        id
        handle
        title
        featuredImage {
          url
          altText
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;

export const COLLECTION_FILTERS_QUERY = `
  query CollectionFilters($handle: String!) {
    collection(handle: $handle) {
      products(first: 1) {
        filters {
          id
          label
          type
          values {
            id
            label
            count
            input
          }
        }
      }
    }
  }
`;

export const PRODUCT_DETAIL_QUERY = `
  query ProductDetail($handle: String!) {
    product(handle: $handle) {
      id
      handle
      title
      description
      descriptionHtml
      tags
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      compareAtPriceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      availableForSale
      totalInventory
      images(first: 10) {
        edges {
          node {
            id
            url
            altText
            width
            height
          }
        }
      }
      variants(first: 50) {
        edges {
          node {
            id
            title
            availableForSale
            quantityAvailable
            price {
              amount
              currencyCode
            }
            compareAtPrice {
              amount
              currencyCode
            }
            selectedOptions {
              name
              value
            }
            image {
              url
              altText
            }
          }
        }
      }
      options {
        id
        name
        values
      }
      subtitle: metafield(namespace: "custom", key: "subtitle") {
        value
      }
      bulletFeatures: metafield(namespace: "custom", key: "bullet_features") {
        value
        type
      }
      whatsInBox: metafield(namespace: "custom", key: "whats_in_box") {
        value
        type
      }
      specifications: metafield(namespace: "custom", key: "specifications") {
        value
        type
      }
      deliveryInfo: metafield(namespace: "custom", key: "delivery_info") {
        value
      }
      returnsPolicy: metafield(namespace: "custom", key: "returns_policy") {
        value
      }
      supportInfo: metafield(namespace: "custom", key: "support_info") {
        value
      }
      ctaLabel: metafield(namespace: "custom", key: "cta_label") {
        value
      }
      ctaSubtext: metafield(namespace: "custom", key: "cta_subtext") {
        value
      }
      seo {
        title
        description
      }
    }
  }
`;

export const PRODUCT_RECOMMENDATIONS_QUERY = `
  query ProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      id
      handle
      title
      featuredImage {
        url
        altText
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
    }
  }
`;

export const PRODUCT_COLLECTIONS_QUERY = `
  query ProductCollections($productId: ID!) {
    product(id: $productId) {
      collections(first: 5) {
        edges {
          node {
            id
            handle
            title
          }
        }
      }
    }
  }
`;

const CART_FIELDS = `
  id
  checkoutUrl
  totalQuantity
  cost {
    subtotalAmount {
      amount
      currencyCode
    }
    totalAmount {
      amount
      currencyCode
    }
    totalTaxAmount {
      amount
      currencyCode
    }
  }
  lines(first: 50) {
    edges {
      node {
        id
        quantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
        merchandise {
          ... on ProductVariant {
            id
            title
            product {
              id
              title
              handle
              featuredImage {
                url
                altText
              }
            }
            price {
              amount
              currencyCode
            }
            image {
              url
              altText
            }
            selectedOptions {
              name
              value
            }
            availableForSale
          }
        }
      }
    }
  }
`;

export const CART_CREATE_MUTATION = `
  mutation CartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        ${CART_FIELDS}
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const CART_LINES_ADD_MUTATION = `
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ${CART_FIELDS}
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const CART_LINES_UPDATE_MUTATION = `
  mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ${CART_FIELDS}
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const CART_LINES_REMOVE_MUTATION = `
  mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ${CART_FIELDS}
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const CART_QUERY = `
  query Cart($id: ID!) {
    cart(id: $id) {
      ${CART_FIELDS}
    }
  }
`;

export const CART_BUYER_IDENTITY_UPDATE_MUTATION = `
  mutation CartBuyerIdentityUpdate($cartId: ID!, $buyerIdentity: CartBuyerIdentityInput!) {
    cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
      cart {
        id
        deliveryGroups(first: 5) {
          edges {
            node {
              deliveryOptions {
                handle
                title
                description
                estimatedCost {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;

type CartLineInput = {
  merchandiseId: string;
  quantity: number;
};

type CartUserError = {
  field?: string[];
  message: string;
};

type CartMutationResponseKey = 'cartCreate' | 'cartLinesAdd' | 'cartLinesUpdate' | 'cartLinesRemove';

const extractCartFromMutation = <T extends CartMutationResponseKey>(
  payload: { [K in T]: { cart: Cart | null; userErrors: CartUserError[] } },
  key: T
): Cart => {
  const result = payload[key];
  if (result.userErrors.length > 0) {
    const firstError = result.userErrors[0];
    throw new StorefrontAPIError(firstError.message, 'CART_USER_ERROR', firstError.field);
  }
  if (!result.cart) {
    throw new StorefrontAPIError('Cart was not returned by Shopify', 'MISSING_CART');
  }
  return result.cart;
};

export async function getProducts(params: {
  first?: number;
  after?: string | null;
  sortKey?: ProductSortKey;
  reverse?: boolean;
  query?: string;
} = {}): Promise<ProductConnection> {
  const data = await shopifyFetch<{ products: ProductConnection }>(PRODUCT_LIST_QUERY, {
    first: params.first ?? 24,
    after: params.after ?? null,
    sortKey: params.sortKey ?? 'BEST_SELLING',
    reverse: params.reverse ?? false,
    query: params.query
  });
  return data.products;
}

export async function getProductsByCollection(params: {
  handle: string;
  first?: number;
  after?: string | null;
}): Promise<{ id: string; handle: string; title: string; products: ProductConnection } | null> {
  const data = await shopifyFetch<{
    collection: { id: string; handle: string; title: string; products: ProductConnection } | null;
  }>(PRODUCTS_BY_COLLECTION_QUERY, {
    handle: params.handle,
    first: params.first ?? 24,
    after: params.after ?? null
  });
  return data.collection;
}

export async function searchProducts(query: string, first = 10): Promise<Product[]> {
  const data = await shopifyFetch<{
    search: { edges: Array<{ node: Product }> };
  }>(PRODUCT_SEARCH_QUERY, { query, first });
  return data.search.edges.map((edge) => edge.node);
}

export async function predictiveSearch(query: string, limit = 5): Promise<Product[]> {
  const data = await shopifyFetch<{
    predictiveSearch: { products: Product[] };
  }>(PREDICTIVE_SEARCH_QUERY, { query, limit });
  return data.predictiveSearch.products;
}

export async function getCollectionFilters(handle: string): Promise<CollectionFilter[]> {
  const data = await shopifyFetch<{
    collection: { products: { filters: CollectionFilter[] } } | null;
  }>(COLLECTION_FILTERS_QUERY, { handle });
  return data.collection?.products.filters ?? [];
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  const data = await shopifyFetch<{ product: Product | null }>(PRODUCT_DETAIL_QUERY, { handle });
  return data.product;
}

export async function getProductRecommendations(productId: string): Promise<Product[]> {
  const data = await shopifyFetch<{ productRecommendations: Product[] }>(PRODUCT_RECOMMENDATIONS_QUERY, {
    productId
  });
  return data.productRecommendations;
}

export async function getProductCollections(productId: string): Promise<Array<{ id: string; handle: string; title: string }>> {
  const data = await shopifyFetch<{
    product: {
      collections: { edges: Array<{ node: { id: string; handle: string; title: string } }> };
    } | null;
  }>(PRODUCT_COLLECTIONS_QUERY, { productId });
  return data.product?.collections.edges.map((edge) => edge.node) ?? [];
}

export async function createCart(lines: CartLineInput[] = []): Promise<Cart> {
  const data = await shopifyFetch<{
    cartCreate: { cart: Cart | null; userErrors: CartUserError[] };
  }>(CART_CREATE_MUTATION, {
    input: { lines }
  });
  return extractCartFromMutation(data, 'cartCreate');
}

export async function addCartLines(cartId: string, lines: CartLineInput[]): Promise<Cart> {
  const data = await shopifyFetch<{
    cartLinesAdd: { cart: Cart | null; userErrors: CartUserError[] };
  }>(CART_LINES_ADD_MUTATION, { cartId, lines });
  return extractCartFromMutation(data, 'cartLinesAdd');
}

export async function updateCartLines(
  cartId: string,
  lines: Array<{ id: string; quantity: number }>
): Promise<Cart> {
  const data = await shopifyFetch<{
    cartLinesUpdate: { cart: Cart | null; userErrors: CartUserError[] };
  }>(CART_LINES_UPDATE_MUTATION, { cartId, lines });
  return extractCartFromMutation(data, 'cartLinesUpdate');
}

export async function removeCartLines(cartId: string, lineIds: string[]): Promise<Cart> {
  const data = await shopifyFetch<{
    cartLinesRemove: { cart: Cart | null; userErrors: CartUserError[] };
  }>(CART_LINES_REMOVE_MUTATION, { cartId, lineIds });
  return extractCartFromMutation(data, 'cartLinesRemove');
}

export async function getCart(id: string): Promise<Cart | null> {
  const data = await shopifyFetch<{ cart: Cart | null }>(CART_QUERY, { id });
  return data.cart;
}

export async function updateCartBuyerIdentity(
  cartId: string,
  buyerIdentity: {
    deliveryAddressPreferences: Array<{
      deliveryAddress: {
        address1?: string;
        city: string;
        province?: string;
        country: string;
        zip: string;
      };
    }>;
  }
): Promise<Cart> {
  const data = await shopifyFetch<{
    cartBuyerIdentityUpdate: {
      cart: Cart | null;
      userErrors: CartUserError[];
    };
  }>(CART_BUYER_IDENTITY_UPDATE_MUTATION, { cartId, buyerIdentity });

  const result = data.cartBuyerIdentityUpdate;
  if (result.userErrors.length > 0) {
    const firstError = result.userErrors[0];
    throw new StorefrontAPIError(firstError.message, 'CART_USER_ERROR', firstError.field);
  }
  if (!result.cart) {
    throw new StorefrontAPIError('Cart was not returned by Shopify', 'MISSING_CART');
  }
  return result.cart;
}

const DELIVERY_ESTIMATES: Record<string, { days: string; available: boolean }> = {
  '400001': { days: '2-3', available: true },
  '110001': { days: '3-4', available: true }
};

export function checkDelivery(pincode: string): { days: string; available: boolean } {
  const normalizedPincode = pincode.trim();
  const firstThree = normalizedPincode.substring(0, 3);
  return (
    DELIVERY_ESTIMATES[normalizedPincode] ??
    DELIVERY_ESTIMATES[firstThree] ?? {
      days: '5-7',
      available: true
    }
  );
}

export const getCartId = (): string | null => {
  if (typeof window === 'undefined') {
    return null;
  }
  return window.localStorage.getItem(CART_ID_KEY);
};

export const setCartId = (cartId: string): void => {
  if (typeof window === 'undefined') {
    return;
  }
  window.localStorage.setItem(CART_ID_KEY, cartId);
};

export const clearCartId = (): void => {
  if (typeof window === 'undefined') {
    return;
  }
  window.localStorage.removeItem(CART_ID_KEY);
};
