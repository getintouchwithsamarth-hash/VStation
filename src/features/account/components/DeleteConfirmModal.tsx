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
          backgroundColor: 'rgba(0, 0, 0, 0.40)',
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
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            width: '100%',
            maxWidth: '440px',
            boxShadow: '0 12px 24px -4px rgba(16, 24, 40, 0.06), 0 6px 12px -4px rgba(16, 24, 40, 0.08)'
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
                backgroundColor: '#FEF3F2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}
            >
              <AlertTriangle size={24} style={{ color: '#F04438' }} />
            </div>

            {/* Content */}
            <h2
              style={{
                fontSize: '18px',
                lineHeight: '28px',
                fontWeight: '600',
                color: '#101828',
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
                color: '#667085',
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
