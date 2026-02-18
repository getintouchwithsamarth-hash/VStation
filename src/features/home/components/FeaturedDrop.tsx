import { BadgeInstance } from '../../../components/ui/Badge';
import { Section } from '../../../components/layout/Section';
import { Container } from '../../../components/layout/Container';
import { useHomeMockData } from '../hooks/useHomeMockData';

export function FeaturedDrop() {
  const { featuredDrop } = useHomeMockData();

  return (
    <Section paddingTop="56px" paddingBottom="56px" background="#FFFFFF">
      <Container>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '48px',
            alignItems: 'flex-start'
          }}
        >
          <div style={{ flex: '0 0 45%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '12px',
                  lineHeight: '18px',
                  fontWeight: '500',
                  color: '#667085'
                }}
              >
                {featuredDrop.eyebrow}
              </div>

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
                {featuredDrop.title}
              </h2>

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
                {featuredDrop.supporting}
              </p>

              <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
                {featuredDrop.badges.map((badge) => (
                  <BadgeInstance key={badge} label={badge} variant="neutral" size="md" />
                ))}
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                <ButtonPrimary label={featuredDrop.primaryCta} />
                <ButtonSecondary label={featuredDrop.secondaryCta} />
              </div>
            </div>
          </div>

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
              <div
                style={{
                  backgroundColor: '#F2F4F7',
                  height: '200px',
                  width: '100%'
                }}
              >
                {featuredDrop.productImageUrl ? (
                  <img
                    src={featuredDrop.productImageUrl}
                    alt={featuredDrop.productImageAlt || featuredDrop.productName}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                ) : null}
              </div>

              <div style={{ padding: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
                      {featuredDrop.productName}
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
                      {featuredDrop.productPrice}
                    </div>
                  </div>

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
                    {featuredDrop.productCopy}
                  </p>

                  <div
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: '14px',
                      lineHeight: '20px',
                      fontWeight: '400',
                      color: '#667085'
                    }}
                  >
                    {featuredDrop.featureLine}
                  </div>

                  <div style={{ marginTop: '2px' }}>
                    <BadgeInstance label={featuredDrop.productBadge} variant="accent" size="sm" />
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
