import { MapPin, MoreVertical, Check } from 'lucide-react';
import { CustomerAddress } from '../types';
import { useState } from 'react';

interface AddressCardProps {
  address: CustomerAddress;
  onEdit: (address: CustomerAddress) => void;
  onDelete: (addressId: string) => void;
  onSetDefault: (addressId: string) => void;
}

export function AddressCard({ address, onEdit, onDelete, onSetDefault }: AddressCardProps) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: 'var(--account-card-bg)',
        border: '1px solid var(--account-card-border)',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: 'var(--account-card-shadow)'
      }}
    >
      {/* Default Badge */}
      {address.isDefault && (
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '2px 8px',
            backgroundColor: 'var(--account-success-bg)',
            border: '1px solid var(--account-success-border)',
            borderRadius: '6px',
            marginBottom: '12px'
          }}
        >
          <Check size={12} style={{ color: 'var(--account-success-text)' }} />
          <span
            style={{
              fontSize: '12px',
              lineHeight: '18px',
              fontWeight: '500',
              color: 'var(--account-success-text)',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            Default
          </span>
        </div>
      )}

      {/* Actions Menu */}
      <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
        <button
          onClick={() => setShowMenu(!showMenu)}
          style={{
            background: 'none',
            border: 'none',
            padding: '4px',
            cursor: 'pointer',
            color: 'var(--account-subtext)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '6px',
            transition: 'all 0.15s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--account-nav-hover-bg)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <MoreVertical size={20} />
        </button>

        {showMenu && (
          <>
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 10
              }}
              onClick={() => setShowMenu(false)}
            />
            <div
              style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                marginTop: '4px',
                backgroundColor: 'var(--account-menu-bg)',
                border: '1px solid var(--account-card-border)',
                borderRadius: '10px',
                boxShadow: 'var(--account-card-shadow-hover)',
                padding: '4px',
                minWidth: '160px',
                zIndex: 20
              }}
            >
              <button
                onClick={() => {
                  setShowMenu(false);
                  onEdit(address);
                }}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: '400',
                  color: 'var(--account-text)',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  cursor: 'pointer',
                  borderRadius: '6px',
                  transition: 'all 0.15s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--account-nav-hover-bg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Edit address
              </button>
              
              {!address.isDefault && (
                <button
                  onClick={() => {
                    setShowMenu(false);
                    onSetDefault(address.id);
                  }}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontWeight: '400',
                    color: 'var(--account-text)',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    cursor: 'pointer',
                    borderRadius: '6px',
                    transition: 'all 0.15s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--account-nav-hover-bg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  Set as default
                </button>
              )}

              <div style={{ height: '1px', backgroundColor: 'var(--account-card-border)', margin: '4px 0' }} />

              <button
                onClick={() => {
                  setShowMenu(false);
                  onDelete(address.id);
                }}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: '400',
                  color: 'var(--account-error-border)',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  cursor: 'pointer',
                  borderRadius: '6px',
                  transition: 'all 0.15s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--account-error-bg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Delete address
              </button>
            </div>
          </>
        )}
      </div>

      {/* Address Content */}
      <div style={{ display: 'flex', gap: '12px' }}>
        <div
          style={{
            flexShrink: 0,
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--account-icon-bg)',
            borderRadius: '8px'
          }}
        >
          <MapPin size={20} style={{ color: 'var(--account-subtext)' }} />
        </div>

        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: '600',
              color: 'var(--account-title)',
              fontFamily: 'Inter, system-ui, sans-serif',
              marginBottom: '4px'
            }}
          >
            {address.firstName} {address.lastName}
          </div>

          <div
            style={{
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '400',
              color: 'var(--account-subtext)',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            {address.company && <div>{address.company}</div>}
            <div>{address.address1}</div>
            {address.address2 && <div>{address.address2}</div>}
            <div>
              {address.city}, {address.province} {address.zip}
            </div>
            <div>{address.country}</div>
            {address.phone && <div style={{ marginTop: '8px' }}>{address.phone}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
