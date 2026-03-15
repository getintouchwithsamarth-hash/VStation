import type { Product, ProductFilterOption } from '../types';
import {
  ALL_PRODUCTS_FILTER_ID,
  ALL_PRODUCTS_FILTER_LABEL,
  toCategoryFilterId
} from '../utils/categoryFilters';

const ALL_FILTER_OPTION: ProductFilterOption = {
  id: ALL_PRODUCTS_FILTER_ID,
  label: ALL_PRODUCTS_FILTER_LABEL
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

export function useProductFilters(products: Product[]) {
  const fallbackFilters = getFallbackFilters(products);
  const filters = [ALL_FILTER_OPTION, ...fallbackFilters];

  return {
    filters,
    isLoading: false,
    resetLabel: 'Reset filters'
  };
}
