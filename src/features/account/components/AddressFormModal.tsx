import { useState, FormEvent } from 'react';
import { X } from 'lucide-react';
import { CustomerAddress } from '../types';
import { FormInput } from './FormInput';
import { AccountButton } from './AccountButton';

interface AddressFormModalProps {
  address?: CustomerAddress;
  onClose: () => void;
  onSave: (address: any) => void;
}

export function AddressFormModal({ address, onClose, onSave }: AddressFormModalProps) {
  const [formData, setFormData] = useState({
    firstName: address?.firstName || '',
    lastName: address?.lastName || '',
    company: address?.company || '',
    address1: address?.address1 || '',
    address2: address?.address2 || '',
    city: address?.city || '',
    province: address?.province || '',
    zip: address?.zip || '',
    country: address?.country || 'United States',
    phone: address?.phone || ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.address1.trim()) newErrors.address1 = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.province.trim()) newErrors.province = 'State/Province is required';
    if (!formData.zip.trim()) newErrors.zip = 'ZIP/Postal code is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 500));

      if (address) {
        onSave({ ...address, ...formData });
      } else {
        onSave(formData);
      }
    } catch (error) {
      console.error('Failed to save address:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'var(--account-overlay)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          zIndex: 50,
          overflow: 'auto'
        }}
        onClick={onClose}
      >
        {/* Modal */}
        <div
          style={{
            backgroundColor: 'var(--account-card-bg)',
            borderRadius: '16px',
            width: '100%',
            maxWidth: '600px',
            maxHeight: '90vh',
            overflow: 'auto',
            border: '1px solid var(--account-card-border)',
            boxShadow: 'var(--account-card-shadow-hover)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '24px',
              borderBottom: '1px solid var(--account-card-border)'
            }}
          >
            <h2
              style={{
                fontSize: '18px',
                lineHeight: '28px',
                fontWeight: '600',
                color: 'var(--account-title)',
                fontFamily: 'Inter, system-ui, sans-serif'
              }}
            >
              {address ? 'Edit address' : 'Add new address'}
            </h2>

            <button
              onClick={onClose}
              disabled={isLoading}
              style={{
                background: 'none',
                border: 'none',
                padding: '4px',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                color: 'var(--account-subtext)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '6px',
                opacity: isLoading ? 0.4 : 1
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div style={{ padding: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <FormInput
                    id="firstName"
                    label="First name"
                    value={formData.firstName}
                    onChange={(e) => updateField('firstName', e.target.value)}
                    error={errors.firstName}
                    disabled={isLoading}
                  />

                  <FormInput
                    id="lastName"
                    label="Last name"
                    value={formData.lastName}
                    onChange={(e) => updateField('lastName', e.target.value)}
                    error={errors.lastName}
                    disabled={isLoading}
                  />
                </div>

                <FormInput
                  id="company"
                  label="Company (optional)"
                  value={formData.company}
                  onChange={(e) => updateField('company', e.target.value)}
                  disabled={isLoading}
                />

                <FormInput
                  id="address1"
                  label="Address"
                  value={formData.address1}
                  onChange={(e) => updateField('address1', e.target.value)}
                  error={errors.address1}
                  placeholder="123 Main Street"
                  disabled={isLoading}
                />

                <FormInput
                  id="address2"
                  label="Apartment, suite, etc. (optional)"
                  value={formData.address2}
                  onChange={(e) => updateField('address2', e.target.value)}
                  placeholder="Apt 4B"
                  disabled={isLoading}
                />

                <FormInput
                  id="city"
                  label="City"
                  value={formData.city}
                  onChange={(e) => updateField('city', e.target.value)}
                  error={errors.city}
                  disabled={isLoading}
                />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <FormInput
                    id="province"
                    label="State / Province"
                    value={formData.province}
                    onChange={(e) => updateField('province', e.target.value)}
                    error={errors.province}
                    placeholder="CA"
                    disabled={isLoading}
                  />

                  <FormInput
                    id="zip"
                    label="ZIP / Postal code"
                    value={formData.zip}
                    onChange={(e) => updateField('zip', e.target.value)}
                    error={errors.zip}
                    placeholder="94103"
                    disabled={isLoading}
                  />
                </div>

                <FormInput
                  id="country"
                  label="Country"
                  value={formData.country}
                  onChange={(e) => updateField('country', e.target.value)}
                  error={errors.country}
                  disabled={isLoading}
                />

                <FormInput
                  id="phone"
                  label="Phone (optional)"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Footer */}
            <div
              style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'flex-end',
                padding: '24px',
                borderTop: '1px solid var(--account-card-border)'
              }}
            >
              <AccountButton
                type="button"
                variant="secondary"
                size="md"
                onClick={onClose}
                disabled={isLoading}
              >
                Cancel
              </AccountButton>
              <AccountButton
                type="submit"
                variant="primary"
                size="md"
                isLoading={isLoading}
              >
                {address ? 'Save changes' : 'Add address'}
              </AccountButton>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
