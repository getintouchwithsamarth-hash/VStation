import { useEffect, useState } from 'react';
import {
  getProductByHandle,
  getProductRecommendations,
  getProducts,
  resolveProductThumbnail,
  type Product
} from '../../../lib/shopify';

const IS_DEV = import.meta.env.DEV;
const SHAREABLE_STORE_ORIGIN = (
  import.meta.env.VITE_STOREFRONT_PUBLIC_URL || 'https://thevibestation.com'
).replace(/\/+$/, '');

export type ProductDetailReview = {
  id: string;
  name: string;
  role: string;
  quote: string;
  useCase: string;
  rating: number;
  tags: string[];
  verified: boolean;
};

export type ProductDetailCard = {
  id: string;
  badge: string;
  title: string;
  description: string;
  footer: string;
};

export type ProductDetailFaq = {
  question: string;
  answer: string;
};

type ReviewBreakdown = {
  stars: number;
  count: number;
  label: string;
};

const DEFAULT_PRODUCT_DETAIL_DATA = {
  productHeader: {
    badge: 'Curated pick',
    title: 'Product',
    vendor: 'Vibe Station',
    sku: '—',
    shareUrl: '',
    shareLabel: 'Shareable short URL'
  },
  productMain: {
    gallery: {
      images: [] as Array<{ id: string; url: string; altText: string }>,
      zoomLabel: 'Zoom',
      prevLabel: 'Prev',
      nextLabel: 'Next'
    },
    buyBox: {
      variantId: null as string | null,
      badge: 'Curated pick',
      name: 'Product',
      descriptor: 'Curated by Vibe Station',
      price: '₹—',
      compareAtPrice: null as string | null,
      stock: 'Checking availability',
      isInStock: false,
      features: [] as string[],
      reassurancePoints: [] as string[],
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
  featureDeepDive: {
    overviewTitle: 'Product overview',
    overviewHtml: '',
    storyTitle: 'Why this made the cut',
    storyHtml: '',
    buyingGuideTitle: 'Buying guide',
    buyingGuideHtml: '',
    curatedFor: '' as string,
    notFor: '' as string
  },
  deliveryAndReturns: [] as ProductDetailCard[],
  reviews: {
    title: 'Reviews',
    supporting: 'Focused on daily use, clarity, and durability.',
    averageLabel: '— avg',
    averageValue: '—',
    totalReviewsLabel: '0 reviews',
    verifiedLabel: 'Verified',
    useCasePrefix: 'Use case:',
    writeReviewLabel: 'Write a review',
    loadMoreLabel: 'Load more',
    breakdown: [] as ReviewBreakdown[],
    tags: [] as string[],
    items: [] as ProductDetailReview[]
  },
  relatedProducts: {
    title: 'Complete your setup',
    viewAllLabel: 'View all',
    addToCartLabel: 'Add to cart',
    items: [] as Array<{
      id: string;
      variantId: string | null;
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
    inBoxBadge: 'No extras required',
    productDetailsTitle: 'Product details',
    productDetails: [] as Array<{ label: string; value: string }>
  },
  faq: {
    title: 'FAQ',
    items: [] as ProductDetailFaq[]
  },
  stickyCtaRail: {
    variantId: null as string | null,
    name: 'Product',
    price: '₹—',
    stockLabel: 'Checking availability',
    isInStock: false,
    shippingLabel: 'Shipping calculated at checkout',
    reassurancePoints: [] as string[],
    addToCartLabel: 'Add to cart',
    shareLabel: 'Share',
    helpLabel: 'Need help?'
  }
};

const CROSS_SELL_KEYWORDS = [
  'capo',
  'tuner',
  'string',
  'pick',
  'holder',
  'gig bag',
  'bundle',
  'essentials'
];

const getDefaultVariantId = (product: Product): string | null => {
  const availableVariant = product.variants?.edges.find((edge) => {
    const variant = edge.node;
    return (
      variant.availableForSale &&
      (typeof variant.quantityAvailable !== 'number' || variant.quantityAvailable > 0)
    );
  })?.node;
  return availableVariant?.id || product.variants?.edges[0]?.node.id || null;
};

const getPrimaryVariant = (product: Product) => product.variants?.edges[0]?.node ?? null;

let productDetailCache = DEFAULT_PRODUCT_DETAIL_DATA;
let productDetailResolved = false;
let productDetailPromise: Promise<void> | null = null;
let productDetailHandle: string | null = null;

const formatPrice = (amount?: string, currencyCode?: string): string => {
  if (!amount || !currencyCode) {
    return '₹—';
  }
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

const stripHtml = (value?: string): string => {
  if (!value) {
    return '';
  }
  return value
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|li|h[1-6])>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .trim();
};

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const renderRichTextNode = (node: Record<string, unknown>): string => {
  const type = typeof node.type === 'string' ? node.type : '';
  const value = typeof node.value === 'string' ? escapeHtml(node.value) : '';
  const children = Array.isArray(node.children)
    ? node.children
        .map((child) => (child && typeof child === 'object' ? renderRichTextNode(child as Record<string, unknown>) : ''))
        .join('')
    : '';

  switch (type) {
    case 'root':
      return children;
    case 'paragraph':
      return `<p>${children}</p>`;
    case 'heading':
      return `<h3>${children}</h3>`;
    case 'text':
      return value;
    case 'text_bold':
      return `<strong>${children || value}</strong>`;
    case 'text_italic':
      return `<em>${children || value}</em>`;
    case 'list':
      return `<ul>${children}</ul>`;
    case 'list-item':
      return `<li>${children}</li>`;
    case 'link':
      return typeof node.url === 'string' ? `<a href="${escapeHtml(node.url)}">${children}</a>` : children;
    default:
      return children || value;
  }
};

const parseRichTextMetafieldToHtml = (value?: string): string => {
  if (!value) {
    return '';
  }

  if (value.includes('<')) {
    return value;
  }

  try {
    const parsed = JSON.parse(value) as Record<string, unknown>;
    if (parsed && typeof parsed === 'object') {
      return renderRichTextNode(parsed);
    }
  } catch {
    return value
      .split(/\n{2,}/)
      .map((block) => `<p>${escapeHtml(block.trim())}</p>`)
      .join('');
  }

  return '';
};

const parseArrayMetafield = (value?: string): string[] => {
  if (!value) {
    return [];
  }
  const splitMetafieldItems = (input: string): string[] =>
    input
      .replace(/<br\s*\/?>/gi, '\n')
      .split(/\n|,|\||•/)
      .map((item) => stripHtml(item).trim())
      .filter(Boolean);

  try {
    const parsed = JSON.parse(value) as unknown;
    if (Array.isArray(parsed)) {
      return parsed
        .flatMap((item) => (typeof item === 'string' ? splitMetafieldItems(item) : []))
        .filter(Boolean);
    }
    if (typeof parsed === 'string') {
      return splitMetafieldItems(parsed);
    }
  } catch {
    return splitMetafieldItems(value);
  }
  return [];
};

const parseObjectMetafield = (value?: string): Array<{ label: string; value: string }> => {
  if (!value) {
    return [];
  }
  try {
    const parsed = JSON.parse(value) as Record<string, unknown>;
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      return Object.entries(parsed)
        .map(([label, itemValue]) => ({
          label: label.replace(/[_-]/g, ' '),
          value: String(itemValue).trim()
        }))
        .filter((item) => item.value.length > 0);
    }
  } catch {
    const rows = value
      .replace(/<br\s*\/?>/gi, '\n')
      .split('\n')
      .map((line) => stripHtml(line))
      .filter(Boolean);

    return rows
      .map((row) => {
        const match = row.match(/^([^:]+):\s*(.+)$/);
        if (!match) {
          return null;
        }
        return { label: match[1].trim(), value: match[2].trim() };
      })
      .filter((item): item is { label: string; value: string } => Boolean(item));
  }
  return [];
};

const parseFaqMetafield = (value?: string): ProductDetailFaq[] => {
  if (!value) {
    return [];
  }
  try {
    const parsed = JSON.parse(value) as unknown;
    if (Array.isArray(parsed)) {
      return parsed
        .map((item) => {
          if (!item || typeof item !== 'object') {
            return null;
          }
          const entry = item as Record<string, unknown>;
          const question = typeof entry.question === 'string' ? entry.question.trim() : '';
          const answer = typeof entry.answer === 'string' ? entry.answer.trim() : '';
          return question && answer ? { question, answer } : null;
        })
        .filter((item): item is ProductDetailFaq => Boolean(item));
    }
  } catch {
    const parts = value
      .replace(/<br\s*\/?>/gi, '\n')
      .split(/\n{2,}/)
      .map((part) => stripHtml(part))
      .filter(Boolean);

    return parts
      .map((part) => {
        const [question, ...rest] = part.split('\n');
        const answer = rest.join(' ').trim();
        if (!question || !answer) {
          return null;
        }
        return { question: question.replace(/^Q[:\-]?\s*/i, ''), answer: answer.replace(/^A[:\-]?\s*/i, '') };
      })
      .filter((item): item is ProductDetailFaq => Boolean(item));
  }

  return [];
};

const normalizeBooleanLabel = (value?: string, truthyLabel = 'Yes', falsyLabel = 'No'): string => {
  if (!value) {
    return '';
  }
  const normalized = value.trim().toLowerCase();
  if (['true', 'yes', 'available', '1'].includes(normalized)) {
    return truthyLabel;
  }
  if (['false', 'no', 'not available', '0'].includes(normalized)) {
    return falsyLabel;
  }
  return value.trim();
};

const getHandleFromUrl = (): string | null => {
  if (typeof window === 'undefined') {
    return null;
  }
  const match = window.location.pathname.match(/\/products\/([^/]+)/);
  return match?.[1] ?? null;
};

const getShareUrl = (product: Product): string => {
  return `${SHAREABLE_STORE_ORIGIN}/products/${product.handle}`;
};

const getStockLabel = (product: Product): string => {
  if (product.availableForSale === false) {
    return 'Out of stock';
  }

  if (typeof product.totalInventory === 'number') {
    return product.totalInventory > 0 ? `In stock (${product.totalInventory} available)` : 'Out of stock';
  }

  const variant = getPrimaryVariant(product);
  if (variant && typeof variant.quantityAvailable === 'number') {
    return variant.quantityAvailable > 0 ? `In stock (${variant.quantityAvailable} available)` : 'Out of stock';
  }

  const variantAvailability = product.variants?.edges.some((edge) => {
    const currentVariant = edge.node;
    if (currentVariant.availableForSale === false) {
      return false;
    }
    if (typeof currentVariant.quantityAvailable === 'number') {
      return currentVariant.quantityAvailable > 0;
    }
    return currentVariant.availableForSale === true;
  });

  return variantAvailability ? 'In stock' : 'Out of stock';
};

const mapProductCards = (product: Product): ProductDetailCard[] => {
  const features = parseArrayMetafield(product.bulletFeatures?.value);
  return features.slice(0, 3).map((feature, index) => ({
    id: `${product.handle}-feature-${index}`,
    badge: `0${index + 1}`,
    title: feature,
    description: '',
    footer: ''
  }));
};

const getCrossSellTitle = (product: Product): string => {
  const lower = `${product.title} ${product.tags.join(' ')}`.toLowerCase();
  return CROSS_SELL_KEYWORDS.some((keyword) => lower.includes(keyword)) ? 'Pair it with these' : 'Complete your setup';
};

const parseReviewData = (product: Product) => {
  const fallback = {
    averageValue: '—',
    totalReviewsLabel: 'No reviews yet',
    breakdown: [] as ReviewBreakdown[],
    tags: [] as string[],
    items: [] as ProductDetailReview[]
  };

  const raw = product.reviewSummary?.value;
  if (!raw) {
    return fallback;
  }

  try {
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    const average = typeof parsed.average === 'number' ? parsed.average.toFixed(1) : '—';
    const count = typeof parsed.count === 'number' ? parsed.count : 0;
    const breakdownSource = Array.isArray(parsed.breakdown) ? parsed.breakdown : [];
    const itemsSource = Array.isArray(parsed.items) ? parsed.items : [];
    const tagsSource = Array.isArray(parsed.tags) ? parsed.tags : [];

    return {
      averageValue: average,
      totalReviewsLabel: `${count} review${count === 1 ? '' : 's'}`,
      breakdown: breakdownSource
        .map((entry) => {
          if (!entry || typeof entry !== 'object') {
            return null;
          }
          const record = entry as Record<string, unknown>;
          const stars = typeof record.stars === 'number' ? record.stars : 0;
          const currentCount = typeof record.count === 'number' ? record.count : 0;
          return stars > 0 ? { stars, count: currentCount, label: `${stars} star` } : null;
        })
        .filter((entry): entry is ReviewBreakdown => Boolean(entry))
        .sort((a, b) => b.stars - a.stars),
      tags: tagsSource.filter((tag): tag is string => typeof tag === 'string'),
      items: itemsSource
        .map((entry, index) => {
          if (!entry || typeof entry !== 'object') {
            return null;
          }
          const record = entry as Record<string, unknown>;
          return {
            id: typeof record.id === 'string' ? record.id : `review-${index}`,
            name: typeof record.name === 'string' ? record.name : 'Verified buyer',
            role: typeof record.role === 'string' ? record.role : 'Customer',
            quote: typeof record.quote === 'string' ? record.quote : '',
            useCase: typeof record.useCase === 'string' ? record.useCase : 'General use',
            rating: typeof record.rating === 'number' ? record.rating : 5,
            tags: Array.isArray(record.tags) ? record.tags.filter((tag): tag is string => typeof tag === 'string') : [],
            verified: record.verified !== false
          };
        })
        .filter((entry): entry is ProductDetailReview => Boolean(entry) && entry.quote.length > 0)
    };
  } catch {
    return fallback;
  }
};

const buildSpecFallback = (product: Product): Array<{ label: string; value: string }> => {
  const primaryVariant = getPrimaryVariant(product);
  return [
    { label: 'Brand', value: product.vendor || 'Vibe Station' },
    { label: 'SKU', value: primaryVariant?.sku || 'Available on request' },
    { label: 'Material', value: product.tags.find((tag) => /celluloid|nylon|delrin|tortex|poly/i.test(tag)) || 'See product overview' },
    { label: 'Best for', value: product.bestFor?.value || 'Everyday practice and testing preferences' }
  ];
};

const buildInBoxFallback = (product: Product): string[] => {
  const packCount = product.packCount?.value || '1 pack';
  const features = parseArrayMetafield(product.bulletFeatures?.value);
  const firstFeature = features[0] || product.bestFor?.value || 'Assorted playing feel';
  return [packCount, firstFeature, 'No extras listed in Shopify yet'];
};

const buildReassurancePoints = (product: Product): string[] => {
  const points = [
    product.packCount?.value,
    product.bestFor?.value,
    product.dispatchTime?.value,
    product.deliveryWindow?.value,
    product.returnsPolicy?.value,
    normalizeBooleanLabel(product.codAvailable?.value, 'COD available', 'COD unavailable'),
    normalizeBooleanLabel(product.secureCheckout?.value, 'Secure checkout', '')
  ]
    .map((item) => item?.trim())
    .filter((item): item is string => Boolean(item));

  return Array.from(new Set(points)).slice(0, 6);
};

const buildProductDetails = (product: Product): Array<{ label: string; value: string }> => {
  const primaryVariant = getPrimaryVariant(product);
  return [
    { label: 'SKU', value: primaryVariant?.sku || 'Available on request' },
    { label: 'Brand', value: product.vendor || 'Vibe Station' },
    { label: 'Country of origin', value: product.countryOfOrigin?.value || 'Not specified' },
    { label: 'GST invoice', value: normalizeBooleanLabel(product.gstInvoice?.value, 'Available', 'Not specified') || 'Not specified' },
    { label: 'Care / storage', value: stripHtml(product.careInstructions?.value) || 'Store dry and away from direct heat.' },
    { label: 'Shareable short URL', value: getShareUrl(product) }
  ];
};

const loadProductDetailFromShopify = async (requestedHandle?: string | null) => {
  const currentHandle = requestedHandle ?? getHandleFromUrl();

  if (productDetailPromise && currentHandle === productDetailHandle) {
    return productDetailPromise;
  }

  productDetailPromise = (async () => {
    try {
      let handle = currentHandle;
      if (!handle) {
        const list = await getProducts({ first: 1 });
        handle = list.edges[0]?.node.handle ?? null;
      }
      if (!handle) {
        productDetailResolved = true;
        productDetailHandle = null;
        return;
      }

      productDetailHandle = handle;
      const product = await getProductByHandle(handle);
      if (!product) {
        productDetailResolved = true;
        return;
      }

      const relatedProducts = await getProductRecommendations(product.id).catch(() => []);
      const primaryVariant = getPrimaryVariant(product);
      const whyDifferentHtml = parseRichTextMetafieldToHtml(product.whyDifferent?.value);
      const buyingGuideHtml = parseRichTextMetafieldToHtml(product.buyingGuide?.value);
      const overviewHtml = product.descriptionHtml || `<p>${escapeHtml(product.description)}</p>`;
      const storyText = stripHtml(whyDifferentHtml);
      const specifications = parseObjectMetafield(product.specifications?.value);
      const inBoxItems = parseArrayMetafield(product.whatsInBox?.value);
      const features = parseArrayMetafield(product.bulletFeatures?.value);
      const keyBenefitCards = mapProductCards(product);
      const stockLabel = getStockLabel(product);
      const isInStock = stockLabel.toLowerCase().startsWith('in stock');
      const defaultVariantId = getDefaultVariantId(product);
      const reviewData = parseReviewData(product);
      const reassurancePoints = buildReassurancePoints(product);
      const shareUrl = getShareUrl(product);

      productDetailCache = {
        productHeader: {
          badge: product.badge?.value || 'Curated pick',
          title: product.title,
          vendor: product.vendor || 'Vibe Station',
          sku: primaryVariant?.sku || '—',
          shareUrl,
          shareLabel: 'Shareable short URL'
        },
        productMain: {
          gallery: {
            images:
              product.images.edges.map((edge, index) => ({
                id: edge.node.id || `${product.handle}-${index}`,
                url: edge.node.url,
                altText: edge.node.altText || `${product.title} image ${index + 1}`
              })) || [],
            zoomLabel: 'Zoom',
            prevLabel: 'Prev',
            nextLabel: 'Next'
          },
          buyBox: {
            variantId: defaultVariantId,
            badge: product.badge?.value || 'Curated pick',
            name: product.title,
            descriptor:
              product.subtitle?.value || product.shortDescription?.value || stripHtml(product.descriptionHtml) || product.description,
            price: formatPrice(
              product.priceRange.minVariantPrice.amount,
              product.priceRange.minVariantPrice.currencyCode
            ),
            compareAtPrice: product.compareAtPriceRange?.minVariantPrice
              ? formatPrice(
                  product.compareAtPriceRange.minVariantPrice.amount,
                  product.compareAtPriceRange.minVariantPrice.currencyCode
                )
              : null,
            stock: stockLabel,
            isInStock,
            features:
              features.length > 0
                ? features
                : [product.packCount?.value, product.bestFor?.value, product.featureLine?.value].filter(
                    (item): item is string => Boolean(item)
                  ),
            reassurancePoints,
            primaryCta: product.ctaLabel?.value || 'Add to cart',
            secondaryCta: product.ctaSubtext?.value || 'Buy now',
            microLine:
              product.shippingInfo?.value ||
              [
                product.dispatchTime?.value,
                product.supportResponseTime?.value,
                product.deliveryWindow?.value
              ]
                .filter(Boolean)
                .join(' · ') ||
              'Shipping calculated at checkout · Clear returns · Responsive support',
            inBoxTitle: "What's in the box",
            inBoxLine:
              (inBoxItems.length > 0 ? inBoxItems.join(' · ') : null) ||
              product.packCount?.value ||
              'Details available in product description'
          }
        },
        keyBenefits: {
          title: 'Why it feels different',
          cards: keyBenefitCards
        },
        featureDeepDive: {
          overviewTitle: 'Product overview',
          overviewHtml,
          storyTitle: 'Why this made the cut',
          storyHtml: whyDifferentHtml || `<p>${escapeHtml(product.featureLine?.value || product.shortDescription?.value || product.description)}</p>`,
          buyingGuideTitle: 'Buying guide',
          buyingGuideHtml:
            buyingGuideHtml ||
            '<p>Don&apos;t know what to choose? Start with medium for the most balanced feel.</p>',
          curatedFor: product.curatedFor?.value || product.bestFor?.value || 'Players comparing feel, grip, and attack quickly.',
          notFor: product.notFor?.value || 'Players who already know they only want one exact gauge.'
        },
        deliveryAndReturns: [
          {
            id: 'dispatch',
            badge: 'Dispatch',
            title: 'Estimated dispatch',
            description: product.dispatchTime?.value || product.deliveryInfo?.value || 'Dispatch timing not added in Shopify yet.',
            footer: product.deliveryWindow?.value || 'Use pincode check for final delivery ETA'
          },
          {
            id: 'returns',
            badge: 'Returns',
            title: 'Returns & replacements',
            description:
              product.returnsPolicy?.value ||
              'Return window and opened-accessory rules should be added in Shopify for this product.',
            footer: product.replacementPolicy?.value || 'Damaged or missing items can be reviewed for replacement'
          },
          {
            id: 'support',
            badge: 'Support',
            title: 'Support response',
            description: product.supportInfo?.value || 'Need setup help or order support? Reach out to Vibe Station.',
            footer: product.supportResponseTime?.value || 'Response time not specified yet'
          }
        ],
        reviews: {
          ...DEFAULT_PRODUCT_DETAIL_DATA.reviews,
          supporting: product.reviewSummary?.value
            ? 'Real review summary pulled from Shopify metafields.'
            : 'Add custom.reviews in Shopify to populate rating, review count, tags, and breakdown.',
          averageLabel: reviewData.averageValue === '—' ? 'No rating yet' : `${reviewData.averageValue} / 5`,
          averageValue: reviewData.averageValue,
          totalReviewsLabel: reviewData.totalReviewsLabel,
          breakdown: reviewData.breakdown,
          tags: reviewData.tags,
          items: reviewData.items
        },
        relatedProducts: {
          ...DEFAULT_PRODUCT_DETAIL_DATA.relatedProducts,
          title: getCrossSellTitle(product),
          items: relatedProducts.slice(0, 6).map((item) => {
            const thumbnail = resolveProductThumbnail(item);
            return {
              id: item.handle,
              variantId: getDefaultVariantId(item),
              badge: item.badge?.value || item.tags[0] || 'Curated',
              name: item.title,
              descriptor: item.shortDescription?.value || item.description || 'Curated recommendation',
              featureLine: item.featureLine?.value || item.tags.slice(0, 3).join(' · ') || 'Pairs well with this setup',
              price: formatPrice(item.priceRange.minVariantPrice.amount, item.priceRange.minVariantPrice.currencyCode),
              imageUrl: thumbnail?.url,
              imageAlt: thumbnail?.altText || item.title
            };
          })
        },
        specsAndInBox: {
          specificationsTitle: 'Specifications',
          specifications: specifications.length > 0 ? specifications : buildSpecFallback(product),
          inBoxTitle: 'In the box',
          inBoxItems: inBoxItems.length > 0 ? inBoxItems : buildInBoxFallback(product),
          inBoxBadge: product.packCount?.value || 'No extras required',
          productDetailsTitle: 'Product details',
          productDetails: buildProductDetails(product)
        },
        faq: {
          title: 'FAQ',
          items: parseFaqMetafield(product.faq?.value)
        },
        stickyCtaRail: {
          variantId: defaultVariantId,
          name: product.title,
          price: formatPrice(
            product.priceRange.minVariantPrice.amount,
            product.priceRange.minVariantPrice.currencyCode
          ),
          stockLabel,
          isInStock,
          shippingLabel:
            product.deliveryWindow?.value || product.shippingInfo?.value || 'Shipping calculated at checkout',
          reassurancePoints,
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
  const handle = getHandleFromUrl();
  const [data, setData] = useState(productDetailCache);
  const [isLoading, setIsLoading] = useState(IS_DEV || !productDetailResolved);

  useEffect(() => {
    let cancelled = false;
    const canUseCache = !IS_DEV && productDetailResolved && productDetailHandle === handle;
    if (canUseCache) {
      setData(productDetailCache);
      setIsLoading(false);
      return () => {
        cancelled = true;
      };
    }

    setIsLoading(true);
    void loadProductDetailFromShopify(handle).then(() => {
      if (cancelled) {
        return;
      }
      setData(productDetailCache);
      setIsLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [handle]);

  return {
    ...data,
    isLoading
  };
}
