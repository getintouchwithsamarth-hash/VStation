import { BadgeInstance } from '../../../components/ui/Badge';
import { Cluster } from '../../../components/layout/Cluster';
import { useHomeMockData } from '../hooks/useHomeMockData';

export function HeroMetaSlot() {
  const { heroMetaBadges } = useHomeMockData();

  return (
    <div
      style={{
        backgroundColor: "var(--card)",
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
        <Cluster wrap="on" gap={12} align="center">
          {heroMetaBadges.map((badge) => (
            <BadgeInstance key={badge} label={badge} variant="neutral" size="md" />
          ))}
        </Cluster>
      </div>
    </div>
  );
}
