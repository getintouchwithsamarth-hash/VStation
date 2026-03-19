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
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #EAECF0'
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
                backgroundColor: isActive ? '#F9FAFB' : 'transparent',
                border: `1px solid ${isActive ? '#D0D5DD' : 'transparent'}`,
                borderRadius: '10px',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '600',
                color: isActive ? '#101828' : '#667085',
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
      </div>
    );
  }

  return (
    <nav
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #EAECF0',
        borderRadius: '12px',
        padding: '8px',
        boxShadow: '0 1px 2px 0 rgba(16, 24, 40, 0.04), 0 1px 3px 0 rgba(16, 24, 40, 0.06)'
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
              backgroundColor: isActive ? '#F9FAFB' : 'transparent',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: isActive ? '600' : '400',
              color: isActive ? '#101828' : '#667085',
              fontFamily: 'Inter, system-ui, sans-serif',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.15s'
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = '#FCFCFD';
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

      <div style={{ height: '1px', backgroundColor: '#EAECF0', margin: '8px 0' }} />

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
          color: '#F04438',
          fontFamily: 'Inter, system-ui, sans-serif',
          cursor: 'pointer',
          textAlign: 'left',
          transition: 'all 0.15s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#FEF3F2';
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
