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

export type ReviewBreakdown = {
  stars: number;
  count: number;
  label: string;
};

export type ProductDetailData = {
  productHeader: {
    badge: string;
    title: string;
    vendor: string;
    sku: string;
    shareUrl: string;
    shareLabel: string;
  };
  productMain: {
    gallery: {
      images: Array<{ id: string; url: string; altText: string }>;
      zoomLabel: string;
      prevLabel: string;
      nextLabel: string;
    };
    buyBox: {
      variantId: string | null;
      badge: string;
      name: string;
      descriptor: string;
      price: string;
      compareAtPrice: string | null;
      stock: string;
      isInStock: boolean;
      features: string[];
      reassurancePoints: string[];
      primaryCta: string;
      secondaryCta: string;
      microLine: string;
      inBoxTitle: string;
      inBoxLine: string;
    };
  };
  keyBenefits: {
    title: string;
    cards: ProductDetailCard[];
  };
  featureDeepDive: {
    overviewTitle: string;
    overviewHtml: string;
    storyTitle: string;
    storyHtml: string;
    buyingGuideTitle: string;
    buyingGuideHtml: string;
    curatedFor: string;
    notFor: string;
  };
  deliveryAndReturns: ProductDetailCard[];
  reviews: {
    title: string;
    supporting: string;
    averageLabel: string;
    averageValue: string;
    totalReviewsLabel: string;
    verifiedLabel: string;
    useCasePrefix: string;
    writeReviewLabel: string;
    loadMoreLabel: string;
    breakdown: ReviewBreakdown[];
    tags: string[];
    items: ProductDetailReview[];
  };
  relatedProducts: {
    title: string;
    viewAllLabel: string;
    addToCartLabel: string;
    items: Array<{
      id: string;
      variantId: string | null;
      badge: string;
      name: string;
      descriptor: string;
      featureLine: string;
      price: string;
      imageUrl?: string;
      imageAlt?: string;
    }>;
  };
  specsAndInBox: {
    specificationsTitle: string;
    specifications: Array<{ label: string; value: string }>;
    inBoxTitle: string;
    inBoxItems: string[];
    inBoxBadge: string;
    productDetailsTitle: string;
    productDetails: Array<{ label: string; value: string }>;
  };
  faq: {
    title: string;
    items: ProductDetailFaq[];
  };
  stickyCtaRail: {
    variantId: string | null;
    name: string;
    price: string;
    stockLabel: string;
    isInStock: boolean;
    shippingLabel: string;
    reassurancePoints: string[];
    addToCartLabel: string;
    shareLabel: string;
    helpLabel: string;
  };
};

export const EMPTY_PRODUCT_DETAIL_DATA: ProductDetailData = {
  productHeader: {
    badge: '',
    title: '',
    vendor: '',
    sku: '',
    shareUrl: '',
    shareLabel: ''
  },
  productMain: {
    gallery: {
      images: [],
      zoomLabel: '',
      prevLabel: '',
      nextLabel: ''
    },
    buyBox: {
      variantId: null,
      badge: '',
      name: '',
      descriptor: '',
      price: '',
      compareAtPrice: null,
      stock: '',
      isInStock: false,
      features: [],
      reassurancePoints: [],
      primaryCta: 'Add to cart',
      secondaryCta: 'Buy now',
      microLine: '',
      inBoxTitle: '',
      inBoxLine: ''
    }
  },
  keyBenefits: {
    title: '',
    cards: []
  },
  featureDeepDive: {
    overviewTitle: '',
    overviewHtml: '',
    storyTitle: '',
    storyHtml: '',
    buyingGuideTitle: '',
    buyingGuideHtml: '',
    curatedFor: '',
    notFor: ''
  },
  deliveryAndReturns: [],
  reviews: {
    title: '',
    supporting: '',
    averageLabel: '',
    averageValue: '',
    totalReviewsLabel: '',
    verifiedLabel: '',
    useCasePrefix: '',
    writeReviewLabel: 'Write a review',
    loadMoreLabel: 'Load more',
    breakdown: [],
    tags: [],
    items: []
  },
  relatedProducts: {
    title: 'Complete your setup',
    viewAllLabel: 'View all',
    addToCartLabel: 'Add to cart',
    items: []
  },
  specsAndInBox: {
    specificationsTitle: '',
    specifications: [],
    inBoxTitle: '',
    inBoxItems: [],
    inBoxBadge: '',
    productDetailsTitle: '',
    productDetails: []
  },
  faq: {
    title: '',
    items: []
  },
  stickyCtaRail: {
    variantId: null,
    name: '',
    price: '',
    stockLabel: '',
    isInStock: false,
    shippingLabel: '',
    reassurancePoints: [],
    addToCartLabel: 'Add to cart',
    shareLabel: 'Share',
    helpLabel: 'Need help?'
  }
};
