import { useState, FormEvent } from 'react';
import { FormInput } from '../components/FormInput';
import { AccountButton } from '../components/AccountButton';
import { FormAlert } from '../components/FormAlert';
import { useAuth } from '../AuthContext';
import { navigateTo } from '../navigation';

export function PasswordResetPage() {
  const { resetPassword } = useAuth();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<{ password?: string; confirmPassword?: string; general?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      await resetPassword(window.location.href, password);
      setIsSuccess(true);
    } catch (error) {
      setErrors({
        general: error instanceof Error ? error.message : 'Failed to reset password. The link may have expired.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#FCFCFD', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <div style={{ width: '100%', maxWidth: '440px' }}>
          {/* Success Header */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '64px',
                height: '64px',
                backgroundColor: '#ECFDF3',
                borderRadius: '16px',
                marginBottom: '16px'
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#12B76A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>

            <h1
              style={{
                fontSize: '28px',
                lineHeight: '36px',
                fontWeight: '600',
                color: '#101828',
                fontFamily: 'Inter, system-ui, sans-serif',
                marginBottom: '8px'
              }}
            >
              Password reset successfully
            </h1>
            <p
              style={{
                fontSize: '16px',
                lineHeight: '24px',
                fontWeight: '400',
                color: '#667085',
                fontFamily: 'Inter, system-ui, sans-serif'
              }}
            >
              Your password has been updated
            </p>
          </div>

          {/* Success Card */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #EAECF0',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)'
            }}
          >
            <AccountButton
              variant="primary"
              size="lg"
              onClick={() => navigateTo('/account/login')}
              style={{ width: '100%' }}
            >
              Continue to sign in
            </AccountButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FCFCFD', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ width: '100%', maxWidth: '440px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1
            style={{
              fontSize: '28px',
              lineHeight: '36px',
              fontWeight: '600',
              color: '#101828',
              fontFamily: 'Inter, system-ui, sans-serif',
              marginBottom: '8px'
            }}
          >
            Set new password
          </h1>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: '400',
              color: '#667085',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            Create a new password for your account
          </p>
        </div>

        {/* Form Card */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #EAECF0',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)'
          }}
        >
          {errors.general && (
            <div style={{ marginBottom: '24px' }}>
              <FormAlert type="error">{errors.general}</FormAlert>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px' }}>
              <FormInput
                id="password"
                label="New password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) {
                    setErrors(prev => ({ ...prev, password: '' }));
                  }
                }}
                error={errors.password}
                helperText={!errors.password ? 'Must be at least 8 characters' : undefined}
                placeholder="Enter new password"
                autoComplete="new-password"
                showPasswordToggle
                disabled={isLoading}
              />

              <FormInput
                id="confirmPassword"
                label="Confirm new password"
                type="password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (errors.confirmPassword) {
                    setErrors(prev => ({ ...prev, confirmPassword: '' }));
                  }
                }}
                error={errors.confirmPassword}
                placeholder="Re-enter new password"
                autoComplete="new-password"
                showPasswordToggle
                disabled={isLoading}
              />
            </div>

            <AccountButton
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isLoading}
              style={{ width: '100%' }}
            >
              Reset password
            </AccountButton>
          </form>
        </div>
      </div>
    </div>
  );
}
