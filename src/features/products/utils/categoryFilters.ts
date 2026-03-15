export const ALL_PRODUCTS_FILTER_ID = 'all';
export const ALL_PRODUCTS_FILTER_LABEL = 'All';

export const toCategoryFilterId = (value: string): string => {
  return value
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const toCategoryFilterLabel = (value: string): string => {
  return value
    .trim()
    .split(/[_-]+/)
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');
};
