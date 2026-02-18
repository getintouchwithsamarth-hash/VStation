import { BadgeInstance } from '../ui/Badge';
import { ButtonInstance } from '../ui/Button';
import { Container } from './Container';
import { useCart } from '../../features/cart/CartContext';

export function Header() {
  return (
    <header 
      style={{
        height: '72px',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E5E7EB',
      }}
    >
      <Container>
        <div
          style={{
            height: '72px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}
        >
          <HeaderLeftSlot />
          <HeaderCenterSlot />
          <HeaderRightSlot />
        </div>
      </Container>
    </header>
  );
}

function HeaderLeftSlot() {
  return <BrandMarkSlot />;
}

function HeaderCenterSlot() {
  return <PrimaryNavSlot />;
}

function HeaderRightSlot() {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <SearchSlot />
      <AccountSlot />
      <CartSlot />
    </div>
  );
}

function BrandMarkSlot() {
  return (
    <a
      href="/"
      style={{
        color: '#101828',
        fontSize: '20px',
        lineHeight: '28px',
        fontWeight: '600',
        letterSpacing: '-0.02em',
        textDecoration: 'none'
      }}
    >
      VIBE STATION
    </a>
  );
}

function PrimaryNavSlot() {
  return (
    <nav 
      style={{
        display: 'flex',
        gap: '20px',
        flex: 1,
        justifyContent: 'center'
      }}
    >
      <a 
        href="/products"
        style={{
          color: '#475467',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: '600',
          textDecoration: 'none',
          cursor: 'pointer'
        }}
      >
        Products
      </a>
      <a 
        href="/philosophy"
        style={{
          color: '#475467',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: '600',
          textDecoration: 'none',
          cursor: 'pointer'
        }}
      >
        Philosophy
      </a>
      <a 
        href="/community"
        style={{
          color: '#475467',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: '600',
          textDecoration: 'none',
          cursor: 'pointer'
        }}
      >
        Community
      </a>
    </nav>
  );
}

function SearchSlot() {
  return (
    <button
      style={{
        height: '36px',
        paddingLeft: '12px',
        paddingRight: '12px',
        borderRadius: '10px',
        backgroundColor: 'transparent',
        color: '#101828',
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '600',
        border: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer'
      }}
    >
      Search
    </button>
  );
}

function AccountSlot() {
  return (
    <button
      style={{
        height: '36px',
        paddingLeft: '12px',
        paddingRight: '12px',
        borderRadius: '10px',
        backgroundColor: 'transparent',
        color: '#101828',
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '600',
        border: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer'
      }}
    >
      Account
    </button>
  );
}

function CartSlot() {
  const { cartCount, openCartDrawer } = useCart();

  return (
    <div style={{ position: 'relative', display: 'inline-flex' }}>
      <ButtonInstance label="Cart" variant="ghost" size="sm" onClick={openCartDrawer} />
      <div
        style={{
          position: 'absolute',
          top: '-6px',
          right: '-8px',
          pointerEvents: 'none'
        }}
      >
        <BadgeInstance label={String(cartCount)} variant="accent" size="sm" />
      </div>
    </div>
  );
}
