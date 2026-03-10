import { BadgeInstance } from '../../../components/ui/Badge';
import { ButtonInstance } from '../../../components/ui/Button';
import { CardInstance } from '../../../components/ui/Card';
import { ModalCenterInstance } from '../../../components/ui/Modal';
import { formatINR } from '../CartContext';

interface CheckoutHandoffProps {
  itemCount: number;
  subtotal: number;
  onContinue: () => void;
  onBack: () => void;
  onClose: () => void;
}

export function CheckoutHandoff({
  itemCount,
  subtotal,
  onContinue,
  onBack,
  onClose
}: CheckoutHandoffProps) {
  return (
    <ModalCenterInstance
      onClose={onClose}
      title="Heading to checkout"
      subtitle="You'll complete payment securely in checkout."
      footer={<FooterActions onContinue={onContinue} onBack={onBack} />}
    >
      <div style={{ height: '1px', backgroundColor: 'var(--border)', marginTop: '-8px' }} />
      <OrderSummaryCard itemCount={itemCount} subtotal={subtotal} />
      <ProgressCue />
    </ModalCenterInstance>
  );
}

function OrderSummaryCard({
  itemCount,
  subtotal
}: {
  itemCount: number;
  subtotal: number;
}) {
  return (
    <CardInstance variant="subtle" padding="md">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        <SummaryRow label="Items" value={String(itemCount)} valueWeight="600" />
        <SummaryRow label="Shipping" value="Calculated in checkout" />
        <SummaryRow
          label="Total"
          value={formatINR(subtotal)}
          valueWeight="600"
          valueSize="20px"
          valueLineHeight="30px"
        />

        <div style={{ marginTop: '6px' }}>
          <BadgeInstance label="No password needed" variant="neutral" size="sm" />
        </div>
      </div>
    </CardInstance>
  );
}

function SummaryRow({
  label,
  value,
  valueWeight = '400',
  valueSize = '14px',
  valueLineHeight = '20px'
}: {
  label: string;
  value: string;
  valueWeight?: '400' | '600';
  valueSize?: string;
  valueLineHeight?: string;
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <div style={{ fontSize: '14px', lineHeight: '20px', color: "var(--muted-foreground)" }}>{label}</div>
      <div
        style={{
          fontSize: valueSize,
          lineHeight: valueLineHeight,
          fontWeight: valueWeight,
          color: "var(--foreground)"
        }}
      >
        {value}
      </div>
    </div>
  );
}

function ProgressCue() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div
        style={{
          position: 'relative',
          height: '6px',
          width: '100%',
          backgroundColor: 'var(--border)',
          borderRadius: '999px',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '6px',
            width: '45%',
            backgroundColor: '#4F46E5',
            borderRadius: '999px',
            transition: 'width 0.3s ease-out'
          }}
        />
      </div>

      <div style={{ fontSize: '12px', lineHeight: '18px', color: "var(--muted-foreground)" }}>Preparing your checkout…</div>
    </div>
  );
}

function FooterActions({
  onContinue,
  onBack
}: {
  onContinue: () => void;
  onBack: () => void;
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        width: '100%'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
        <ButtonInstance label="Back to cart" variant="ghost" size="md" onClick={onBack} />
        <ButtonInstance label="Continue" variant="primary" size="md" onClick={onContinue} />
      </div>

      <div
        style={{
          fontSize: '12px',
          lineHeight: '18px',
          color: "var(--muted-foreground)",
          textAlign: 'right'
        }}
      >
        If checkout doesn't open, try again.
      </div>
    </div>
  );
}
