import { useEffect } from 'react';
import { LegalDocument, type LegalSection, legalLinkStyle } from '../components/legal/LegalDocument';

const META_DESCRIPTION =
  'Read the Vibe Station Cookie Policy to understand how cookies and similar technologies are used on the site.';

const sections: LegalSection[] = [
  {
    title: '1. What Are Cookies',
    blocks: [
      {
        type: 'paragraph',
        content:
          'Cookies are small text files placed on your browser or device when you visit a website. Similar technologies may include local storage, pixels, tags, SDKs, and session identifiers.'
      },
      {
        type: 'paragraph',
        content:
          'They help websites function, remember preferences, maintain sessions, support security, and understand how services are used.'
      }
    ]
  },
  {
    title: '2. Why We Use Cookies',
    blocks: [
      { type: 'paragraph', content: 'We may use cookies and similar technologies for the following purposes:' },
      {
        type: 'list',
        items: [
          'to keep the website functioning properly,',
          'to maintain secure sessions,',
          'to support cart and account continuity,',
          'to remember preferences,',
          'to help detect fraud or abuse,',
          'to improve reliability and technical performance,',
          'to support essential storefront and commerce operations.'
        ]
      }
    ]
  },
  {
    title: '3. Types of Cookies We May Use',
    blocks: [
      { type: 'subheading', content: 'Strictly Necessary Cookies' },
      {
        type: 'paragraph',
        content: 'These are required for the website to function properly. They may support:'
      },
      {
        type: 'list',
        items: [
          'login sessions,',
          'shopping cart functionality,',
          'checkout continuity,',
          'fraud prevention,',
          'security,',
          'load balancing,',
          'basic site performance.'
        ]
      },
      {
        type: 'paragraph',
        content:
          'These cookies are generally necessary for the operation of the website and cannot always be disabled without affecting functionality.'
      },
      { type: 'subheading', content: 'Functional Cookies' },
      {
        type: 'paragraph',
        content:
          'These help remember choices you make, such as preferences, region, or similar settings that improve your experience.'
      },
      { type: 'subheading', content: 'Performance or Analytics Cookies' },
      {
        type: 'paragraph',
        content:
          'These may help us understand site usage, diagnose issues, and improve performance. As of the date of this policy, we do not describe the routine use of third-party advertising pixels or non-essential marketing trackers in this Cookie Policy. If we introduce optional analytics or similar tools in the future, we may update this policy and provide additional notice or choices where required.'
      },
      { type: 'subheading', content: 'Advertising or Targeting Cookies' },
      {
        type: 'paragraph',
        content:
          'As of the date of this policy, we do not state that we use advertising or retargeting cookies for profiling-based ad delivery. If that changes, we may update this Cookie Policy and, where required, seek or manage consent appropriately.'
      }
    ]
  },
  {
    title: '4. Third-Party Technologies',
    blocks: [
      {
        type: 'paragraph',
        content:
          'Some parts of the storefront or supporting infrastructure may rely on third-party technologies, including commerce, hosting, payment, security, and delivery-related systems. These providers may set or access cookies or similar technologies where needed for core functionality, fraud prevention, or transaction support.'
      }
    ]
  },
  {
    title: '5. Browser Controls',
    blocks: [
      {
        type: 'paragraph',
        content:
          'Most browsers allow you to manage cookies through settings, including blocking or deleting cookies. However, disabling cookies may affect core functionality such as:'
      },
      {
        type: 'list',
        items: ['login,', 'cart persistence,', 'checkout flow,', 'account access,', 'security features.']
      }
    ]
  },
  {
    title: '6. Consent and Choices',
    blocks: [
      {
        type: 'paragraph',
        content:
          'Where applicable law requires consent for non-essential cookies, we may present a consent or preference mechanism. Where such tools are not legally required or where only strictly necessary cookies are used, cookie choices may be more limited.'
      }
    ]
  },
  {
    title: '7. International Visitors',
    blocks: [
      {
        type: 'paragraph',
        content:
          'If you access our site from a jurisdiction with specific cookie or privacy rights, your rights may depend on the law applicable to your location. We may update our consent and cookie practices as our site, tools, and legal obligations evolve.'
      }
    ]
  },
  {
    title: '8. Updates to This Policy',
    blocks: [
      {
        type: 'paragraph',
        content:
          'We may update this Cookie Policy from time to time to reflect changes in law, technology, our service providers, or our website practices. The updated version will be posted with a revised “Last updated” date.'
      }
    ]
  },
  {
    title: '9. Contact',
    blocks: [
      {
        type: 'paragraph',
        content: (
          <a href="mailto:studio@thevibestation.com" style={legalLinkStyle}>
            studio@thevibestation.com
          </a>
        )
      }
    ]
  }
];

export function CookiePolicy() {
  usePageMeta();

  return (
    <LegalDocument
      title="Cookie Policy"
      lastUpdated="March 22, 2026"
      intro={['This Cookie Policy explains how Vibe Station uses cookies and similar technologies in connection with our website, storefront, and related services.']}
      sections={sections}
    />
  );
}

function usePageMeta() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Cookie Policy';
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
