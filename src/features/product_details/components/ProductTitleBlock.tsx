import { BadgeInstance } from '../../../components/ui/Badge';
import { useProductDetailMockData } from '../hooks/useProductDetailMockData';

export function ProductTitleBlock() {
  const { productHeader } = useProductDetailMockData();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '14px'
      }}
    >
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <BadgeInstance label={productHeader.badge} variant="accent" size="sm" />
        <span
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '13px',
            lineHeight: '18px',
            fontWeight: '500',
            color: 'var(--muted-foreground)'
          }}
        >
          {productHeader.vendor}
        </span>
      </div>

      <h1
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '40px',
          lineHeight: '44px',
          letterSpacing: '-0.02em',
          color: 'var(--foreground)',
          margin: 0,
          maxWidth: '900px'
        }}
      >
        {productHeader.title}
      </h1>

      <div
        style={{
          display: 'flex',
          gap: '18px',
          flexWrap: 'wrap',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '14px',
          lineHeight: '20px',
          color: 'var(--muted-foreground)'
        }}
      >
        <span>SKU: {productHeader.sku}</span>
        <span>{productHeader.shareLabel}: {productHeader.shareUrl}</span>
      </div>
    </div>
  );
}
