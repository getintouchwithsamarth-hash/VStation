import { useState } from 'react';
import { ButtonInstance } from '../../../components/ui/Button';
import { CheckoutHandoff } from './CheckoutHandoff';
import { OrderSummaryCard } from './OrderSummaryCard';
import { useCart } from '../CartContext';
import { useCartMockData } from '../hooks/useCartMockData';

export function SummaryColumn() {
  const { cartCount, subtotal, total, checkoutUrl } = useCart();
  const { copy } = useCartMockData();
  const [showCheckoutHandoff, setShowCheckoutHandoff] = useState(false);

  return (
    <div
      style={{
        flex: '0 0 35%',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        position: 'sticky',
        top: '24px'
      }}
      >
      {/* Order Summary */}
      <OrderSummaryCard subtotal={subtotal} total={total} />

      {/* Primary Button */}
      <ButtonInstance
        variant="primary"
        size="lg"
        label={copy.summaryCheckoutLabel}
        onClick={() => setShowCheckoutHandoff(true)}
      />
      
      {/* Secondary Button */}
      <ButtonInstance
        variant="secondary"
        size="lg"
        label={copy.summaryContinueLabel}
        onClick={() => {
          window.location.href = '/products';
        }}
      />

      {/* Caption line */}
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
        {copy.taxesLine}
      </div>

      {showCheckoutHandoff ? (
        <CheckoutHandoff
          itemCount={cartCount}
          subtotal={subtotal}
          onBack={() => setShowCheckoutHandoff(false)}
          onClose={() => setShowCheckoutHandoff(false)}
          onContinue={() => {
            window.location.href = checkoutUrl || '/cart';
          }}
        />
      ) : null}
    </div>
  );
}
