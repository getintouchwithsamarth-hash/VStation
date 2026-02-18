import { BadgeInstance } from '../../../components/ui/Badge';
import { Section } from '../../../components/layout/Section';
import { Container } from '../../../components/layout/Container';

export function SocialProof() {
  return (
    <Section paddingTop="56px" paddingBottom="56px" background="#FCFCFD">
      <Container>
        {/* Section header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
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
            What musicians notice
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
            Built for real use — not shelf appeal.
          </h2>

          {/* Supporting text */}
          <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '18px',
              lineHeight: '28px',
              fontWeight: '400',
              color: '#344054',
              margin: 0
            }}
          >
            Feedback that focuses on durability, clarity, and daily reliability.
          </p>
        </div>

        {/* Proof chips row */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
          <BadgeInstance label="Accurate" variant="neutral" size="md" />
          <BadgeInstance label="Durable" variant="neutral" size="md" />
          <BadgeInstance label="Clean design" variant="neutral" size="md" />
          <BadgeInstance label="Worth it" variant="neutral" size="md" />
        </div>

        {/* Testimonial grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '16px',
            marginBottom: '32px'
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #EAECF0',
              borderRadius: '16px',
              width: '100%',
              minHeight: '220px',
              boxShadow: '0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F',
              padding: '20px'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {/* Top row: name + role */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <div
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontWeight: '600',
                    color: '#101828'
                  }}
                >
                  Aarav
                </div>
                <div
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '12px',
                    lineHeight: '18px',
                    fontWeight: '500',
                    color: '#667085'
                  }}
                >
                  Guitarist
                </div>
              </div>

              {/* Quote */}
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '16px',
                  lineHeight: '24px',
                  fontWeight: '400',
                  color: '#344054',
                  margin: 0,
                  flex: 1
                }}
              >
                Feels like it's made for daily practice. Doesn't drift and doesn't feel fragile.
              </p>

              {/* Badge */}
              <div>
                <BadgeInstance label="Practice" variant="neutral" size="sm" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #EAECF0',
              borderRadius: '16px',
              width: '100%',
              minHeight: '220px',
              boxShadow: '0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F',
              padding: '20px'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {/* Top row: name + role */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <div
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontWeight: '600',
                    color: '#101828'
                  }}
                >
                  Meera
                </div>
                <div
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '12px',
                    lineHeight: '18px',
                    fontWeight: '500',
                    color: '#667085'
                  }}
                >
                  Vocalist + keys
                </div>
              </div>

              {/* Quote */}
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '16px',
                  lineHeight: '24px',
                  fontWeight: '400',
                  color: '#344054',
                  margin: 0,
                  flex: 1
                }}
              >
                Small details are right. Bright, fast, and easy to use on stage.
              </p>

              {/* Badge */}
              <div>
                <BadgeInstance label="Studio" variant="neutral" size="sm" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #EAECF0',
              borderRadius: '16px',
              width: '100%',
              minHeight: '220px',
              boxShadow: '0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F',
              padding: '20px'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {/* Top row: name + role */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <div
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontWeight: '600',
                    color: '#101828'
                  }}
                >
                  Kabir
                </div>
                <div
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '12px',
                    lineHeight: '18px',
                    fontWeight: '500',
                    color: '#667085'
                  }}
                >
                  Bass player
                </div>
              </div>

              {/* Quote */}
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '16px',
                  lineHeight: '24px',
                  fontWeight: '400',
                  color: '#344054',
                  margin: 0,
                  flex: 1
                }}
              >
                Price makes sense because it lasts. No regrets after weeks of heavy use.
              </p>

              {/* Badge */}
              <div>
                <BadgeInstance label="Live" variant="neutral" size="sm" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ButtonSecondary label="Explore products" />
        </div>
      </Container>
    </Section>
  );
}

// Button component
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
