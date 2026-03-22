import { AlertTriangle } from 'lucide-react';
import { AccountButton } from './AccountButton';

interface DeleteConfirmModalProps {
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function DeleteConfirmModal({ title, description, onConfirm, onCancel }: DeleteConfirmModalProps) {
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
          zIndex: 50
        }}
        onClick={onCancel}
      >
        {/* Modal */}
        <div
          style={{
            backgroundColor: 'var(--account-card-bg)',
            borderRadius: '16px',
            width: '100%',
            maxWidth: '440px',
            border: '1px solid var(--account-card-border)',
            boxShadow: 'var(--account-card-shadow-hover)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ padding: '24px' }}>
            {/* Icon */}
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: 'var(--account-error-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}
            >
              <AlertTriangle size={24} style={{ color: 'var(--account-error-border)' }} />
            </div>

            {/* Content */}
            <h2
              style={{
                fontSize: '18px',
                lineHeight: '28px',
                fontWeight: '600',
                color: 'var(--account-title)',
                fontFamily: 'Inter, system-ui, sans-serif',
                marginBottom: '8px'
              }}
            >
              {title}
            </h2>

            <p
              style={{
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '400',
                color: 'var(--account-subtext)',
                fontFamily: 'Inter, system-ui, sans-serif',
                marginBottom: '24px'
              }}
            >
              {description}
            </p>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <AccountButton
                variant="secondary"
                size="md"
                onClick={onCancel}
              >
                Cancel
              </AccountButton>
              <AccountButton
                variant="destructive"
                size="md"
                onClick={onConfirm}
              >
                Delete
              </AccountButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
