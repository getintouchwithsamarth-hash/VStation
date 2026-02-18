import type { ProductFilterOption } from '../types';

const MOCK_FILTERS: ProductFilterOption[] = [
  { id: 'all', label: 'All' },
  { id: 'practice', label: 'Practice' },
  { id: 'stage', label: 'Stage' },
  { id: 'studio', label: 'Studio' },
  { id: 'power', label: 'Power' },
  { id: 'bundles', label: 'Bundles' }
];

export function useProductFilters() {
  return {
    filters: MOCK_FILTERS,
    resetLabel: 'Reset'
  };
}
