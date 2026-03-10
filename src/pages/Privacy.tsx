import { useEffect, type CSSProperties, type ReactNode } from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Stack } from '../components/layout/Stack';

const META_DESCRIPTION =
  'Read the Vibe Station Privacy Policy to understand what information we collect, how we use it, and your privacy rights.';

export function Privacy() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Privacy Policy';

    let metaDescription = document.querySelector('meta[name="description"]');
    const hadMetaDescription = Boolean(metaDescription);

    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }

    const previousDescription = metaDescription.getAttribute('content');
    metaDescription.setAttribute('content', META_DESCRIPTION);

    return () => {
      document.title = previousTitle;

      if (!metaDescription) {
        return;
      }

      if (hadMetaDescription) {
        if (previousDescription !== null) {
          metaDescription.setAttribute('content', previousDescription);
        }
      } else {
        metaDescription.remove();
      }
    };
  }, []);

  return (
    <Section paddingTop="48px" paddingBottom="64px" background="#FFFFFF">
      <Container>
        <Stack gap="24px">
          <header>
            <h1 style={titleStyle}>Privacy Policy</h1>
            <p style={lastUpdatedStyle}>Last updated: March 10, 2026</p>
          </header>

          <PolicySection title="Information We Collect">
            <p style={paragraphStyle}>
              We collect information you provide directly, such as your name, email address, shipping details,
              billing details, and order history. We may also receive profile information from social login providers
              when you choose those sign-in methods.
            </p>
          </PolicySection>

          <PolicySection title="How We Use Information">
            <p style={paragraphStyle}>
              We use information to create and manage accounts, process and deliver orders, provide support, improve
              product experience, prevent fraud, and communicate service updates.
            </p>
          </PolicySection>

          <PolicySection title="Cookies">
            <p style={paragraphStyle}>
              We use cookies and similar technologies to keep you signed in, remember preferences, analyze traffic, and
              improve performance. You can control cookies through your browser settings.
            </p>
          </PolicySection>

          <PolicySection title="Third-Party Services">
            <p style={paragraphStyle}>
              We may use third-party services for payments, analytics, authentication, hosting, shipping, and
              communication workflows. These providers process data under their own policies and applicable law.
            </p>
          </PolicySection>

          <PolicySection title="Google Login & Facebook Login data usage">
            <p style={paragraphStyle}>
              If you sign in with Google or Facebook, we may receive your name, email address, profile image, and
              provider account identifier based on your permission settings. We do not receive your Google or Facebook
              password, and this data is used only for authentication, account setup, and account security.
            </p>
          </PolicySection>

          <PolicySection title="Data Security">
            <p style={paragraphStyle}>
              We apply reasonable safeguards including encrypted connections, access controls, and security monitoring.
              No system can guarantee complete security, but we continuously work to protect your information.
            </p>
          </PolicySection>

          <PolicySection title="User Rights">
            <p style={paragraphStyle}>
              Depending on your location, you may have rights to access, correct, delete, or export your personal
              information, and to object to or limit certain processing. To submit a request, contact us at the email
              below.
            </p>
          </PolicySection>

          <PolicySection title="Contact Information">
            <p style={paragraphStyle}>For privacy questions or requests, contact us at:</p>
            <p style={paragraphStyle}>
              <a href="mailto:support@example.com" style={linkStyle}>
                support@example.com
              </a>
            </p>
          </PolicySection>
        </Stack>
      </Container>
    </Section>
  );
}

function PolicySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 style={sectionTitleStyle}>{title}</h2>
      {children}
    </section>
  );
}

const titleStyle: CSSProperties = {
  margin: 0,
  color: '#101828',
  fontSize: '36px',
  lineHeight: '44px',
  fontWeight: 700
};

const lastUpdatedStyle: CSSProperties = {
  marginTop: '8px',
  marginBottom: 0,
  color: '#667085',
  fontSize: '14px',
  lineHeight: '20px'
};

const sectionTitleStyle: CSSProperties = {
  marginTop: 0,
  marginBottom: '10px',
  color: '#101828',
  fontSize: '20px',
  lineHeight: '30px',
  fontWeight: 600
};

const paragraphStyle: CSSProperties = {
  margin: 0,
  color: '#344054',
  fontSize: '16px',
  lineHeight: '24px'
};

const linkStyle: CSSProperties = {
  color: '#175CD3',
  textDecoration: 'none',
  fontWeight: 600
};
