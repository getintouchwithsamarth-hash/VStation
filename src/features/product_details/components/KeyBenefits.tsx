import { CardInstance } from '../../../components/ui/Card';
import { BadgeInstance } from '../../../components/ui/Badge';
import { useProductDetailMockData } from '../hooks/useProductDetailMockData';

export function KeyBenefits() {
  const { keyBenefits } = useProductDetailMockData();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px'
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h3
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            color: '#101828',
            margin: 0
          }}
        >
          {keyBenefits.title}
        </h3>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px'
        }}
      >
        {keyBenefits.cards.map((card) => (
          <CardInstance key={card.id} variant="elevated" padding="lg">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                minHeight: '180px'
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
                  borderTop: '1px solid #F3F4F6'
                }}
              >
                {card.footer}
              </div>
            </div>
          </CardInstance>
        ))}
      </div>
    </div>
  );
}
