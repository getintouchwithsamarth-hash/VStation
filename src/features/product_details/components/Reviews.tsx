import { CardInstance } from '../../../components/ui/Card';
import { BadgeInstance } from '../../../components/ui/Badge';
import { ButtonInstance } from '../../../components/ui/Button';
import { useProductDetailMockData } from '../hooks/useProductDetailMockData';

export function Reviews() {
  const { reviews } = useProductDetailMockData();

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
          flexDirection: 'column',
          gap: '12px',
          textAlign: 'center'
        }}
      >
        <h3
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            color: '#101828',
            margin: 0
          }}
        >
          {reviews.title}
        </h3>
        <div
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '400',
            color: '#667085'
          }}
        >
          {reviews.supporting}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <BadgeInstance label={reviews.averageLabel} variant="neutral" size="md" />
        <ButtonInstance variant="secondary" size="sm" label={reviews.writeReviewLabel} />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}
      >
        {reviews.items.map((review) => (
          <CardInstance key={review.id} variant="elevated" padding="md" height="170px">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                height: '100%'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <div
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: '14px',
                      lineHeight: '20px',
                      fontWeight: '600',
                      color: '#101828'
                    }}
                  >
                    {review.name}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: '12px',
                      lineHeight: '18px',
                      fontWeight: '400',
                      color: '#98A2B3'
                    }}
                  >
                    {review.role}
                  </div>
                </div>
                <BadgeInstance label={reviews.verifiedLabel} variant="neutral" size="sm" />
              </div>

              <div
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '16px',
                  lineHeight: '24px',
                  fontWeight: '400',
                  color: '#667085',
                  flex: 1
                }}
              >
                {review.quote}
              </div>

              <div
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '12px',
                  lineHeight: '18px',
                  fontWeight: '400',
                  color: '#98A2B3'
                }}
              >
                {reviews.useCasePrefix} {review.useCase}
              </div>
            </div>
          </CardInstance>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4px' }}>
        <ButtonInstance variant="ghost" size="md" label={reviews.loadMoreLabel} />
      </div>
    </div>
  );
}
