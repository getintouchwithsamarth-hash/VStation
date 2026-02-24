import { useEffect, useState } from 'react';
import { getProducts, type Product as ShopifyProduct } from '../../../lib/shopify';
import type { Product } from '../types';

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
      return true;
    }) ?? true
  );
};

const getDefaultVariantId = (product: ShopifyProduct): string | null => {
  const availableVariant = product.variants?.edges.find((edge) => edge.node.availableForSale)?.node;
  return availableVariant?.id || product.variants?.edges[0]?.node.id || null;
};

const mapShopifyProduct = (product: ShopifyProduct): Product => {
  const descriptor = product.shortDescription?.value || product.description || 'Curated by Vibe Station';
  const featureLine = product.featureLine?.value || product.tags.slice(0, 3).join(' · ') || 'Durable build';
  const shippingLabel = product.shippingInfo?.value || 'Shipping calculated at checkout';
  const badgeLabel = product.badge?.value || product.tags[0] || 'Curated';

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
    imageUrl: product.featuredImage?.url || product.images.edges[0]?.node.url,
    imageAlt: product.featuredImage?.altText || product.images.edges[0]?.node.altText || product.title
  };
};

let productListCache: Product[] = [];
let productListResolved = false;
let productListPromise: Promise<void> | null = null;

const loadProductListFromShopify = async () => {
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
};

export function useProductList() {
  const [products, setProducts] = useState<Product[]>(productListCache);
  const [isLoading, setIsLoading] = useState(!productListResolved);

  useEffect(() => {
    let cancelled = false;
    if (productListResolved) {
      setProducts(productListCache);
      setIsLoading(false);
      return () => {
        cancelled = true;
      };
    }

    void loadProductListFromShopify().then(() => {
      if (cancelled) {
        return;
      }
      setProducts(productListCache);
      setIsLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return {
    products,
    hoverPreviewProduct: products[0],
    isLoading
  };
}
