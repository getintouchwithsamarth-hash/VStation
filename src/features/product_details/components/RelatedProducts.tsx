import { CardInstance } from '../../../components/ui/Card';
import { BadgeInstance } from '../../../components/ui/Badge';
import { ButtonInstance } from '../../../components/ui/Button';
import { useProductDetailMockData } from '../hooks/useProductDetailMockData';
import { useCart } from '../../cart/CartContext';

export function RelatedProducts() {
  const { addItem } = useCart();
  const { relatedProducts } = useProductDetailMockData();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <style>{`
        .related-products__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .related-products__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .related-products__card-copy {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        @media (max-width: 960px) {
          .related-products__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .related-products__header {
            flex-direction: column;
            align-items: flex-start;
          }

          .related-products__grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 16px;
          }

          .related-products__media {
            height: 200px !important;
          }
        }
      `}</style>
      <div className="related-products__header">
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

      <div className="related-products__grid">
        {relatedProducts.items.map((item) => (
          <CardInstance
            key={item.id}
            variant="elevated"
            mediaSlot={
              <div className="related-products__media" style={{ position: 'relative', width: '100%', height: '220px' }}>
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
            <div className="related-products__card-copy">
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
