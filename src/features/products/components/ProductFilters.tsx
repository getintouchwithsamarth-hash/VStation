import { BadgeInstance } from '../../../components/ui/Badge';
import { ButtonInstance } from '../../../components/ui/Button';

export function ProductFilters() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '10px'
      }}
    >
      {/* Filter chip badges */}
      <BadgeInstance label="All" variant="neutral" size="md" />
      <BadgeInstance label="Practice" variant="neutral" size="md" />
      <BadgeInstance label="Stage" variant="neutral" size="md" />
      <BadgeInstance label="Studio" variant="neutral" size="md" />
      <BadgeInstance label="Power" variant="neutral" size="md" />
      <BadgeInstance label="Bundles" variant="neutral" size="md" />
      
      {/* Reset button */}
      <ButtonInstance variant="secondary" size="sm" label="Reset" />
    </div>
  );
}