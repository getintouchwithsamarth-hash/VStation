import { useState } from 'react';
import { ButtonInstance } from '../../../components/ui/Button';
import { CheckoutHandoff } from './CheckoutHandoff';
import { OrderSummaryCard } from './OrderSummaryCard';
import { useCart } from '../CartContext';
import { useCartMockData } from '../hooks/useCartMockData';

export function SummaryColumn() {
  const { cartCount, subtotal, total, checkout } = useCart();
  const { copy } = useCartMockData();
  const [showCheckoutHandoff, setShowCheckoutHandoff] = useState(false);

  return (
    <div
      className="cart-summary-column"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}
    >
      <style>{`
        .cart-summary-column {
          flex: 0 0 35%;
          min-width: 280px;
          position: sticky;
          top: 24px;
        }

        @media (max-width: 960px) {
          .cart-summary-column {
            flex: 1 1 auto;
            width: 100%;
            min-width: 0;
            position: static;
            top: auto;
          }
        }
      `}</style>
      {/* Order Summary */}
      <OrderSummaryCard subtotal={subtotal} total={total} />

      {/* Primary Button */}
      <ButtonInstance
        variant="primary"
        size="lg"
        data-testid="checkout-button"
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
          color: "var(--foreground)",
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
            void checkout();
          }}
        />
      ) : null}
    </div>
  );
}
