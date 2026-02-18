import { BadgeInstance } from '../../../components/ui/Badge';
import { useHomeMockData } from '../hooks/useHomeMockData';

export function HeroMetaSlot() {
  const { heroMetaBadges } = useHomeMockData();

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '24px',
        paddingBottom: '24px'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '24px',
          paddingRight: '24px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          {heroMetaBadges.map((badge) => (
            <BadgeInstance key={badge} label={badge} variant="neutral" size="md" />
          ))}
        </div>
      </div>
    </div>
  );
}
