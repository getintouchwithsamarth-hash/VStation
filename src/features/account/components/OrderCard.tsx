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
        return { bg: '#ECFDF3', border: '#12B76A', text: '#039855', label: 'Fulfilled' };
      case 'UNFULFILLED':
        return { bg: '#FFFAEB', border: '#F79009', text: '#DC6803', label: 'Unfulfilled' };
      case 'PARTIALLY_FULFILLED':
        return { bg: 'rgba(79, 70, 229, 0.06)', border: '#4F46E5', text: '#4338CA', label: 'Partially fulfilled' };
      case 'CANCELLED':
        return { bg: '#FEF3F2', border: '#F04438', text: '#D92D20', label: 'Cancelled' };
      default:
        return { bg: '#F9FAFB', border: '#D0D5DD', text: '#667085', label: status };
    }
  };

  const statusConfig = getFulfillmentStatusColor(order.fulfillmentStatus);

  return (
    <button
      onClick={() => onClick(order.id)}
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        border: '1px solid #EAECF0',
        borderRadius: '12px',
        padding: '20px',
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'all 0.15s',
        boxShadow: '0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 10px -2px rgba(16, 24, 40, 0.04), 0 2px 6px -2px rgba(16, 24, 40, 0.08)';
        e.currentTarget.style.borderColor = '#D0D5DD';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)';
        e.currentTarget.style.borderColor = '#EAECF0';
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
            backgroundColor: '#F9FAFB',
            borderRadius: '10px'
          }}
        >
          <Package size={24} style={{ color: '#667085' }} />
        </div>

        {/* Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
            <h3
              style={{
                fontSize: '16px',
                lineHeight: '24px',
                fontWeight: '600',
                color: '#101828',
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
              color: '#667085',
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
              color: '#101828',
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
            color: '#98A2B3'
          }}
        >
          <ChevronRight size={20} />
        </div>
      </div>
    </button>
  );
}
