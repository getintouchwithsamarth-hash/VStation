import { ButtonInstance } from '../../../components/ui/Button';

export function NextSteps() {
  return (
    <div
      style={{
        backgroundColor: '#F9FAFB',
        border: '1px solid #EAECF0',
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
          color: '#101828',
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
            color: '#667085'
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
            color: '#667085'
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
            color: '#667085'
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
        <ButtonInstance variant="primary" size="md" label="Continue shopping" />
        <ButtonInstance variant="secondary" size="md" label="View order" />
      </div>
    </div>
  );
}
