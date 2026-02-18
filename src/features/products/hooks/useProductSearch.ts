import type { ProductSearchConfig } from '../types';

const MOCK_SEARCH_CONFIG: ProductSearchConfig = {
  placeholder: 'Search curated gear…',
  iconLabel: '⌕',
  buttonLabel: 'Search'
};

export function useProductSearch() {
  return MOCK_SEARCH_CONFIG;
}
