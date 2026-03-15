import { useEffect, useState } from 'react';
import { predictiveSearch } from '../../../lib/shopify-storefront';
import type { ProductSearchConfig } from '../types';

const SEARCH_CONFIG: ProductSearchConfig = {
  placeholder: 'Search curated gear…',
  iconLabel: '⌕',
  buttonLabel: 'Search'
};

export function useProductSearch() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Array<{ id: string; title: string }>>([]);

  useEffect(() => {
    let cancelled = false;
    const trimmed = query.trim();
    if (!trimmed) {
      setSuggestions([]);
      return;
    }

    const timer = window.setTimeout(() => {
      void predictiveSearch(trimmed, 5)
        .then((products) => {
          if (!cancelled) {
            setSuggestions(products.map((product) => ({ id: product.handle, title: product.title })));
          }
        })
        .catch((error) => {
          if (!cancelled) {
            console.error('Failed predictive search', error);
            setSuggestions([]);
          }
        });
    }, 250);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [query]);

  return {
    ...SEARCH_CONFIG,
    query,
    setQuery,
    suggestions
  };
}
