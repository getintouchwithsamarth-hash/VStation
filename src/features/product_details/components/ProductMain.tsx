import { CardInstance } from '../../../components/ui/Card';
import { BadgeInstance } from '../../../components/ui/Badge';
import { ButtonInstance } from '../../../components/ui/Button';

export function ProductMain() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 420px',
        gap: '48px',
        alignItems: 'flex-start'
      }}
    >
      {/* Left column - Gallery */}
      <Gallery />
      
      {/* Right column - Buy box */}
      <BuyBox />
    </div>
  );
}

function Gallery() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
      {/* Main gallery card */}
      <CardInstance
        variant="elevated"
        height="560px"
        mediaSlot={
          <div style={{ position: 'relative', width: '100%', height: '560px' }}>
            {/* Image placeholder */}
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#F9FAFB'
              }}
            />
            
            {/* Zoom badge - top left */}
            <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
              <BadgeInstance label="Zoom" variant="neutral" size="sm" />
            </div>
            
            {/* Navigation buttons - top right */}
            <div
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                display: 'flex',
                gap: '8px'
              }}
            >
              <ButtonInstance variant="ghost" size="sm" label="Prev" />
              <ButtonInstance variant="ghost" size="sm" label="Next" />
            </div>
          </div>
        }
      />
      
      {/* Thumbnail row */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '12px'
        }}
      >
        {/* First thumbnail - selected */}
        <div
          style={{
            width: '88px',
            height: '88px',
            borderRadius: '12px',
            backgroundColor: '#F9FAFB',
            border: '2px solid #4F46E5',
            flexShrink: 0,
            cursor: 'pointer'
          }}
        />
        {/* Other thumbnails */}
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              width: '88px',
              height: '88px',
              borderRadius: '12px',
              backgroundColor: '#F9FAFB',
              border: '1px solid #E5E7EB',
              flexShrink: 0,
              cursor: 'pointer'
            }}
          />
        ))}
      </div>
    </div>
  );
}

function BuyBox() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
      {/* Main buy box card */}
      <CardInstance
        variant="elevated"
        padding="lg"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Badge */}
          <div>
            <BadgeInstance label="Curated pick" variant="accent" size="sm" />
          </div>
          
          {/* Product name */}
          <h2
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              color: '#101828',
              margin: 0
            }}
          >
            Clip-on Tuner Pro
          </h2>
          
          {/* Descriptor */}
          <div
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: '400',
              color: '#667085'
            }}
          >
            Accurate · Fast · Durable
          </div>
          
          {/* Price row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '8px',
              paddingBottom: '8px',
              borderTop: '1px solid #F3F4F6',
              borderBottom: '1px solid #F3F4F6'
            }}
          >
            <h3
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                color: '#101828',
                margin: 0
              }}
            >
              ₹—
            </h3>
            <span
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '500',
                color: '#10B981'
              }}
            >
              In stock
            </span>
          </div>
          
          {/* Feature bullets */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}
          >
            <div
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '400',
                color: '#667085'
              }}
            >
              • ±0.1 cent accuracy
            </div>
            <div
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '400',
                color: '#667085'
              }}
            >
              • High-contrast display
            </div>
            <div
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '400',
                color: '#667085'
              }}
            >
              • Strong clamp, stable grip
            </div>
          </div>
          
          {/* CTA buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '8px' }}>
            <ButtonInstance variant="primary" size="lg" label="Add to cart" />
            <ButtonInstance variant="secondary" size="lg" label="Buy now" />
          </div>
          
          {/* Micro line */}
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
            Ships in 24–48h · Clear returns · Responsive support
          </div>
        </div>
      </CardInstance>
      
      {/* What's in the box card */}
      <CardInstance
        variant="subtle"
        padding="md"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '600',
              color: '#101828'
            }}
          >
            What's in the box
          </div>
          <div
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '400',
              color: '#667085'
            }}
          >
            Tuner · USB-C cable · Quick guide
          </div>
        </div>
      </CardInstance>
    </div>
  );
}