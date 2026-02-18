import { BadgeInstance } from '../../../components/ui/Badge';
import { Section } from '../../../components/layout/Section';
import { Container } from '../../../components/layout/Container';

export function FeaturedDrop() {
  return (
    <Section paddingTop="56px" paddingBottom="56px" background="#FFFFFF">
      <Container>
        {/* Two-column layout */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '48px',
            alignItems: 'flex-start'
          }}
        >
          {/* Left column - Editorial */}
          <div style={{ flex: '0 0 45%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Eyebrow */}
              <div
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '12px',
                  lineHeight: '18px',
                  fontWeight: '500',
                  color: '#667085'
                }}
              >
                Featured drop
              </div>

              {/* Title */}
              <h2
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '36px',
                  lineHeight: '44px',
                  fontWeight: '600',
                  color: '#101828',
                  margin: 0
                }}
              >
                Best-in-class essentials, chosen to last.
              </h2>

              {/* Supporting copy */}
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '18px',
                  lineHeight: '28px',
                  fontWeight: '400',
                  color: '#344054',
                  maxWidth: '480px',
                  margin: 0
                }}
              >
                One product at a time. Thorough research. Durable materials. Modern features that matter in real practice and gig conditions.
              </p>

              {/* Badge row */}
              <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
                <BadgeInstance label="Durable build" variant="neutral" size="md" />
                <BadgeInstance label="Fast + accurate" variant="neutral" size="md" />
                <BadgeInstance label="Stage-ready" variant="neutral" size="md" />
              </div>

              {/* CTA row */}
              <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                <ButtonPrimary label="View featured" />
                <ButtonSecondary label="See all products" />
              </div>
            </div>
          </div>

          {/* Right column - Featured product card */}
          <div style={{ flex: '0 0 55%' }}>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #EAECF0',
                borderRadius: '16px',
                width: '560px',
                height: '360px',
                boxShadow: '0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F',
                overflow: 'hidden'
              }}
            >
              {/* MediaSlot - product image placeholder */}
              <div
                style={{
                  backgroundColor: '#F2F4F7',
                  height: '200px',
                  width: '100%'
                }}
              />

              {/* BodySlot - content */}
              <div style={{ padding: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {/* Top row: Product name + price */}
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
                        fontSize: '22px',
                        lineHeight: '30px',
                        fontWeight: '600',
                        color: '#101828'
                      }}
                    >
                      Clip-on Tuner (Pro Grade)
                    </div>
                    <div
                      style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: '22px',
                        lineHeight: '30px',
                        fontWeight: '600',
                        color: '#101828'
                      }}
                    >
                      ₹—
                    </div>
                  </div>

                  {/* Subcopy */}
                  <p
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: '14px',
                      lineHeight: '20px',
                      fontWeight: '400',
                      color: '#344054',
                      margin: 0
                    }}
                  >
                    Accurate, bright display, strong clamp — built for daily use.
                  </p>

                  {/* Feature row */}
                  <div
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: '14px',
                      lineHeight: '20px',
                      fontWeight: '400',
                      color: '#667085'
                    }}
                  >
                    ±0.1 cent accuracy · USB-C rechargeable · High-contrast display
                  </div>

                  {/* Badge */}
                  <div style={{ marginTop: '2px' }}>
                    <BadgeInstance label="Curated pick" variant="accent" size="sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// Button components
function ButtonPrimary({ label }: { label: string }) {
  return (
    <button
      style={{
        height: '44px',
        paddingLeft: '16px',
        paddingRight: '16px',
        borderRadius: '12px',
        backgroundColor: '#4338CA',
        color: '#FFFFFF',
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '600',
        border: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        fontFamily: 'Inter, system-ui, sans-serif'
      }}
    >
      {label}
    </button>
  );
}

function ButtonSecondary({ label }: { label: string }) {
  return (
    <button
      style={{
        height: '44px',
        paddingLeft: '16px',
        paddingRight: '16px',
        borderRadius: '12px',
        backgroundColor: '#FFFFFF',
        color: '#101828',
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '600',
        border: '1px solid #D0D5DD',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        fontFamily: 'Inter, system-ui, sans-serif'
      }}
    >
      {label}
    </button>
  );
}
