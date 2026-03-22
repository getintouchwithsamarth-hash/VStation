import { useMemo } from 'react';
import { BadgeInstance } from '../../../components/ui/Badge';
import { ButtonInstance } from '../../../components/ui/Button';
import { CardInstance } from '../../../components/ui/Card';
import { useProductList } from '../../products/hooks';
import type { Product } from '../../products/types';
import { useCart } from '../CartContext';
import { useCartMockData } from '../hooks/useCartMockData';

const MAX_RELATED_PRODUCTS = 3;

function getRecommendationScore(product: Product, cartCategoryIds: Set<string>): number {
  if (cartCategoryIds.size === 0) {
    return 0;
  }

  return product.categoryIds.reduce((score, categoryId) => {
    return cartCategoryIds.has(categoryId) ? score + 1 : score;
  }, 0);
}

export function CartRelatedProducts() {
  const { addItem, items } = useCart();
  const { copy } = useCartMockData();
  const { products, isLoading } = useProductList();

  const relatedProducts = useMemo(() => {
    if (!products.length) {
      return [];
    }

    const cartHandles = new Set(items.map((item) => item.productHandle));
    const cartVariantIds = new Set(items.map((item) => item.variantId));
    const cartProducts = products.filter((product) => cartHandles.has(product.id));
    const cartCategoryIds = new Set(
      cartProducts.flatMap((product) => product.categoryIds)
    );

    return [...products]
      .filter((product) => product.isInStock)
      .filter((product) => !cartHandles.has(product.id))
      .filter((product) => !product.variantId || !cartVariantIds.has(product.variantId))
      .sort((left, right) => {
        const rightScore = getRecommendationScore(right, cartCategoryIds);
        const leftScore = getRecommendationScore(left, cartCategoryIds);
        if (rightScore !== leftScore) {
          return rightScore - leftScore;
        }

        return left.name.localeCompare(right.name);
      })
      .slice(0, MAX_RELATED_PRODUCTS);
  }, [items, products]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}
      >
        <h4
          style={{
            margin: 0,
            fontSize: '20px',
            lineHeight: '28px',
            fontWeight: '600',
            color: 'var(--foreground)',
            fontFamily: 'Inter, system-ui, sans-serif'
          }}
        >
          {copy.relatedProductsTitle}
        </h4>
        <p
          style={{
            margin: 0,
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '400',
            color: 'var(--muted-foreground)',
            fontFamily: 'Inter, system-ui, sans-serif'
          }}
        >
          {copy.relatedProductsSubtitle}
        </p>
      </div>

      {isLoading ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '16px'
          }}
        >
          {Array.from({ length: MAX_RELATED_PRODUCTS }).map((_, index) => (
            <div
              key={index}
              style={{
                minHeight: '320px',
                borderRadius: '16px',
                border: '1px solid var(--border)',
                backgroundColor: 'var(--card)'
              }}
            />
          ))}
        </div>
      ) : relatedProducts.length ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '16px'
          }}
        >
          {relatedProducts.map((product) => (
            <CardInstance
              key={product.id}
              variant="elevated"
              mediaSlot={
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '180px',
                    backgroundColor: 'var(--muted)'
                  }}
                >
                  {product.imageUrl ? (
                    <img
                      src={product.imageUrl}
                      alt={product.imageAlt || product.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                  ) : null}
                  <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                    <BadgeInstance
                      label={product.badgeLabel}
                      variant={product.badgeVariant}
                      size="sm"
                    />
                  </div>
                </div>
              }
              footerSlot={
                <ButtonInstance
                  variant="primary"
                  size="sm"
                  fullWidth
                  label={copy.addButtonLabel}
                  disabled={!product.variantId}
                  onClick={() => {
                    if (!product.variantId) {
                      return;
                    }

                    void addItem(product.variantId);
                  }}
                />
              }
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  height: '100%'
                }}
              >
                <h5
                  style={{
                    margin: 0,
                    fontSize: '18px',
                    lineHeight: '26px',
                    fontWeight: '600',
                    color: 'var(--foreground)',
                    fontFamily: 'Inter, system-ui, sans-serif'
                  }}
                >
                  {product.name}
                </h5>
                <p
                  style={{
                    margin: 0,
                    fontSize: '13px',
                    lineHeight: '18px',
                    fontWeight: '400',
                    color: 'var(--muted-foreground)',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {product.descriptor}
                </p>
                <div
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    fontWeight: '500',
                    color: 'var(--muted-foreground)',
                    fontFamily: 'Inter, system-ui, sans-serif'
                  }}
                >
                  {product.featureLine}
                </div>
                <div
                  style={{
                    marginTop: 'auto',
                    fontSize: '16px',
                    lineHeight: '24px',
                    fontWeight: '600',
                    color: 'var(--foreground)',
                    fontFamily: 'Inter, system-ui, sans-serif'
                  }}
                >
                  {product.priceLabel}
                </div>
              </div>
            </CardInstance>
          ))}
        </div>
      ) : (
        <CardInstance variant="subtle" padding="md">
          <div
            style={{
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '400',
              color: 'var(--muted-foreground)',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            {copy.relatedProductsEmptyState}
          </div>
        </CardInstance>
      )}
    </div>
  );
}
