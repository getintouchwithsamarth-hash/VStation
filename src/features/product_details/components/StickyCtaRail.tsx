import { useState } from 'react';
import { CardInstance } from '../../../components/ui/Card';
import { BadgeInstance } from '../../../components/ui/Badge';
import { ButtonInstance } from '../../../components/ui/Button';
import { useProductDetailMockData } from '../hooks/useProductDetailMockData';
import { useCart } from '../../cart/CartContext';
import { CheckoutHandoff } from '../../cart/components/CheckoutHandoff';

export function StickyCtaRail() {
  const [showCheckoutHandoffReference, setShowCheckoutHandoffReference] = useState(false);
  const { addItem, cartCount, subtotal } = useCart();
  const { stickyCtaRail, productMain } = useProductDetailMockData();

  return (
    <>
      <CardInstance variant="elevated" padding="md">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            minWidth: '340px'
          }}
        >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '600',
              color: '#101828'
            }}
          >
            {stickyCtaRail.name}
          </div>
          <div
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '600',
              color: '#101828'
            }}
          >
            {stickyCtaRail.price}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <BadgeInstance label={stickyCtaRail.stockLabel} variant="neutral" size="sm" />
          <div
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '12px',
              lineHeight: '18px',
              fontWeight: '400',
              color: '#667085'
            }}
          >
            {stickyCtaRail.shippingLabel}
          </div>
        </div>

        <div style={{ paddingTop: '4px' }}>
          <ButtonInstance
            variant="primary"
            size="md"
            label={stickyCtaRail.addToCartLabel}
            disabled={!stickyCtaRail.isInStock || !stickyCtaRail.variantId}
            onClick={() => {
              if (!stickyCtaRail.variantId) {
                return;
              }
              void addItem(stickyCtaRail.variantId);
            }}
          />
          <div
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '12px',
              lineHeight: '18px',
              fontWeight: '400',
              color: '#98A2B3',
              marginTop: '6px'
            }}
          >
            Checkout opens in modal
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '8px',
            paddingTop: '4px',
            borderTop: '1px solid #F3F4F6'
          }}
        >
          <ButtonInstance variant="ghost" size="sm" label={stickyCtaRail.shareLabel} />
          <ButtonInstance variant="ghost" size="sm" label={stickyCtaRail.helpLabel} />
        </div>

        <div
          style={{
            borderTop: '1px solid #F3F4F6',
            paddingTop: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          <div
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '12px',
              lineHeight: '18px',
              fontWeight: '600',
              color: '#667085'
            }}
          >
            Flow
          </div>
          <ButtonInstance
            variant="ghost"
            size="sm"
            label="Preview CheckoutHandoff"
            onClick={() => setShowCheckoutHandoffReference(true)}
          />
        </div>
        </div>
      </CardInstance>

      {showCheckoutHandoffReference ? (
        <CheckoutHandoff
          itemCount={cartCount}
          subtotal={subtotal}
          onBack={() => setShowCheckoutHandoffReference(false)}
          onClose={() => setShowCheckoutHandoffReference(false)}
          onContinue={() => {
            setShowCheckoutHandoffReference(false);
            if (productMain.buyBox.variantId) {
              void addItem(productMain.buyBox.variantId);
            }
          }}
        />
      ) : null}
    </>
  );
}
