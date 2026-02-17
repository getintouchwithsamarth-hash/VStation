import { BadgeInstance } from '../components/ui/Badge';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';

export function Home() {
  return (
    <>
      <PageHeader />
      <PageBody />
    </>
  );
}

function PageHeader() {
  return (
    <>
      <Hero />
      <HeroMetaSlot />
    </>
  );
}

function PageBody() {
  return (
    <>
      <FeaturedDrop />
      <WhyItMatters />
      <CraftAndDurability />
      <FeatureHighlights />
      <UseCases />
      <SocialProof />
      <CommunityTeaser />
      <FaqPreview />
      <ClosingCta />
    </>
  );
}

function Hero() {
  return (
    <div 
      style={{ 
        backgroundColor: '#FFFFFF',
        paddingTop: '56px',
        paddingBottom: '48px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Quiet glow backdrop */}
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

      {/* Content wrapper */}
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
        {/* 2-column layout */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '64px',
            alignItems: 'center'
          }}
        >
          {/* Left column */}
          <div style={{ flex: '0 0 55%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
                Curated essentials for musicians
              </div>

              {/* Headline */}
              <h1 
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '48px',
                  lineHeight: '56px',
                  fontWeight: '600',
                  color: '#101828',
                  letterSpacing: '-0.01em',
                  margin: 0
                }}
              >
                Gear that survives practice, travel, and stage.
              </h1>

              {/* Supporting copy */}
              <p 
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '18px',
                  lineHeight: '28px',
                  fontWeight: '400',
                  color: '#344054',
                  maxWidth: '540px',
                  margin: 0
                }}
              >
                We research what musicians actually need, then pick durable, best-in-class tools with modern features — so you buy once and keep playing.
              </p>

              {/* CTA row */}
              <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                <ButtonPrimary label="Shop products" />
                <ButtonSecondary label="Our philosophy" />
              </div>

              {/* Micro meta row */}
              <div 
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: '400',
                  color: '#667085',
                  marginTop: '8px'
                }}
              >
                Fast delivery · Clear returns · Responsive support
              </div>
            </div>
          </div>

          {/* Right column */}
          <div style={{ flex: '0 0 45%', position: 'relative' }}>
            {/* Main featured card */}
            <div 
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #EAECF0',
                borderRadius: '16px',
                width: '480px',
                height: '420px',
                boxShadow: '0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F',
                overflow: 'hidden'
              }}
            >
              {/* MediaSlot - product image placeholder */}
              <div 
                style={{
                  backgroundColor: '#F2F4F7',
                  height: '280px',
                  width: '100%'
                }}
              />
              
              {/* BodySlot - content */}
              <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
                  <div 
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: '22px',
                      lineHeight: '30px',
                      fontWeight: '600',
                      color: '#101828'
                    }}
                  >
                    Clip-on tuner, pro grade
                  </div>
                  <div 
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: '14px',
                      lineHeight: '20px',
                      fontWeight: '400',
                      color: '#344054'
                    }}
                  >
                    Accurate, fast, stage-ready.
                  </div>
                </div>
              </div>
            </div>

            {/* Smaller overlapping card */}
            <div 
              style={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                backgroundColor: '#FFFFFF',
                border: '1px solid #EAECF0',
                borderRadius: '16px',
                width: '260px',
                height: '140px',
                boxShadow: '0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F',
                padding: '16px',
                display: 'flex',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              {/* Small placeholder image */}
              <div 
                style={{
                  backgroundColor: '#F2F4F7',
                  width: '80px',
                  height: '80px',
                  borderRadius: '8px',
                  flexShrink: 0
                }}
              />
              
              {/* Text content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div 
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontWeight: '600',
                    color: '#101828'
                  }}
                >
                  Built for daily use
                </div>
                <div 
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontWeight: '400',
                    color: '#344054'
                  }}
                >
                  Durable + reliable
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroMetaSlot() {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '24px',
        paddingBottom: '24px'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '24px',
          paddingRight: '24px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          <BadgeInstance label="Curated for durability" variant="neutral" size="md" />
          <BadgeInstance label="Modern features" variant="neutral" size="md" />
          <BadgeInstance label="Clear policies" variant="neutral" size="md" />
        </div>
      </div>
    </div>
  );
}

function FeaturedDrop() {
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

function WhyItMatters() {
  return null;
}

function CraftAndDurability() {
  return null;
}

function FeatureHighlights() {
  return null;
}

function UseCases() {
  return null;
}

function SocialProof() {
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

function CommunityTeaser() {
  return null;
}

function FaqPreview() {
  return null;
}

function ClosingCta() {
  return null;
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