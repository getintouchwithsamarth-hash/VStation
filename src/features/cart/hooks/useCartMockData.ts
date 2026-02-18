import { useEffect, useState } from 'react';
import { getProducts } from '../../../lib/shopify';

export type CartAddOn = {
  id: string;
  name: string;
  price: number;
};

const CART_COPY = {
  title: 'Cart',
  yourCartTitle: 'Your cart',
  addOnsTitle: 'Add-ons you may like',
  summaryTitle: 'Order summary',
  subtotalLabel: 'Subtotal',
  shippingLabel: 'Shipping',
  shippingValue: 'Calculated at checkout',
  totalLabel: 'Total',
  taxesLine: 'Taxes and shipping calculated at checkout.',
  drawerCheckoutLabel: 'Checkout',
  drawerContinueLabel: 'Continue shopping',
  drawerFooterCaption: "You'll complete payment in checkout.",
  emptyCartMessage: 'Your cart is empty.',
  summaryCheckoutLabel: 'Checkout',
  summaryContinueLabel: 'Continue shopping',
  writeItemSuffix: 'items',
  addButtonLabel: 'Add'
};

let cartAddOnCache: CartAddOn[] = [];
let cartDataResolved = false;
let cartDataPromise: Promise<void> | null = null;

const loadCartAddOns = async () => {
  if (cartDataPromise) {
    return cartDataPromise;
  }

  cartDataPromise = (async () => {
    try {
      const products = await getProducts({ first: 2 });
      cartAddOnCache = products.edges.map((edge) => ({
        id: edge.node.handle,
        name: edge.node.title,
        price: Number.parseFloat(edge.node.priceRange.minVariantPrice.amount)
      }));
    } catch (error) {
      console.error('Failed to load cart add-ons from Shopify', error);
      cartAddOnCache = [];
    } finally {
      cartDataResolved = true;
      cartDataPromise = null;
    }
  })();

  return cartDataPromise;
};

export function useCartMockData() {
  const [addOns, setAddOns] = useState<CartAddOn[]>(cartAddOnCache);
  const [isLoading, setIsLoading] = useState(!cartDataResolved);

  useEffect(() => {
    let cancelled = false;
    if (cartDataResolved) {
      setAddOns(cartAddOnCache);
      setIsLoading(false);
      return () => {
        cancelled = true;
      };
    }

    void loadCartAddOns().then(() => {
      if (cancelled) {
        return;
      }
      setAddOns(cartAddOnCache);
      setIsLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return {
    addOns,
    copy: CART_COPY,
    isLoading
  };
}
