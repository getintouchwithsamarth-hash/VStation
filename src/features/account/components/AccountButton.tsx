import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

interface AccountButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: ReactNode;
}

export function AccountButton({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled,
  children,
  ...props
}: AccountButtonProps) {
  const isDisabled = disabled || isLoading;

  // Size styles following Hard Rules
  const sizeStyles = {
    sm: {
      height: '36px',
      padding: '0 12px',
      borderRadius: '10px',
      gap: '8px',
      fontSize: '14px',
      lineHeight: '20px'
    },
    md: {
      height: '44px',
      padding: '0 16px',
      borderRadius: '12px',
      gap: '10px',
      fontSize: '14px',
      lineHeight: '20px'
    },
    lg: {
      height: '52px',
      padding: '0 20px',
      borderRadius: '14px',
      gap: '12px',
      fontSize: '18px',
      lineHeight: '28px'
    }
  };

  // Variant styles following Hard Rules
  const variantStyles = {
    primary: {
      backgroundColor: '#4338CA',
      color: '#FFFFFF',
      border: 'none'
    },
    secondary: {
      backgroundColor: '#FFFFFF',
      color: '#101828',
      border: '1px solid #D0D5DD'
    },
    ghost: {
      backgroundColor: 'transparent',
      color: '#101828',
      border: 'none'
    },
    destructive: {
      backgroundColor: '#F04438',
      color: '#FFFFFF',
      border: 'none'
    }
  };

  const currentSize = sizeStyles[size];
  const currentVariant = variantStyles[variant];

  return (
    <button
      {...props}
      disabled={isDisabled}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Inter, system-ui, sans-serif',
        fontWeight: '600',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.4 : 1,
        transition: 'all 0.15s ease',
        position: 'relative',
        whiteSpace: 'nowrap',
        ...currentSize,
        ...currentVariant,
        ...props.style
      }}
      onMouseEnter={(e) => {
        if (!isDisabled && variant !== 'ghost') {
          e.currentTarget.style.filter = 'brightness(0.94)';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.filter = 'none';
      }}
      onMouseDown={(e) => {
        if (!isDisabled) {
          e.currentTarget.style.filter = 'brightness(0.88)';
        }
      }}
      onMouseUp={(e) => {
        if (!isDisabled) {
          e.currentTarget.style.filter = 'brightness(0.94)';
        }
      }}
    >
      {isLoading && (
        <Loader2
          size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16}
          style={{
            animation: 'spin 1s linear infinite'
          }}
        />
      )}
      {children}
      
      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </button>
  );
}
