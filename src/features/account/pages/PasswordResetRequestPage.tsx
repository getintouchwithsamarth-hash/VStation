import { useState, FormEvent } from 'react';
import { FormInput } from '../components/FormInput';
import { AccountButton } from '../components/AccountButton';
import { FormAlert } from '../components/FormAlert';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '../AuthContext';
import { navigateTo } from '../navigation';

export function PasswordResetRequestPage() {
  const { requestPasswordReset } = useAuth();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await requestPasswordReset(email);
      setIsSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send reset link. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: 'var(--account-page-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
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
                backgroundColor: 'var(--account-success-bg)',
                borderRadius: '16px',
                marginBottom: '16px'
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--account-success-border)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>

            <h1
              style={{
                fontSize: '28px',
                lineHeight: '36px',
                fontWeight: '600',
                color: 'var(--account-title)',
                fontFamily: 'Inter, system-ui, sans-serif',
                marginBottom: '8px'
              }}
            >
              Check your email
            </h1>
            <p
              style={{
                fontSize: '16px',
                lineHeight: '24px',
                fontWeight: '400',
                color: 'var(--account-subtext)',
                fontFamily: 'Inter, system-ui, sans-serif'
              }}
            >
              We've sent a password reset link to<br />
              <strong style={{ color: 'var(--account-text)' }}>{email}</strong>
            </p>
          </div>

          {/* Success Card */}
          <div
            style={{
              backgroundColor: 'var(--account-card-bg)',
              border: '1px solid var(--account-card-border)',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: 'var(--account-card-shadow)',
              marginBottom: '16px'
            }}
          >
            <div
              style={{
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '400',
                color: 'var(--account-subtext)',
                fontFamily: 'Inter, system-ui, sans-serif',
                marginBottom: '24px'
              }}
            >
              Click the link in the email to reset your password. If you don't see the email, check your spam folder.
            </div>

            <AccountButton
              variant="primary"
              size="lg"
              onClick={() => navigateTo('/account/login')}
              style={{ width: '100%' }}
            >
              Return to sign in
            </AccountButton>
          </div>

          <button
            onClick={() => {
              setIsSuccess(false);
              setEmail('');
            }}
            style={{
              display: 'block',
              width: '100%',
              background: 'none',
              border: 'none',
              padding: '12px',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '600',
              color: 'var(--account-link)',
              fontFamily: 'Inter, system-ui, sans-serif',
              cursor: 'pointer',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
          >
            Didn't receive the email? Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--account-page-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ width: '100%', maxWidth: '440px' }}>
        {/* Back Button */}
        <button
          onClick={() => navigateTo('/account/login')}
          disabled={isLoading}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            border: 'none',
            padding: '8px 0',
            marginBottom: '24px',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '600',
            color: 'var(--account-link)',
            fontFamily: 'Inter, system-ui, sans-serif',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            opacity: isLoading ? 0.4 : 1
          }}
          onMouseEnter={(e) => !isLoading && (e.currentTarget.style.textDecoration = 'underline')}
          onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
        >
          <ArrowLeft size={16} />
          Back to sign in
        </button>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1
            style={{
              fontSize: '28px',
              lineHeight: '36px',
              fontWeight: '600',
              color: 'var(--account-title)',
              fontFamily: 'Inter, system-ui, sans-serif',
              marginBottom: '8px'
            }}
          >
            Reset your password
          </h1>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: '400',
              color: 'var(--account-subtext)',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            Enter your email and we'll send you a reset link
          </p>
        </div>

        {/* Form Card */}
        <div
          style={{
            backgroundColor: 'var(--account-card-bg)',
            border: '1px solid var(--account-card-border)',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: 'var(--account-card-shadow)'
          }}
        >
          {error && (
            <div style={{ marginBottom: '24px' }}>
              <FormAlert type="error">{error}</FormAlert>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div style={{ marginBottom: '24px' }}>
              <FormInput
                id="email"
                label="Email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                error={error && !email ? error : ''}
                placeholder="you@example.com"
                autoComplete="email"
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
              Send reset link
            </AccountButton>
          </form>
        </div>
      </div>
    </div>
  );
}
