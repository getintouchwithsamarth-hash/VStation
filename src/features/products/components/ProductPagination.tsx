import { BadgeInstance } from '../../../components/ui/Badge';
import { ButtonInstance } from '../../../components/ui/Button';

export function ProductPagination() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px'
      }}
    >
      <ButtonInstance variant="ghost" size="sm" label="Prev" />
      <BadgeInstance label="1" variant="neutral" size="md" />
      <ButtonInstance variant="ghost" size="sm" label="2" />
      <ButtonInstance variant="ghost" size="sm" label="3" />
      <ButtonInstance variant="ghost" size="sm" label="Next" />
    </div>
  );
}
