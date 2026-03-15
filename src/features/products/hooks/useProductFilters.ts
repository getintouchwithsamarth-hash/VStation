import { useEffect, useState } from 'react';
import { getProductMetafieldDefinitions, type ProductMetafieldDefinition } from '../../../lib/shopify';
import type { Product, ProductFilterOption } from '../types';
import {
  ALL_PRODUCTS_FILTER_ID,
  ALL_PRODUCTS_FILTER_LABEL,
  toCategoryFilterId,
  toCategoryFilterLabel
} from '../utils/categoryFilters';

const ALL_FILTER_OPTION: ProductFilterOption = {
  id: ALL_PRODUCTS_FILTER_ID,
  label: ALL_PRODUCTS_FILTER_LABEL
};

let metafieldDefinitionCache: ProductMetafieldDefinition[] | null = null;
let metafieldDefinitionPromise: Promise<ProductMetafieldDefinition[]> | null = null;

const loadMetafieldDefinitions = async (): Promise<ProductMetafieldDefinition[]> => {
  if (metafieldDefinitionCache) {
    return metafieldDefinitionCache;
  }

  if (!metafieldDefinitionPromise) {
    metafieldDefinitionPromise = getProductMetafieldDefinitions()
      .then((definitions) => {
        metafieldDefinitionCache = definitions;
        return definitions;
      })
      .finally(() => {
        metafieldDefinitionPromise = null;
      });
  }

  return metafieldDefinitionPromise;
};

const getFallbackFilters = (products: Product[]): ProductFilterOption[] => {
  const seen = new Set<string>();
  const options = products.flatMap((product) =>
    product.categoryIds.map((id, index) => ({
      id,
      label: product.categoryLabels[index] ?? product.categoryIds[index]
    }))
  );

  return options.filter((option) => {
    if (!option.id || seen.has(option.id)) {
      return false;
    }
    seen.add(option.id);
    return true;
  });
};

const getAdminFilters = (
  definitions: ProductMetafieldDefinition[],
  availableCategoryIds: Set<string>
): ProductFilterOption[] => {
  const seen = new Set<string>();

  return definitions
    .map((definition) => {
      const sourceLabel = definition.name.trim() || toCategoryFilterLabel(definition.key);
      return {
        id: toCategoryFilterId(sourceLabel),
        label: sourceLabel
      };
    })
    .filter((option) => {
      if (!option.id || seen.has(option.id) || !availableCategoryIds.has(option.id)) {
        return false;
      }
      seen.add(option.id);
      return true;
    });
};

export function useProductFilters(products: Product[]) {
  const [definitions, setDefinitions] = useState<ProductMetafieldDefinition[]>(metafieldDefinitionCache ?? []);
  const [isLoading, setIsLoading] = useState(metafieldDefinitionCache === null);
  const [didAdminFetchFail, setDidAdminFetchFail] = useState(false);

  useEffect(() => {
    let cancelled = false;

    if (metafieldDefinitionCache) {
      setDefinitions(metafieldDefinitionCache);
      setIsLoading(false);
      return () => {
        cancelled = true;
      };
    }

    setIsLoading(true);
    void loadMetafieldDefinitions()
      .then((result) => {
        if (cancelled) {
          return;
        }
        setDefinitions(result);
        setDidAdminFetchFail(false);
      })
      .catch((error) => {
        if (cancelled) {
          return;
        }
        console.error('Failed to load product category metafields from Shopify Admin API', error);
        setDefinitions([]);
        setDidAdminFetchFail(true);
      })
      .finally(() => {
        if (!cancelled) {
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const availableCategoryIds = new Set(products.flatMap((product) => product.categoryIds));
  const adminFilters = getAdminFilters(definitions, availableCategoryIds);
  const fallbackFilters = getFallbackFilters(products);
  const filters = [ALL_FILTER_OPTION, ...(adminFilters.length > 0 || !didAdminFetchFail ? adminFilters : fallbackFilters)];

  return {
    filters,
    isLoading,
    resetLabel: 'Reset filters'
  };
}
