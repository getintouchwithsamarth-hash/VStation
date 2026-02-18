import type { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { CartProvider } from '../features/cart/CartContext';
import { Toaster } from './components/ui/sonner';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <CartProvider>{children}</CartProvider>
      <Toaster />
    </ThemeProvider>
  );
}
