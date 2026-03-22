import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';
import { ReactNode } from 'react';

interface FormAlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  children: ReactNode;
}

export function FormAlert({ type, children }: FormAlertProps) {
  const config = {
    success: {
      backgroundColor: 'var(--account-success-bg)',
      borderColor: 'var(--account-success-border)',
      textColor: 'var(--account-success-text)',
      icon: CheckCircle
    },
    error: {
      backgroundColor: 'var(--account-error-bg)',
      borderColor: 'var(--account-error-border)',
      textColor: 'var(--account-error-text)',
      icon: XCircle
    },
    warning: {
      backgroundColor: 'var(--account-warning-bg)',
      borderColor: 'var(--account-warning-border)',
      textColor: 'var(--account-warning-text)',
      icon: AlertCircle
    },
    info: {
      backgroundColor: 'var(--account-info-bg)',
      borderColor: 'var(--account-info-border)',
      textColor: 'var(--account-info-text)',
      icon: Info
    }
  };

  const currentConfig = config[type];
  const Icon = currentConfig.icon;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        padding: '12px 16px',
        backgroundColor: currentConfig.backgroundColor,
        border: `1px solid ${currentConfig.borderColor}`,
        borderRadius: '10px'
      }}
    >
      <Icon
        size={20}
        style={{
          color: currentConfig.textColor,
          flexShrink: 0,
          marginTop: '2px'
        }}
      />
      <div
        style={{
          flex: 1,
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: '400',
          color: currentConfig.textColor,
          fontFamily: 'Inter, system-ui, sans-serif'
        }}
      >
        {children}
      </div>
    </div>
  );
}
