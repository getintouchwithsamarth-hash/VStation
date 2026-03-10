import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
import { Philosophy } from '../pages/Philosophy';
import { Community } from '../pages/Community';
import Cart from '../pages/Cart';
import { ProductDetail } from '../pages/ProductDetail';
import { NotFound } from '../pages/NotFound';
import { Login } from '../pages/Login';
import { Account } from '../pages/Account';
import { AuthCallback } from '../pages/AuthCallback';
import { Privacy } from '../pages/Privacy';

type RouterContext = {
  path: string;
  isAuthenticated: boolean;
  isInitializing: boolean;
};

function normalizePath(pathname: string): string {
  return pathname.replace(/\/+$/, '') || '/';
}

function getCurrentPath(): string {
  return normalizePath(window.location.pathname);
}

function redirectTo(path: string): string {
  const currentPath = getCurrentPath();
  if (currentPath === path) {
    return currentPath;
  }
  window.history.replaceState({}, '', path);
  return path;
}

export function RouteGuards({ path, isAuthenticated, isInitializing }: RouterContext): string {
  if (isInitializing) {
    return path;
  }

  if (path === '/account' && !isAuthenticated) {
    return redirectTo('/login');
  }

  if (path === '/login' && isAuthenticated) {
    return redirectTo('/account');
  }

  return path;
}

export function RouteMap({ path }: { path: string }) {
  if (path.startsWith('/products/')) {
    return <ProductDetail />;
  }

  switch (path) {
    case '/':
      return <Home />;
    case '/products':
      return <Products />;
    case '/philosophy':
      return <Philosophy />;
    case '/community':
      return <Community />;
    case '/cart':
      return <Cart />;
    case '/login':
      return <Login />;
    case '/account':
      return <Account />;
    case '/auth/callback':
      return <AuthCallback />;
    case '/privacy':
      return <Privacy />;
    default:
      return <NotFoundRoute />;
  }
}

export function ScrollRestoration() {
  return null;
}

export function NotFoundRoute() {
  return <NotFound />;
}

export function AppRouter({ isAuthenticated, isInitializing }: Omit<RouterContext, 'path'>) {
  const path = getCurrentPath();
  const guardedPath = RouteGuards({ path, isAuthenticated, isInitializing });
  return RouteMap({ path: guardedPath });
}
