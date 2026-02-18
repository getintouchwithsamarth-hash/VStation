import { useState } from 'react';
import { ButtonInstance } from '../../../components/ui/Button';
import { useProductSearch } from '../hooks';

export function ProductSearch() {
  const searchConfig = useProductSearch();
  const [query, setQuery] = useState('');

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
      {/* Search field */}
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
          {searchConfig.iconLabel}
        </span>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={searchConfig.placeholder}
          aria-label="Search products"
          style={{
            flex: 1,
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '400',
            color: '#101828',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent'
          }}
        />
      </div>
      
      {/* Search button */}
      <ButtonInstance variant="secondary" size="md" label={searchConfig.buttonLabel} />
    </div>
  );
}
