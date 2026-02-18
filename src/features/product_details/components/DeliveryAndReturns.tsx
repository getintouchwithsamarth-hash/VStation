import { CardInstance } from '../../../components/ui/Card';
import { BadgeInstance } from '../../../components/ui/Badge';

export function DeliveryAndReturns() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px'
      }}
    >
      {/* Card 1 - Delivery */}
      <CardInstance
        variant="subtle"
        padding="lg"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            minHeight: '160px'
          }}
        >
          <BadgeInstance label="Delivery" variant="neutral" size="sm" />
          <h4
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              color: '#101828',
              margin: 0
            }}
          >
            Fast dispatch
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
            Ships in 24–48 hours (typical). Delivery times vary by city.
          </div>
          <div
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '12px',
              lineHeight: '18px',
              fontWeight: '400',
              color: '#98A2B3',
              paddingTop: '8px',
              borderTop: '1px solid #E5E7EB'
            }}
          >
            Tracking shared on dispatch
          </div>
        </div>
      </CardInstance>

      {/* Card 2 - Returns */}
      <CardInstance
        variant="subtle"
        padding="lg"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            minHeight: '160px'
          }}
        >
          <BadgeInstance label="Returns" variant="neutral" size="sm" />
          <h4
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              color: '#101828',
              margin: 0
            }}
          >
            Clear returns
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
            Simple return window with straightforward conditions. No confusion.
          </div>
          <div
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '12px',
              lineHeight: '18px',
              fontWeight: '400',
              color: '#98A2B3',
              paddingTop: '8px',
              borderTop: '1px solid #E5E7EB'
            }}
          >
            Policy shown at checkout
          </div>
        </div>
      </CardInstance>

      {/* Card 3 - Support */}
      <CardInstance
        variant="subtle"
        padding="lg"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            minHeight: '160px'
          }}
        >
          <BadgeInstance label="Support" variant="neutral" size="sm" />
          <h4
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              color: '#101828',
              margin: 0
            }}
          >
            Responsive help
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
            Real assistance when you need it — before and after purchase.
          </div>
          <div
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '12px',
              lineHeight: '18px',
              fontWeight: '400',
              color: '#98A2B3',
              paddingTop: '8px',
              borderTop: '1px solid #E5E7EB'
            }}
          >
            Email + chat options
          </div>
        </div>
      </CardInstance>
    </div>
  );
}