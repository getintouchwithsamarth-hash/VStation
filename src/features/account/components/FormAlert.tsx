import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';
import { ReactNode } from 'react';

interface FormAlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  children: ReactNode;
}

export function FormAlert({ type, children }: FormAlertProps) {
  const config = {
    success: {
      backgroundColor: '#ECFDF3',
      borderColor: '#12B76A',
      textColor: '#039855',
      icon: CheckCircle
    },
    error: {
      backgroundColor: '#FEF3F2',
      borderColor: '#F04438',
      textColor: '#D92D20',
      icon: XCircle
    },
    warning: {
      backgroundColor: '#FFFAEB',
      borderColor: '#F79009',
      textColor: '#DC6803',
      icon: AlertCircle
    },
    info: {
      backgroundColor: 'rgba(79, 70, 229, 0.06)',
      borderColor: '#4F46E5',
      textColor: '#4338CA',
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
