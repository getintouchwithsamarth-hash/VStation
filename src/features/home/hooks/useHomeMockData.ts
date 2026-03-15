import { useEffect, useState } from 'react';
import { getProducts, resolveProductThumbnail } from '../../../lib/shopify-storefront';

export type HomeTestimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  tag: string;
};

type HomeData = {
  hero: {
    eyebrow: string;
    headline: string;
    supporting: string;
    primaryCta: string;
    secondaryCta: string;
    metaLine: string;
    featuredDropEyebrow: string;
    featuredDropTitle: string;
    featuredDropSubtitle: string;
    featuredDropImageUrl: string;
    featuredDropImageAlt: string;
  } | null;
  heroMetaBadges: string[];
  featuredDrop: {
    eyebrow: string;
    title: string;
    supporting: string;
    badges: string[];
    primaryCta: string;
    secondaryCta: string;
    productName: string;
    productPrice: string;
    productCopy: string;
    featureLine: string;
    productBadge: string;
    productImageUrl: string;
    productImageAlt: string;
  } | null;
  socialProof: {
    eyebrow: string;
    title: string;
    supporting: string;
    chips: string[];
    testimonials: HomeTestimonial[];
    ctaLabel: string;
  } | null;
};

const EMPTY_HOME_DATA: HomeData = {
  hero: null,
  heroMetaBadges: [],
  featuredDrop: null,
  socialProof: null
};

let homeDataCache: HomeData = EMPTY_HOME_DATA;
let homeDataResolved = false;
let homeDataPromise: Promise<void> | null = null;

const loadHomeDataFromShopify = async () => {
  if (homeDataPromise) {
    return homeDataPromise;
  }

  homeDataPromise = (async () => {
    try {
      const result = await getProducts({ first: 6 });
      if (result.edges.length === 0) {
        homeDataResolved = true;
        return;
      }

      const items = result.edges.map((edge) => edge.node);
      const featured = items[0];
      const featuredThumbnail = resolveProductThumbnail(featured);

      const testimonials = items.slice(0, 3).map((product) => ({
        id: product.id,
        name: product.title,
        role: product.featureLine?.value || 'Curated product',
        quote: product.shortDescription?.value || product.description || 'Built for consistent daily use.',
        tag: product.tags[0] || 'Curated'
      }));

      homeDataCache = {
        hero: {
          eyebrow: 'Curated essentials for musicians',
          headline: 'Gear that survives practice, travel, and stage.',
          supporting:
            'We research what musicians actually need, then pick durable, best-in-class tools with modern features so you buy once and keep playing.',
          primaryCta: 'Shop products',
          secondaryCta: 'Our philosophy',
          metaLine: 'Fast delivery · Clear returns · Responsive support',
          featuredDropEyebrow: 'Featured drop',
          featuredDropTitle: featured.title,
          featuredDropSubtitle: featured.shortDescription?.value || featured.description || '',
          featuredDropImageUrl: featuredThumbnail?.url || '',
          featuredDropImageAlt: featuredThumbnail?.altText || featured.title
        },
        featuredDrop: {
          eyebrow: 'Featured drop',
          title: 'Best-in-class essentials, chosen to last.',
          supporting:
            'One product at a time. Thorough research. Durable materials. Modern features that matter in real practice and gig conditions.',
          badges: ['Durable build', 'Fast + accurate', 'Stage-ready'],
          primaryCta: 'View featured',
          secondaryCta: 'See all products',
          productName: featured.title,
          productPrice: new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: featured.priceRange.minVariantPrice.currencyCode,
            maximumFractionDigits: 0
          }).format(Number.parseFloat(featured.priceRange.minVariantPrice.amount)),
          productCopy: featured.shortDescription?.value || featured.description || '',
          featureLine: featured.featureLine?.value || '',
          productBadge: featured.badge?.value || featured.tags[0] || '',
          productImageUrl: featuredThumbnail?.url || '',
          productImageAlt: featuredThumbnail?.altText || featured.title
        },
        heroMetaBadges: ['Curated for durability', 'Modern features', 'Clear policies'],
        socialProof: {
          eyebrow: 'What musicians notice',
          title: 'Built for real use — not shelf appeal.',
          supporting: 'Feedback that focuses on durability, clarity, and daily reliability.',
          chips: featured.tags.slice(0, 4),
          testimonials,
          ctaLabel: 'Explore products'
        }
      };
    } catch (error) {
      console.error('Failed to load home data from Shopify', error);
    } finally {
      homeDataResolved = true;
      homeDataPromise = null;
    }
  })();

  return homeDataPromise;
};

export function useHomeMockData() {
  const [homeData, setHomeData] = useState(homeDataCache);
  const [isLoading, setIsLoading] = useState(!homeDataResolved);

  useEffect(() => {
    let cancelled = false;
    if (homeDataResolved) {
      setHomeData(homeDataCache);
      setIsLoading(false);
      return () => {
        cancelled = true;
      };
    }

    void loadHomeDataFromShopify().then(() => {
      if (cancelled) {
        return;
      }
      setHomeData(homeDataCache);
      setIsLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return {
    ...homeData,
    isLoading
  };
}
