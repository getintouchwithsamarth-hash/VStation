import { BadgeInstance } from '../../../components/ui/Badge';
import { Section } from '../../../components/layout/Section';
import { Container } from '../../../components/layout/Container';
import { useHomeMockData } from '../hooks/useHomeMockData';

export function SocialProof() {
  const { socialProof } = useHomeMockData();

  return (
    <Section paddingTop="56px" paddingBottom="56px" background="#FCFCFD">
      <Container>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
          <div
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '12px',
              lineHeight: '18px',
              fontWeight: '500',
              color: '#667085'
            }}
          >
            {socialProof.eyebrow}
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
            {socialProof.title}
          </h2>

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
            {socialProof.supporting}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
          {socialProof.chips.map((chip) => (
            <BadgeInstance key={chip} label={chip} variant="neutral" size="md" />
          ))}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            marginBottom: '32px'
          }}
        >
          {socialProof.testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
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
                    {testimonial.name}
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
                    {testimonial.role}
                  </div>
                </div>

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
