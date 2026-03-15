import { useState } from 'react';
import { ButtonInstance } from './Button';
import { InputInstance } from './Input';
import { isShiprocketConfigured } from '../../lib/shiprocket';
import { useDeliveryEstimate } from '../../features/product_details/hooks/useDeliveryEstimate';

type PincodeEstimatorProps = {
  pickupPostcode: string | null;
  weightKg: number | null;
  cod: boolean;
};

const PINCODE_REGEX = /^\d{6}$/;

export function PincodeEstimator({ pickupPostcode, weightKg, cod }: PincodeEstimatorProps) {
  const [pincode, setPincode] = useState('');
  const [validationError, setValidationError] = useState<string | null>(null);
  const { estimate, error, isLoading, checkDelivery } = useDeliveryEstimate({
    pickupPostcode,
    weightKg,
    cod
  });

  const configured = isShiprocketConfigured();

  const handleCheckDelivery = () => {
    const normalized = pincode.replace(/\D+/g, '').slice(0, 6);
    setPincode(normalized);

    if (!PINCODE_REGEX.test(normalized)) {
      setValidationError('Enter a valid 6-digit pincode.');
      return;
    }

    setValidationError(null);
    void checkDelivery(normalized);
  };

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
        helperText={
          validationError ||
          error ||
          (!configured
            ? 'Shiprocket is not configured yet. Add the proxy endpoint or Shiprocket credentials.'
            : 'Enter your 6-digit pincode.')
        }
        value={pincode}
        onChange={(event) => {
          const nextValue = event.target.value.replace(/\D+/g, '').slice(0, 6);
          setPincode(nextValue);
          if (validationError) {
            setValidationError(null);
          }
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter' && configured && !isLoading) {
            handleCheckDelivery();
          }
        }}
        inputMode="numeric"
        maxLength={6}
        autoComplete="postal-code"
        error={Boolean(validationError || error)}
        disabled={!configured || isLoading}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <ButtonInstance
          variant="secondary"
          size="sm"
          label={isLoading ? 'Checking...' : 'Check delivery'}
          onClick={handleCheckDelivery}
          disabled={!configured || isLoading}
        />

        {estimate ? (
          <div
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '12px',
              lineHeight: '18px',
              color: estimate.available ? 'var(--foreground)' : 'var(--destructive)'
            }}
          >
            {estimate.available
              ? `${estimate.etd || `${estimate.estimatedDeliveryDays || '—'} days`} · ${estimate.rate !== null ? `₹${estimate.rate}` : 'Rate on request'}${estimate.courierName ? ` · ${estimate.courierName}` : ''}`
              : estimate.message}
          </div>
        ) : null}
      </div>
    </div>
  );
}
