import { useState, type FormEvent } from 'react';
import { ArrowLeft } from 'lucide-react';
import { FormInput } from '../components/FormInput';
import { AccountButton } from '../components/AccountButton';
import { FormAlert } from '../components/FormAlert';
import { useAuth } from '../AuthContext';
import { navigateTo } from '../navigation';

type PasswordResetErrors = {
  password?: string;
  confirmPassword?: string;
  general?: string;
};

type ResetRouteParams = {
  id: string;
  token: string;
};

function getResetRouteParams(): ResetRouteParams | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const match = window.location.pathname.match(/^\/account\/reset\/([^/]+)\/([^/]+)\/?$/);
  if (!match) {
    return null;
  }

  return {
    id: decodeURIComponent(match[1]),
    token: decodeURIComponent(match[2])
  };
}

function buildResetUrl({ id, token }: ResetRouteParams): string {
  const storefrontBaseUrl =
    import.meta.env.VITE_STOREFRONT_PUBLIC_URL || 'https://thevibestation.com';

  return `${storefrontBaseUrl.replace(/\/+$/, '')}/account/reset/${encodeURIComponent(id)}/${encodeURIComponent(token)}`;
}

export function PasswordResetPage() {
  const { resetPassword } = useAuth();
  const routeParams = getResetRouteParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<PasswordResetErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors: PasswordResetErrors = {};

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 5) {
      newErrors.password = 'Password must be at least 5 characters';
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

    if (!routeParams) {
      setErrors({ general: 'This password setup link is invalid. Please request a new one.' });
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      await resetPassword(buildResetUrl(routeParams), password);
      navigateTo('/account');
    } catch (error) {
      const code = (error as Error & { code?: string }).code;

      if (code === 'CUSTOMER_RESET_TOKEN_INVALID' || code === 'TOKEN_EXPIRED') {
        setErrors({ general: 'expired' });
      } else {
        setErrors({
          general: error instanceof Error ? error.message : 'Failed to set your password. Please try again.'
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--account-page-bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
    >
      <div style={{ width: '100%', maxWidth: '440px' }}>
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
            Set new password
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
            Create a password to activate your account or regain access.
          </p>
        </div>

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
              <FormAlert type="error">
                {errors.general === 'expired' ? (
                  <>
                    This link has expired. Please request a new one.{' '}
                    <button
                      type="button"
                      onClick={() => navigateTo('/account/forgot-password')}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        color: 'var(--account-error-text)',
                        font: 'inherit',
                        fontWeight: 600,
                        textDecoration: 'underline',
                        cursor: 'pointer'
                      }}
                    >
                      Request a new link
                    </button>
                    .
                  </>
                ) : (
                  errors.general
                )}
              </FormAlert>
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
                  if (errors.password || errors.general) {
                    setErrors((current) => ({ ...current, password: '', general: '' }));
                  }
                }}
                error={errors.password}
                helperText={!errors.password ? 'Must be at least 5 characters' : undefined}
                placeholder="Enter new password"
                autoComplete="new-password"
                showPasswordToggle
                disabled={isLoading}
              />

              <FormInput
                id="confirmPassword"
                label="Confirm password"
                type="password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (errors.confirmPassword || errors.general) {
                    setErrors((current) => ({ ...current, confirmPassword: '', general: '' }));
                  }
                }}
                error={errors.confirmPassword}
                placeholder="Confirm new password"
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
              Set Password
            </AccountButton>
          </form>
        </div>
      </div>
    </div>
  );
}
