import { BadgeInstance } from '../../../components/ui/Badge';
import { Section } from '../../../components/layout/Section';
import { Container } from '../../../components/layout/Container';
import { useHomeMockData } from '../hooks/useHomeMockData';

export function SocialProof() {
  const { socialProof } = useHomeMockData();
  if (!socialProof) {
    return null;
  }

  return (
    <Section paddingTop="56px" paddingBottom="56px" background="var(--card)">
      <style>{`
        .social-proof__chips {
          display: flex;
          gap: 12px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .social-proof__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 32px;
        }

        @media (max-width: 960px) {
          .social-proof__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .social-proof__title {
            font-size: 30px !important;
            line-height: 36px !important;
          }

          .social-proof__supporting {
            font-size: 16px !important;
            line-height: 24px !important;
          }

          .social-proof__grid {
            grid-template-columns: minmax(0, 1fr);
          }

          .social-proof__card {
            min-height: 0 !important;
            padding: 18px !important;
          }
        }
      `}</style>
      <Container>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
          <div
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '12px',
              lineHeight: '18px',
              fontWeight: '500',
              color: "var(--muted-foreground)"
            }}
          >
            {socialProof.eyebrow}
          </div>

          <h2
            className="social-proof__title"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '36px',
              lineHeight: '44px',
              fontWeight: '600',
              color: "var(--foreground)",
              margin: 0
            }}
          >
            {socialProof.title}
          </h2>

          <p
            className="social-proof__supporting"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '18px',
              lineHeight: '28px',
              fontWeight: '400',
              color: "var(--muted-foreground)",
              margin: 0
            }}
          >
            {socialProof.supporting}
          </p>
        </div>

        <div className="social-proof__chips">
          {socialProof.chips.map((chip) => (
            <BadgeInstance key={chip} label={chip} variant="neutral" size="md" />
          ))}
        </div>

        <div className="social-proof__grid">
          {socialProof.testimonials.map((testimonial) => (
            <div
              className="social-proof__card"
              key={testimonial.id}
              style={{
                backgroundColor: "var(--card)",
                border: '1px solid var(--border)',
                borderRadius: '16px',
                width: '100%',
                minHeight: '220px',
                boxShadow: '0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F',
                padding: '20px'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <div
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: '14px',
                      lineHeight: '20px',
                      fontWeight: '600',
                      color: "var(--foreground)"
                    }}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: '12px',
                      lineHeight: '18px',
                      fontWeight: '500',
                      color: "var(--muted-foreground)"
                    }}
                  >
                    {testimonial.role}
                  </div>
                </div>

                <p
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '16px',
                    lineHeight: '24px',
                    fontWeight: '400',
                    color: "var(--muted-foreground)",
                    margin: 0,
                    flex: 1
                  }}
                >
                  {testimonial.quote}
                </p>

                <div>
                  <BadgeInstance label={testimonial.tag} variant="neutral" size="sm" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ButtonSecondary label={socialProof.ctaLabel} />
        </div>
      </Container>
    </Section>
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
