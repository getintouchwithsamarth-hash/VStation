export function Footer() {
  return (
    <footer 
      style={{
        backgroundColor: '#FCFCFD',
        borderTop: '1px solid #EAECF0',
        paddingLeft: '24px',
        paddingRight: '24px',
        paddingTop: '32px',
        paddingBottom: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}
    >
      <FooterTopSlot />
      <FooterBottomSlot />
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
      </div>
    </div>
  );
}

function FooterTrustSlot() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
      </div>
    </div>
  );
}

function FooterLegalSlot() {
  return (
    <div 
      style={{
        fontSize: '14px',
        lineHeight: '20px',
        color: '#667085'
      }}
    >
      © VIBE STATION
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