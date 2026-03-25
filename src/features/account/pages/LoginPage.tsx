import { useState, FormEvent } from 'react';
import { useAuth } from '../AuthContext';
import { FormInput } from '../components/FormInput';
import { AccountButton } from '../components/AccountButton';
import { FormAlert } from '../components/FormAlert';
import { navigateTo } from '../navigation';

const TEST_ENV = import.meta.env.ENV === 'TEST';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string; general?: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors: typeof errors = {};
    const normalizedEmail = email.trim();
    const normalizedPassword = password.trim();

    if (!normalizedEmail) {
      newErrors.email = 'Email is required';
    } else if (!EMAIL_PATTERN.test(normalizedEmail)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!normalizedPassword) {
      newErrors.password = 'Password is required';
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
      await login(email, password);
      navigateTo('/account');
    } catch (error) {
      setErrors({ general: error instanceof Error ? error.message : 'Invalid email or password' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--account-page-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ width: '100%', maxWidth: '440px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1
            data-testid="login-page-heading"
            style={{
              fontSize: '28px',
              lineHeight: '36px',
              fontWeight: '600',
              color: 'var(--account-title)',
              fontFamily: 'Inter, system-ui, sans-serif',
              marginBottom: '8px'
            }}
          >
            Welcome back
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
            Sign in to your account to continue
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
          {errors.general && (
            <div style={{ marginBottom: '24px' }}>
              <FormAlert type="error">{errors.general}</FormAlert>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px' }}>
              <FormInput
                id="email"
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
                placeholder="you@example.com"
                autoComplete="email"
                disabled={isLoading}
              />

              <FormInput
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
                placeholder="Enter your password"
                autoComplete="current-password"
                showPasswordToggle
                disabled={isLoading}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <button
                type="button"
                onClick={() => navigateTo('/account/password-reset')}
                disabled={isLoading}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '0',
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: '600',
                  color: 'var(--account-link)',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  textDecoration: 'none',
                  opacity: isLoading ? 0.4 : 1
                }}
                onMouseEnter={(e) => !isLoading && (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
              >
                Forgot password?
              </button>
            </div>

            <AccountButton
              type="submit"
              variant="primary"
              size="lg"
              data-testid="login-submit"
              isLoading={isLoading}
              style={{ width: '100%', marginBottom: '16px' }}
            >
              Sign in
            </AccountButton>

            <div
              style={{
                textAlign: 'center',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '400',
                color: 'var(--account-subtext)',
                fontFamily: 'Inter, system-ui, sans-serif'
              }}
            >
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => navigateTo('/account/register')}
                disabled={isLoading}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '0',
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: '600',
                  color: 'var(--account-link)',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  textDecoration: 'none',
                  opacity: isLoading ? 0.4 : 1
                }}
                onMouseEnter={(e) => !isLoading && (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
              >
                Create account
              </button>
            </div>
          </form>
        </div>

        <div
          style={{
            marginTop: '24px',
            padding: '16px',
            backgroundColor: 'var(--account-info-bg)',
            border: '1px solid var(--account-info-border)',
            borderRadius: '12px',
            textAlign: 'center'
          }}
        >
          <p
            style={{
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '400',
              color: 'var(--account-info-text)',
              fontFamily: 'Inter, system-ui, sans-serif',
              margin: 0
            }}
          >
            {TEST_ENV ? 'Test mode: any valid email and password format can sign in' : 'Use your account email and password to sign in'}
          </p>
        </div>
      </div>
    </div>
  );
}
