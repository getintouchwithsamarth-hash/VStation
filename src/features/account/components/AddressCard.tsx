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
        backgroundColor: '#FFFFFF',
        border: '1px solid #EAECF0',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)'
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
            backgroundColor: '#ECFDF3',
            border: '1px solid #12B76A',
            borderRadius: '6px',
            marginBottom: '12px'
          }}
        >
          <Check size={12} style={{ color: '#039855' }} />
          <span
            style={{
              fontSize: '12px',
              lineHeight: '18px',
              fontWeight: '500',
              color: '#039855',
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
            color: '#667085',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '6px',
            transition: 'all 0.15s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#F9FAFB';
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
                backgroundColor: '#FFFFFF',
                border: '1px solid #EAECF0',
                borderRadius: '10px',
                boxShadow: '0 4px 10px -2px rgba(16, 24, 40, 0.04), 0 2px 6px -2px rgba(16, 24, 40, 0.08)',
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
                  color: '#344054',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  cursor: 'pointer',
                  borderRadius: '6px',
                  transition: 'all 0.15s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F9FAFB';
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
                    color: '#344054',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    cursor: 'pointer',
                    borderRadius: '6px',
                    transition: 'all 0.15s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F9FAFB';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  Set as default
                </button>
              )}

              <div style={{ height: '1px', backgroundColor: '#EAECF0', margin: '4px 0' }} />

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
                  color: '#F04438',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  cursor: 'pointer',
                  borderRadius: '6px',
                  transition: 'all 0.15s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FEF3F2';
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
            backgroundColor: '#F9FAFB',
            borderRadius: '8px'
          }}
        >
          <MapPin size={20} style={{ color: '#667085' }} />
        </div>

        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: '600',
              color: '#101828',
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
              color: '#667085',
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
