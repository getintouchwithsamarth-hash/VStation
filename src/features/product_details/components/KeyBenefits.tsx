import { CardInstance } from '../../../components/ui/Card';
import { BadgeInstance } from '../../../components/ui/Badge';
import { Stack } from '../../../components/layout/Stack';
import { useProductDetailMockData } from '../hooks/useProductDetailMockData';

export function KeyBenefits() {
  const { keyBenefits } = useProductDetailMockData();

  if (keyBenefits.cards.length === 0) {
    return null;
  }

  return (
    <Stack direction="vertical" gap={16}>
      <div style={{ textAlign: 'center' }}>
        <h3
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            color: "var(--foreground)",
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
                  color: "var(--foreground)",
                  margin: 0
                }}
              >
                {card.title}
              </h4>
              {card.description ? (
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
              ) : null}
              {card.footer ? (
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
              ) : null}
            </Stack>
          </CardInstance>
        ))}
      </div>
    </Stack>
  );
}
