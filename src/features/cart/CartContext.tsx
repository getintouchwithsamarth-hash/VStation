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
  getCart,
  getCartId,
  setCartId,
  updateCartBuyerIdentity,
  type Cart as ShopifyCart
} from '../../lib/shopify';
import {
  useCartCreate,
  useCartLinesAdd,
  useCartLinesRemove,
  useCartLinesUpdate
} from './hooks/useCartMutations';

export type CartItem = {
  id: string;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  variantId: string;
  imageUrl?: string;
  imageAlt?: string;
};

type CartContextValue = {
  items: CartItem[];
  isDrawerOpen: boolean;
  cartCount: number;
  subtotal: number;
  total: number;
  checkoutUrl: string | null;
  addItem: (variantId: string) => Promise<boolean>;
  checkout: () => Promise<void>;
  openCartDrawer: () => void;
  closeCartDrawer: () => void;
  toggleCartDrawer: () => void;
  incrementItem: (id: string) => void;
  decrementItem: (id: string) => void;
  removeItem: (id: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const SHOPIFY_COUNTRY_CODE = (import.meta.env.VITE_SHOPIFY_COUNTRY_CODE || 'IN').toUpperCase();

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
      variantId: line.merchandise.id,
      imageUrl: line.merchandise.image?.url || line.merchandise.product.featuredImage?.url,
      imageAlt:
        line.merchandise.image?.altText ||
        line.merchandise.product.featuredImage?.altText ||
        line.merchandise.product.title
    };
  });
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeCartId, setActiveCartId] = useState<string | null>(null);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const cartCreate = useCartCreate();
  const cartLinesAdd = useCartLinesAdd();
  const cartLinesUpdate = useCartLinesUpdate();
  const cartLinesRemove = useCartLinesRemove();

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

        const newCart = await cartCreate();
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
  }, [cartCreate, syncCart]);

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
          const newCart = await cartCreate();
          syncCart(newCart);
          cartId = newCart.id;
        }

        const existingLine = items.find((entry) => entry.variantId === variantId);
        const updatedCart = existingLine
          ? await cartLinesUpdate(cartId, [{ id: existingLine.id, quantity: existingLine.quantity + 1 }])
          : await cartLinesAdd(cartId, [{ merchandiseId: variantId, quantity: 1 }]);

        syncCart(updatedCart);
        setIsDrawerOpen(true);
        return true;
      } catch (error) {
        console.error('Failed to add item to cart', error);
        return false;
      }
    },
    checkout: async () => {
      try {
        let cartId = activeCartId;
        let latestCheckoutUrl = checkoutUrl;
        if (!cartId) {
          const newCart = await cartCreate();
          syncCart(newCart);
          cartId = newCart.id;
          latestCheckoutUrl = newCart.checkoutUrl;
        }

        const updatedCart = await updateCartBuyerIdentity(cartId, {
          countryCode: SHOPIFY_COUNTRY_CODE
        });
        syncCart(updatedCart);
        window.location.href = updatedCart.checkoutUrl;
      } catch (error) {
        console.error('Failed to update buyer identity before checkout', error);
        window.location.href = latestCheckoutUrl || '/cart';
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
      void cartLinesUpdate(activeCartId, [{ id: item.id, quantity: item.quantity + 1 }])
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
        void cartLinesRemove(activeCartId, [item.id])
          .then(syncCart)
          .catch((error) => {
            console.error('Failed to decrement cart line', error);
          });
        return;
      }

      void cartLinesUpdate(activeCartId, [{ id: item.id, quantity: item.quantity - 1 }])
        .then(syncCart)
        .catch((error) => {
          console.error('Failed to decrement cart line', error);
        });
    },
    removeItem: (id) => {
      if (!activeCartId) {
        return;
      }
      void cartLinesRemove(activeCartId, [id])
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
