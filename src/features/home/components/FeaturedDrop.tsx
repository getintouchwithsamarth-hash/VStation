import { BadgeInstance } from '../../../components/ui/Badge';
import { Section } from '../../../components/layout/Section';
import { Container } from '../../../components/layout/Container';
import { useHomeMockData } from '../hooks/useHomeMockData';

export function FeaturedDrop() {
  const { featuredDrop } = useHomeMockData();
  if (!featuredDrop) {
    return null;
  }

  return (
    <Section paddingTop="56px" paddingBottom="56px" background="var(--background)">
      <style>{`
        .featured-drop__layout {
          display: flex;
          flex-direction: row;
          gap: 48px;
          align-items: flex-start;
        }

        .featured-drop__copy {
          flex: 0 0 45%;
          min-width: 0;
        }

        .featured-drop__badges,
        .featured-drop__actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .featured-drop__actions {
          gap: 12px;
        }

        .featured-drop__visual {
          flex: 0 0 55%;
          min-width: 0;
        }

        .featured-drop__card {
          background-color: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          width: min(100%, 560px);
          height: 360px;
          box-shadow: 0 1px 2px 0 #1018280a, 0 1px 3px 0 #1018280f;
          overflow: hidden;
          margin-left: auto;
        }

        .featured-drop__header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        @media (max-width: 960px) {
          .featured-drop__layout {
            flex-direction: column;
            gap: 32px;
          }

          .featured-drop__copy,
          .featured-drop__visual {
            flex: 1 1 auto;
          }

          .featured-drop__card {
            margin-left: 0;
          }
        }

        @media (max-width: 640px) {
          .featured-drop__title {
            font-size: 30px !important;
            line-height: 36px !important;
          }

          .featured-drop__supporting {
            font-size: 16px !important;
            line-height: 24px !important;
          }

          .featured-drop__actions > * {
            flex: 1 1 100%;
          }

          .featured-drop__card {
            height: auto;
          }

          .featured-drop__media {
            height: 220px !important;
          }

          .featured-drop__header-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
      <Container>
        <div className="featured-drop__layout">
          <div className="featured-drop__copy">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '12px',
                  lineHeight: '18px',
                  fontWeight: '500',
                  color: "var(--muted-foreground)"
                }}
              >
                {featuredDrop.eyebrow}
              </div>

              <h2
                className="featured-drop__title"
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '36px',
                  lineHeight: '44px',
                  fontWeight: '600',
                  color: "var(--foreground)",
                  margin: 0
                }}
              >
                {featuredDrop.title}
              </h2>

              <p
                className="featured-drop__supporting"
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '18px',
                  lineHeight: '28px',
                  fontWeight: '400',
                  color: "var(--muted-foreground)",
                  maxWidth: '480px',
                  margin: 0
                }}
              >
                {featuredDrop.supporting}
              </p>

              <div className="featured-drop__badges" style={{ marginTop: '6px' }}>
                {featuredDrop.badges.map((badge) => (
                  <BadgeInstance key={badge} label={badge} variant="neutral" size="md" />
                ))}
              </div>

              <div className="featured-drop__actions" style={{ marginTop: '8px' }}>
                <ButtonPrimary label={featuredDrop.primaryCta} />
                <ButtonSecondary label={featuredDrop.secondaryCta} />
              </div>
            </div>
          </div>

          <div className="featured-drop__visual">
            <div className="featured-drop__card">
              <div
                className="featured-drop__media"
                style={{
                  backgroundColor: "var(--muted)",
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
                    className="featured-drop__header-row"
                  >
                    <div
                      style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: '22px',
                        lineHeight: '30px',
                        fontWeight: '600',
                        color: "var(--foreground)"
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
                        color: "var(--foreground)"
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
                      color: "var(--muted-foreground)",
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
                      color: "var(--muted-foreground)"
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
        backgroundColor: "var(--card)",
        color: "var(--foreground)",
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '600',
        border: '1px solid var(--border)',
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
