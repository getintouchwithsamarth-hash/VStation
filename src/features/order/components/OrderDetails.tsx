export function OrderDetails() {
  return (
    <div
      style={{
        backgroundColor: "var(--card)",
        border: '1px solid var(--border)',
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
          color: "var(--foreground)",
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
              color: "var(--muted-foreground)"
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
              color: "var(--foreground)"
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
              color: "var(--muted-foreground)"
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
              color: "var(--foreground)"
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
              color: "var(--muted-foreground)"
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
              color: "var(--foreground)"
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
          backgroundColor: 'var(--border)'
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
              backgroundColor: "var(--muted)",
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
                color: "var(--foreground)"
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
                color: "var(--muted-foreground)"
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
              color: "var(--foreground)"
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
              backgroundColor: "var(--muted)",
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
                color: "var(--foreground)"
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
                color: "var(--muted-foreground)"
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
              color: "var(--foreground)"
            }}
          >
            ₹3,998
          </div>
        </div>
      </div>
    </div>
  );
}
