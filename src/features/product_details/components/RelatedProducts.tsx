import { CardInstance } from '../../../components/ui/Card';
import { BadgeInstance } from '../../../components/ui/Badge';
import { ButtonInstance } from '../../../components/ui/Button';

export function RelatedProducts() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px'
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <h3
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            color: '#101828',
            margin: 0
          }}
        >
          Related products
        </h3>
        <ButtonInstance variant="secondary" size="sm" label="View all" />
      </div>

      {/* Product grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px'
        }}
      >
        {/* Product card 1 - Metronome Pro */}
        <CardInstance
          variant="elevated"
          mediaSlot={
            <div style={{ position: 'relative', width: '100%', height: '220px' }}>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#F9FAFB'
                }}
              />
              {/* Badge - top left */}
              <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                <BadgeInstance label="Curated" variant="neutral" size="sm" />
              </div>
            </div>
          }
          footerSlot={
            <ButtonInstance variant="primary" size="md" label="Add to cart" />
          }
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
          >
            {/* Product name */}
            <h4
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                color: '#101828',
                margin: 0
              }}
            >
              Metronome Pro
            </h4>

            {/* Descriptor */}
            <div
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '400',
                color: '#667085'
              }}
            >
              Precise timing for practice and performance
            </div>

            {/* Feature line */}
            <div
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '12px',
                lineHeight: '18px',
                fontWeight: '400',
                color: '#98A2B3'
              }}
            >
              Multiple time signatures · Tap tempo
            </div>

            {/* Price */}
            <h4
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                color: '#101828',
                margin: 0
              }}
            >
              ₹—
            </h4>
          </div>
        </CardInstance>

        {/* Product card 2 - Cable Kit */}
        <CardInstance
          variant="elevated"
          mediaSlot={
            <div style={{ position: 'relative', width: '100%', height: '220px' }}>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#F9FAFB'
                }}
              />
              {/* Badge - top left */}
              <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                <BadgeInstance label="Curated" variant="neutral" size="sm" />
              </div>
            </div>
          }
          footerSlot={
            <ButtonInstance variant="primary" size="md" label="Add to cart" />
          }
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
          >
            {/* Product name */}
            <h4
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                color: '#101828',
                margin: 0
              }}
            >
              Cable Kit
            </h4>

            {/* Descriptor */}
            <div
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '400',
                color: '#667085'
              }}
            >
              Professional-grade cables for clean signal
            </div>

            {/* Feature line */}
            <div
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '12px',
                lineHeight: '18px',
                fontWeight: '400',
                color: '#98A2B3'
              }}
            >
              Gold-plated connectors · Low noise
            </div>

            {/* Price */}
            <h4
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                color: '#101828',
                margin: 0
              }}
            >
              ₹—
            </h4>
          </div>
        </CardInstance>

        {/* Product card 3 - Stand Light */}
        <CardInstance
          variant="elevated"
          mediaSlot={
            <div style={{ position: 'relative', width: '100%', height: '220px' }}>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#F9FAFB'
                }}
              />
              {/* Badge - top left */}
              <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                <BadgeInstance label="Curated" variant="neutral" size="sm" />
              </div>
            </div>
          }
          footerSlot={
            <ButtonInstance variant="primary" size="md" label="Add to cart" />
          }
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
          >
            {/* Product name */}
            <h4
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                color: '#101828',
                margin: 0
              }}
            >
              Stand Light
            </h4>

            {/* Descriptor */}
            <div
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '400',
                color: '#667085'
              }}
            >
              Adjustable LED light for sheet music
            </div>

            {/* Feature line */}
            <div
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '12px',
                lineHeight: '18px',
                fontWeight: '400',
                color: '#98A2B3'
              }}
            >
              Dimmable · Clip-on design
            </div>

            {/* Price */}
            <h4
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                color: '#101828',
                margin: 0
              }}
            >
              ₹—
            </h4>
          </div>
        </CardInstance>
      </div>
    </div>
  );
}