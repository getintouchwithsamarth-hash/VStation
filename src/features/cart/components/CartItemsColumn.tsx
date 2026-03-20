import { CardInstance } from '../../../components/ui/Card';
import { ButtonInstance } from '../../../components/ui/Button';
import { CartItemCard } from './CartItemCard';
import { useCart, formatINR } from '../CartContext';
import { useCartMockData } from '../hooks/useCartMockData';
import { FormAlert } from '../../account/components/FormAlert';

export function CartItemsColumn() {
  const { items, cartError, clearCartError, incrementItem, decrementItem, removeItem } = useCart();
  const { addOns, copy } = useCartMockData();

  return (
    <div
      style={{
        flex: '0 0 65%',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px'
      }}
    >
      {/* Title */}
      <h2
        style={{
          margin: 0,
          fontSize: '30px',
          lineHeight: '38px',
          fontWeight: '600',
          color: "var(--foreground)",
          fontFamily: 'Inter, system-ui, sans-serif'
        }}
      >
        {copy.yourCartTitle}
      </h2>

      {cartError ? (
        <div onClick={clearCartError}>
          <FormAlert type="error">{cartError}</FormAlert>
        </div>
      ) : null}

      {/* Cart items stack */}
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
            price={formatINR(item.price)}
            quantity={item.quantity}
            imageUrl={item.imageUrl}
            imageAlt={item.imageAlt}
            onIncrement={incrementItem}
            onDecrement={decrementItem}
            onRemove={removeItem}
          />
        ))}
      </div>

      {/* Add-ons section */}
      <CardInstance variant="subtle" padding="lg">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
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
            {copy.addOnsTitle}
          </h4>

          {/* 2-item mini row */}
          <div
            style={{
              display: 'flex',
              gap: '16px'
            }}
          >
            {addOns.map((addOn) => (
              <CardInstance key={addOn.id} variant="subtle" padding="md">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    width: '200px'
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '160px',
                      backgroundColor: "var(--muted)",
                      borderRadius: '12px',
                      overflow: 'hidden'
                    }}
                  >
                    {addOn.imageUrl ? (
                      <img
                        src={addOn.imageUrl}
                        alt={addOn.imageAlt || addOn.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block'
                        }}
                      />
                    ) : null}
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
                    {addOn.name}
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
                    {formatINR(addOn.price)}
                  </div>
                  <ButtonInstance variant="ghost" size="sm" label={copy.addButtonLabel} />
                </div>
              </CardInstance>
            ))}
          </div>
        </div>
      </CardInstance>
    </div>
  );
}
