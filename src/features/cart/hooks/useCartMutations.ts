import { useCallback } from 'react';
import {
  addCartLines,
  createCart,
  removeCartLines,
  updateCartLines
} from '../../../lib/shopify';

type CartCreateLines = Parameters<typeof createCart>[0];
type CartLinesAddLines = Parameters<typeof addCartLines>[1];
type CartLinesUpdateLines = Parameters<typeof updateCartLines>[1];
type CartLinesRemoveLineIds = Parameters<typeof removeCartLines>[1];

export function useCartCreate() {
  return useCallback((lines: CartCreateLines = []) => createCart(lines), []);
}

export function useCartLinesAdd() {
  return useCallback((cartId: string, lines: CartLinesAddLines) => addCartLines(cartId, lines), []);
}

export function useCartLinesUpdate() {
  return useCallback(
    (cartId: string, lines: CartLinesUpdateLines) => updateCartLines(cartId, lines),
    []
  );
}

export function useCartLinesRemove() {
  return useCallback(
    (cartId: string, lineIds: CartLinesRemoveLineIds) => removeCartLines(cartId, lineIds),
    []
  );
}
