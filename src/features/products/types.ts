export type ProductCategory = string;

export type ProductBadgeVariant = 'neutral' | 'accent';

export interface Product {
  id: string;
  variantId: string | null;
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
  categoryIds: ProductCategory[];
  categoryLabels: string[];
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
