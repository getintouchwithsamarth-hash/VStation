import { Shell } from '../components/layout/Shell';
import { Community } from '../pages/Community';
import { NotFound } from '../pages/NotFound';
import { Home } from '../pages/Home';
import { Philosophy } from '../pages/Philosophy';
import { ProductDetail } from '../pages/ProductDetail';
import { Products } from '../pages/Products';

function resolveRoute() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';

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
    default:
      return <NotFound />;
  }
}

export default function App() {
  return (
    <Shell>
      {resolveRoute()}
    </Shell>
  );
}
