import { CardInstance } from '../../../components/ui/Card';
import { CartItemCard } from './CartItemCard';
import { CartRelatedProducts } from './CartRelatedProducts';
import { useCart, formatINR } from '../CartContext';
import { useCartMockData } from '../hooks/useCartMockData';
import { FormAlert } from '../../account/components/FormAlert';

export function CartItemsColumn() {
  const { items, cartError, clearCartError, incrementItem, decrementItem, removeItem } = useCart();
  const { copy } = useCartMockData();

  return (
    <div className="cart-items-column" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <style>{`
        .cart-items-column {
          flex: 0 0 65%;
          min-width: 0;
        }

        @media (max-width: 960px) {
          .cart-items-column {
            flex: 1 1 auto;
            width: 100%;
          }
        }

        @media (max-width: 640px) {
          .cart-items-column__title {
            font-size: 28px !important;
            line-height: 34px !important;
          }
        }
      `}</style>
      {/* Title */}
      <h1
        className="cart-items-column__title"
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
      </h1>

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
            productHandle={item.productHandle}
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

      {/* Related products */}
      <CardInstance variant="subtle" padding="lg">
        <CartRelatedProducts />
      </CardInstance>
    </div>
  );
}
