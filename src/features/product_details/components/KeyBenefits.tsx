import { CardInstance } from '../../../components/ui/Card';
import { BadgeInstance } from '../../../components/ui/Badge';

export function KeyBenefits() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px'
      }}
    >
      {/* Title */}
      <div style={{ textAlign: 'center' }}>
        <h3
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            color: '#101828',
            margin: 0
          }}
        >
          Why it feels different
        </h3>
      </div>

      {/* Card row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px'
        }}
      >
        {/* Card 1 - Accuracy */}
        <CardInstance
          variant="elevated"
          padding="lg"
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              minHeight: '180px'
            }}
          >
            <BadgeInstance label="Accuracy" variant="neutral" size="sm" />
            <h4
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                color: '#101828',
                margin: 0
              }}
            >
              Reliable readings, fast
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
              Stable detection that doesn't hunt or lag — built for real practice and stage conditions.
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
              Curated standard
            </div>
          </div>
        </CardInstance>

        {/* Card 2 - Build */}
        <CardInstance
          variant="elevated"
          padding="lg"
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              minHeight: '180px'
            }}
          >
            <BadgeInstance label="Build" variant="neutral" size="sm" />
            <h4
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                color: '#101828',
                margin: 0
              }}
            >
              Designed for daily use
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
              Durable materials, strong clamp, and a hinge that doesn't loosen over time.
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
              Curated standard
            </div>
          </div>
        </CardInstance>

        {/* Card 3 - Clarity */}
        <CardInstance
          variant="elevated"
          padding="lg"
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              minHeight: '180px'
            }}
          >
            <BadgeInstance label="Clarity" variant="neutral" size="sm" />
            <h4
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                color: '#101828',
                margin: 0
              }}
            >
              Readable anywhere
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
              High-contrast display that stays clear under room light or stage lighting.
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
              Curated standard
            </div>
          </div>
        </CardInstance>
      </div>
    </div>
  );
}