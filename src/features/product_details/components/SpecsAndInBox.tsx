import { CardInstance } from '../../../components/ui/Card';
import { BadgeInstance } from '../../../components/ui/Badge';
import { useProductDetailMockData } from '../hooks/useProductDetailMockData';

export function SpecsAndInBox() {
  const { specsAndInBox } = useProductDetailMockData();

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 420px',
        gap: '48px'
      }}
    >
      <div>
        <CardInstance variant="elevated" padding="lg">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}
          >
            <h3
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                color: "var(--foreground)",
                margin: 0
              }}
            >
              {specsAndInBox.specificationsTitle}
            </h3>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}
            >
              {specsAndInBox.specifications.map((spec) => (
                <div key={spec.label}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontWeight: '600',
                        color: "var(--muted-foreground)"
                      }}
                    >
                      {spec.label}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontWeight: '400',
                        color: "var(--foreground)"
                      }}
                    >
                      {spec.value}
                    </div>
                  </div>
                  <div
                    style={{
                      height: '1px',
                      backgroundColor: 'rgba(0, 0, 0, 0.1)',
                      marginTop: '10px'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </CardInstance>
      </div>

      <div>
        <CardInstance variant="subtle" padding="lg">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            <h3
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                color: "var(--foreground)",
                margin: 0
              }}
            >
              {specsAndInBox.inBoxTitle}
            </h3>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}
            >
              {specsAndInBox.inBoxItems.map((item) => (
                <div
                  key={item}
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontWeight: '400',
                    color: "var(--muted-foreground)"
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div style={{ marginTop: '4px' }}>
              <BadgeInstance label={specsAndInBox.inBoxBadge} variant="neutral" size="sm" />
            </div>
          </div>
        </CardInstance>
      </div>
    </div>
  );
}
