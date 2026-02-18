export type ProductCategory =
  | 'all'
  | 'practice'
  | 'stage'
  | 'studio'
  | 'power'
  | 'bundles';

export type ProductBadgeVariant = 'neutral' | 'accent';

export interface Product {
  id: string;
  name: string;
  descriptor: string;
  featureLine: string;
  priceLabel: string;
  shippingLabel: string;
  badgeLabel: string;
  badgeVariant: ProductBadgeVariant;
}

export interface ProductFilterOption {
  id: ProductCategory;
  label: string;
}

export interface ProductSearchConfig {
  placeholder: string;
  iconLabel: string;
  buttonLabel: string;
}
