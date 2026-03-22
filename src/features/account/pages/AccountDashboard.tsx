import { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import { AccountNav } from '../components/AccountNav';
import { OverviewSection } from '../sections/OverviewSection';
import { OrdersSection } from '../sections/OrdersSection';
import { AddressesSection } from '../sections/AddressesSection';
import { navigateTo } from '../navigation';

export function AccountDashboard() {
  const { customer, isAuthenticated, logout, isLoading } = useAuth();
  const [activeSection, setActiveSection] = useState<'overview' | 'profile' | 'orders' | 'addresses'>('overview');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigateTo('/account/login');
    }
  }, [isAuthenticated, isLoading]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    logout();
    navigateTo('/account/login');
  };

  if (isLoading || !customer) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: 'var(--account-page-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              margin: '0 auto 16px',
              border: '3px solid var(--account-icon-bg)',
              borderTopColor: 'var(--account-link)',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite'
            }}
          />
          <style>
            {`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `}
          </style>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--account-page-bg)' }}>
      {/* Header */}
      <div style={{ backgroundColor: 'var(--account-panel-bg)', borderBottom: '1px solid var(--account-panel-border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '24px 16px' : '32px 48px' }}>
          <h1
            style={{
              fontSize: isMobile ? '22px' : '28px',
              lineHeight: isMobile ? '30px' : '36px',
              fontWeight: '600',
              color: 'var(--account-title)',
              fontFamily: 'Inter, system-ui, sans-serif',
              marginBottom: '4px'
            }}
          >
            My Account
          </h1>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: '400',
              color: 'var(--account-subtext)',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            Welcome back, {customer.firstName}
          </p>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobile && (
        <AccountNav
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          onLogout={handleLogout}
          isMobile
        />
      )}

      {/* Content */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '24px 16px' : '48px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '240px 1fr', gap: isMobile ? '0' : '32px' }}>
          {/* Desktop Navigation */}
          {!isMobile && (
            <div>
              <AccountNav
                activeSection={activeSection}
                onSectionChange={setActiveSection}
                onLogout={handleLogout}
              />
            </div>
          )}

          {/* Main Content */}
          <div>
            {activeSection === 'overview' && <OverviewSection customer={customer} />}
            {activeSection === 'orders' && <OrdersSection />}
            {activeSection === 'addresses' && <AddressesSection />}
          </div>
        </div>
      </div>
    </div>
  );
}
