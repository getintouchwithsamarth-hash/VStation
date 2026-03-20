import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode
} from 'react';
import {
  getCustomerAccessTokenExpiry,
  refreshCustomerToken,
} from '../../lib/shopify-customer';
import {
  getCart,
  getCartId,
  setCartId,
  updateCartBuyerIdentity,
  type Cart as ShopifyCart
} from '../../lib/shopify-storefront';
import { useAuth } from '../account';
import {
  useCartCreate,
  useCartLinesAdd,
  useCartLinesRemove,
  useCartLinesUpdate
} from './hooks/useCartMutations';

export type CartItem = {
  id: string;
  name: string;
  productHandle: string;
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
  cartError: string | null;
  clearCartError: () => void;
  addItem: (variantId: string) => Promise<{ ok: boolean; error?: string }>;
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
const CUSTOMER_TOKEN_REFRESH_THRESHOLD_MS = 5 * 60 * 1000;

const mapCartItems = (cart: ShopifyCart): CartItem[] => {
  return cart.lines.edges.map((edge) => {
    const line = edge.node;
    return {
      id: line.id,
      name: line.merchandise.product.title,
      productHandle: line.merchandise.product.handle,
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
  const { accessToken, isAuthenticated, refreshCustomerData, logout } = useAuth();
  const [items, setItems] = useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeCartId, setActiveCartId] = useState<string | null>(null);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [cartError, setCartError] = useState<string | null>(null);
  const previousAccessTokenRef = useRef<string | null>(null);
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

  const syncCartBuyerIdentity = useCallback(
    async (cartId: string, customerToken: string | null) => {
      try {
        const updatedCart = await updateCartBuyerIdentity(
          cartId,
          customerToken
            ? {
                countryCode: SHOPIFY_COUNTRY_CODE,
                customerAccessToken: customerToken
              }
            : {}
        );
        syncCart(updatedCart);
      } catch (error) {
        console.warn('Failed to sync cart buyer identity', error);
      }
    },
    [syncCart]
  );

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

        const newCart = await cartCreate([], accessToken || undefined);
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
  }, [accessToken, cartCreate, syncCart]);

  useEffect(() => {
    if (!activeCartId) {
      previousAccessTokenRef.current = accessToken;
      return;
    }

    const tokenChanged = previousAccessTokenRef.current !== accessToken;
    previousAccessTokenRef.current = accessToken;

    if (!tokenChanged) {
      return;
    }

    void syncCartBuyerIdentity(activeCartId, accessToken);
  }, [activeCartId, accessToken, syncCartBuyerIdentity]);

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
    cartError,
    clearCartError: () => setCartError(null),
    addItem: async (variantId) => {
      try {
        setCartError(null);
        let cartId = activeCartId;
        if (!cartId) {
          const newCart = await cartCreate([], accessToken || undefined);
          syncCart(newCart);
          cartId = newCart.id;
        }

        const existingLine = items.find((entry) => entry.variantId === variantId);
        const updatedCart = existingLine
          ? await cartLinesUpdate(cartId, [{ id: existingLine.id, quantity: existingLine.quantity + 1 }])
          : await cartLinesAdd(cartId, [{ merchandiseId: variantId, quantity: 1 }]);

        syncCart(updatedCart);
        setIsDrawerOpen(true);
        return { ok: true };
      } catch (error) {
        console.error('Failed to add item to cart', error);
        const message = error instanceof Error ? error.message : 'Unable to add item to cart.';
        setCartError(message);
        return { ok: false, error: message };
      }
    },
    checkout: async () => {
      try {
        setCartError(null);
        let cartId = activeCartId;
        if (!cartId) {
          const newCart = await cartCreate([], accessToken || undefined);
          syncCart(newCart);
          cartId = newCart.id;
        }

        let checkoutTarget = checkoutUrl;
        let tokenForCheckout = accessToken;

        if (isAuthenticated) {
          const session = getCustomerAccessTokenExpiry();

          if (!session.accessToken || session.isExpired) {
            logout();
            tokenForCheckout = null;
          } else {
            const expiresAtTimestamp = Date.parse(session.expiresAt || '');
            const isNearExpiry =
              Number.isFinite(expiresAtTimestamp) &&
              expiresAtTimestamp - Date.now() <= CUSTOMER_TOKEN_REFRESH_THRESHOLD_MS;

            if (isNearExpiry) {
              const renewedTokenResult = await refreshCustomerToken(session.accessToken);

              if (renewedTokenResult.ok) {
                tokenForCheckout = renewedTokenResult.data.accessToken;
                await refreshCustomerData();
              } else {
                logout();
                tokenForCheckout = null;
              }
            } else {
              tokenForCheckout = session.accessToken;
            }
          }
        }

        try {
          const updatedCart = await updateCartBuyerIdentity(
            cartId,
            tokenForCheckout
              ? {
                  countryCode: SHOPIFY_COUNTRY_CODE,
                  customerAccessToken: tokenForCheckout
                }
              : {}
          );
          syncCart(updatedCart);
          checkoutTarget = updatedCart.checkoutUrl;
        } catch (error) {
          console.warn('Failed to attach customer identity before checkout', error);
        }

        window.location.href = checkoutTarget || '/cart';
      } catch (error) {
        console.error('Failed to prepare checkout', error);
        setCartError(error instanceof Error ? error.message : 'Unable to continue to checkout.');
        window.location.href = checkoutUrl || '/cart';
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
        .then((cart) => {
          setCartError(null);
          syncCart(cart);
        })
        .catch((error) => {
          console.error('Failed to increment cart line', error);
          setCartError(error instanceof Error ? error.message : 'Unable to update cart quantity.');
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
          .then((cart) => {
            setCartError(null);
            syncCart(cart);
          })
          .catch((error) => {
            console.error('Failed to decrement cart line', error);
            setCartError(error instanceof Error ? error.message : 'Unable to update cart quantity.');
          });
        return;
      }

      void cartLinesUpdate(activeCartId, [{ id: item.id, quantity: item.quantity - 1 }])
        .then((cart) => {
          setCartError(null);
          syncCart(cart);
        })
        .catch((error) => {
          console.error('Failed to decrement cart line', error);
          setCartError(error instanceof Error ? error.message : 'Unable to update cart quantity.');
        });
    },
    removeItem: (id) => {
      if (!activeCartId) {
        return;
      }
      void cartLinesRemove(activeCartId, [id])
        .then((cart) => {
          setCartError(null);
          syncCart(cart);
        })
        .catch((error) => {
          console.error('Failed to remove cart line', error);
          setCartError(error instanceof Error ? error.message : 'Unable to remove item from cart.');
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
