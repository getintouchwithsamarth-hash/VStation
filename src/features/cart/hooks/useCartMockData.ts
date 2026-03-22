const CART_COPY = {
  title: 'Cart',
  yourCartTitle: 'Your cart',
  relatedProductsTitle: 'Related products',
  relatedProductsSubtitle: 'Picked from the same product categories already in your cart.',
  relatedProductsEmptyState: 'No related products are available right now.',
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

export function useCartMockData() {
  return {
    copy: CART_COPY,
    isLoading: false
  };
}
