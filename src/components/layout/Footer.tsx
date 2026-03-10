import { Container } from './Container';
import { Stack } from './Stack';
import { Logo } from '../ui/Logo';
import { useTheme } from 'next-themes';

export function Footer() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <footer 
      style={{
        backgroundColor: 'var(--card)',
        borderTop: '1px solid var(--border)',
        paddingTop: '32px',
        paddingBottom: '24px'
      }}
    >
      <Container>
        <Stack gap="24px">
          <FooterTopSlot />
          <FooterBottomSlot isDark={isDark} />
        </Stack>
      </Container>
    </footer>
  );
}

function FooterTopSlot() {
  return (
    <div 
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: '32px'
      }}
    >
      <FooterNavSlot />
      <FooterTrustSlot />
    </div>
  );
}

function FooterBottomSlot({ isDark }: { isDark: boolean }) {
  return (
    <div 
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <FooterLegalSlot isDark={isDark} />
      <FooterSocialSlot />
    </div>
  );
}

function FooterNavSlot() {
  return (
    <Stack gap="10px">
      <div 
        style={{
          fontSize: '12px',
          lineHeight: '18px',
          fontWeight: '600',
          color: 'var(--muted-foreground)'
        }}
      >
        Explore
      </div>
      <Stack gap="10px">
        <a 
          href="#products"
          style={{
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '500',
            color: 'var(--foreground)',
            textDecoration: 'none'
          }}
        >
          Products
        </a>
        <a 
          href="#philosophy"
          style={{
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '500',
            color: 'var(--foreground)',
            textDecoration: 'none'
          }}
        >
          Philosophy
        </a>
        <a 
          href="#community"
          style={{
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '500',
            color: 'var(--foreground)',
            textDecoration: 'none'
          }}
        >
          Community
        </a>
        <a
          href="/privacy"
          style={{
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '500',
            color: 'var(--foreground)',
            textDecoration: 'none'
          }}
        >
          Privacy Policy
        </a>
      </Stack>
    </Stack>
  );
}

function FooterTrustSlot() {
  return (
    <Stack gap="10px">
      <div 
        style={{
          fontSize: '12px',
          lineHeight: '18px',
          fontWeight: '600',
          color: 'var(--muted-foreground)'
        }}
      >
        Standards
      </div>
      <Stack gap="10px">
        <div 
          style={{
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '500',
            color: 'var(--foreground)'
          }}
        >
          Curated for durability
        </div>
        <div 
          style={{
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '500',
            color: 'var(--foreground)'
          }}
        >
          Reliable support
        </div>
        <div 
          style={{
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '500',
            color: 'var(--foreground)'
          }}
        >
          Clear policies
        </div>
      </Stack>
    </Stack>
  );
}

function FooterLegalSlot({ isDark }: { isDark: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Logo size={24} variant={isDark ? 'light' : 'dark'} showText={false} href="/" />
      <div
        style={{
          fontSize: '14px',
          lineHeight: '20px',
          color: 'var(--muted-foreground)'
        }}
      >
        © VIBE STATION
      </div>
    </div>
  );
}

function FooterSocialSlot() {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <button
        style={{
          height: '36px',
          paddingLeft: '12px',
          paddingRight: '12px',
          borderRadius: '10px',
          backgroundColor: 'transparent',
          color: 'var(--foreground)',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: '600',
          border: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          cursor: 'pointer'
        }}
      >
        Instagram
      </button>
      <button
        style={{
          height: '36px',
          paddingLeft: '12px',
          paddingRight: '12px',
          borderRadius: '10px',
          backgroundColor: 'transparent',
          color: 'var(--foreground)',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: '600',
          border: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          cursor: 'pointer'
        }}
      >
        YouTube
      </button>
      <button
        style={{
          height: '36px',
          paddingLeft: '12px',
          paddingRight: '12px',
          borderRadius: '10px',
          backgroundColor: 'transparent',
          color: 'var(--foreground)',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: '600',
          border: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          cursor: 'pointer'
        }}
      >
        Email
      </button>
    </div>
  );
}
