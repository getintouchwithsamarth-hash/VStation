import { useEffect, useState } from 'react';
import { getProducts } from '../../../lib/shopify';
import type { ProductFilterOption } from '../types';

export function useProductFilters() {
  const [filters, setFilters] = useState<ProductFilterOption[]>([{ id: 'all', label: 'All' }]);

  useEffect(() => {
    let cancelled = false;
    const loadFilters = async () => {
      try {
        const products = await getProducts({ first: 50 });
        if (cancelled) {
          return;
        }
        const tagSet = new Set<string>();
        products.edges.forEach((edge) => edge.node.tags.forEach((tag) => tagSet.add(tag)));
        const dynamicFilters = Array.from(tagSet).map((tag) => ({
          id: tag.toLowerCase(),
          label: tag
        }));
        setFilters([{ id: 'all', label: 'All' }, ...dynamicFilters]);
      } catch (error) {
        if (!cancelled) {
          console.error('Failed to load product filters from Shopify', error);
          setFilters([{ id: 'all', label: 'All' }]);
        }
      }
    };

    void loadFilters();
    return () => {
      cancelled = true;
    };
  }, []);

  return {
    filters,
    resetLabel: 'Reset'
  };
}
