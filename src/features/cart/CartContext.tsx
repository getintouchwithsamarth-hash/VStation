import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from 'react';
import {
  addCartLines,
  createCart,
  getCart,
  getCartId,
  removeCartLines,
  setCartId,
  updateCartLines,
  type Cart as ShopifyCart
} from '../../lib/shopify';

export type CartItem = {
  id: string;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  variantId: string;
};

type CartContextValue = {
  items: CartItem[];
  isDrawerOpen: boolean;
  cartCount: number;
  subtotal: number;
  total: number;
  checkoutUrl: string | null;
  addItem: (variantId: string) => Promise<boolean>;
  openCartDrawer: () => void;
  closeCartDrawer: () => void;
  toggleCartDrawer: () => void;
  incrementItem: (id: string) => void;
  decrementItem: (id: string) => void;
  removeItem: (id: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const mapCartItems = (cart: ShopifyCart): CartItem[] => {
  return cart.lines.edges.map((edge) => {
    const line = edge.node;
    return {
      id: line.id,
      name: line.merchandise.product.title,
      variant:
        line.merchandise.selectedOptions
          ?.map((option) => `${option.name}: ${option.value}`)
          .join(', ') || line.merchandise.title,
      price: Number.parseFloat(line.merchandise.price.amount),
      quantity: line.quantity,
      variantId: line.merchandise.id
    };
  });
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeCartId, setActiveCartId] = useState<string | null>(null);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);

  const syncCart = useCallback((cart: ShopifyCart) => {
    setItems(mapCartItems(cart));
    setActiveCartId(cart.id);
    setCheckoutUrl(cart.checkoutUrl);
    setCartId(cart.id);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const initializeCart = async () => {
      try {
        const existingCartId = getCartId();
        if (existingCartId) {
          const existingCart = await getCart(existingCartId);
          if (existingCart && !cancelled) {
            syncCart(existingCart);
            return;
          }
        }

        const newCart = await createCart();
        if (!cancelled) {
          syncCart(newCart);
        }
      } catch (error) {
        if (!cancelled) {
          console.error('Failed to initialize Shopify cart', error);
        }
      }
    };

    void initializeCart();
    return () => {
      cancelled = true;
    };
  }, [syncCart]);

  const cartCount = useMemo(
    () => items.reduce((count, item) => count + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  const value: CartContextValue = {
    items,
    isDrawerOpen,
    cartCount,
    subtotal,
    total: subtotal,
    checkoutUrl,
    addItem: async (variantId) => {
      try {
        let cartId = activeCartId;
        if (!cartId) {
          const newCart = await createCart();
          syncCart(newCart);
          cartId = newCart.id;
        }

        const existingLine = items.find((entry) => entry.variantId === variantId);
        const updatedCart = existingLine
          ? await updateCartLines(cartId, [{ id: existingLine.id, quantity: existingLine.quantity + 1 }])
          : await addCartLines(cartId, [{ merchandiseId: variantId, quantity: 1 }]);

        syncCart(updatedCart);
        setIsDrawerOpen(true);
        return true;
      } catch (error) {
        console.error('Failed to add item to cart', error);
        return false;
      }
    },
    openCartDrawer: () => setIsDrawerOpen(true),
    closeCartDrawer: () => setIsDrawerOpen(false),
    toggleCartDrawer: () => setIsDrawerOpen((open) => !open),
    incrementItem: (id) => {
      if (!activeCartId) {
        return;
      }
      const item = items.find((entry) => entry.id === id);
      if (!item) {
        return;
      }
      void updateCartLines(activeCartId, [{ id: item.id, quantity: item.quantity + 1 }])
        .then(syncCart)
        .catch((error) => {
          console.error('Failed to increment cart line', error);
        });
    },
    decrementItem: (id) => {
      if (!activeCartId) {
        return;
      }
      const item = items.find((entry) => entry.id === id);
      if (!item) {
        return;
      }
      if (item.quantity <= 1) {
        void removeCartLines(activeCartId, [item.id])
          .then(syncCart)
          .catch((error) => {
            console.error('Failed to decrement cart line', error);
          });
        return;
      }

      void updateCartLines(activeCartId, [{ id: item.id, quantity: item.quantity - 1 }])
        .then(syncCart)
        .catch((error) => {
          console.error('Failed to decrement cart line', error);
        });
    },
    removeItem: (id) => {
      if (!activeCartId) {
        return;
      }
      void removeCartLines(activeCartId, [id])
        .then(syncCart)
        .catch((error) => {
          console.error('Failed to remove cart line', error);
        });
    }
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider.');
  }

  return context;
}

export function formatINR(value: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value);
}
