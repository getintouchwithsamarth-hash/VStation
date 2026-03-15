import { type PublicAdminProductMetadata } from '../../../lib/shopify-admin';
import { type Product } from '../../../lib/shopify-storefront';
import { EMPTY_PRODUCT_DETAIL_DATA, type ProductDetailData } from './productDetailTypes';
import {
  buildDefaultReviews,
  buildProductDetails,
  buildReassurancePoints,
  buildSpecifications,
  escapeHtml,
  formatPrice,
  getCrossSellTitle,
  getDefaultVariantId,
  getShareUrl,
  getStockLabel,
  mapProductCards,
  mapRelatedProductItems,
  parseArrayMetafield,
  parseFaqMetafield,
  parseReviewData,
  parseRichTextMetafieldToHtml,
  stripHtml
} from './productDetailHelpers';

type BuildProductDetailDataParams = {
  product: Product;
  adminMetadata?: PublicAdminProductMetadata | null;
  relatedProducts: Product[];
};

const DEFAULT_PICKUP_POSTCODE = import.meta.env.VITE_SHIPROCKET_PICKUP_POSTCODE || '';
const DEFAULT_WEIGHT_KG_RAW = import.meta.env.VITE_SHIPROCKET_DEFAULT_WEIGHT_KG || '0.5';

const parseWeightKg = (): number | null => {
  const value = Number.parseFloat(DEFAULT_WEIGHT_KG_RAW);
  return Number.isFinite(value) ? value : null;
};

const parseCodAvailability = (value?: string): boolean => {
  if (!value) {
    return false;
  }

  return ['true', 'yes', 'available', '1'].includes(value.trim().toLowerCase());
};

export const buildProductDetailData = ({
  product,
  adminMetadata,
  relatedProducts
}: BuildProductDetailDataParams): ProductDetailData => {
  const primaryVariant = product.variants?.edges[0]?.node ?? null;
  const whyDifferentHtml = parseRichTextMetafieldToHtml(product.whyDifferent?.value);
  const buyingGuideHtml = parseRichTextMetafieldToHtml(product.buyingGuide?.value);
  const overviewHtml =
    parseRichTextMetafieldToHtml(product.description) ||
    product.descriptionHtml ||
    `<p>${escapeHtml(product.description)}</p>`;
  const specifications = buildSpecifications(product, adminMetadata);
  const inBoxItems = parseArrayMetafield(product.whatsInBox?.value);
  const features = parseArrayMetafield(product.bulletFeatures?.value);
  const keyBenefitCards = mapProductCards(product);
  const stockLabel = getStockLabel(product);
  const isInStock = stockLabel.toLowerCase().startsWith('in stock');
  const defaultVariantId = getDefaultVariantId(product);
  const reviewData = parseReviewData(product);
  const reassurancePoints = buildReassurancePoints(product);
  const shareUrl = getShareUrl(product);
  const defaultWeightKg = parseWeightKg();
  const pickupPostcode = DEFAULT_PICKUP_POSTCODE.trim() || null;
  const cod = parseCodAvailability(product.codAvailable?.value);

  return {
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
        price: formatPrice(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode),
        compareAtPrice: product.compareAtPriceRange?.minVariantPrice
          ? formatPrice(
              product.compareAtPriceRange.minVariantPrice.amount,
              product.compareAtPriceRange.minVariantPrice.currencyCode
            )
          : null,
        stock: stockLabel,
        isInStock,
        features,
        reassurancePoints,
        primaryCta: product.ctaLabel?.value || 'Add to cart',
        secondaryCta: product.ctaSubtext?.value || 'Buy now',
        microLine:
          product.shippingInfo?.value ||
          [product.dispatchTime?.value, product.supportResponseTime?.value, product.deliveryWindow?.value]
            .filter(Boolean)
            .join(' · ') ||
          'Shipping calculated at checkout · Clear returns · Responsive support',
        inBoxTitle: "What's in the box",
        inBoxLine: inBoxItems.join(' · '),
        serviceability: {
          pickupPostcode,
          defaultWeightKg,
          cod
        }
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
      storyHtml: whyDifferentHtml,
      buyingGuideTitle: 'Buying guide',
      buyingGuideHtml,
      curatedFor: product.curatedFor?.value || product.bestFor?.value || 'Players comparing feel, grip, and attack quickly.',
      notFor: product.notFor?.value || 'Players who already know they only want one exact gauge.'
    },
    deliveryAndReturns: [
      {
        id: 'dispatch',
        badge: 'Dispatch',
        title: 'Estimated dispatch',
        description: product.deliveryInfo?.value || '',
        footer: product.deliveryWindow?.value || ''
      },
      {
        id: 'returns',
        badge: 'Returns',
        title: 'Returns & replacements',
        description: product.returnsPolicy?.value || '',
        footer: product.replacementPolicy?.value || ''
      },
      {
        id: 'support',
        badge: 'Support',
        title: 'Support response',
        description: product.supportInfo?.value || '',
        footer: product.supportResponseTime?.value || ''
      }
    ].filter((card) => card.description.trim().length > 0 || card.footer.trim().length > 0),
    reviews: {
      ...buildDefaultReviews(),
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
      ...EMPTY_PRODUCT_DETAIL_DATA.relatedProducts,
      title: getCrossSellTitle(product),
      items: mapRelatedProductItems(product, relatedProducts)
    },
    specsAndInBox: {
      specificationsTitle: 'Specifications',
      specifications,
      inBoxTitle: 'In the box',
      inBoxItems,
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
      price: formatPrice(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode),
      stockLabel,
      isInStock,
      shippingLabel: product.deliveryWindow?.value || product.shippingInfo?.value || 'Shipping calculated at checkout',
      reassurancePoints,
      addToCartLabel: product.ctaLabel?.value || 'Add to cart',
      shareLabel: 'Share',
      helpLabel: 'Need help?'
    }
  };
};
