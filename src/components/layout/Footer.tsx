import { Container } from './Container';
import { Stack } from './Stack';
import { Logo } from '../ui/Logo';

export function Footer() {
  return (
    <footer 
      style={{
        backgroundColor: '#FCFCFD',
        borderTop: '1px solid #EAECF0',
        paddingTop: '32px',
        paddingBottom: '24px'
      }}
    >
      <Container>
        <Stack gap="24px">
          <FooterTopSlot />
          <FooterBottomSlot />
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

function FooterBottomSlot() {
  return (
    <div 
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <FooterLegalSlot />
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
          color: '#667085'
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
            color: '#344054',
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
            color: '#344054',
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
            color: '#344054',
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
            color: '#344054',
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
          color: '#667085'
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
            color: '#344054'
          }}
        >
          Curated for durability
        </div>
        <div 
          style={{
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '500',
            color: '#344054'
          }}
        >
          Reliable support
        </div>
        <div 
          style={{
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '500',
            color: '#344054'
          }}
        >
          Clear policies
        </div>
      </Stack>
    </Stack>
  );
}

function FooterLegalSlot() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Logo size={24} variant="dark" showText={false} href="/" />
      <div
        style={{
          fontSize: '14px',
          lineHeight: '20px',
          color: '#667085'
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
        Instagram
      </button>
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
        YouTube
      </button>
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
        Email
      </button>
    </div>
  );
}
