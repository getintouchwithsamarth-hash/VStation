import { ButtonInstance } from './Button';
import { InputInstance } from './Input';

export function PincodeEstimator() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}
    >
      <InputInstance
        label="Delivery pincode"
        placeholder="110001"
        helperText="Enter your 6-digit pincode."
      />
      <div>
        <ButtonInstance variant="secondary" size="sm" label="Check delivery" />
      </div>
    </div>
  );
}
