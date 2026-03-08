import { CardInstance } from '../../../components/ui/Card';
import { BadgeInstance } from '../../../components/ui/Badge';
import { Stack } from '../../../components/layout/Stack';
import { useProductDetailMockData } from '../hooks/useProductDetailMockData';

export function KeyBenefits() {
  const { keyBenefits } = useProductDetailMockData();

  return (
    <Stack direction="vertical" gap={16}>
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
            <Stack direction="vertical" gap={12} style={{ minHeight: '180px' }}>
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
            </Stack>
          </CardInstance>
        ))}
      </div>
    </Stack>
  );
}
