import { CardInstance } from '../../../components/ui/Card';
import { BadgeInstance } from '../../../components/ui/Badge';
import { useProductDetailMockData } from '../hooks/useProductDetailMockData';

export function DeliveryAndReturns() {
  const { deliveryAndReturns } = useProductDetailMockData();

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px'
      }}
    >
      {deliveryAndReturns.map((card) => (
        <CardInstance key={card.id} variant="subtle" padding="lg">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              minHeight: '160px'
            }}
          >
            <BadgeInstance label={card.badge} variant="neutral" size="sm" />
            <h4
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                color: "var(--foreground)",
                margin: 0
              }}
            >
              {card.title}
            </h4>
            <div
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '400',
                color: "var(--muted-foreground)",
                flex: 1
              }}
            >
              {card.description}
            </div>
            <div
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '12px',
                lineHeight: '18px',
                fontWeight: '400',
                color: "var(--muted-foreground)",
                paddingTop: '8px',
                borderTop: '1px solid var(--border)'
              }}
            >
              {card.footer}
            </div>
          </div>
        </CardInstance>
      ))}
    </div>
  );
}
