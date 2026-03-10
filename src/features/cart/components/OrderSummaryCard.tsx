import { CardInstance } from '../../../components/ui/Card';
import { PincodeEstimator } from '../../../components/ui/PincodeEstimator';
import { formatINR } from '../CartContext';
import { useCartMockData } from '../hooks/useCartMockData';

export function OrderSummaryCard({
  subtotal = 5997,
  total = 5997
}: {
  subtotal?: number;
  total?: number;
}) {
  const { copy } = useCartMockData();

  return (
    <CardInstance variant="elevated" padding="md">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}
      >
        {/* Title */}
        <div
          style={{
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '600',
            color: "var(--foreground)",
            fontFamily: 'Inter, system-ui, sans-serif'
          }}
        >
          {copy.summaryTitle}
        </div>

        {/* Summary rows */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          {/* Subtotal */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '400',
                color: "var(--muted-foreground)",
                fontFamily: 'Inter, system-ui, sans-serif'
              }}
            >
              {copy.subtotalLabel}
            </div>
            <div
              style={{
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '600',
                color: "var(--foreground)",
                fontFamily: 'Inter, system-ui, sans-serif'
              }}
            >
              {formatINR(subtotal)}
            </div>
          </div>

          {/* Shipping */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '400',
                color: "var(--muted-foreground)",
                fontFamily: 'Inter, system-ui, sans-serif'
              }}
            >
              {copy.shippingLabel}
            </div>
            <div
              style={{
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '400',
                color: "var(--muted-foreground)",
                fontFamily: 'Inter, system-ui, sans-serif'
              }}
            >
              {copy.shippingValue}
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              height: '1px',
              backgroundColor: 'var(--border)'
            }}
          />

          {/* Total */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '600',
                color: "var(--foreground)",
                fontFamily: 'Inter, system-ui, sans-serif'
              }}
            >
              {copy.totalLabel}
            </div>
            <h4
              style={{
                margin: 0,
                fontSize: '18px',
                lineHeight: '28px',
                fontWeight: '600',
                color: "var(--foreground)",
                fontFamily: 'Inter, system-ui, sans-serif'
              }}
            >
              {formatINR(total)}
            </h4>
          </div>
        </div>

        <PincodeEstimator />

        {/* Muted line */}
        <div
          style={{
            fontSize: '12px',
            lineHeight: '18px',
            fontWeight: '400',
            color: "var(--muted-foreground)",
            fontFamily: 'Inter, system-ui, sans-serif'
          }}
        >
          {copy.taxesLine}
        </div>
      </div>
    </CardInstance>
  );
}
