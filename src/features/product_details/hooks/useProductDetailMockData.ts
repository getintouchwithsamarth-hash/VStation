import { useEffect, useState } from 'react';
import { getProductByHandle } from '../../../lib/shopify-storefront';
import { getPublicAdminProductMetadata } from '../../../lib/shopify-admin';
import { buildProductDetailData } from './buildProductDetailData';
import { getHandleFromUrl, getRelatedProducts } from './productDetailHelpers';
import { EMPTY_PRODUCT_DETAIL_DATA } from './productDetailTypes';

const IS_DEV = import.meta.env.DEV;

export type { ProductDetailCard, ProductDetailFaq, ProductDetailReview } from './productDetailTypes';

let productDetailCache = EMPTY_PRODUCT_DETAIL_DATA;
let productDetailResolved = false;
let productDetailPromise: Promise<void> | null = null;
let productDetailHandle: string | null = null;
let productDetailFound = false;

const loadProductDetailFromShopify = async (requestedHandle?: string | null) => {
  const currentHandle = requestedHandle ?? getHandleFromUrl();

  if (productDetailPromise && currentHandle === productDetailHandle) {
    return productDetailPromise;
  }

  productDetailPromise = (async () => {
    try {
      const handle = currentHandle;
      if (!handle) {
        productDetailCache = EMPTY_PRODUCT_DETAIL_DATA;
        productDetailFound = false;
        productDetailResolved = true;
        productDetailHandle = null;
        return;
      }

      productDetailHandle = handle;
      const [product, adminMetadata] = await Promise.all([
        getProductByHandle(handle),
        getPublicAdminProductMetadata(handle).catch((error) => {
          console.error('Failed to load public admin product metadata', error);
          return null;
        })
      ]);

      if (!product) {
        productDetailCache = EMPTY_PRODUCT_DETAIL_DATA;
        productDetailFound = false;
        productDetailResolved = true;
        return;
      }

      const relatedProducts = await getRelatedProducts(product).catch(() => []);
      productDetailCache = buildProductDetailData({
        product,
        adminMetadata,
        relatedProducts
      });
      productDetailFound = true;
    } catch (error) {
      productDetailCache = EMPTY_PRODUCT_DETAIL_DATA;
      productDetailFound = false;
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
  const [isLoading, setIsLoading] = useState(!productDetailResolved || productDetailHandle !== handle);

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
    hasProduct: productDetailFound,
    isLoading
  };
}
