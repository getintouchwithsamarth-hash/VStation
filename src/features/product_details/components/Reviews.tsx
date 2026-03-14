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
            color: "var(--foreground)",
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
            color: "var(--muted-foreground)"
          }}
        >
          {reviews.supporting}
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '280px 1fr auto',
          gap: '24px',
          alignItems: 'start'
        }}
      >
        <CardInstance variant="subtle" padding="md">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <BadgeInstance label={reviews.averageLabel} variant="neutral" size="md" />
            <div
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '30px',
                lineHeight: '34px',
                fontWeight: '700',
                color: 'var(--foreground)'
              }}
            >
              {reviews.averageValue}
            </div>
            <div
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '13px',
                lineHeight: '18px',
                fontWeight: '500',
                color: 'var(--muted-foreground)'
              }}
            >
              {reviews.totalReviewsLabel}
            </div>
          </div>
        </CardInstance>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {reviews.breakdown.map((entry) => (
            <div key={entry.stars} style={{ display: 'grid', gridTemplateColumns: '64px 1fr 42px', gap: '12px', alignItems: 'center' }}>
              <div
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '13px',
                  lineHeight: '18px',
                  fontWeight: '500',
                  color: 'var(--muted-foreground)'
                }}
              >
                {entry.label}
              </div>
              <div
                style={{
                  height: '8px',
                  borderRadius: '999px',
                  backgroundColor: 'var(--border)',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    width: `${Math.min(entry.count * 10, 100)}%`,
                    height: '100%',
                    backgroundColor: 'var(--accent)'
                  }}
                />
              </div>
              <div
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '13px',
                  lineHeight: '18px',
                  fontWeight: '500',
                  color: 'var(--foreground)'
                }}
              >
                {entry.count}
              </div>
            </div>
          ))}

          {reviews.tags.length > 0 ? (
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', paddingTop: '4px' }}>
              {reviews.tags.map((tag) => (
                <BadgeInstance key={tag} label={tag} variant="neutral" size="sm" />
              ))}
            </div>
          ) : null}
        </div>

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
                      color: "var(--foreground)"
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
                      color: "var(--muted-foreground)"
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
                  color: "var(--muted-foreground)",
                  flex: 1
                }}
              >
                {review.quote}
              </div>

              {review.tags.length > 0 ? (
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {review.tags.map((tag) => (
                    <BadgeInstance key={tag} label={tag} variant="neutral" size="sm" />
                  ))}
                </div>
              ) : null}

              <div
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '12px',
                  lineHeight: '18px',
                  fontWeight: '400',
                  color: "var(--muted-foreground)"
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
