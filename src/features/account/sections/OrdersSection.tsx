import { Package } from 'lucide-react';
import { OrderCard } from '../components/OrderCard';
import { EmptyState } from '../components/EmptyState';
import { AccountButton } from '../components/AccountButton';
import { FormAlert } from '../components/FormAlert';
import { useCustomerOrders } from '../hooks';

export function OrdersSection() {
  const { orders, hasMore, isLoading, isLoadingMore, error, loadMore } = useCustomerOrders();

  const handleOrderClick = (orderId: string) => {
    console.log('View order:', orderId);
    // In real app: navigate to order detail page
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
          Order History
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
          View and track your orders
        </p>
      </div>

      {error && (
        <div style={{ marginBottom: '16px' }}>
          <FormAlert type="error">{error}</FormAlert>
        </div>
      )}

      {isLoading ? (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #EAECF0',
            borderRadius: '12px',
            padding: '32px',
            boxShadow: '0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)'
          }}
        >
          <p
            style={{
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '400',
              color: '#667085',
              fontFamily: 'Inter, system-ui, sans-serif',
              margin: 0
            }}
          >
            Loading orders...
          </p>
        </div>
      ) : orders.length > 0 ? (
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: hasMore ? '24px' : '0' }}>
            {orders.map((order) => (
              <OrderCard
                key={order.id}
                order={order}
                onClick={handleOrderClick}
              />
            ))}
          </div>

          {hasMore && (
            <div style={{ textAlign: 'center' }}>
              <AccountButton variant="secondary" size="md" onClick={() => void loadMore()} isLoading={isLoadingMore}>
                Load more orders
              </AccountButton>
            </div>
          )}
        </div>
      ) : (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #EAECF0',
            borderRadius: '12px',
            boxShadow: '0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)'
          }}
        >
          <EmptyState
            icon={<Package size={32} />}
            title="No orders yet"
            description="When you place an order, it will appear here so you can track its status."
            action={
              <AccountButton variant="primary" size="md">
                Start shopping
              </AccountButton>
            }
          />
        </div>
      )}
    </div>
  );
}
