import { Container } from '../../../components/layout/Container';
import { Section } from '../../../components/layout/Section';
import { useHomeMockData } from '../hooks/useHomeMockData';

export function Hero() {
  const { hero } = useHomeMockData();
  if (!hero) {
    return null;
  }

  return (
    <Section contain={false} paddingTop="56px" paddingBottom="48px" background="var(--card)">
      <style>{`
        .home-hero__layout {
          display: flex;
          flex-direction: row;
          gap: 64px;
          align-items: center;
        }

        .home-hero__copy {
          flex: 0 0 55%;
          min-width: 0;
        }

        .home-hero__actions {
          display: flex;
          gap: 12px;
          margin-top: 8px;
          flex-wrap: wrap;
        }

        .home-hero__visual {
          flex: 0 0 45%;
          position: relative;
          min-width: 0;
        }

        .home-hero__card {
          background-color: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          width: min(100%, 480px);
          height: 420px;
          box-shadow: 0 1px 2px 0 #1018280a, 0 1px 3px 0 #1018280f;
          overflow: hidden;
          margin-left: auto;
        }

        @media (max-width: 960px) {
          .home-hero__layout {
            flex-direction: column;
            gap: 32px;
            align-items: stretch;
          }

          .home-hero__copy,
          .home-hero__visual {
            flex: 1 1 auto;
          }

          .home-hero__card {
            margin-left: 0;
          }
        }

        @media (max-width: 640px) {
          .home-hero__layout {
            gap: 24px;
          }

          .home-hero__headline {
            font-size: 38px !important;
            line-height: 44px !important;
          }

          .home-hero__supporting {
            font-size: 16px !important;
            line-height: 24px !important;
          }

          .home-hero__card {
            height: auto;
          }

          .home-hero__card-media {
            height: 240px !important;
          }

          .home-hero__actions > * {
            flex: 1 1 100%;
          }
        }
      `}</style>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            right: '-200px',
            width: '600px',
            height: '600px',
            backgroundColor: '#4F46E50F',
            borderRadius: '50%',
            filter: 'blur(120px)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        <Container width="wide" className="relative z-[1]">
          <div className="home-hero__layout">
            <div className="home-hero__copy">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '12px',
                    lineHeight: '18px',
                    fontWeight: '500',
                    color: "var(--foreground)"
                  }}
                >
                  {hero.eyebrow}
                </div>

                <h1
                  className="home-hero__headline"
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '48px',
                    lineHeight: '56px',
                    fontWeight: '600',
                    color: "var(--foreground)",
                    letterSpacing: '-0.01em',
                    margin: 0
                  }}
                >
                  {hero.headline}
                </h1>

                <p
                  className="home-hero__supporting"
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '18px',
                    lineHeight: '28px',
                    fontWeight: '400',
                    color: "var(--muted-foreground)",
                    maxWidth: '540px',
                    margin: 0
                  }}
                >
                  {hero.supporting}
                </p>

                <div className="home-hero__actions">
                  <ButtonPrimary label={hero.primaryCta} />
                  <ButtonSecondary label={hero.secondaryCta} />
                </div>

                <div
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontWeight: '400',
                    color: "var(--foreground)",
                    marginTop: '8px'
                  }}
                >
                  {hero.metaLine}
                </div>
              </div>
            </div>

            <div className="home-hero__visual">
              <div className="home-hero__card">
                  <div
                    className="home-hero__card-media"
                    style={{
                      backgroundColor: "var(--muted)",
                      height: '280px',
                      width: '100%'
                    }}
                  >
                    {hero.featuredDropImageUrl ? (
                      <img
                        src={hero.featuredDropImageUrl}
                        alt={hero.featuredDropImageAlt || hero.featuredDropTitle}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block'
                        }}
                      />
                    ) : null}
                  </div>

                  <div style={{ padding: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div
                        style={{
                          fontFamily: 'Inter, system-ui, sans-serif',
                          fontSize: '12px',
                          lineHeight: '18px',
                          fontWeight: '500',
                          color: "var(--foreground)"
                        }}
                      >
                        {hero.featuredDropEyebrow}
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
                        {hero.featuredDropTitle}
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
                        {hero.featuredDropSubtitle}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </Container>
      </div>
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
