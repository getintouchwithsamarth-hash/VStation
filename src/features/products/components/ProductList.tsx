import { BadgeInstance } from '../../../components/ui/Badge';

export function ProductList() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}
    >
      {/* Product Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px'
        }}
      >
        {/* Product Card 1 */}
        <ProductCard />
        
        {/* Product Card 2 */}
        <ProductCard />
        
        {/* Product Card 3 */}
        <ProductCard />
        
        {/* Product Card 4 */}
        <ProductCard />
        
        {/* Product Card 5 */}
        <ProductCard />
        
        {/* Product Card 6 */}
        <ProductCard />
      </div>

      {/* Hover Example */}
      <div style={{ marginTop: '32px' }}>
        <div
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '600',
            color: '#667085',
            marginBottom: '16px'
          }}
        >
          Hover Example
        </div>
        <div style={{ maxWidth: '360px' }}>
          <ProductCardHover />
        </div>
      </div>
    </div>
  );
}

function ProductCard() {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #EAECF0',
        borderRadius: '16px',
        width: '100%',
        height: '460px',
        boxShadow: '0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* MediaSlot */}
      <div
        style={{
          position: 'relative',
          height: '220px',
          backgroundColor: '#F2F4F7'
        }}
      >
        {/* Top-left badge */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px'
          }}
        >
          <BadgeInstance label="Curated" variant="accent" size="sm" />
        </div>

        {/* Top-right save button */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px'
          }}
        >
          <button
            style={{
              height: '32px',
              paddingLeft: '12px',
              paddingRight: '12px',
              borderRadius: '8px',
              backgroundColor: 'transparent',
              color: '#344054',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '600',
              border: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            Save
          </button>
        </div>
      </div>

      {/* BodySlot */}
      <div
        style={{
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          flex: 1
        }}
      >
        {/* Product name */}
        <h4
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '22px',
            lineHeight: '30px',
            fontWeight: '600',
            color: '#101828',
            margin: 0
          }}
        >
          Clip-on Tuner Pro
        </h4>

        {/* Descriptor */}
        <p
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '400',
            color: '#344054',
            margin: 0
          }}
        >
          Fast response · Strong clamp · Clear display
        </p>

        {/* Feature line */}
        <div
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '12px',
            lineHeight: '18px',
            fontWeight: '500',
            color: '#667085'
          }}
        >
          USB-C · ±0.1 cent · 360° swivel
        </div>

        {/* Price row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 'auto',
            paddingTop: '8px'
          }}
        >
          <div
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '22px',
              lineHeight: '30px',
              fontWeight: '600',
              color: '#101828'
            }}
          >
            ₹—
          </div>
          <div
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '12px',
              lineHeight: '18px',
              fontWeight: '500',
              color: '#667085'
            }}
          >
            Ships in 24–48h
          </div>
        </div>
      </div>

      {/* FooterSlot */}
      <div style={{ padding: '16px', paddingTop: '0' }}>
        <button
          style={{
            width: '100%',
            height: '44px',
            paddingLeft: '16px',
            paddingRight: '16px',
            borderRadius: '12px',
            backgroundColor: '#4338CA',
            color: '#FFFFFF',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '600',
            border: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontFamily: 'Inter, system-ui, sans-serif'
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

function ProductCardHover() {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #D0D5DD', // border-default for hover
        borderRadius: '16px',
        width: '100%',
        height: '460px',
        boxShadow: '0 4px 6px -2px #1018280D, 0 12px 16px -4px #10182814', // Shadow / 2
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* MediaSlot with hover overlay */}
      <div
        style={{
          position: 'relative',
          height: '220px',
          backgroundColor: '#F2F4F7'
        }}
      >
        {/* Hover overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#10182808' // overlay-hover
          }}
        />

        {/* Top-left badge */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            zIndex: 1
          }}
        >
          <BadgeInstance label="Curated" variant="accent" size="sm" />
        </div>

        {/* Top-right save button */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            zIndex: 1
          }}
        >
          <button
            style={{
              height: '32px',
              paddingLeft: '12px',
              paddingRight: '12px',
              borderRadius: '8px',
              backgroundColor: 'transparent',
              color: '#344054',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '600',
              border: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            Save
          </button>
        </div>
      </div>

      {/* BodySlot */}
      <div
        style={{
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          flex: 1
        }}
      >
        {/* Product name */}
        <h4
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '22px',
            lineHeight: '30px',
            fontWeight: '600',
            color: '#101828',
            margin: 0
          }}
        >
          Clip-on Tuner Pro
        </h4>

        {/* Descriptor */}
        <p
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '400',
            color: '#344054',
            margin: 0
          }}
        >
          Fast response · Strong clamp · Clear display
        </p>

        {/* Feature line */}
        <div
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '12px',
            lineHeight: '18px',
            fontWeight: '500',
            color: '#667085'
          }}
        >
          USB-C · ±0.1 cent · 360° swivel
        </div>

        {/* Price row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 'auto',
            paddingTop: '8px'
          }}
        >
          <div
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '22px',
              lineHeight: '30px',
              fontWeight: '600',
              color: '#101828'
            }}
          >
            ₹—
          </div>
          <div
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '12px',
              lineHeight: '18px',
              fontWeight: '500',
              color: '#667085'
            }}
          >
            Ships in 24–48h
          </div>
        </div>
      </div>

      {/* FooterSlot */}
      <div style={{ padding: '16px', paddingTop: '0' }}>
        <button
          style={{
            width: '100%',
            height: '44px',
            paddingLeft: '16px',
            paddingRight: '16px',
            borderRadius: '12px',
            backgroundColor: '#4338CA',
            color: '#FFFFFF',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '600',
            border: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontFamily: 'Inter, system-ui, sans-serif'
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}