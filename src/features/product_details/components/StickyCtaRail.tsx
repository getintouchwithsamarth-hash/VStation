import { CardInstance } from '../../../components/ui/Card';
import { BadgeInstance } from '../../../components/ui/Badge';
import { ButtonInstance } from '../../../components/ui/Button';

export function StickyCtaRail() {
  return (
    <CardInstance
      variant="elevated"
      padding="md"
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          minWidth: '340px'
        }}
      >
        {/* Top row: product name + price */}
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
              fontWeight: '600',
              color: '#101828'
            }}
          >
            Clip-on Tuner Pro
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
            ₹—
          </div>
        </div>

        {/* Middle row: stock badge + shipping text */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <BadgeInstance label="In stock" variant="neutral" size="sm" />
          <div
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '12px',
              lineHeight: '18px',
              fontWeight: '400',
              color: '#667085'
            }}
          >
            Ships 24–48h
          </div>
        </div>

        {/* CTA row */}
        <div style={{ paddingTop: '4px' }}>
          <ButtonInstance variant="primary" size="md" label="Add to cart" />
        </div>

        {/* Secondary actions row */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            paddingTop: '4px',
            borderTop: '1px solid #F3F4F6'
          }}
        >
          <ButtonInstance variant="ghost" size="sm" label="Share" />
          <ButtonInstance variant="ghost" size="sm" label="Need help?" />
        </div>
      </div>
    </CardInstance>
  );
}