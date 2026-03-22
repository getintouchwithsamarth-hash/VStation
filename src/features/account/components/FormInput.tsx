import { InputHTMLAttributes, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface FormInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string;
  error?: string;
  helperText?: string;
  showPasswordToggle?: boolean;
}

export function FormInput({
  label,
  error,
  helperText,
  showPasswordToggle,
  type = 'text',
  disabled,
  ...props
}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputType = showPasswordToggle && showPassword ? 'text' : type;

  return (
    <div style={{ width: '100%' }}>
      <label
        htmlFor={props.id}
        style={{
          display: 'block',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: '500',
          color: 'var(--account-text)',
          marginBottom: '6px',
          fontFamily: 'Inter, system-ui, sans-serif'
        }}
      >
        {label}
      </label>
      
      <div style={{ position: 'relative' }}>
        <input
          {...props}
          type={inputType}
          disabled={disabled}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          style={{
            width: '100%',
            height: '44px',
            padding: '10px 14px',
            paddingRight: showPasswordToggle ? '44px' : '14px',
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: '400',
            fontFamily: 'Inter, system-ui, sans-serif',
            color: disabled ? 'var(--account-input-disabled-text)' : 'var(--account-input-text)',
            backgroundColor: disabled ? 'var(--account-input-disabled-bg)' : 'var(--account-input-bg)',
            border: `1px solid ${
              error ? 'var(--account-error-border)' : 
              isFocused ? 'var(--border-focus)' : 
              'var(--account-input-border)'
            }`,
            borderRadius: '10px',
            outline: 'none',
            boxShadow: isFocused && !error ? '0 0 0 2px var(--account-focus-ring)' : 'none',
            cursor: disabled ? 'not-allowed' : 'text',
            transition: 'all 0.15s ease'
          }}
        />
        
        {showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            disabled={disabled}
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              padding: '4px',
              cursor: disabled ? 'not-allowed' : 'pointer',
              color: 'var(--account-subtext)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: disabled ? 0.4 : 1
            }}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>

      {error && (
        <div
          style={{
            marginTop: '6px',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '400',
            color: 'var(--account-error-text)',
            fontFamily: 'Inter, system-ui, sans-serif'
          }}
        >
          {error}
        </div>
      )}

      {!error && helperText && (
        <div
          style={{
            marginTop: '6px',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '400',
            color: 'var(--account-subtext)',
            fontFamily: 'Inter, system-ui, sans-serif'
          }}
        >
          {helperText}
        </div>
      )}
    </div>
  );
}
