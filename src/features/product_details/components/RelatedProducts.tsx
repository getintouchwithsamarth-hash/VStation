import { CardInstance } from '../../../components/ui/Card';
import { BadgeInstance } from '../../../components/ui/Badge';
import { ButtonInstance } from '../../../components/ui/Button';
import { useProductDetailMockData } from '../hooks/useProductDetailMockData';
import { useCart } from '../../cart/CartContext';

export function RelatedProducts() {
  const { addItem } = useCart();
  const { relatedProducts } = useProductDetailMockData();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <h3
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            color: "var(--foreground)",
            margin: 0
          }}
        >
          {relatedProducts.title}
        </h3>
        <ButtonInstance variant="secondary" size="sm" label={relatedProducts.viewAllLabel} />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px'
        }}
      >
        {relatedProducts.items.map((item) => (
          <CardInstance
            key={item.id}
            variant="elevated"
            mediaSlot={
              <div style={{ position: 'relative', width: '100%', height: '220px' }}>
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.imageAlt || item.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: "var(--muted)"
                    }}
                  />
                )}
                <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                  <BadgeInstance label={item.badge} variant="neutral" size="sm" />
                </div>
              </div>
            }
            footerSlot={
              <ButtonInstance
                variant="primary"
                size="md"
                label={relatedProducts.addToCartLabel}
                disabled={!item.variantId}
                onClick={() => {
                  if (!item.variantId) {
                    return;
                  }
                  void addItem(item.variantId);
                }}
              />
            }
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}
            >
              <h4
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  color: "var(--foreground)",
                  margin: 0
                }}
              >
                {item.name}
              </h4>

              <div
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: '400',
                  color: "var(--muted-foreground)"
                }}
              >
                {item.descriptor}
              </div>

              <div
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '12px',
                  lineHeight: '18px',
                  fontWeight: '400',
                  color: "var(--muted-foreground)"
                }}
              >
                {item.featureLine}
              </div>

              <h4
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  color: "var(--foreground)",
                  margin: 0
                }}
              >
                {item.price}
              </h4>
            </div>
          </CardInstance>
        ))}
      </div>
    </div>
  );
}
