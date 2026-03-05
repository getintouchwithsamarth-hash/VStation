import { ButtonInstance } from '../../../components/ui/Button';
import { BadgeInstance } from '../../../components/ui/Badge';
import { CartItemCard } from './CartItemCard';
import { OrderSummaryCard } from './OrderSummaryCard';
import { useCart } from '../CartContext';
import { useCartMockData } from '../hooks/useCartMockData';

export function PresentationDrawer() {
  const {
    items,
    cartCount,
    subtotal,
    total,
    closeCartDrawer,
    incrementItem,
    decrementItem,
    removeItem
  } = useCart();
  const { copy } = useCartMockData();

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50
      }}
    >
      {/* Scrim */}
      <div
        onClick={closeCartDrawer}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
      />

      {/* DrawerRight Panel */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '420px',
          backgroundColor: '#FFFFFF',
          borderLeft: '1px solid #E5E7EB',
          boxShadow: '-4px 0 6px -1px rgba(0, 0, 0, 0.1), -2px 0 4px -1px rgba(0, 0, 0, 0.06)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* HeaderSlot */}
        <div
          style={{
            padding: '24px',
            borderBottom: '1px solid #E5E7EB',
            flexShrink: 0
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: '18px',
                lineHeight: '28px',
                fontWeight: '600',
                color: '#111827',
                fontFamily: 'Inter, system-ui, sans-serif'
              }}
            >
              {copy.title}
            </h3>
            <BadgeInstance
              label={`${cartCount} ${copy.writeItemSuffix}`}
              variant="neutral"
              size="sm"
            />
          </div>
        </div>

        {/* BodySlot */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}
        >
          {/* Cart items stack */}
          {items.length ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              {items.map((item) => (
                <CartItemCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  variant={item.variant}
                  price={`₹${item.price.toLocaleString('en-IN')}`}
                  quantity={item.quantity}
                  imageUrl={item.imageUrl}
                  imageAlt={item.imageAlt}
                  onIncrement={incrementItem}
                  onDecrement={decrementItem}
                  onRemove={removeItem}
                />
              ))}
            </div>
          ) : (
            <div
              style={{
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '400',
                color: '#6B7280',
                fontFamily: 'Inter, system-ui, sans-serif'
              }}
            >
              {copy.emptyCartMessage}
            </div>
          )}

          {/* Order Summary */}
          <OrderSummaryCard subtotal={subtotal} total={total} />
        </div>

        {/* FooterSlot */}
        <div
          style={{
            padding: '24px',
            borderTop: '1px solid #E5E7EB',
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          {/* Primary Button */}
          <ButtonInstance
            variant="primary"
            size="lg"
            label={copy.drawerCheckoutLabel}
            onClick={() => {
              closeCartDrawer();
              window.location.href = '/cart';
            }}
          />
          
          {/* Secondary Button */}
          <ButtonInstance
            variant="secondary"
            size="lg"
            label={copy.drawerContinueLabel}
            onClick={closeCartDrawer}
          />

          {/* Small muted line */}
          <div
            style={{
              fontSize: '12px',
              lineHeight: '18px',
              fontWeight: '400',
              color: '#6B7280',
              fontFamily: 'Inter, system-ui, sans-serif',
              textAlign: 'center'
            }}
          >
            {copy.drawerFooterCaption}
          </div>
        </div>
      </div>

    </div>
  );
}
