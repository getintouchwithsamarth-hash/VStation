import { useEffect } from 'react';
import { LegalDocument, type LegalSection, legalLinkStyle } from '../components/legal/LegalDocument';

const META_DESCRIPTION =
  'Read the Vibe Station Terms of Service governing access to our website, storefront, accounts, products, and services.';

const sections: LegalSection[] = [
  {
    title: '1. Scope of Services',
    blocks: [
      {
        type: 'paragraph',
        content:
          'Our “Services” include our website, online storefront, customer account experience, support channels, product sales, content, and any related digital or physical services we may introduce from time to time, including future store features, member experiences, events, workshops, digital products, subscriptions, or community features, where offered.'
      }
    ]
  },
  {
    title: '2. Eligibility',
    blocks: [
      {
        type: 'paragraph',
        content:
          'You must be legally capable of entering into a binding contract under applicable law to use the Services and place orders. If you use the Services on behalf of a company or other entity, you represent that you have authority to bind that entity to these Terms.'
      }
    ]
  },
  {
    title: '3. Accounts',
    blocks: [
      { type: 'paragraph', content: 'You may be allowed to create a customer account. You are responsible for:' },
      {
        type: 'list',
        items: [
          'keeping your login credentials secure,',
          'ensuring your account information is accurate and up to date,',
          'all activity that occurs under your account to the extent caused by your actions or failure to safeguard credentials.'
        ]
      },
      {
        type: 'paragraph',
        content: 'We may suspend or terminate accounts that are used unlawfully, fraudulently, abusively, or in violation of these Terms.'
      }
    ]
  },
  {
    title: '4. Product Information and Availability',
    blocks: [
      { type: 'paragraph', content: 'We try to describe products as accurately as reasonably possible. However:' },
      {
        type: 'list',
        items: [
          'product images may vary depending on device display, lighting, or packaging updates,',
          'minor variations in appearance, finish, labeling, or packaging may occur,',
          'product availability may change without notice,',
          'some items may be offered in limited quantities.'
        ]
      },
      {
        type: 'paragraph',
        content: 'We reserve the right to modify, discontinue, or limit the availability of any product or service at any time.'
      }
    ]
  },
  {
    title: '5. Pricing and Taxes',
    blocks: [
      {
        type: 'paragraph',
        content:
          'Prices are displayed in the currency shown on the website unless otherwise stated. We may change prices at any time before an order is accepted. Applicable taxes, shipping charges, handling fees, or similar charges may be added at checkout where required.'
      },
      {
        type: 'paragraph',
        content:
          'In the event of an obvious pricing, listing, or typographical error, we reserve the right to cancel or refuse affected orders and refund any amount paid.'
      }
    ]
  },
  {
    title: '6. Orders and Acceptance',
    blocks: [
      {
        type: 'paragraph',
        content:
          'Placing an order does not guarantee acceptance. An order is accepted only when we confirm it through an order confirmation, shipment confirmation, or by dispatching the product, as applicable.'
      },
      { type: 'paragraph', content: 'We reserve the right to refuse, limit, cancel, or hold any order for reasons including:' },
      {
        type: 'list',
        items: [
          'suspected fraud or unauthorized activity,',
          'incorrect pricing or product information,',
          'stock unavailability,',
          'unusual or excessive order volumes,',
          'failure of payment authorization,',
          'delivery limitations.'
        ]
      },
      {
        type: 'paragraph',
        content:
          'If payment has already been captured for a cancelled order, we will initiate an appropriate refund in accordance with our refund policy and payment-provider processes.'
      }
    ]
  },
  {
    title: '7. Payments',
    blocks: [
      {
        type: 'paragraph',
        content:
          'Payments may be processed through third-party payment service providers, including Razorpay. By placing an order, you authorize us and our payment partners to process your payment using the method you selected.'
      },
      {
        type: 'paragraph',
        content:
          'We do not generally store full card details, banking passwords, or UPI PINs. Payment processing may be subject to verification, authorization, fraud checks, and the terms of the payment provider.'
      }
    ]
  },
  {
    title: '8. Shipping and Delivery',
    blocks: [
      {
        type: 'paragraph',
        content:
          'Shipping and delivery are governed by our Shipping Policy, which forms part of these Terms. Delivery estimates are indicative unless expressly stated otherwise. Delays may occur due to carrier issues, weather, operational constraints, force majeure events, or causes outside our control.'
      }
    ]
  },
  {
    title: '9. Returns, Replacements, and Refunds',
    blocks: [
      {
        type: 'paragraph',
        content:
          'Returns, replacements, cancellations, and refunds are governed by our Return and Refund Policy, which forms part of these Terms.'
      }
    ]
  },
  {
    title: '10. Permitted Use',
    blocks: [
      { type: 'paragraph', content: 'You agree not to:' },
      {
        type: 'list',
        items: [
          'use the Services for unlawful, fraudulent, deceptive, or abusive purposes,',
          'interfere with site security or platform integrity,',
          'scrape, copy, reproduce, or exploit the Services or content without authorization,',
          'upload or transmit malicious code or harmful material,',
          'impersonate any person or entity,',
          'attempt unauthorized access to accounts, systems, or data,',
          'use the Services in a way that could damage, disable, overburden, or impair our systems or other users’ experience.'
        ]
      }
    ]
  },
  {
    title: '11. Intellectual Property',
    blocks: [
      {
        type: 'paragraph',
        content:
          'All website content, branding, text, graphics, product photography, design elements, software interfaces, logos, trademarks, trade names, and related material made available by us are owned by or licensed to us and are protected by applicable intellectual property laws.'
      },
      {
        type: 'paragraph',
        content:
          'Except as expressly permitted in writing, you may not copy, reproduce, distribute, modify, publish, transmit, display, create derivative works from, or commercially exploit any part of the Services.'
      }
    ]
  },
  {
    title: '12. User Content',
    blocks: [
      { type: 'paragraph', content: 'If you submit reviews, feedback, suggestions, testimonials, images, messages, or other content to us:' },
      {
        type: 'list',
        items: [
          'you represent that you have the right to provide it,',
          'you grant us a non-exclusive, worldwide, royalty-free, transferable license to use, reproduce, adapt, publish, display, and distribute it in connection with operating and promoting the Services,',
          'you acknowledge that we may remove content that is unlawful, misleading, abusive, infringing, irrelevant, or otherwise inappropriate.'
        ]
      }
    ]
  },
  {
    title: '13. Third-Party Services',
    blocks: [
      {
        type: 'paragraph',
        content:
          'Parts of the Services may rely on third-party providers, including commerce infrastructure, payment processors, shipping partners, logistics providers, hosting services, and related tools. We are not responsible for third-party services except to the extent required by applicable law.'
      }
    ]
  },
  {
    title: '14. Disclaimer of Warranties',
    blocks: [
      {
        type: 'paragraph',
        content:
          'To the fullest extent permitted by law, the Services are provided on an “as is” and “as available” basis. We do not guarantee that:'
      },
      {
        type: 'list',
        items: [
          'the Services will be uninterrupted, error-free, or always available,',
          'defects will always be corrected immediately,',
          'the Services will be free from all security vulnerabilities,',
          'product descriptions or content will always be complete, current, or error-free.'
        ]
      },
      {
        type: 'paragraph',
        content:
          'Nothing in these Terms excludes any warranty or right that cannot be excluded under applicable consumer law.'
      }
    ]
  },
  {
    title: '15. Limitation of Liability',
    blocks: [
      {
        type: 'paragraph',
        content:
          'To the fullest extent permitted by law, Vibe Station and its directors, officers, employees, affiliates, agents, and service providers shall not be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages, including loss of profits, revenue, goodwill, data, or business opportunity, arising from or related to the Services.'
      },
      {
        type: 'paragraph',
        content:
          'To the fullest extent permitted by law, our aggregate liability for any claim arising out of or relating to the Services or any order shall not exceed the amount paid by you to us for the specific product or service giving rise to the claim.'
      },
      {
        type: 'paragraph',
        content: 'Nothing in these Terms limits liability where such limitation is prohibited by law.'
      }
    ]
  },
  {
    title: '16. Indemnity',
    blocks: [
      { type: 'paragraph', content: 'You agree to indemnify and hold harmless Vibe Station and its affiliates, personnel, and service providers from claims, losses, liabilities, damages, costs, and expenses arising out of:' },
      {
        type: 'list',
        items: [
          'your misuse of the Services,',
          'your violation of these Terms,',
          'your infringement of any third-party rights,',
          'your unlawful or fraudulent conduct.'
        ]
      }
    ]
  },
  {
    title: '17. Termination',
    blocks: [
      {
        type: 'paragraph',
        content:
          'We may suspend or terminate your access to the Services at our discretion if we reasonably believe you have violated these Terms, caused risk to our users, business, or systems, or engaged in fraudulent or unlawful conduct.'
      },
      { type: 'paragraph', content: 'You may stop using the Services at any time.' }
    ]
  },
  {
    title: '18. Changes to the Services or Terms',
    blocks: [
      {
        type: 'paragraph',
        content:
          'We may modify the Services or these Terms from time to time. Updated Terms become effective when posted, unless otherwise stated. Your continued use of the Services after the updated Terms are posted constitutes acceptance of the revised Terms.'
      }
    ]
  },
  {
    title: '19. Privacy',
    blocks: [
      {
        type: 'paragraph',
        content: 'Your use of the Services is also subject to our Privacy Policy and Cookie Policy.'
      }
    ]
  },
  {
    title: '20. Governing Law and Jurisdiction',
    blocks: [
      {
        type: 'paragraph',
        content:
          'These Terms shall be governed by the laws of India. Subject to applicable consumer protection and data protection laws, courts in Gujarat, India shall have jurisdiction in relation to disputes arising from these Terms or the Services.'
      }
    ]
  },
  {
    title: '21. Grievance Officer and Contact',
    blocks: [
      {
        type: 'paragraph',
        content: (
          <>
            <strong>Vibe Station</strong>
            <br />
            Operated by <strong>CODEMASTR APPS PRIVATE LIMITED</strong>
            <br />
            Gujarat, India
            <br />
            Email:{' '}
            <a href="mailto:studio@thevibestation.com" style={legalLinkStyle}>
              studio@thevibestation.com
            </a>
          </>
        )
      },
      {
        type: 'paragraph',
        content: (
          <>
            <strong>Grievance Officer</strong>
            <br />
            Name: <strong>[Insert Full Name]</strong>
            <br />
            Designation: <strong>Grievance Officer</strong>
            <br />
            Email:{' '}
            <a href="mailto:studio@thevibestation.com" style={legalLinkStyle}>
              studio@thevibestation.com
            </a>
            <br />
            Address: <strong>[Insert Full Business Address in Gujarat, India]</strong>
          </>
        )
      }
    ]
  }
];

export function Terms() {
  usePageMeta();

  return (
    <LegalDocument
      title="Terms of Service"
      lastUpdated="March 22, 2026"
      intro={[
        <>
          Welcome to Vibe Station. These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the
          website, storefront, customer account features, content, products, services, and related experiences made
          available by <strong>Vibe Station, operated by CODEMASTR APPS PRIVATE LIMITED</strong>, based in{' '}
          <strong>Gujarat, India</strong> (&ldquo;Vibe Station,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;).
        </>,
        'By accessing or using our website or purchasing from us, you agree to these Terms. If you do not agree, please do not use the Services.'
      ]}
      sections={sections}
    />
  );
}

function usePageMeta() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Terms of Service';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  useEffect(() => {
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
}
