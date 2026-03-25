import { User, Package, MapPin, LogOut } from 'lucide-react';

interface AccountNavProps {
  activeSection: 'overview' | 'profile' | 'orders' | 'addresses';
  onSectionChange: (section: AccountNavProps['activeSection']) => void;
  onLogout: () => void;
  isMobile?: boolean;
}

export function AccountNav({ activeSection, onSectionChange, onLogout, isMobile = false }: AccountNavProps) {
  const navItems = [
    { id: 'overview' as const, label: 'Overview', icon: User },
    { id: 'orders' as const, label: 'Orders', icon: Package },
    { id: 'addresses' as const, label: 'Addresses', icon: MapPin }
  ];

  if (isMobile) {
    return (
      <div
        style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          padding: '16px',
          backgroundColor: 'var(--account-panel-bg)',
          borderBottom: '1px solid var(--account-panel-border)'
        }}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                backgroundColor: isActive ? 'var(--account-nav-active-bg)' : 'transparent',
                border: `1px solid ${isActive ? 'var(--account-input-border)' : 'transparent'}`,
                borderRadius: '10px',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '600',
                color: isActive ? 'var(--account-title)' : 'var(--account-subtext)',
                fontFamily: 'Inter, system-ui, sans-serif',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s'
              }}
            >
              <Icon size={16} />
              {item.label}
            </button>
          );
        })}

        <button
          onClick={onLogout}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            backgroundColor: 'transparent',
            border: '1px solid transparent',
            borderRadius: '10px',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '600',
            color: 'var(--account-error-border)',
            fontFamily: 'Inter, system-ui, sans-serif',
            cursor: 'pointer',
            whiteSpace: 'nowrap'
          }}
        >
          <LogOut size={16} />
          Sign out
        </button>
      </div>
    );
  }

  return (
    <nav
      style={{
        backgroundColor: 'var(--account-panel-bg)',
        border: '1px solid var(--account-panel-border)',
        borderRadius: '12px',
        padding: '8px',
        boxShadow: 'var(--account-card-shadow)'
      }}
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        
        return (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              width: '100%',
              padding: '12px 16px',
              backgroundColor: isActive ? 'var(--account-nav-active-bg)' : 'transparent',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: isActive ? '600' : '400',
              color: isActive ? 'var(--account-title)' : 'var(--account-subtext)',
              fontFamily: 'Inter, system-ui, sans-serif',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.15s'
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = 'var(--account-nav-hover-bg)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            <Icon size={20} />
            {item.label}
          </button>
        );
      })}

      <div style={{ height: '1px', backgroundColor: 'var(--account-panel-border)', margin: '8px 0' }} />

      <button
        onClick={onLogout}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          width: '100%',
          padding: '12px 16px',
          backgroundColor: 'transparent',
          border: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: '400',
          color: 'var(--account-error-border)',
          fontFamily: 'Inter, system-ui, sans-serif',
          cursor: 'pointer',
          textAlign: 'left',
          transition: 'all 0.15s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--account-error-bg)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <LogOut size={20} />
        Sign out
      </button>
    </nav>
  );
}
