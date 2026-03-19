import { ReactNode } from 'react';

interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '64px 24px',
        textAlign: 'center'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '56px',
          height: '56px',
          borderRadius: '12px',
          backgroundColor: '#F9FAFB',
          color: '#667085',
          marginBottom: '16px'
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          fontSize: '18px',
          lineHeight: '28px',
          fontWeight: '600',
          color: '#101828',
          fontFamily: 'Inter, system-ui, sans-serif',
          marginBottom: '8px'
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: '400',
          color: '#667085',
          fontFamily: 'Inter, system-ui, sans-serif',
          marginBottom: action ? '24px' : '0',
          maxWidth: '400px'
        }}
      >
        {description}
      </p>

      {action && <div>{action}</div>}
    </div>
  );
}
