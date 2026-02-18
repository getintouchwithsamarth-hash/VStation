import { BadgeInstance } from '../../../components/ui/Badge';

export function HeroMetaSlot() {
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
          <BadgeInstance label="Curated for durability" variant="neutral" size="md" />
          <BadgeInstance label="Modern features" variant="neutral" size="md" />
          <BadgeInstance label="Clear policies" variant="neutral" size="md" />
        </div>
      </div>
    </div>
  );
}
