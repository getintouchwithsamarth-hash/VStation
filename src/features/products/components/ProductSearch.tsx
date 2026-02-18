import { ButtonInstance } from '../../../components/ui/Button';
import { useProductSearch } from '../hooks';

export function ProductSearch() {
  const searchConfig = useProductSearch();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          height: '44px'
        }}
      >
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
            value={searchConfig.query}
            onChange={(event) => searchConfig.setQuery(event.target.value)}
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

        <ButtonInstance variant="secondary" size="md" label={searchConfig.buttonLabel} />
      </div>

      {searchConfig.suggestions.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {searchConfig.suggestions.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                window.location.href = `/products/${item.id}`;
              }}
              style={{
                border: '1px solid #D0D5DD',
                borderRadius: '999px',
                padding: '6px 10px',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '12px',
                lineHeight: '18px',
                backgroundColor: '#FFFFFF',
                color: '#344054',
                cursor: 'pointer'
              }}
            >
              {item.title}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
