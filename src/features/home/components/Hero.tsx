import { useHomeMockData } from '../hooks/useHomeMockData';

export function Hero() {
  const { hero } = useHomeMockData();

  return (
    <div
      style={{
        backgroundColor: "var(--card)",
        paddingTop: '56px',
        paddingBottom: '48px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
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

      <div
        style={{
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '24px',
          paddingRight: '24px',
          position: 'relative',
          zIndex: 1
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '64px',
            alignItems: 'center'
          }}
        >
          <div style={{ flex: '0 0 55%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '12px',
                  lineHeight: '18px',
                  fontWeight: '500',
                  color: "var(--muted-foreground)"
                }}
              >
                {hero.eyebrow}
              </div>

              <h1
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

              <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                <ButtonPrimary label={hero.primaryCta} />
                <ButtonSecondary label={hero.secondaryCta} />
              </div>

              <div
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: '400',
                  color: "var(--muted-foreground)",
                  marginTop: '8px'
                }}
              >
                {hero.metaLine}
              </div>
            </div>
          </div>

          <div style={{ flex: '0 0 45%', position: 'relative' }}>
            <div
              style={{
                backgroundColor: "var(--card)",
                border: '1px solid var(--border)',
                borderRadius: '16px',
                width: '480px',
                height: '420px',
                boxShadow: '0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F',
                overflow: 'hidden'
              }}
            >
              <div
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
                      color: "var(--muted-foreground)"
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
                      color: "var(--muted-foreground)"
                    }}
                  >
                    {hero.featuredDropSubtitle}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
