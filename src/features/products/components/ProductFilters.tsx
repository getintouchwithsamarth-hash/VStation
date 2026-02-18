import { BadgeInstance } from '../../../components/ui/Badge';
import { ButtonInstance } from '../../../components/ui/Button';
import { useProductFilters } from '../hooks';

export function ProductFilters() {
  const { filters, resetLabel } = useProductFilters();

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
      {filters.map((filter) => (
        <BadgeInstance key={filter.id} label={filter.label} variant="neutral" size="md" />
      ))}
      
      {/* Reset button */}
      <ButtonInstance variant="secondary" size="sm" label={resetLabel} />
    </div>
  );
}
