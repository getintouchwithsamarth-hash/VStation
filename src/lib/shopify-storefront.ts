import { storefrontAPI as proxyStorefrontAPI } from './shopify-api';

const SHOPIFY_STORE_DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN || 'your-store.myshopify.com';
const SHOPIFY_STOREFRONT_PUBLIC_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_PUBLIC_TOKEN || '';
const SHOPIFY_STOREFRONT_API_VERSION = import.meta.env.VITE_SHOPIFY_STOREFRONT_API_VERSION || '2026-01';
const SHOPIFY_BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';
const SHOPIFY_BACKEND_PROXY_ENDPOINT =
  import.meta.env.VITE_SHOPIFY_STOREFRONT_ENDPOINT ||
  import.meta.env.VITE_SHOPIFY_PROXY_ENDPOINT ||
  '/api/shopify';
const SHOPIFY_STOREFRONT_USE_BACKEND_PROXY =
  String(import.meta.env.VITE_SHOPIFY_STOREFRONT_USE_BACKEND_PROXY || 'false').toLowerCase() === 'true';
const SHOPIFY_AUTH_HEADER = import.meta.env.VITE_SHOPIFY_AUTH_HEADER || 'X-Shopify-Storefront-Access-Token';
const SHOPIFY_COUNTRY_CODE = (import.meta.env.VITE_SHOPIFY_COUNTRY_CODE || 'IN').toUpperCase();
const SHOPIFY_LANGUAGE_CODE = (import.meta.env.VITE_SHOPIFY_LANGUAGE_CODE || 'EN').toUpperCase();
const SHOPIFY_GRAPHQL_URL = `https://${SHOPIFY_STORE_DOMAIN}/api/${SHOPIFY_STOREFRONT_API_VERSION}/graphql.json`;
const CART_ID_KEY = 'shopify_cart_id';

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
  sku?: string | null;
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
  vendor?: string;
  onlineStoreUrl?: string | null;
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
  category?: Metafield | null;
  featureLine?: Metafield | null;
  categories?: Metafield | null;
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
  whyDifferent?: Metafield | null;
  buyingGuide?: Metafield | null;
  countryOfOrigin?: Metafield | null;
  careInstructions?: Metafield | null;
  gstInvoice?: Metafield | null;
  faq?: Metafield | null;
  reviewSummary?: Metafield | null;
  curatedFor?: Metafield | null;
  notFor?: Metafield | null;
  dispatchTime?: Metafield | null;
  deliveryWindow?: Metafield | null;
  replacementPolicy?: Metafield | null;
  supportResponseTime?: Metafield | null;
  codAvailable?: Metafield | null;
  packCount?: Metafield | null;
  bestFor?: Metafield | null;
  secureCheckout?: Metafield | null;
  ctaLabel?: Metafield | null;
  ctaSubtext?: Metafield | null;
  seo?: {
    title: string | null;
    description: string | null;
  };
}

type ProductThumbnailSource = {
  title?: string;
  featuredImage?: Image | null;
  images?: {
    edges?: Array<{ node: Image }>;
  };
};

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

type GraphQLResponse<T> = {
  data?: T;
  errors?: StorefrontError[];
};

type CartLineInput = {
  merchandiseId: string;
  quantity: number;
};

type CartUserError = {
  field?: string[];
  message: string;
};

type CartMutationResponseKey = 'cartCreate' | 'cartLinesAdd' | 'cartLinesUpdate' | 'cartLinesRemove';

const hasPublicStorefrontToken = (): boolean => SHOPIFY_STOREFRONT_PUBLIC_TOKEN.length > 0;

const hasStoreDomainConfig = (): boolean =>
  SHOPIFY_STORE_DOMAIN !== 'your-store.myshopify.com' && SHOPIFY_STORE_DOMAIN.length > 0;

const hasBackendProxyConfig = (): boolean =>
  SHOPIFY_BACKEND_BASE_URL.length > 0 && SHOPIFY_BACKEND_PROXY_ENDPOINT.length > 0;

const getBackendProxyUrl = (): string => {
  if (SHOPIFY_BACKEND_PROXY_ENDPOINT.startsWith('http://') || SHOPIFY_BACKEND_PROXY_ENDPOINT.startsWith('https://')) {
    return SHOPIFY_BACKEND_PROXY_ENDPOINT;
  }

  return `${SHOPIFY_BACKEND_BASE_URL.replace(/\/+$/, '')}/${SHOPIFY_BACKEND_PROXY_ENDPOINT.replace(/^\/+/, '')}`;
};

const shouldUseBackendProxy = (): boolean =>
  SHOPIFY_STOREFRONT_USE_BACKEND_PROXY || (!hasPublicStorefrontToken() && hasBackendProxyConfig());

/**
 * Returns `true` when either the public storefront token or the backend proxy is configured.
 */
export const isShopifyConfigured = (): boolean => {
  if (shouldUseBackendProxy()) {
    return true;
  }

  return hasStoreDomainConfig() && hasPublicStorefrontToken();
};

/**
 * Calls the backend storefront proxy and returns the raw GraphQL envelope.
 */
export async function storefrontAPI<TData, TVariables = Record<string, unknown>>(request: {
  query: string;
  variables?: TVariables;
}): Promise<{ data?: TData; errors?: Array<{ message: string }> }> {
  const response = await proxyStorefrontAPI<TData, TVariables>(request);
  return response as { data?: TData; errors?: Array<{ message: string }> };
}

/**
 * Calls the Storefront API and throws typed errors for HTTP and GraphQL failures.
 * Browser-side calls use the public storefront token unless `VITE_SHOPIFY_STOREFRONT_USE_BACKEND_PROXY=true`.
 */
export async function storefrontFetch<TData>(
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
    response = await fetch(SHOPIFY_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        [SHOPIFY_AUTH_HEADER]: SHOPIFY_STOREFRONT_PUBLIC_TOKEN
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

/**
 * Resolves a displayable product thumbnail from the featured image or first gallery image.
 */
export function resolveProductThumbnail(product: ProductThumbnailSource): { url: string; altText: string } | null {
  const featured = product.featuredImage;
  if (featured?.url) {
    return {
      url: featured.url,
      altText: featured.altText || product.title || 'Product image'
    };
  }

  const firstImage = product.images?.edges?.[0]?.node;
  if (firstImage?.url) {
    return {
      url: firstImage.url,
      altText: firstImage.altText || product.title || 'Product image'
    };
  }

  return null;
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
  variants(first: 1) {
    edges {
      node {
        id
        availableForSale
        quantityAvailable
      }
    }
  }
  featureLine: metafield(namespace: "custom", key: "feature_line") {
    value
  }
  categories: metafield(namespace: "custom", key: "categories") {
    value
    type
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

const MARKET_CONTEXT = `@inContext(country: ${SHOPIFY_COUNTRY_CODE}, language: ${SHOPIFY_LANGUAGE_CODE})`;

export const PRODUCT_LIST_QUERY = `
  query ProductList(
    $first: Int = 24
    $after: String
    $sortKey: ProductSortKeys = BEST_SELLING
    $reverse: Boolean = false
    $query: String
  ) ${MARKET_CONTEXT} {
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
  query ProductsByCollection($handle: String!, $first: Int = 24, $after: String) ${MARKET_CONTEXT} {
    collection(handle: $handle) {
      id
      handle
      title
      description
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
  query ProductSearch($query: String!, $first: Int = 20) ${MARKET_CONTEXT} {
    products(first: $first, query: $query) {
      edges {
        node {
          id
          handle
          title
          availableForSale
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
          variants(first: 1) {
            edges {
              node {
                id
                availableForSale
                quantityAvailable
              }
            }
          }
        }
      }
    }
  }
`;

export const PREDICTIVE_SEARCH_QUERY = `
  query PredictiveSearch($query: String!, $limit: Int = 5) ${MARKET_CONTEXT} {
    predictiveSearch(query: $query, limit: $limit, types: PRODUCT) {
      products {
        id
        handle
        title
        availableForSale
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
        variants(first: 1) {
          edges {
            node {
              id
              availableForSale
              quantityAvailable
            }
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
  query ProductDetail($handle: String!) ${MARKET_CONTEXT} {
    product(handle: $handle) {
      id
      handle
      title
      vendor
      onlineStoreUrl
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
            sku
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
      category: metafield(namespace: "shopify", key: "category") {
        value
        type
      }
      featureLine: metafield(namespace: "custom", key: "feature_line") {
        value
      }
      categories: metafield(namespace: "custom", key: "categories") {
        value
        type
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
      bulletFeatures: metafield(namespace: "custom", key: "bullet_features") {
        value
        type
      }
      whatsInBox: metafield(namespace: "custom", key: "what_s_in_the_box") {
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
      returnsPolicy: metafield(namespace: "custom", key: "return_policy") {
        value
      }
      supportInfo: metafield(namespace: "custom", key: "support_info") {
        value
      }
      whyDifferent: metafield(namespace: "custom", key: "why_it_feels_different") {
        value
        type
      }
      buyingGuide: metafield(namespace: "custom", key: "buying_guide") {
        value
        type
      }
      countryOfOrigin: metafield(namespace: "custom", key: "country_of_origin") {
        value
      }
      careInstructions: metafield(namespace: "custom", key: "care_instruction") {
        value
      }
      gstInvoice: metafield(namespace: "custom", key: "gst_invoice") {
        value
      }
      faq: metafield(namespace: "custom", key: "faq") {
        value
        type
      }
      reviewSummary: metafield(namespace: "custom", key: "reviews") {
        value
        type
      }
      curatedFor: metafield(namespace: "custom", key: "curated_for") {
        value
      }
      notFor: metafield(namespace: "custom", key: "not_for") {
        value
      }
      dispatchTime: metafield(namespace: "custom", key: "dispatch_time") {
        value
      }
      deliveryWindow: metafield(namespace: "custom", key: "delivery_window") {
        value
      }
      replacementPolicy: metafield(namespace: "custom", key: "replacement_policy") {
        value
      }
      supportResponseTime: metafield(namespace: "custom", key: "support_response_time") {
        value
      }
      codAvailable: metafield(namespace: "custom", key: "cod_available") {
        value
      }
      packCount: metafield(namespace: "custom", key: "pack_count") {
        value
      }
      bestFor: metafield(namespace: "custom", key: "best_for") {
        value
      }
      secureCheckout: metafield(namespace: "custom", key: "secure_checkout") {
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
  query ProductRecommendations($productId: ID!) ${MARKET_CONTEXT} {
    productRecommendations(productId: $productId) {
      id
      handle
      title
      availableForSale
      totalInventory
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
      variants(first: 1) {
        edges {
          node {
            id
            availableForSale
            quantityAvailable
          }
        }
      }
      images(first: 1) {
        edges {
          node {
            url
            altText
          }
        }
      }
      tags
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
    }
  }
`;

export const PRODUCT_COLLECTIONS_QUERY = `
  query ProductCollections($productId: ID!) ${MARKET_CONTEXT} {
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

const PRODUCT_CUSTOM_METAFIELDS_QUERY = `
  query GetProductCustomMetafields($handle: String!) ${MARKET_CONTEXT} {
    product(handle: $handle) {
      id
      title
      metafields(first: 50, namespace: "custom") {
        edges {
          node {
            namespace
            key
            value
            type
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
  mutation CartCreate($input: CartInput!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
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
        ${CART_FIELDS}
      }
      userErrors {
        field
        message
      }
    }
  }
`;

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

const normalizeProductCategoryValues = (categories: string[]): string[] =>
  Array.from(
    new Set(
      categories
        .map((category) => category.trim())
        .filter((category) => category.length > 0)
    )
  );

const escapeProductQueryValue = (value: string): string => value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');

const parseMetafieldListValue = (value?: string | null): string[] => {
  const normalized = value?.trim();
  if (!normalized) {
    return [];
  }

  try {
    const parsed = JSON.parse(normalized) as unknown;
    if (Array.isArray(parsed)) {
      return normalizeProductCategoryValues(parsed.map((entry) => (typeof entry === 'string' ? entry : '')));
    }
  } catch {
    // Fall back to plain text parsing for non-JSON metafield values.
  }

  return normalizeProductCategoryValues(normalized.split(/[\n,]+/));
};

const productMatchesCategories = (product: Product, categories: string[]): boolean => {
  const productCategories = parseMetafieldListValue(product.categories?.value);
  if (productCategories.length === 0) {
    return false;
  }

  const requestedCategories = new Set(normalizeProductCategoryValues(categories).map((category) => category.toLowerCase()));
  return productCategories.some((category) => requestedCategories.has(category.toLowerCase()));
};

/**
 * Fetches a product by handle and returns a typed `Product` or `null`.
 */
export async function getProductByHandle(handle: string): Promise<Product | null> {
  const data = await storefrontFetch<{ product: Product | null }>(PRODUCT_DETAIL_QUERY, { handle });
  return data.product;
}

/**
 * Backward-compatible alias for PDP product lookup.
 */
export async function getProduct(handle: string) {
  return storefrontAPI<{ product: Product | null }, { handle: string }>({
    query: PRODUCT_DETAIL_QUERY,
    variables: { handle }
  });
}

/**
 * Fetches products from the Storefront API.
 */
export async function getProducts(
  params: {
    first?: number;
    after?: string | null;
    sortKey?: ProductSortKey;
    reverse?: boolean;
    query?: string;
  } | number = {}
): Promise<ProductConnection> {
  const normalizedParams =
    typeof params === "number"
      ? { first: params }
      : params;

  const data = await storefrontFetch<{ products: ProductConnection }>(PRODUCT_LIST_QUERY, {
    first: normalizedParams.first ?? 24,
    after: normalizedParams.after ?? null,
    sortKey: normalizedParams.sortKey ?? 'BEST_SELLING',
    reverse: normalizedParams.reverse ?? false,
    query: normalizedParams.query
  });

  return data.products;
}

/**
 * Fetches a collection by handle with its first page of products.
 */
export async function getCollection(handle: string) {
  return storefrontAPI<{
    collection: {
      id: string;
      title: string;
      handle: string;
      description: string;
      products: ProductConnection;
    } | null;
  }, { handle: string; first: number; after: string | null }>({
    query: PRODUCTS_BY_COLLECTION_QUERY,
    variables: { handle, first: 50, after: null }
  });
}

/**
 * Fetches paginated products for a collection.
 */
export async function getProductsByCollection(params: {
  handle: string;
  first?: number;
  after?: string | null;
}): Promise<{ id: string; handle: string; title: string; description: string; products: ProductConnection } | null> {
  const data = await storefrontFetch<{
    collection: { id: string; handle: string; title: string; description: string; products: ProductConnection } | null;
  }>(PRODUCTS_BY_COLLECTION_QUERY, {
    handle: params.handle,
    first: params.first ?? 24,
    after: params.after ?? null
  });

  return data.collection;
}

/**
 * Fetches storefront-exposed custom metafields for a product.
 */
export async function getProductCustomMetafields(handle: string) {
  return storefrontAPI<{
    product: {
      id: string;
      title: string;
      metafields: {
        edges: Array<{
          node: {
            namespace: string;
            key: string;
            value: string;
            type: string;
          };
        }>;
      };
    } | null;
  }, { handle: string }>({
    query: PRODUCT_CUSTOM_METAFIELDS_QUERY,
    variables: { handle }
  });
}

/**
 * Searches products with a standard storefront query.
 */
export async function searchProducts(query: string, first = 10): Promise<Product[]> {
  const data = await storefrontFetch<{
    products: { edges: Array<{ node: Product }> };
  }>(PRODUCT_SEARCH_QUERY, { query, first });

  return data.products.edges.map((edge) => edge.node);
}

/**
 * Performs Shopify predictive search for products.
 */
export async function predictiveSearch(query: string, limit = 5): Promise<Product[]> {
  const data = await storefrontFetch<{
    predictiveSearch: { products: Product[] };
  }>(PREDICTIVE_SEARCH_QUERY, { query, limit });

  return data.predictiveSearch.products;
}

/**
 * Fetches the available collection filters for a collection page.
 */
export async function getCollectionFilters(handle: string): Promise<CollectionFilter[]> {
  const data = await storefrontFetch<{
    collection: { products: { filters: CollectionFilter[] } } | null;
  }>(COLLECTION_FILTERS_QUERY, { handle });

  return data.collection?.products.filters ?? [];
}

/**
 * Fetches product recommendations for a product.
 */
export async function getProductRecommendations(productId: string): Promise<Product[]> {
  const data = await storefrontFetch<{ productRecommendations: Product[] }>(PRODUCT_RECOMMENDATIONS_QUERY, {
    productId
  });

  return data.productRecommendations;
}

/**
 * Builds a Shopify product query from one or more category names.
 */
export function buildProductCategoryQuery(categories: string[]): string {
  const normalizedCategories = normalizeProductCategoryValues(categories);

  return normalizedCategories
    .flatMap((category) => {
      const escapedCategory = escapeProductQueryValue(category);
      return [
        `metafield.custom.categories:\"${escapedCategory}\"`,
        `metafield.custom.category:\"${escapedCategory}\"`
      ];
    })
    .join(' OR ');
}

/**
 * Fetches products by category metafield, falling back to client-side filtering when needed.
 */
export async function getProductsByCategories(categories: string[], first = 20): Promise<Product[]> {
  const normalizedCategories = normalizeProductCategoryValues(categories);
  if (normalizedCategories.length === 0) {
    return [];
  }

  const query = buildProductCategoryQuery(normalizedCategories);
  if (query) {
    const products = await getProducts({ first, query });
    const matchedProducts = products.edges.map((edge) => edge.node);
    if (matchedProducts.length > 0) {
      return matchedProducts;
    }
  }

  const fallbackProducts: Product[] = [];
  let after: string | null = null;
  let hasNextPage = true;

  while (fallbackProducts.length < first && hasNextPage) {
    const page = await getProducts({ first: 100, after });
    const matches = page.edges
      .map((edge) => edge.node)
      .filter((product) => productMatchesCategories(product, normalizedCategories));

    for (const product of matches) {
      if (fallbackProducts.some((candidate) => candidate.id === product.id)) {
        continue;
      }

      fallbackProducts.push(product);
      if (fallbackProducts.length >= first) {
        break;
      }
    }

    hasNextPage = page.pageInfo.hasNextPage;
    after = page.pageInfo.endCursor;
  }

  return fallbackProducts;
}

/**
 * Fetches the collections associated with a product.
 */
export async function getProductCollections(productId: string): Promise<Array<{ id: string; handle: string; title: string }>> {
  const data = await storefrontFetch<{
    product: {
      collections: { edges: Array<{ node: { id: string; handle: string; title: string } }> };
    } | null;
  }>(PRODUCT_COLLECTIONS_QUERY, { productId });

  return data.product?.collections.edges.map((edge) => edge.node) ?? [];
}

/**
 * Creates a cart with optional initial lines.
 */
export async function createCart(lines: CartLineInput[] = []): Promise<Cart> {
  const data = await storefrontFetch<{
    cartCreate: { cart: Cart | null; userErrors: CartUserError[] };
  }>(CART_CREATE_MUTATION, {
    input: {
      lines,
      buyerIdentity: {
        countryCode: SHOPIFY_COUNTRY_CODE
      }
    },
    country: SHOPIFY_COUNTRY_CODE,
    language: SHOPIFY_LANGUAGE_CODE
  });

  return extractCartFromMutation(data, 'cartCreate');
}

/**
 * Adds cart lines to an existing cart.
 */
export async function addCartLines(cartId: string, lines: CartLineInput[]): Promise<Cart> {
  const data = await storefrontFetch<{
    cartLinesAdd: { cart: Cart | null; userErrors: CartUserError[] };
  }>(CART_LINES_ADD_MUTATION, { cartId, lines });

  return extractCartFromMutation(data, 'cartLinesAdd');
}

/**
 * Updates quantities for existing cart lines.
 */
export async function updateCartLines(
  cartId: string,
  lines: Array<{ id: string; quantity: number }>
): Promise<Cart> {
  const data = await storefrontFetch<{
    cartLinesUpdate: { cart: Cart | null; userErrors: CartUserError[] };
  }>(CART_LINES_UPDATE_MUTATION, { cartId, lines });

  return extractCartFromMutation(data, 'cartLinesUpdate');
}

/**
 * Removes cart lines from a cart.
 */
export async function removeCartLines(cartId: string, lineIds: string[]): Promise<Cart> {
  const data = await storefrontFetch<{
    cartLinesRemove: { cart: Cart | null; userErrors: CartUserError[] };
  }>(CART_LINES_REMOVE_MUTATION, { cartId, lineIds });

  return extractCartFromMutation(data, 'cartLinesRemove');
}

/**
 * Fetches a cart by id.
 */
export async function getCart(id: string): Promise<Cart | null> {
  const data = await storefrontFetch<{ cart: Cart | null }>(CART_QUERY, { id });
  return data.cart;
}

/**
 * Updates cart buyer identity details.
 */
export async function updateCartBuyerIdentity(
  cartId: string,
  buyerIdentity: {
    countryCode?: string;
    email?: string;
    phone?: string;
    customerAccessToken?: string;
    deliveryAddressPreferences?: Array<{
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
  const data = await storefrontFetch<{
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

/**
 * Returns a basic delivery estimate for a pincode.
 */
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

/**
 * Reads the persisted cart id from local storage.
 */
export const getCartId = (): string | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  return window.localStorage.getItem(CART_ID_KEY);
};

/**
 * Persists the active cart id to local storage.
 */
export const setCartId = (cartId: string): void => {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(CART_ID_KEY, cartId);
};

/**
 * Clears the persisted cart id from local storage.
 */
export const clearCartId = (): void => {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.removeItem(CART_ID_KEY);
};
