import { ButtonInstance } from '../../../components/ui/Button';

export function NextSteps() {
  const handleContinueShopping = () => {
    window.location.href = 'https://thevibestation.com';
  };

  return (
    <div
      style={{
        backgroundColor: "var(--muted)",
        border: '1px solid var(--border)',
        borderRadius: '16px',
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
        Next steps
      </h3>

      {/* Text Lines */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
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
          Check email for confirmation
        </div>
        <div
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '400',
            color: "var(--muted-foreground)"
          }}
        >
          Tracking shared on dispatch
        </div>
        <div
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '400',
            color: "var(--muted-foreground)"
          }}
        >
          Support available if needed
        </div>
      </div>

      {/* Buttons */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}
      >
        <ButtonInstance
          variant="primary"
          size="md"
          label="Continue shopping"
          onClick={handleContinueShopping}
        />
        <ButtonInstance variant="secondary" size="md" label="View order" />
      </div>
    </div>
  );
}
