import { useEffect, useState } from 'react';
import { getProducts, resolveProductThumbnail } from '../../../lib/shopify';

export type HomeTestimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  tag: string;
};

const DEFAULT_HOME_DATA = {
  hero: {
    eyebrow: 'Curated essentials for musicians',
    headline: 'Gear that survives practice, travel, and stage.',
    supporting:
      'We research what musicians actually need, then pick durable, best-in-class tools with modern features — so you buy once and keep playing.',
    primaryCta: 'Shop products',
    secondaryCta: 'Our philosophy',
    metaLine: 'Fast delivery · Clear returns · Responsive support',
    featuredDropEyebrow: 'Featured drop',
    featuredDropTitle: 'Clip-on tuner, pro grade',
    featuredDropSubtitle: 'Accurate, fast, stage-ready.',
    featuredDropImageUrl: '',
    featuredDropImageAlt: 'Featured drop'
  },
  heroMetaBadges: ['Curated for durability', 'Modern features', 'Clear policies'],
  featuredDrop: {
    eyebrow: 'Featured drop',
    title: 'Best-in-class essentials, chosen to last.',
    supporting:
      'One product at a time. Thorough research. Durable materials. Modern features that matter in real practice and gig conditions.',
    badges: ['Durable build', 'Fast + accurate', 'Stage-ready'],
    primaryCta: 'View featured',
    secondaryCta: 'See all products',
    productName: 'Clip-on Tuner (Pro Grade)',
    productPrice: '₹—',
    productCopy: 'Accurate, bright display, strong clamp — built for daily use.',
    featureLine: '±0.1 cent accuracy · USB-C rechargeable · High-contrast display',
    productBadge: 'Curated pick',
    productImageUrl: '',
    productImageAlt: 'Featured product'
  },
  socialProof: {
    eyebrow: 'What musicians notice',
    title: 'Built for real use — not shelf appeal.',
    supporting: 'Feedback that focuses on durability, clarity, and daily reliability.',
    chips: ['Accurate', 'Durable', 'Clean design', 'Worth it'],
    testimonials: [
      {
        id: 'aarav',
        name: 'Aarav',
        role: 'Guitarist',
        quote: "Feels like it's made for daily practice. Doesn't drift and doesn't feel fragile.",
        tag: 'Practice'
      },
      {
        id: 'meera',
        name: 'Meera',
        role: 'Vocalist + keys',
        quote: 'Small details are right. Bright, fast, and easy to use on stage.',
        tag: 'Studio'
      },
      {
        id: 'kabir',
        name: 'Kabir',
        role: 'Bass player',
        quote: 'Price makes sense because it lasts. No regrets after weeks of heavy use.',
        tag: 'Live'
      }
    ] as HomeTestimonial[],
    ctaLabel: 'Explore products'
  }
};

let homeDataCache = DEFAULT_HOME_DATA;
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
        ...homeDataCache,
        hero: {
          ...homeDataCache.hero,
          featuredDropTitle: featured.title,
          featuredDropSubtitle:
            featured.shortDescription?.value || featured.description || homeDataCache.hero.featuredDropSubtitle,
          featuredDropImageUrl: featuredThumbnail?.url || homeDataCache.hero.featuredDropImageUrl,
          featuredDropImageAlt: featuredThumbnail?.altText || featured.title
        },
        featuredDrop: {
          ...homeDataCache.featuredDrop,
          productName: featured.title,
          productPrice: new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: featured.priceRange.minVariantPrice.currencyCode,
            maximumFractionDigits: 0
          }).format(Number.parseFloat(featured.priceRange.minVariantPrice.amount)),
          productCopy: featured.shortDescription?.value || featured.description || homeDataCache.featuredDrop.productCopy,
          featureLine: featured.featureLine?.value || homeDataCache.featuredDrop.featureLine,
          productBadge: featured.badge?.value || featured.tags[0] || homeDataCache.featuredDrop.productBadge,
          productImageUrl: featuredThumbnail?.url || homeDataCache.featuredDrop.productImageUrl,
          productImageAlt: featuredThumbnail?.altText || featured.title
        },
        socialProof: {
          ...homeDataCache.socialProof,
          chips: featured.tags.length > 0 ? featured.tags.slice(0, 4) : homeDataCache.socialProof.chips,
          testimonials
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
