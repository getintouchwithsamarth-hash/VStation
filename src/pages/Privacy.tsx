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
    <Section paddingTop="48px" paddingBottom="64px" background="var(--background)">
      <Container>
        <Stack gap="24px">
          <header>
            <h1 style={titleStyle}>Privacy Policy</h1>
            <p style={lastUpdatedStyle}>Last updated: March 10, 2026</p>
          </header>

          <p style={paragraphStyle}>
            Vibe Station (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is
            committed to handling your personal information responsibly. This Privacy Policy explains how we collect,
            use, disclose, store, and protect personal information when you visit, use, or make a purchase through our
            website, storefront, customer account experience, and related services (collectively, the
            &ldquo;Services&rdquo;).
          </p>

          <p style={paragraphStyle}>
            Vibe Station, operated by CODEMASTR APPS PRIVATE LIMITED, is based in Gujarat, India.
          </p>

          <p style={paragraphStyle}>
            Our Services may be powered in part by third-party commerce and operational infrastructure, including
            Shopify for commerce operations, Razorpay for payments, and Shiprocket for shipping and fulfillment
            support. Those providers may process personal information in accordance with their own terms, notices, and
            applicable law.
          </p>

          <p style={paragraphStyle}>
            By using our Services, you acknowledge that your information will be handled as described in this Privacy
            Policy.
          </p>

          <PolicySection title="1. Information We Collect">
            <SectionSubheading>Information you provide directly</SectionSubheading>
            <PolicyList
              items={[
                'name',
                'email address',
                'phone number',
                'shipping address',
                'billing address',
                'account details',
                'order details and purchase history',
                'messages, inquiries, support requests, reviews, and other communications you send to us'
              ]}
            />

            <SectionSubheading>Information collected automatically</SectionSubheading>
            <PolicyList
              items={[
                'device and browser information',
                'IP address',
                'approximate location inferred from IP address',
                'pages viewed and interactions with the Services',
                'timestamps, referral information, and technical diagnostics',
                'cookie and session data necessary for site functionality, security, and account continuity'
              ]}
            />

            <SectionSubheading>Information from service providers and transaction partners</SectionSubheading>
            <PolicyList
              items={[
                'payment status and limited transaction metadata from payment processors',
                'shipping, delivery, and fulfillment updates from logistics and shipping partners',
                'fraud, risk, security, and operational signals necessary to protect the Services'
              ]}
            />

            <p style={paragraphStyle}>
              We do <strong>not</strong> collect your card number, UPI PIN, bank password, or similar full financial
              credentials directly unless explicitly shown and stated at checkout. Payment information is typically
              handled by our payment service providers.
            </p>
          </PolicySection>

          <PolicySection title="2. How We Use Information">
            <PolicyList
              items={[
                'create, maintain, and secure customer accounts',
                'authenticate users and keep accounts functional',
                'process orders, payments, shipping, returns, replacements, and refunds',
                'communicate about purchases, deliveries, service issues, and support requests',
                'provide customer support',
                'detect, investigate, and prevent fraud, misuse, unauthorized access, and other harmful activity',
                'maintain, troubleshoot, and improve the functionality, reliability, and security of the Services',
                'comply with legal obligations and enforce our terms, policies, and rights'
              ]}
            />

            <p style={paragraphStyle}>
              We may also use aggregated or de-identified information where permitted by law.
            </p>
          </PolicySection>

          <PolicySection title="3. Cookies and Similar Technologies">
            <p style={paragraphStyle}>
              We may use cookies, local storage, session technologies, and similar tools that are reasonably necessary
              to operate the Services, keep users signed in, remember preferences, maintain security, and support
              essential website functionality.
            </p>

            <p style={paragraphStyle}>
              At present, we do not state in this Privacy Policy that we use advertising trackers, marketing pixels, or
              non-essential analytics tools. If we introduce such tools in the future, we may update this Privacy
              Policy and, where required, provide additional notice or choices.
            </p>

            <p style={paragraphStyle}>
              You can usually control cookies through your browser settings, though disabling certain cookies may affect
              functionality.
            </p>
          </PolicySection>

          <PolicySection title="4. Payments">
            <p style={paragraphStyle}>
              Payments are processed through third-party payment providers, including Razorpay. These providers may
              collect, process, and store payment-related information under their own privacy notices, security
              practices, and legal obligations. We generally receive limited payment-related information such as payment
              confirmation, payment status, transaction identifiers, and other operational details necessary to complete
              your order, manage refunds, prevent fraud, and maintain records.
            </p>
          </PolicySection>

          <PolicySection title="5. Shipping and Fulfillment">
            <p style={paragraphStyle}>
              To fulfill and deliver your orders, we may share relevant information such as your name, phone number,
              shipping address, order contents, shipment value, and delivery instructions with shipping, courier, and
              fulfillment partners, including Shiprocket and carrier partners it may engage. This information is used
              only as reasonably necessary for order processing, fulfillment, delivery, returns, support, logistics
              coordination, and related compliance purposes.
            </p>
          </PolicySection>

          <PolicySection title="6. Commerce Infrastructure and Store Operations">
            <p style={paragraphStyle}>
              Our commerce operations may be supported by Shopify, including storefront, checkout-related
              infrastructure, order management, customer account functionality, and related commerce services. Even
              where the customer experience is delivered through a custom or headless storefront, the underlying
              commerce workflow may still involve third-party platform infrastructure. To the extent these providers
              process personal information for store operations, that processing may also be governed by their own
              notices and contractual terms.
            </p>
          </PolicySection>

          <PolicySection title="7. How We Share Information">
            <p style={paragraphStyle}>We do not sell personal information in the ordinary meaning of that term.</p>

            <p style={paragraphStyle}>We may share personal information:</p>
            <PolicyList
              items={[
                'with service providers and vendors that help us operate the Services',
                'with payment, shipping, fulfillment, hosting, security, and commerce infrastructure providers',
                'where necessary to investigate fraud, enforce our terms, or protect rights, safety, and property',
                'where required by law, regulation, legal process, or lawful authority request',
                'in connection with a merger, financing, acquisition, restructuring, dissolution, sale of assets, or similar transaction',
                'with your direction or consent'
              ]}
            />
          </PolicySection>

          <PolicySection title="8. Legal Bases and Lawful Use">
            <p style={paragraphStyle}>Where applicable law requires a legal basis for processing, we may process personal information because:</p>
            <PolicyList
              items={[
                'it is necessary to provide the Services or perform a contract with you',
                'it is necessary to comply with legal obligations',
                'it is necessary for our legitimate interests, such as securing, operating, and improving the Services',
                'you have given consent, where consent is required'
              ]}
            />
          </PolicySection>

          <PolicySection title="9. Data Retention">
            <p style={paragraphStyle}>
              We retain personal information for as long as reasonably necessary for the purposes described in this
              Privacy Policy, including to:
            </p>
            <PolicyList
              items={[
                'provide the Services',
                'complete transactions and fulfill orders',
                'maintain financial, tax, accounting, and business records',
                'resolve disputes',
                'enforce agreements',
                'comply with legal, regulatory, or reporting obligations'
              ]}
            />

            <p style={paragraphStyle}>
              Retention periods may vary depending on the type of information and the purpose for which it was
              collected.
            </p>
          </PolicySection>

          <PolicySection title="10. Data Security">
            <p style={paragraphStyle}>
              We use reasonable administrative, technical, and organizational safeguards designed to protect personal
              information, such as access controls, secure transmission practices, and measures intended to reduce the
              risk of unauthorized access, alteration, disclosure, or destruction.
            </p>

            <p style={paragraphStyle}>
              However, no method of transmission over the internet and no method of electronic storage is completely
              secure, and we cannot guarantee absolute security.
            </p>
          </PolicySection>

          <PolicySection title="11. International Data Transfers">
            <p style={paragraphStyle}>
              Your personal information may be processed, stored, or accessed in countries other than the country in
              which you are located, including through service providers and infrastructure partners. Where applicable,
              we take reasonable steps to require appropriate protections for such transfers under applicable law.
            </p>
          </PolicySection>

          <PolicySection title="12. Your Rights">
            <p style={paragraphStyle}>
              Depending on your location and the laws that apply, you may have the right to:
            </p>
            <PolicyList
              items={[
                'request access to your personal information',
                'request correction of inaccurate or incomplete information',
                'request deletion of your personal information',
                'request a copy of certain personal information',
                'object to or restrict certain processing',
                'withdraw consent where processing is based on consent'
              ]}
            />

            <p style={paragraphStyle}>
              We may need to verify your identity before acting on certain requests. We may also deny or limit requests
              where permitted by law.
            </p>
          </PolicySection>

          <PolicySection title="13. Children’s Privacy">
            <p style={paragraphStyle}>
              Our Services are not directed to children, and we do not knowingly collect personal information from
              children where doing so would violate applicable law. If you believe a child has provided personal
              information to us improperly, please contact us so we can take appropriate action.
            </p>
          </PolicySection>

          <PolicySection title="14. Changes to This Privacy Policy">
            <p style={paragraphStyle}>
              We may update this Privacy Policy from time to time to reflect changes in our business, technology stack,
              legal obligations, or privacy practices. When we do, we will revise the &ldquo;Last updated&rdquo; date
              above. Where required, we will provide additional notice or obtain consent.
            </p>
          </PolicySection>

          <PolicySection title="15. Governing Law and Jurisdiction">
            <p style={paragraphStyle}>
              This Privacy Policy shall be governed by the laws of India. Subject to applicable consumer protection and
              data protection laws, courts in Gujarat, India shall have jurisdiction in relation to disputes arising
              from this Privacy Policy or the Services.
            </p>
          </PolicySection>

          <PolicySection title="16. Contact Us">
            <p style={paragraphStyle}>For privacy questions, requests, or complaints, contact us at:</p>
            <p style={paragraphStyle}>
              <a href="mailto:studio@thevibestation.com" style={linkStyle}>
                studio@thevibestation.com
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
      <Stack gap="14px">{children}</Stack>
    </section>
  );
}

function SectionSubheading({ children }: { children: ReactNode }) {
  return <h3 style={subheadingStyle}>{children}</h3>;
}

function PolicyList({ items }: { items: string[] }) {
  return (
    <ul style={listStyle}>
      {items.map((item) => (
        <li key={item} style={listItemStyle}>
          {item}
        </li>
      ))}
    </ul>
  );
}

const titleStyle: CSSProperties = {
  margin: 0,
  color: 'var(--foreground)',
  fontSize: '36px',
  lineHeight: '44px',
  fontWeight: 700
};

const lastUpdatedStyle: CSSProperties = {
  marginTop: '8px',
  marginBottom: 0,
  color: 'var(--muted-foreground)',
  fontSize: '14px',
  lineHeight: '20px'
};

const sectionTitleStyle: CSSProperties = {
  marginTop: 0,
  marginBottom: '10px',
  color: 'var(--foreground)',
  fontSize: '20px',
  lineHeight: '30px',
  fontWeight: 600
};

const subheadingStyle: CSSProperties = {
  margin: 0,
  color: 'var(--foreground)',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 600
};

const paragraphStyle: CSSProperties = {
  margin: 0,
  color: 'var(--muted-foreground)',
  fontSize: '16px',
  lineHeight: '24px'
};

const listStyle: CSSProperties = {
  margin: 0,
  paddingLeft: '20px',
  color: 'var(--muted-foreground)',
  display: 'grid',
  gap: '8px'
};

const listItemStyle: CSSProperties = {
  fontSize: '16px',
  lineHeight: '24px'
};

const linkStyle: CSSProperties = {
  color: 'var(--primary)',
  textDecoration: 'none',
  fontWeight: 600
};
