import { adminAPI, storefrontAPI } from './shopify-api';
import type { Product } from './shopify-storefront';
import type { ProductWithShopifyMetafields } from './shopify-admin';

/**
 * Example 1: Basic PDP data from the Storefront API.
 * Use this for product title, description, price, media, and customer-facing content.
 */
export async function getProductBasicData(handle: string) {
  const query = `
    query GetProductBasicData($handle: String!) @inContext(country: IN, language: EN) {
      product(handle: $handle) {
        id
        handle
        title
        vendor
        description
        descriptionHtml
        tags
        availableForSale
        totalInventory
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
        variants(first: 20) {
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
                width
                height
              }
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
        subtitle: metafield(namespace: "custom", key: "subtitle") {
          value
        }
        bulletFeatures: metafield(namespace: "custom", key: "bullet_features") {
          value
        }
        specifications: metafield(namespace: "custom", key: "specifications") {
          value
        }
        whatsInBox: metafield(namespace: "custom", key: "whats_in_box") {
          value
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
        whyDifferent: metafield(namespace: "custom", key: "why_different") {
          value
        }
        buyingGuide: metafield(namespace: "custom", key: "buying_guide") {
          value
        }
        countryOfOrigin: metafield(namespace: "custom", key: "country_of_origin") {
          value
        }
        careInstructions: metafield(namespace: "custom", key: "care_instructions") {
          value
        }
        gstInvoice: metafield(namespace: "custom", key: "gst_invoice") {
          value
        }
        faq: metafield(namespace: "custom", key: "faq") {
          value
        }
        reviewSummary: metafield(namespace: "custom", key: "review_summary") {
          value
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

  return storefrontAPI<{ product: Product | null }, { handle: string }>({
    query,
    variables: { handle }
  });
}

/**
 * Example 2: Shopify taxonomy metafields from the Admin API.
 * Use this for category metadata, `shopify` namespace metafields, and metaobject references.
 */
export async function getProductShopifyMetafields(handle: string) {
  const query = `
    query GetProductShopifyMetafields($handle: String!) {
      productByHandle(handle: $handle) {
        id
        title
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

  return adminAPI<{ productByHandle: ProductWithShopifyMetafields | null }, { handle: string }>({
    query,
    variables: { handle }
  });
}

/**
 * Example 3: Custom storefront metafields.
 * Use this when the metafields are intentionally exposed to Storefront API access.
 */
export async function getProductCustomMetafields(handle: string) {
  const query = `
    query GetProductCustomMetafields($handle: String!) @inContext(country: IN, language: EN) {
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
    query,
    variables: { handle }
  });
}

/**
 * Example 4: Full PDP data by combining both APIs.
 * Storefront API covers basic customer-facing product data.
 * Admin API adds taxonomy and `shopify` namespace enrichment.
 */
export async function getCompleteProductData(handle: string) {
  const [basicData, shopifyMetafields, customMetafields] = await Promise.all([
    getProductBasicData(handle),
    getProductShopifyMetafields(handle),
    getProductCustomMetafields(handle)
  ]);

  return {
    basic: basicData.data?.product ?? null,
    taxonomy: shopifyMetafields.data?.productByHandle ?? null,
    custom: customMetafields.data?.product ?? null
  };
}
