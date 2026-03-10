import { useState } from 'react';
import { PresentationDrawer } from './PresentationDrawer';
import { PresentationPage } from './PresentationPage';
import { CheckoutHandoff } from './CheckoutHandoff';
import { CardInstance } from '../../../components/ui/Card';
import { ButtonInstance } from '../../../components/ui/Button';
import { useCart } from '../CartContext';

export function ShoppingCart() {
  const [activeFlowPreview, setActiveFlowPreview] = useState<'drawer' | 'page' | null>(null);
  const { cartCount, subtotal } = useCart();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <PresentationDrawer />
      <PresentationPage />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: '16px'
        }}
      >
        <FlowReferenceCard
          title="Flow"
          subtitle="Presentation / Drawer"
          onPreview={() => setActiveFlowPreview('drawer')}
        />
        <FlowReferenceCard
          title="Flow"
          subtitle="Presentation / Page"
          onPreview={() => setActiveFlowPreview('page')}
        />
      </div>

      {activeFlowPreview ? (
        <CheckoutHandoff
          itemCount={cartCount}
          subtotal={subtotal}
          onBack={() => setActiveFlowPreview(null)}
          onClose={() => setActiveFlowPreview(null)}
          onContinue={() => setActiveFlowPreview(null)}
        />
      ) : null}
    </div>
  );
}

function FlowReferenceCard({
  title,
  subtitle,
  onPreview
}: {
  title: string;
  subtitle: string;
  onPreview: () => void;
}) {
  return (
    <CardInstance variant="subtle" padding="md">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '12px',
            lineHeight: '18px',
            fontWeight: '600',
            color: "var(--muted-foreground)"
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '500',
            color: "var(--foreground)"
          }}
        >
          {subtitle} next step: CheckoutHandoff overlay
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <ButtonInstance variant="ghost" size="sm" label="Preview CheckoutHandoff" onClick={onPreview} />
        </div>
      </div>
    </CardInstance>
  );
}
