import { useEffect, useState } from 'react';
import {
  getProducts,
  resolveProductThumbnail,
  type Product as ShopifyProduct
} from '../../../lib/shopify';
import type { Product } from '../types';
import { toCategoryFilterId } from '../utils/categoryFilters';

const PRODUCT_CARD_DESCRIPTION_LIMIT = 120;

const formatPriceLabel = (amount: string, currencyCode: string): string => {
  const numericAmount = Number.parseFloat(amount);
  if (!Number.isFinite(numericAmount)) {
    return `${currencyCode} ${amount}`;
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currencyCode,
    maximumFractionDigits: 0
  }).format(numericAmount);
};

const isProductInStock = (product: ShopifyProduct): boolean => {
  if (product.availableForSale === false) {
    return false;
  }

  if (typeof product.totalInventory === 'number') {
    return product.totalInventory > 0;
  }

  return (
    product.variants?.edges.some((edge) => {
      const variant = edge.node;
      if (variant.availableForSale === false) {
        return false;
      }
      if (typeof variant.quantityAvailable === 'number') {
        return variant.quantityAvailable > 0;
      }
      // Stricter fallback: only show as available if explicitly marked.
      return variant.availableForSale === true;
    }) ?? true
  );
};

const getDefaultVariantId = (product: ShopifyProduct): string | null => {
  const availableVariant = product.variants?.edges.find((edge) => {
    const variant = edge.node;
    return (
      variant.availableForSale &&
      (typeof variant.quantityAvailable !== 'number' || variant.quantityAvailable > 0)
    );
  })?.node;
  return availableVariant?.id || product.variants?.edges[0]?.node.id || null;
};

const truncateProductCardText = (value: string, maxLength = PRODUCT_CARD_DESCRIPTION_LIMIT): string => {
  const normalized = value.replace(/\s+/g, ' ').trim();
  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, maxLength).trimEnd()}...`;
};

const mapShopifyProduct = (product: ShopifyProduct): Product => {
  const descriptorSource = product.shortDescription?.value || product.description || 'Curated by Vibe Station';
  const descriptor = truncateProductCardText(descriptorSource);
  const featureLine = product.featureLine?.value || product.tags.slice(0, 3).join(' · ') || 'Durable build';
  const shippingLabel = product.shippingInfo?.value || 'Shipping calculated at checkout';
  const badgeLabel = product.badge?.value || product.tags[0] || 'Curated';
  const thumbnail = resolveProductThumbnail(product);
  const categoryLabels = Array.from(new Set(product.tags.map((tag) => tag.trim()).filter(Boolean)));
  const categoryIds = categoryLabels.map((tag) => toCategoryFilterId(tag)).filter(Boolean);

  return {
    id: product.handle,
    variantId: getDefaultVariantId(product),
    name: product.title,
    descriptor,
    featureLine,
    priceLabel: formatPriceLabel(
      product.priceRange.minVariantPrice.amount,
      product.priceRange.minVariantPrice.currencyCode
    ),
    shippingLabel,
    isInStock: isProductInStock(product),
    badgeLabel,
    badgeVariant: 'accent',
    imageUrl: thumbnail?.url,
    imageAlt: thumbnail?.altText,
    categoryIds,
    categoryLabels
  };
};

let productListCache: Product[] = [];
let productListResolved = false;
let productListPromise: Promise<void> | null = null;
const productSearchCache = new Map<string, Product[]>();
const productSearchResolved = new Set<string>();
const productSearchPromises = new Map<string, Promise<void>>();

const normalizeSearchQuery = (query?: string): string => query?.trim() ?? '';

const loadProductListFromShopify = async (rawQuery?: string) => {
  const query = normalizeSearchQuery(rawQuery);
  if (!query) {
    if (productListPromise) {
      return productListPromise;
    }

    productListPromise = (async () => {
      try {
        const result = await getProducts({ first: 24 });
        productListCache = result.edges.map((edge) => mapShopifyProduct(edge.node));
      } catch (error) {
        console.error('Failed to load products from Shopify', error);
        productListCache = [];
      } finally {
        productListResolved = true;
        productListPromise = null;
      }
    })();

    return productListPromise;
  }

  const existingSearchPromise = productSearchPromises.get(query);
  if (existingSearchPromise) {
    return existingSearchPromise;
  }

  const searchPromise = (async () => {
    try {
      const result = await getProducts({ first: 24, query });
      const mappedProducts = result.edges.map((edge) => mapShopifyProduct(edge.node));
      productSearchCache.set(query, mappedProducts);
    } catch (error) {
      console.error('Failed to load searched products from Shopify', error);
      productSearchCache.set(query, []);
    } finally {
      productSearchResolved.add(query);
      productSearchPromises.delete(query);
    }
  })();

  productSearchPromises.set(query, searchPromise);
  return searchPromise;
};

export function useProductList(searchQuery?: string) {
  const normalizedQuery = normalizeSearchQuery(searchQuery);
  const [products, setProducts] = useState<Product[]>(
    normalizedQuery ? (productSearchCache.get(normalizedQuery) ?? []) : productListCache
  );
  const [isLoading, setIsLoading] = useState(
    normalizedQuery ? !productSearchResolved.has(normalizedQuery) : !productListResolved
  );

  useEffect(() => {
    let cancelled = false;
    const resolved = normalizedQuery ? productSearchResolved.has(normalizedQuery) : productListResolved;
    if (resolved) {
      setProducts(normalizedQuery ? (productSearchCache.get(normalizedQuery) ?? []) : productListCache);
      setIsLoading(false);
      return () => {
        cancelled = true;
      };
    }

    setIsLoading(true);
    void loadProductListFromShopify(normalizedQuery).then(() => {
      if (cancelled) {
        return;
      }
      setProducts(normalizedQuery ? (productSearchCache.get(normalizedQuery) ?? []) : productListCache);
      setIsLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [normalizedQuery]);

  return {
    products,
    hoverPreviewProduct: products[0],
    isLoading
  };
}
