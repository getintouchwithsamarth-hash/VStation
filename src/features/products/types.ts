export type ProductCategory = string;

export type ProductBadgeVariant = 'neutral' | 'accent';

export interface Product {
  id: string;
  name: string;
  descriptor: string;
  featureLine: string;
  priceLabel: string;
  shippingLabel: string;
  isInStock: boolean;
  badgeLabel: string;
  badgeVariant: ProductBadgeVariant;
  imageUrl?: string;
  imageAlt?: string;
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
