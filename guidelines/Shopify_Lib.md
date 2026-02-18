2. Products Listing Page
   Product List Query with Pagination
   query ProductList(
   $first: Int = 24
   $after: String
   $sortKey: ProductSortKeys = BEST_SELLING
   $reverse: Boolean = false
   $query: String
   ) {
   products(
   first: $first
   after: $after
   sortKey: $sortKey
   reverse: $reverse
   query: $query
   ) {
   pageInfo {
   hasNextPage
   endCursor
   }
   edges {
   node {
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
   totalInventory # Metafields for custom data
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
   }
   }
   Sort Options:

BEST_SELLING, CREATED_AT, PRICE, RELEVANCE, TITLE
Filter by Collection/Category:

query ProductsByCollection(
$handle: String!
$first: Int = 24
$after: String
) {
collection(handle: $handle) {
id
title
products(first: $first, after: $after) { # ... same product fields as above
}
}
}
Search Query:

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
Predictive Search:

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
Dynamic Filters (Get Available Options):

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
TypeScript Types:

interface Product {
id: string;
handle: string;
title: string;
description: string;
tags: string[];
priceRange: {
minVariantPrice: {
amount: string;
currencyCode: string;
};
};
featuredImage: {
url: string;
altText: string | null;
} | null;
availableForSale: boolean;
featureLine?: { value: string };
badge?: { value: string };
shortDescription?: { value: string };
shippingInfo?: { value: string };
}

interface ProductConnection {
pageInfo: {
hasNextPage: boolean;
endCursor: string | null;
};
edges: Array<{ node: Product }>;
} 3. Product Detail Page
Product by Handle Query
query ProductDetail($handle: String!) {
product(handle: $handle) {
id
handle
title
description
descriptionHtml
tags

    # Pricing
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

    # Availability
    availableForSale
    totalInventory

    # Images Gallery
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

    # Variants
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

    # Options (Size, Color, etc.)
    options {
      id
      name
      values
    }

    # Custom Content via Metafields
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

    # SEO
    seo {
      title
      description
    }

}
}
Recommended Products:

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
Breadcrumbs (via Collections):

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
Metafield Structure Recommendations:

For complex data, use JSON metafields:

// In Shopify Admin: Settings → Custom Data → Products
// Create metafields:

1. bullet_features (type: list.single_line_text_field)
   ["Premium build quality", "2-year warranty", "Fast charging"]

2. specifications (type: json)
   {
   "Dimensions": "10 x 5 x 2 cm",
   "Weight": "200g",
   "Material": "Aluminum",
   "Color Options": "Black, Silver"
   }

3. whats_in_box (type: list.single_line_text_field)
   ["1x Product", "1x USB Cable", "User Manual"]
   TypeScript Interface:

interface ProductDetail {
id: string;
handle: string;
title: string;
description: string;
priceRange: PriceRange;
availableForSale: boolean;
images: { edges: Array<{ node: Image }> };
variants: { edges: Array<{ node: Variant }> };
options: Option[];
subtitle?: { value: string };
bulletFeatures?: { value: string; type: string };
specifications?: { value: string; type: string };
whatsInBox?: { value: string; type: string };
deliveryInfo?: { value: string };
returnsPolicy?: { value: string };
supportInfo?: { value: string };
} 4. Cart Drawer + Cart Page
Create Cart Mutation
mutation CartCreate($input: CartInput!) {
cartCreate(input: $input) {
cart {
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
Variables:

{
"input": {
"lines": [
{
"merchandiseId": "gid://shopify/ProductVariant/123456789",
"quantity": 1
}
]
}
}
Add to Cart Mutation
mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
    cart {
      id
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
      }
      lines(first: 50) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
                title
                product {
                  title
                  featuredImage {
                    url
                  }
                }
                price {
                  amount
                  currencyCode
                }
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
Update Line Quantity
mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
cartLinesUpdate(cartId: $cartId, lines: $lines) {
cart {
id
totalQuantity
cost {
totalAmount {
amount
currencyCode
}
}
lines(first: 50) {
edges {
node {
id
quantity
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
Variables:

{
"cartId": "gid://shopify/Cart/abc123",
"lines": [
{
"id": "gid://shopify/CartLine/xyz789",
"quantity": 3
}
]
}
Remove Line Items
mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
  cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
    cart {
      id
      totalQuantity
      lines(first: 50) {
        edges {
          node {
            id
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
Query Cart by ID
query Cart($id: ID!) {
cart(id: $id) {
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
}
}
}
}
}
}
}
Cart Persistence Best Practice:

// Store cart ID in localStorage
const CART_ID_KEY = 'shopify_cart_id';

export const getCartId = (): string | null => {
return localStorage.getItem(CART_ID_KEY);
};

export const setCartId = (cartId: string): void => {
localStorage.setItem(CART_ID_KEY, cartId);
};

export const clearCartId = (): void => {
localStorage.removeItem(CART_ID_KEY);
};

// Cart expires after 10 days of inactivity
TypeScript Types:

interface Cart {
id: string;
checkoutUrl: string;
totalQuantity: number;
cost: {
subtotalAmount: Money;
totalAmount: Money;
totalTaxAmount?: Money;
};
lines: {
edges: Array<{
node: CartLine;
}>;
};
}

interface CartLine {
id: string;
quantity: number;
cost: {
totalAmount: Money;
};
merchandise: ProductVariant;
}

interface Money {
amount: string;
currencyCode: string;
} 5. Pincode / Delivery Estimator
Shopify Storefront API Limitation: The Storefront API doesn't directly support delivery estimates by postal code. Here are your options:

Option A: Use Cart Delivery Groups (Requires Buyer Identity)
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
Variables:

{
"cartId": "gid://shopify/Cart/abc123",
"buyerIdentity": {
"deliveryAddressPreferences": [
{
"deliveryAddress": {
"address1": "",
"city": "Mumbai",
"province": "MH",
"country": "IN",
"zip": "400001"
}
}
]
}
}
Option B: Custom App with Admin API (Recommended)
Create a serverless function that uses Admin API:

# Admin API Query

query DeliveryProfiles {
deliveryProfiles(first: 10) {
edges {
node {
id
name
profileLocationGroups {
locationGroupZones(first: 10) {
edges {
node {
zone {
countries {
code {
countryCode
}
provinces {
code
}
}
}
methodDefinitions(first: 10) {
edges {
node {
name
rateProvider {
... on DeliveryRateDefinition {
price {
amount
currencyCode
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
}
}
}
}
Option C: Fallback - Static Mapping
// Simple pincode-based estimation
const DELIVERY_ESTIMATES: Record<string, { days: string; available: boolean }> = {
'400001': { days: '2-3', available: true }, // Mumbai
'110001': { days: '3-4', available: true }, // Delhi
// ... add major pincodes
};

export const checkDelivery = (pincode: string) => {
const firstThree = pincode.substring(0, 3);
return DELIVERY_ESTIMATES[pincode] || DELIVERY_ESTIMATES[firstThree] || {
days: '5-7',
available: true,
};
};
Recommended Approach: Use Option C for MVP, then integrate a shipping app like:

Shiprocket (has API for pincode serviceability)
Delhivery (pincode check API)
Custom backend that calls carrier APIs 6. Home Page Content
Using Metaobjects (Recommended)
Setup in Shopify Admin:

Settings → Custom Data → Metaobjects
Create "Home Page Section" metaobject with fields:
hero_title (single line text)
hero_subtitle (multi-line text)
cta_label (single line text)
cta_url (URL)
badge_text (single line text)
featured_product (product reference)
background_image (file)
Query Metaobjects:

query HomePageContent {
metaobject(handle: {type: "home_page_section", handle: "hero-section"}) {
id
type
fields {
key
value
reference {
... on Product {
id
handle
title
featuredImage {
url
}
}
... on MediaImage {
image {
url
altText
}
}
}
}
}
}
Alternative: Page Metafields
query HomePage {
page(handle: "home") {
id
title
heroTitle: metafield(namespace: "custom", key: "hero_title") {
value
}
heroSubtitle: metafield(namespace: "custom", key: "hero_subtitle") {
value
}
ctaLabel: metafield(namespace: "custom", key: "cta_label") {
value
}
featuredProducts: metafield(namespace: "custom", key: "featured_products") {
references(first: 4) {
edges {
node {
... on Product {
id
handle
title
featuredImage {
url
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
}
}
Testimonials via Metaobjects
Create "Testimonial" metaobject:

reviewer_name (text)
reviewer_role (text)
quote (multi-line text)
rating (number)
use_case (text)
verified (boolean)
Query:

query Testimonials {
metaobjects(type: "testimonial", first: 10) {
edges {
node {
id
handle
fields {
key
value
}
}
}
}
}
TypeScript Helper:

interface MetaobjectField {
key: string;
value: string;
}

const parseMetaobject = (fields: MetaobjectField[]) => {
return fields.reduce((acc, field) => {
acc[field.key] = field.value;
return acc;
}, {} as Record<string, string>);
}; 7. Reviews
Shopify Native: No built-in review system in Storefront API.

Recommended Apps:

Judge.me (most popular)
Loox
Stamped.io
Judge.me Integration Example
Most review apps provide a JavaScript widget, but for headless:

Option A: Use App's API (if available)

// Judge.me provides a REST API
const fetchReviews = async (productId: string) => {
const response = await fetch(
`https://judge.me/api/v1/reviews?shop_domain=${SHOP_DOMAIN}&api_token=${JUDGEME_API_TOKEN}&product_id=${productId}`
);
return response.json();
};
Option B: Custom Metafields Manually curate reviews as metaobjects:

query ProductReviews($productId: ID!) {
product(id: $productId) {
reviews: metafield(namespace: "custom", key: "reviews") {
references(first: 10) {
edges {
node {
... on Metaobject {
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
TypeScript Interface:

interface Review {
id: string;
reviewerName: string;
reviewerRole?: string;
quote: string;
rating: number;
verified: boolean;
useCase?: string;
createdAt: string;
} 8. Field Mapping Guide
Mock Field Shopify Mapping Notes
product.name product.title Direct field
product.descriptor product.metafield(key: "short_description") Custom metafield
product.feature product.metafield(key: "feature_line") Custom metafield
product.price product.priceRange.minVariantPrice.amount Direct field
product.badge product.metafield(key: "badge_label") OR product.tags[0] Metafield or tag rule
product.image product.featuredImage.url Direct field
product.availability product.availableForSale Direct boolean
product.shipping product.metafield(key: "shipping_snippet") Custom metafield
productDetail.subtitle product.metafield(key: "subtitle") Custom metafield
productDetail.features[] product.metafield(key: "bullet_features") List metafield
productDetail.whatsInBox[] product.metafield(key: "whats_in_box") List metafield
productDetail.specs{} product.metafield(key: "specifications") JSON metafield
productDetail.delivery product.metafield(key: "delivery_info") Custom metafield
cart.items[].name cartLine.merchandise.product.title Nested field
cart.items[].variant cartLine.merchandise.title Variant title
cart.subtotal cart.cost.subtotalAmount.amount Direct field
home.hero.title metaobject(type: "home").field(key: "hero_title") Metaobject
testimonials[].name metaobject(type: "testimonial").field(key: "reviewer_name") Metaobject 9. Complete TypeScript Types
// storefront-api.types.ts

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
reference?: any;
references?: {
edges: Array<{ node: any }>;
};
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
maxVariantPrice: Money;
};
compareAtPriceRange?: {
minVariantPrice: Money;
};
featuredImage: Image | null;
images: {
edges: Array<{ node: Image }>;
};
variants: {
edges: Array<{ node: ProductVariant }>;
};
options: ProductOption[];
// Custom metafields
featureLine?: Metafield;
badge?: Metafield;
shortDescription?: Metafield;
subtitle?: Metafield;
bulletFeatures?: Metafield;
specifications?: Metafield;
whatsInBox?: Metafield;
deliveryInfo?: Metafield;
returnsPolicy?: Metafield;
supportInfo?: Metafield;
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
image?: Image;
}

export interface ProductOption {
id: string;
name: string;
values: string[];
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

export interface DeliveryOption {
handle: string;
title: string;
description?: string;
estimatedCost: Money;
}

export interface Collection {
id: string;
handle: string;
title: string;
description: string;
image?: Image;
products: {
edges: Array<{ node: Product }>;
pageInfo: PageInfo;
filters?: Filter[];
};
}

export interface Filter {
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

export interface PageInfo {
hasNextPage: boolean;
hasPreviousPage: boolean;
endCursor: string | null;
startCursor: string | null;
}

export interface StorefrontError {
message: string;
field?: string[];
}
Error Handling
// error-handler.ts

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

export const handleStorefrontResponse = async (response: Response) => {
if (!response.ok) {
if (response.status === 429) {
throw new StorefrontAPIError('Rate limit exceeded', 'RATE_LIMIT');
}
throw new StorefrontAPIError(`HTTP ${response.status}`, 'HTTP_ERROR');
}

const { data, errors } = await response.json();

if (errors && errors.length > 0) {
throw new StorefrontAPIError(
errors[0].message,
'GRAPHQL_ERROR',
errors[0].field
);
}

return data;
};

// Usage in components
try {
