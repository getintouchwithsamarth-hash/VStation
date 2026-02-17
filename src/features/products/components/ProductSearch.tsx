import { ButtonInstance } from '../../../components/ui/Button';

export function ProductSearch() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '12px',
        height: '44px'
      }}
    >
      {/* Search field placeholder */}
      <div
        style={{
          flex: 1,
          height: '44px',
          borderRadius: '12px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #D0D5DD',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '16px',
          paddingRight: '16px',
          gap: '8px'
        }}
      >
        {/* Search icon placeholder */}
        <span
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '400',
            color: '#667085'
          }}
        >
          ⌕
        </span>
        {/* Placeholder text */}
        <span
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '400',
            color: '#667085'
          }}
        >
          Search curated gear…
        </span>
      </div>
      
      {/* Search button */}
      <ButtonInstance variant="secondary" size="md" label="Search" />
    </div>
  );
}