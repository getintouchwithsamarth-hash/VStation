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
                color: '#101828',
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
                color: '#667085',
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
                color: '#98A2B3',
                paddingTop: '8px',
                borderTop: '1px solid #E5E7EB'
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
