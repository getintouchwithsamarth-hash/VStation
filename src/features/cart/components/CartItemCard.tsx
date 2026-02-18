import { CardInstance } from '../../../components/ui/Card';
import { ButtonInstance } from '../../../components/ui/Button';

export function CartItemCard({ 
  id,
  name, 
  variant, 
  price, 
  quantity,
  onIncrement,
  onDecrement,
  onRemove
}: { 
  id: string;
  name: string; 
  variant: string; 
  price: string; 
  quantity: number;
  onIncrement?: (id: string) => void;
  onDecrement?: (id: string) => void;
  onRemove?: (id: string) => void;
}) {
  return (
    <CardInstance variant="subtle" padding="md">
      <div
        style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-start'
        }}
      >
        {/* Image */}
        <div
          style={{
            width: '72px',
            height: '72px',
            backgroundColor: '#F3F4F6',
            borderRadius: '12px',
            flexShrink: 0
          }}
        />

        {/* Middle section */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}
        >
          <div
            style={{
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '600',
              color: '#111827',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: '12px',
              lineHeight: '18px',
              fontWeight: '400',
              color: '#6B7280',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            {variant}
          </div>
          <div
            style={{
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '600',
              color: '#111827',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            {price}
          </div>
        </div>

        {/* Right section - Controls */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'flex-end'
          }}
        >
          {/* Quantity controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <ButtonInstance
              variant="ghost"
              size="sm"
              label="−"
              onClick={onDecrement ? () => onDecrement(id) : undefined}
            />
            <div
              style={{
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '500',
                color: '#111827',
                fontFamily: 'Inter, system-ui, sans-serif',
                minWidth: '20px',
                textAlign: 'center'
              }}
            >
              {quantity}
            </div>
            <ButtonInstance
              variant="ghost"
              size="sm"
              label="+"
              onClick={onIncrement ? () => onIncrement(id) : undefined}
            />
          </div>
          <ButtonInstance
            variant="ghost"
            size="sm"
            label="Remove"
            onClick={onRemove ? () => onRemove(id) : undefined}
          />
        </div>
      </div>
    </CardInstance>
  );
}
