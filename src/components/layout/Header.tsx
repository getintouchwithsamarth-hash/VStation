export function Header() {
  return (
    <header 
      style={{
        height: '72px',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E5E7EB',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '16px',
        paddingRight: '16px',
        gap: '16px'
      }}
    >
      <HeaderLeftSlot />
      <HeaderCenterSlot />
      <HeaderRightSlot />
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
    <div 
      style={{
        color: '#101828',
        fontSize: '20px',
        lineHeight: '28px',
        fontWeight: '600',
        letterSpacing: '-0.02em'
      }}
    >
      VIBE STATION
    </div>
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
        href="#products"
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
        href="#philosophy"
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
        href="#community"
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
      Cart
    </button>
  );
}