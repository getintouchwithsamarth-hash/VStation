export function ProductsPageHeader() {
  return (
    <div style={{ marginBottom: '24px' }}>
      {/* Eyebrow + Title Block */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          marginBottom: '8px'
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '12px',
            lineHeight: '18px',
            fontWeight: '400',
            color: '#98A2B3'
          }}
        >
          Curated gear
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            color: '#101828',
            margin: 0
          }}
        >
          Products
        </h1>
      </div>

      {/* Supporting Copy */}
      <div
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '18px',
          lineHeight: '28px',
          fontWeight: '400',
          color: '#667085',
          maxWidth: '640px'
        }}
      >
        Best-in-class essentials chosen for durability, clarity, and real daily use.
      </div>
    </div>
  );
}
