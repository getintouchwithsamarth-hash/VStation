import { useState, FormEvent } from 'react';
import { useAuth } from '../AuthContext';
import { FormInput } from '../components/FormInput';
import { AccountButton } from '../components/AccountButton';
import { FormAlert } from '../components/FormAlert';
import { navigateTo } from '../navigation';

export function RegisterPage() {
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
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
      await register(formData);
      navigateTo('/account');
    } catch (error) {
      setErrors({ general: error instanceof Error ? error.message : 'Registration failed' });
    } finally {
      setIsLoading(false);
    }
  };

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FCFCFD', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ width: '100%', maxWidth: '540px' }}>
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
            Create your account
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
            Join us to start shopping and manage your orders
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
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <FormInput
                  id="firstName"
                  label="First name"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => updateField('firstName', e.target.value)}
                  error={errors.firstName}
                  placeholder="Sarah"
                  autoComplete="given-name"
                  disabled={isLoading}
                />

                <FormInput
                  id="lastName"
                  label="Last name"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => updateField('lastName', e.target.value)}
                  error={errors.lastName}
                  placeholder="Chen"
                  autoComplete="family-name"
                  disabled={isLoading}
                />
              </div>

              <FormInput
                id="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                error={errors.email}
                placeholder="you@example.com"
                autoComplete="email"
                disabled={isLoading}
              />

              <FormInput
                id="phone"
                label="Phone (optional)"
                type="tel"
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                error={errors.phone}
                placeholder="+1 (555) 123-4567"
                autoComplete="tel"
                disabled={isLoading}
              />

              <FormInput
                id="password"
                label="Password"
                type="password"
                value={formData.password}
                onChange={(e) => updateField('password', e.target.value)}
                error={errors.password}
                helperText={!errors.password ? 'Must be at least 8 characters' : undefined}
                placeholder="Create a password"
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
              style={{ width: '100%', marginBottom: '16px' }}
            >
              Create account
            </AccountButton>

            <div
              style={{
                textAlign: 'center',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '400',
                color: '#667085',
                fontFamily: 'Inter, system-ui, sans-serif'
              }}
            >
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => navigateTo('/account/login')}
                disabled={isLoading}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '0',
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: '600',
                  color: '#4338CA',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  textDecoration: 'none',
                  opacity: isLoading ? 0.4 : 1
                }}
                onMouseEnter={(e) => !isLoading && (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
