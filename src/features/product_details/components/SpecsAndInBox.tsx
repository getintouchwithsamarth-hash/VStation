import { CardInstance } from '../../../components/ui/Card';
import { BadgeInstance } from '../../../components/ui/Badge';

export function SpecsAndInBox() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 420px',
        gap: '48px'
      }}
    >
      {/* Left column - Specs table */}
      <div>
        <CardInstance
          variant="elevated"
          padding="lg"
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}
          >
            {/* Title */}
            <h3
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                color: '#101828',
                margin: 0
              }}
            >
              Specifications
            </h3>

            {/* Spec list */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}
            >
              {/* Spec row: Accuracy */}
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
                    color: '#667085'
                  }}
                >
                  Accuracy
                </div>
                <div
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontWeight: '400',
                    color: '#101828'
                  }}
                >
                  ±0.1 cent
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: '1px',
                  backgroundColor: 'rgba(0, 0, 0, 0.1)'
                }}
              />

              {/* Spec row: Power */}
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
                    color: '#667085'
                  }}
                >
                  Power
                </div>
                <div
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontWeight: '400',
                    color: '#101828'
                  }}
                >
                  USB-C rechargeable
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: '1px',
                  backgroundColor: 'rgba(0, 0, 0, 0.1)'
                }}
              />

              {/* Spec row: Rotation */}
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
                    color: '#667085'
                  }}
                >
                  Rotation
                </div>
                <div
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontWeight: '400',
                    color: '#101828'
                  }}
                >
                  360° swivel
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: '1px',
                  backgroundColor: 'rgba(0, 0, 0, 0.1)'
                }}
              />

              {/* Spec row: Display */}
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
                    color: '#667085'
                  }}
                >
                  Display
                </div>
                <div
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontWeight: '400',
                    color: '#101828'
                  }}
                >
                  High-contrast
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: '1px',
                  backgroundColor: 'rgba(0, 0, 0, 0.1)'
                }}
              />

              {/* Spec row: Build */}
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
                    color: '#667085'
                  }}
                >
                  Build
                </div>
                <div
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontWeight: '400',
                    color: '#101828'
                  }}
                >
                  Metal + reinforced clamp
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: '1px',
                  backgroundColor: 'rgba(0, 0, 0, 0.1)'
                }}
              />

              {/* Spec row: Warranty */}
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
                    color: '#667085'
                  }}
                >
                  Warranty
                </div>
                <div
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontWeight: '400',
                    color: '#101828'
                  }}
                >
                  —
                </div>
              </div>
            </div>
          </div>
        </CardInstance>
      </div>

      {/* Right column - In the box */}
      <div>
        <CardInstance
          variant="subtle"
          padding="lg"
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            {/* Title */}
            <h3
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                color: '#101828',
                margin: 0
              }}
            >
              In the box
            </h3>

            {/* List items */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}
            >
              <div
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: '400',
                  color: '#667085'
                }}
              >
                Tuner
              </div>
              <div
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: '400',
                  color: '#667085'
                }}
              >
                USB-C cable
              </div>
              <div
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: '400',
                  color: '#667085'
                }}
              >
                Quick guide
              </div>
            </div>

            {/* Badge */}
            <div style={{ marginTop: '4px' }}>
              <BadgeInstance label="No extras required" variant="neutral" size="sm" />
            </div>
          </div>
        </CardInstance>
      </div>
    </div>
  );
}