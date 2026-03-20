import { CardInstance } from '../../../components/ui/Card';
import { ButtonInstance } from '../../../components/ui/Button';

export function CartItemCard({ 
  id,
  name, 
  productHandle,
  variant, 
  price, 
  quantity,
  imageUrl,
  imageAlt,
  onIncrement,
  onDecrement,
  onRemove
}: { 
  id: string;
  name: string; 
  productHandle: string;
  variant: string; 
  price: string; 
  quantity: number;
  imageUrl?: string;
  imageAlt?: string;
  onIncrement?: (id: string) => void;
  onDecrement?: (id: string) => void;
  onRemove?: (id: string) => void;
}) {
  const productHref = `/products/${productHandle}`;

  return (
    <CardInstance variant="subtle" padding="md">
      <div
        style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-start'
        }}
      >
        <a
          href={productHref}
          style={{
            flex: 1,
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-start',
            textDecoration: 'none',
            color: 'inherit',
            minWidth: 0
          }}
        >
          <div
            style={{
              width: '72px',
              height: '72px',
              backgroundColor: "var(--muted)",
              borderRadius: '12px',
              flexShrink: 0,
              overflow: 'hidden'
            }}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={imageAlt || name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            ) : null}
          </div>

          {/* Middle section */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              minWidth: 0
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
              {name}
            </div>
            <div
              style={{
                fontSize: '12px',
                lineHeight: '18px',
                fontWeight: '400',
                color: "var(--muted-foreground)",
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
                color: "var(--foreground)",
                fontFamily: 'Inter, system-ui, sans-serif'
              }}
            >
              {price}
            </div>
          </div>
        </a>

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
                color: "var(--foreground)",
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
