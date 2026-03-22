import { Package, ChevronRight } from 'lucide-react';
import { CustomerOrder } from '../types';

interface OrderCardProps {
  order: CustomerOrder;
  onClick: (orderId: string) => void;
}

export function OrderCard({ order, onClick }: OrderCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getFulfillmentStatusColor = (status: CustomerOrder['fulfillmentStatus']) => {
    switch (status) {
      case 'FULFILLED':
        return { bg: 'var(--account-success-bg)', border: 'var(--account-success-border)', text: 'var(--account-success-text)', label: 'Fulfilled' };
      case 'UNFULFILLED':
        return { bg: 'var(--account-warning-bg)', border: 'var(--account-warning-border)', text: 'var(--account-warning-text)', label: 'Unfulfilled' };
      case 'PARTIALLY_FULFILLED':
        return { bg: 'var(--account-info-bg)', border: 'var(--account-info-border)', text: 'var(--account-info-text)', label: 'Partially fulfilled' };
      case 'CANCELLED':
        return { bg: 'var(--account-error-bg)', border: 'var(--account-error-border)', text: 'var(--account-error-text)', label: 'Cancelled' };
      default:
        return { bg: 'var(--account-nav-active-bg)', border: 'var(--account-input-border)', text: 'var(--account-subtext)', label: status };
    }
  };

  const statusConfig = getFulfillmentStatusColor(order.fulfillmentStatus);

  return (
    <button
      onClick={() => onClick(order.id)}
      style={{
        width: '100%',
        backgroundColor: 'var(--account-card-bg)',
        border: '1px solid var(--account-card-border)',
        borderRadius: '12px',
        padding: '20px',
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'all 0.15s',
        boxShadow: 'var(--account-card-shadow)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--account-card-shadow-hover)';
        e.currentTarget.style.borderColor = 'var(--account-input-border)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'var(--account-card-shadow)';
        e.currentTarget.style.borderColor = 'var(--account-card-border)';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
        {/* Icon */}
        <div
          style={{
            flexShrink: 0,
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--account-icon-bg)',
            borderRadius: '10px'
          }}
        >
          <Package size={24} style={{ color: 'var(--account-subtext)' }} />
        </div>

        {/* Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
            <h3
              style={{
                fontSize: '16px',
                lineHeight: '24px',
                fontWeight: '600',
                color: 'var(--account-title)',
                fontFamily: 'Inter, system-ui, sans-serif'
              }}
            >
              Order #{order.orderNumber}
            </h3>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '2px 8px',
                backgroundColor: statusConfig.bg,
                border: `1px solid ${statusConfig.border}`,
                borderRadius: '6px'
              }}
            >
              <span
                style={{
                  fontSize: '12px',
                  lineHeight: '18px',
                  fontWeight: '500',
                  color: statusConfig.text,
                  fontFamily: 'Inter, system-ui, sans-serif'
                }}
              >
                {statusConfig.label}
              </span>
            </div>
          </div>

          <div
            style={{
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '400',
              color: 'var(--account-subtext)',
              fontFamily: 'Inter, system-ui, sans-serif',
              marginBottom: '12px'
            }}
          >
            Placed on {formatDate(order.createdAt)} • {order.lineItems.length} item
            {order.lineItems.length !== 1 ? 's' : ''}
          </div>

          {/* Price */}
          <div
            style={{
              fontSize: '18px',
              lineHeight: '28px',
              fontWeight: '600',
              color: 'var(--account-title)',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            {order.totalPrice}
          </div>
        </div>

        {/* Arrow */}
        <div
          style={{
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--account-input-disabled-text)'
          }}
        >
          <ChevronRight size={20} />
        </div>
      </div>
    </button>
  );
}
