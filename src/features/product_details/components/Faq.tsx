import { CardInstance } from '../../../components/ui/Card';
import { useProductDetailMockData } from '../hooks/useProductDetailMockData';

export function Faq() {
  const { faq } = useProductDetailMockData();

  if (faq.items.length === 0) {
    return null;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <h3
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          color: 'var(--foreground)',
          margin: 0
        }}
      >
        {faq.title}
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
        {faq.items.map((item) => (
          <CardInstance key={item.question} variant="elevated" padding="lg">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '16px',
                  lineHeight: '24px',
                  fontWeight: '600',
                  color: 'var(--foreground)'
                }}
              >
                {item.question}
              </div>
              <div
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '14px',
                  lineHeight: '22px',
                  fontWeight: '400',
                  color: 'var(--muted-foreground)'
                }}
              >
                {item.answer}
              </div>
            </div>
          </CardInstance>
        ))}
      </div>
    </div>
  );
}
