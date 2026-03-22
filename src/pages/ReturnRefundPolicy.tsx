import { useEffect } from 'react';
import { LegalDocument, type LegalSection, legalLinkStyle } from '../components/legal/LegalDocument';

const META_DESCRIPTION =
  'Read the Vibe Station Return and Refund Policy covering returns, replacements, cancellations, and refunds.';

const sections: LegalSection[] = [
  {
    title: '1. General Principle',
    blocks: [
      {
        type: 'paragraph',
        content:
          'We aim to be fair, clear, and practical. Because many products sold through music and creator-commerce stores may be personal-use, consumable, sealed, fragile, or performance-related, not every product is eligible for return after delivery.'
      }
    ]
  },
  {
    title: '2. Eligible Cases',
    blocks: [
      { type: 'paragraph', content: 'You may be eligible for a return, replacement, refund, or other appropriate resolution if:' },
      {
        type: 'list',
        items: [
          'you received the wrong product,',
          'the product arrived damaged,',
          'the product was defective on arrival,',
          'the product is materially different from what was ordered,',
          'the order was cancelled before dispatch and payment had already been captured.'
        ]
      }
    ]
  },
  {
    title: '3. Reporting Window',
    blocks: [
      {
        type: 'paragraph',
        content:
          'For wrong, damaged, missing, tampered, or defective-on-arrival items, you must contact us within 48 hours of delivery with:'
      },
      {
        type: 'list',
        items: [
          'your order number,',
          'a description of the issue,',
          'clear photos or videos of the package and product,',
          'any other information reasonably requested for verification.'
        ]
      },
      {
        type: 'paragraph',
        content:
          'Claims reported after this window may be declined where verification is no longer reasonably possible.'
      }
    ]
  },
  {
    title: '4. Change-of-Mind Returns',
    blocks: [
      {
        type: 'paragraph',
        content:
          'Unless otherwise stated on the product page, at checkout, or in a specific promotion, change-of-mind returns are generally not guaranteed.'
      },
      {
        type: 'paragraph',
        content:
          'Where we choose to accept a discretionary change-of-mind return, it will usually require that:'
      },
      {
        type: 'list',
        items: [
          'the request is made within 3 days of delivery,',
          'the product is unused,',
          'the product is unopened where sealed,',
          'the product is in original condition,',
          'all tags, packaging, accessories, manuals, and bundled items are included,',
          'the item passes return inspection.'
        ]
      },
      {
        type: 'paragraph',
        content:
          'In such cases, original shipping fees and return shipping costs may be deducted unless the return is due to our error.'
      }
    ]
  },
  {
    title: '5. Non-Returnable / Non-Refundable Items',
    blocks: [
      {
        type: 'paragraph',
        content:
          'Unless required by applicable law or expressly approved by us, the following are generally not eligible for return or refund:'
      },
      {
        type: 'list',
        items: [
          'used products,',
          'opened sealed items,',
          'consumables,',
          'hygiene-sensitive items,',
          'customized or made-to-order products,',
          'special-order items,',
          'gift cards,',
          'digital products or downloadable content,',
          'products damaged due to misuse, mishandling, improper installation, abuse, neglect, unauthorized repair, or normal wear and tear,',
          'clearance, final-sale, or non-returnable items marked as such.'
        ]
      }
    ]
  },
  {
    title: '6. Return Approval',
    blocks: [
      {
        type: 'paragraph',
        content:
          'A return must be approved by us before you send any item back. Unauthorized returns may be refused, delayed, or treated as ineligible.'
      },
      {
        type: 'paragraph',
        content: 'If a return is approved, we may provide instructions regarding:'
      },
      {
        type: 'list',
        items: ['return pickup,', 'self-shipping,', 'packaging requirements,', 'return address,', 'supporting documentation.']
      }
    ]
  },
  {
    title: '7. Inspection and Resolution',
    blocks: [
      {
        type: 'paragraph',
        content:
          'Once the returned item is received, we may inspect it before approving a refund, replacement, store credit, or other resolution.'
      },
      {
        type: 'paragraph',
        content:
          'If the claim is validated, we may choose one of the following remedies at our discretion, subject to applicable law:'
      },
      {
        type: 'list',
        items: ['replacement,', 'refund,', 'repair support,', 'store credit,', 'partial refund where appropriate.']
      }
    ]
  },
  {
    title: '8. Refund Method and Timeline',
    blocks: [
      {
        type: 'paragraph',
        content:
          'Approved refunds are generally processed back to the original payment method, unless otherwise agreed or required.'
      },
      {
        type: 'paragraph',
        content: 'After approval, refund timelines may vary depending on:'
      },
      {
        type: 'list',
        items: ['your payment method,', 'banking systems,', 'payment gateway processes,', 'public holidays,', 'technical settlement cycles.']
      },
      {
        type: 'paragraph',
        content:
          'As a general estimate, processed refunds may reflect within 5 to 10 business days, though some payment methods may take longer.'
      }
    ]
  },
  {
    title: '9. Cancellation Policy',
    blocks: [
      { type: 'paragraph', content: 'Orders may be cancelled before dispatch unless:' },
      {
        type: 'list',
        items: [
          'the product is already packed or shipped,',
          'the product is customized or specially procured,',
          'the order is otherwise marked non-cancellable.'
        ]
      },
      {
        type: 'paragraph',
        content:
          'If an order is cancelled after payment but before dispatch, an appropriate refund will be initiated.'
      }
    ]
  },
  {
    title: '10. Refused Delivery / Return-to-Origin',
    blocks: [
      {
        type: 'paragraph',
        content:
          'If an order is refused at delivery or returned because of customer-caused delivery failure, we may deduct shipping, return shipping, handling, payment, or recovery charges from any applicable refund.'
      }
    ]
  },
  {
    title: '11. Fraud Prevention',
    blocks: [
      { type: 'paragraph', content: 'We reserve the right to deny returns, replacements, or refunds in cases involving:' },
      {
        type: 'list',
        items: [
          'suspicious claims,',
          'repeated abuse of refund policies,',
          'incomplete or false evidence,',
          'tampering,',
          'serial return misuse,',
          'non-compliance with this policy.'
        ]
      }
    ]
  },
  {
    title: '12. Statutory Rights',
    blocks: [
      {
        type: 'paragraph',
        content: 'Nothing in this policy limits any non-waivable rights you may have under applicable consumer law.'
      }
    ]
  },
  {
    title: '13. Contact',
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

export function ReturnRefundPolicy() {
  usePageMeta();

  return (
    <LegalDocument
      title="Return and Refund Policy"
      lastUpdated="March 22, 2026"
      intro={['This Return and Refund Policy explains when returns, replacements, cancellations, and refunds may be available for purchases made from Vibe Station.']}
      sections={sections}
    />
  );
}

function usePageMeta() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Return and Refund Policy';
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
