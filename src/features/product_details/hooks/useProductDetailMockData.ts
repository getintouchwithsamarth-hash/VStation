import { useEffect, useState } from 'react';
import {
  getProductByHandle,
  getProductRecommendations,
  getProducts,
  type Product
} from '../../../lib/shopify';

export type ProductDetailReview = {
  id: string;
  name: string;
  role: string;
  quote: string;
  useCase: string;
};

export type ProductDetailCard = {
  id: string;
  badge: string;
  title: string;
  description: string;
  footer: string;
};

const DEFAULT_PRODUCT_DETAIL_DATA = {
  productMain: {
    gallery: {
      images: [] as Array<{ id: string; url: string; altText: string }>,
      zoomLabel: 'Zoom',
      prevLabel: 'Prev',
      nextLabel: 'Next'
    },
    buyBox: {
      badge: 'Curated pick',
      name: 'Product',
      descriptor: 'Curated by Vibe Station',
      price: '₹—',
      stock: 'Checking availability',
      isInStock: false,
      features: [] as string[],
      primaryCta: 'Add to cart',
      secondaryCta: 'Buy now',
      microLine: 'Ships fast · Clear returns · Responsive support',
      inBoxTitle: "What's in the box",
      inBoxLine: 'Details available in product info'
    }
  },
  keyBenefits: {
    title: 'Why it feels different',
    cards: [] as ProductDetailCard[]
  },
  deliveryAndReturns: [] as ProductDetailCard[],
  reviews: {
    title: 'Reviews',
    supporting: 'Focused on daily use, clarity, and durability.',
    averageLabel: '— avg',
    verifiedLabel: 'Verified',
    useCasePrefix: 'Use case:',
    writeReviewLabel: 'Write a review',
    loadMoreLabel: 'Load more',
    items: [] as ProductDetailReview[]
  },
  relatedProducts: {
    title: 'Related products',
    viewAllLabel: 'View all',
    addToCartLabel: 'Add to cart',
    items: [] as Array<{
      id: string;
      badge: string;
      name: string;
      descriptor: string;
      featureLine: string;
      price: string;
      imageUrl?: string;
      imageAlt?: string;
    }>
  },
  specsAndInBox: {
    specificationsTitle: 'Specifications',
    specifications: [] as Array<{ label: string; value: string }>,
    inBoxTitle: 'In the box',
    inBoxItems: [] as string[],
    inBoxBadge: 'No extras required'
  },
  stickyCtaRail: {
    name: 'Product',
    price: '₹—',
    stockLabel: 'Checking availability',
    isInStock: false,
    shippingLabel: 'Shipping calculated at checkout',
    addToCartLabel: 'Add to cart',
    shareLabel: 'Share',
    helpLabel: 'Need help?'
  }
};

let productDetailCache = DEFAULT_PRODUCT_DETAIL_DATA;
let productDetailResolved = false;
let productDetailPromise: Promise<void> | null = null;

const formatPrice = (amount: string, currencyCode: string): string => {
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

const parseArrayMetafield = (value?: string): string[] => {
  if (!value) {
    return [];
  }
  try {
    const parsed = JSON.parse(value) as unknown;
    if (Array.isArray(parsed)) {
      return parsed.filter((item): item is string => typeof item === 'string');
    }
  } catch {
    return value
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return [];
};

const parseObjectMetafield = (value?: string): Array<{ label: string; value: string }> => {
  if (!value) {
    return [];
  }
  try {
    const parsed = JSON.parse(value) as Record<string, unknown>;
    if (parsed && typeof parsed === 'object') {
      return Object.entries(parsed).map(([label, itemValue]) => ({
        label,
        value: String(itemValue)
      }));
    }
  } catch {
    return [];
  }
  return [];
};

const getHandleFromUrl = (): string | null => {
  if (typeof window === 'undefined') {
    return null;
  }
  const match = window.location.pathname.match(/\/products\/([^/]+)/);
  return match?.[1] ?? null;
};

const mapProductCards = (product: Product): ProductDetailCard[] => {
  const features = parseArrayMetafield(product.bulletFeatures?.value);
  return features.slice(0, 3).map((feature, index) => ({
    id: `${product.handle}-feature-${index}`,
    badge: 'Feature',
    title: feature,
    description: product.shortDescription?.value || product.description || 'Designed for real musical workflows.',
    footer: 'Curated standard'
  }));
};

const getStockLabel = (product: Product): 'In stock' | 'Out of stock' => {
  if (product.availableForSale === false) {
    return 'Out of stock';
  }

  if (typeof product.totalInventory === 'number') {
    return product.totalInventory > 0 ? 'In stock' : 'Out of stock';
  }

  const variantAvailability = product.variants?.edges.some((edge) => {
    const variant = edge.node;
    if (variant.availableForSale === false) {
      return false;
    }
    if (typeof variant.quantityAvailable === 'number') {
      return variant.quantityAvailable > 0;
    }
    return true;
  });

  return variantAvailability ? 'In stock' : 'Out of stock';
};

const loadProductDetailFromShopify = async () => {
  if (productDetailPromise) {
    return productDetailPromise;
  }

  productDetailPromise = (async () => {
    try {
      let handle = getHandleFromUrl();
      if (!handle) {
        const list = await getProducts({ first: 1 });
        handle = list.edges[0]?.node.handle ?? null;
      }
      if (!handle) {
        productDetailResolved = true;
        return;
      }

      const product = await getProductByHandle(handle);
      if (!product) {
        productDetailResolved = true;
        return;
      }

      const relatedProducts = await getProductRecommendations(product.id).catch(() => []);

      const specifications = parseObjectMetafield(product.specifications?.value);
      const inBoxItems = parseArrayMetafield(product.whatsInBox?.value);
      const features = parseArrayMetafield(product.bulletFeatures?.value);
      const keyBenefitCards = mapProductCards(product);
      const stockLabel = getStockLabel(product);
      const isInStock = stockLabel === 'In stock';

      productDetailCache = {
        productMain: {
          gallery: {
            images:
              product.images.edges.map((edge, index) => ({
                id: edge.node.id || `${product.handle}-${index}`,
                url: edge.node.url,
                altText: edge.node.altText || product.title
              })) || [],
            zoomLabel: 'Zoom',
            prevLabel: 'Prev',
            nextLabel: 'Next'
          },
          buyBox: {
            badge: product.badge?.value || 'Curated pick',
            name: product.title,
            descriptor: product.subtitle?.value || product.shortDescription?.value || product.description,
            price: formatPrice(
              product.priceRange.minVariantPrice.amount,
              product.priceRange.minVariantPrice.currencyCode
            ),
            stock: stockLabel,
            isInStock,
            features,
            primaryCta: product.ctaLabel?.value || 'Add to cart',
            secondaryCta: product.ctaSubtext?.value || 'Buy now',
            microLine:
              product.shippingInfo?.value ||
              'Shipping calculated at checkout · Clear returns · Responsive support',
            inBoxTitle: "What's in the box",
            inBoxLine:
              inBoxItems.length > 0 ? inBoxItems.join(' · ') : 'Details available in product description'
          }
        },
        keyBenefits: {
          title: product.featureLine?.value || 'Why it feels different',
          cards: keyBenefitCards
        },
        deliveryAndReturns: [
          {
            id: 'delivery',
            badge: 'Delivery',
            title: 'Delivery information',
            description: product.deliveryInfo?.value || 'Shipping details shown at checkout.',
            footer: product.shippingInfo?.value || 'Tracked delivery'
          },
          {
            id: 'returns',
            badge: 'Returns',
            title: 'Returns policy',
            description: product.returnsPolicy?.value || 'Return policy available at checkout.',
            footer: 'Clear policy terms'
          },
          {
            id: 'support',
            badge: 'Support',
            title: 'Support',
            description: product.supportInfo?.value || 'Support available by email and chat.',
            footer: 'Before and after purchase'
          }
        ],
        reviews: {
          ...DEFAULT_PRODUCT_DETAIL_DATA.reviews,
          averageLabel: product.tags.length > 0 ? `${product.tags.length} tags` : '— avg'
        },
        relatedProducts: {
          ...DEFAULT_PRODUCT_DETAIL_DATA.relatedProducts,
          items: relatedProducts.slice(0, 3).map((item) => ({
            id: item.handle,
            badge: item.badge?.value || item.tags[0] || 'Curated',
            name: item.title,
            descriptor: item.shortDescription?.value || item.description || 'Curated recommendation',
            featureLine: item.featureLine?.value || item.tags.slice(0, 3).join(' · '),
            price: formatPrice(item.priceRange.minVariantPrice.amount, item.priceRange.minVariantPrice.currencyCode),
            imageUrl: item.featuredImage?.url || item.images.edges[0]?.node.url,
            imageAlt: item.featuredImage?.altText || item.title
          }))
        },
        specsAndInBox: {
          specificationsTitle: 'Specifications',
          specifications,
          inBoxTitle: 'In the box',
          inBoxItems,
          inBoxBadge: 'No extras required'
        },
        stickyCtaRail: {
          name: product.title,
          price: formatPrice(
            product.priceRange.minVariantPrice.amount,
            product.priceRange.minVariantPrice.currencyCode
          ),
          stockLabel,
          isInStock,
          shippingLabel: product.shippingInfo?.value || 'Shipping calculated at checkout',
          addToCartLabel: product.ctaLabel?.value || 'Add to cart',
          shareLabel: 'Share',
          helpLabel: 'Need help?'
        }
      };
    } catch (error) {
      console.error('Failed to load product detail from Shopify', error);
    } finally {
      productDetailResolved = true;
      productDetailPromise = null;
    }
  })();

  return productDetailPromise;
};

export function useProductDetailMockData() {
  const [data, setData] = useState(productDetailCache);
  const [isLoading, setIsLoading] = useState(!productDetailResolved);

  useEffect(() => {
    let cancelled = false;
    if (productDetailResolved) {
      setData(productDetailCache);
      setIsLoading(false);
      return () => {
        cancelled = true;
      };
    }

    void loadProductDetailFromShopify().then(() => {
      if (cancelled) {
        return;
      }
      setData(productDetailCache);
      setIsLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return {
    ...data,
    isLoading
  };
}
