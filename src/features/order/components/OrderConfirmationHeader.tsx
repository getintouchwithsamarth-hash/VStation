import { BadgeInstance } from '../../../components/ui/Badge';

export function OrderConfirmationHeader() {
  return (
    <div style={{ marginBottom: '40px' }}>
      {/* Eyebrow */}
      <div
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '12px',
          lineHeight: '18px',
          fontWeight: '400',
          color: "var(--muted-foreground)",
          marginBottom: '12px'
        }}
      >
        Order placed
      </div>

      {/* Title */}
      <h1
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          color: "var(--foreground)",
          margin: 0,
          marginBottom: '12px'
        }}
      >
        You're all set.
      </h1>

      {/* Supporting */}
      <div
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '18px',
          lineHeight: '28px',
          fontWeight: '400',
          color: "var(--muted-foreground)",
          marginBottom: '24px'
        }}
      >
        We'll send tracking when your order dispatches.
      </div>

      {/* Badge Row */}
      <div
        style={{
          display: 'flex',
          gap: '12px'
        }}
      >
        <BadgeInstance label="Clear updates" variant="neutral" size="md" />
        <BadgeInstance label="Responsive support" variant="neutral" size="md" />
        <BadgeInstance label="Easy returns" variant="neutral" size="md" />
      </div>
    </div>
  );
}
