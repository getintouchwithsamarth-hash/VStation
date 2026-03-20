import { Shell } from '../components/layout/Shell';
import { Community } from '../pages/Community';
import { NotFound } from '../pages/NotFound';
import { Home } from '../pages/Home';
import { Philosophy } from '../pages/Philosophy';
import { ProductDetail } from '../pages/ProductDetail';
import { Products } from '../pages/Products';
import Cart from '../pages/Cart';
import { PresentationDrawer } from '../features/cart/components/PresentationDrawer';
import { useCart } from '../features/cart/CartContext';
import {
  AccountDashboard,
  LoginPage,
  PasswordResetPage,
  PasswordResetRequestPage,
  RegisterPage
} from '../features/account';

function resolveRoute() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  if (path.startsWith('/products/')) {
    return <ProductDetail />;
  }

  if (/^\/account\/reset\/[^/]+\/[^/]+$/.test(path)) {
    return <PasswordResetPage />;
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
    case '/account':
      return <AccountDashboard />;
    case '/account/login':
      return <LoginPage />;
    case '/account/register':
      return <RegisterPage />;
    case '/account/password-reset':
    case '/account/forgot-password':
      return <PasswordResetRequestPage />;
    case '/account/password-reset/confirm':
      return <PasswordResetPage />;
    default:
      return <NotFound />;
  }
}

export default function App() {
  const { isDrawerOpen } = useCart();
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const isAccountRoute = path === '/account' || path.startsWith('/account/');
  const isCartRoute = path === '/cart';

  return (
    <Shell>
      {resolveRoute()}
      {!isAccountRoute && !isCartRoute && isDrawerOpen ? <PresentationDrawer /> : null}
    </Shell>
  );
}
