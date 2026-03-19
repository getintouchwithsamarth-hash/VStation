import { useState } from 'react';
import { User, Mail, Phone, Edit2 } from 'lucide-react';
import { Customer } from '../types';
import { useAuth } from '../AuthContext';
import { FormInput } from '../components/FormInput';
import { AccountButton } from '../components/AccountButton';
import { FormAlert } from '../components/FormAlert';

interface OverviewSectionProps {
  customer: Customer;
}

export function OverviewSection({ customer }: OverviewSectionProps) {
  const { updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: customer.firstName,
    lastName: customer.lastName,
    email: customer.email,
    phone: customer.phone || ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSave = async () => {
    setIsLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      await updateProfile(formData);
      setSuccessMessage('Profile updated successfully');
      setIsEditing(false);
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      setErrorMessage('Failed to update profile');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      phone: customer.phone || ''
    });
    setIsEditing(false);
    setErrorMessage('');
  };

  return (
    <div>
      {/* Section Header */}
      <div style={{ marginBottom: '24px' }}>
        <h2
          style={{
            fontSize: '22px',
            lineHeight: '30px',
            fontWeight: '600',
            color: '#101828',
            fontFamily: 'Inter, system-ui, sans-serif'
          }}
        >
          Profile Information
        </h2>
        <p
          style={{
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '400',
            color: '#667085',
            fontFamily: 'Inter, system-ui, sans-serif',
            marginTop: '4px'
          }}
        >
          Manage your personal information and contact details
        </p>
      </div>

      {/* Profile Card */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #EAECF0',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)'
        }}
      >
        {successMessage && (
          <div style={{ marginBottom: '20px' }}>
            <FormAlert type="success">{successMessage}</FormAlert>
          </div>
        )}

        {errorMessage && (
          <div style={{ marginBottom: '20px' }}>
            <FormAlert type="error">{errorMessage}</FormAlert>
          </div>
        )}

        {!isEditing ? (
          <div>
            {/* Display Mode */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    backgroundColor: '#F9FAFB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <User size={28} style={{ color: '#667085' }} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '18px',
                      lineHeight: '28px',
                      fontWeight: '600',
                      color: '#101828',
                      fontFamily: 'Inter, system-ui, sans-serif'
                    }}
                  >
                    {customer.firstName} {customer.lastName}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      lineHeight: '20px',
                      fontWeight: '400',
                      color: '#667085',
                      fontFamily: 'Inter, system-ui, sans-serif'
                    }}
                  >
                    Member since {new Date(customer.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </p>
                </div>
              </div>

              <AccountButton
                variant="secondary"
                size="sm"
                onClick={() => setIsEditing(true)}
              >
                <Edit2 size={14} />
                Edit
              </AccountButton>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <Mail size={20} style={{ color: '#667085', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div
                    style={{
                      fontSize: '12px',
                      lineHeight: '18px',
                      fontWeight: '500',
                      color: '#667085',
                      fontFamily: 'Inter, system-ui, sans-serif',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '4px'
                    }}
                  >
                    Email
                  </div>
                  <div
                    style={{
                      fontSize: '14px',
                      lineHeight: '20px',
                      fontWeight: '400',
                      color: '#101828',
                      fontFamily: 'Inter, system-ui, sans-serif'
                    }}
                  >
                    {customer.email}
                  </div>
                </div>
              </div>

              {customer.phone && (
                <div style={{ display: 'flex', gap: '12px' }}>
                  <Phone size={20} style={{ color: '#667085', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div
                      style={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        fontWeight: '500',
                        color: '#667085',
                        fontFamily: 'Inter, system-ui, sans-serif',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '4px'
                      }}
                    >
                      Phone
                    </div>
                    <div
                      style={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontWeight: '400',
                        color: '#101828',
                        fontFamily: 'Inter, system-ui, sans-serif'
                      }}
                    >
                      {customer.phone}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>
            {/* Edit Mode */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <FormInput
                  id="firstName"
                  label="First name"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  disabled={isLoading}
                />

                <FormInput
                  id="lastName"
                  label="Last name"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  disabled={isLoading}
                />
              </div>

              <FormInput
                id="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                disabled={isLoading}
              />

              <FormInput
                id="phone"
                label="Phone (optional)"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                disabled={isLoading}
              />
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <AccountButton
                variant="secondary"
                size="md"
                onClick={handleCancel}
                disabled={isLoading}
              >
                Cancel
              </AccountButton>
              <AccountButton
                variant="primary"
                size="md"
                onClick={handleSave}
                isLoading={isLoading}
              >
                Save changes
              </AccountButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
