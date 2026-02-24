export function OrderDetails() {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #EAECF0',
        borderRadius: '16px',
        boxShadow: '0 8px 16px -4px #1018281A, 0 4px 8px -2px #10182814', // Shadow / 3
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}
    >
      {/* Title */}
      <h3
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '18px',
          lineHeight: '28px',
          fontWeight: '600',
          color: '#101828',
          margin: 0
        }}
      >
        Order summary
      </h3>

      {/* Order Info Rows */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}
      >
        {/* Order ID */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
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
            Order ID
          </div>
          <div
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '600',
              color: '#101828'
            }}
          >
            #VS-2026-0047
          </div>
        </div>

        {/* Items */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
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
            Items
          </div>
          <div
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '600',
              color: '#101828'
            }}
          >
            3 items
          </div>
        </div>

        {/* Total */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
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
            Total
          </div>
          <div
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '600',
              color: '#101828'
            }}
          >
            ₹5,997
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          height: '1px',
          backgroundColor: '#EAECF0'
        }}
      />

      {/* Item List */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}
      >
        {/* Item Row 1 */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          {/* Image placeholder */}
          <div
            style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#F3F4F6',
              borderRadius: '10px',
              flexShrink: 0
            }}
          />

          {/* Text stack */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <div
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '600',
                color: '#101828'
              }}
            >
              Clip-on Tuner Pro
            </div>
            <div
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '12px',
                lineHeight: '18px',
                fontWeight: '400',
                color: '#667085'
              }}
            >
              Qty 1
            </div>
          </div>

          {/* Price */}
          <div
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '600',
              color: '#101828'
            }}
          >
            ₹2,499
          </div>
        </div>

        {/* Item Row 2 */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          {/* Image placeholder */}
          <div
            style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#F3F4F6',
              borderRadius: '10px',
              flexShrink: 0
            }}
          />

          {/* Text stack */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <div
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '600',
                color: '#101828'
              }}
            >
              Pro Metronome
            </div>
            <div
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '12px',
                lineHeight: '18px',
                fontWeight: '400',
                color: '#667085'
              }}
            >
              Qty 2
            </div>
          </div>

          {/* Price */}
          <div
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '600',
              color: '#101828'
            }}
          >
            ₹3,998
          </div>
        </div>
      </div>
    </div>
  );
}
