# CheckoutHandoff Component

## Overview

The CheckoutHandoff component provides a premium Center Modal transition experience before navigating users to Shopify checkout. It uses a composition of existing UI components (Modal, Card, Button, Badge) to create a calm, reassuring handoff experience.

---

## Component Structure

```
CheckoutHandoff (Center Modal)
├── HeaderSlot
│   ├── Title: "Heading to checkout"
│   ├── Subtitle: "You'll complete payment securely in checkout."
│   └── Divider (1px border-subtle)
├── BodySlot
│   ├── OrderSummaryCard (Card Variant/Subtle)
│   │   ├── Items row
│   │   ├── Shipping row
│   │   ├── Total row
│   │   └── Badge: "No password needed" (Neutral/Sm)
│   └── ProgressCue
│       ├── Progress bar background (neutral-200)
│       ├── Progress bar fill (45%, accent-600)
│       └── Caption: "Preparing your checkout…"
└── FooterSlot
    ├── Buttons
    │   ├── Ghost Button (Md): "Back to cart"
    │   └── Primary Button (Md): "Continue"
    └── Caption: "If checkout doesn't open, try again."
```

---

## Usage

### Basic Implementation

```tsx
import { CheckoutHandoff } from '../features/cart/components/CheckoutHandoff';
import { useState } from 'react';

function CartPage() {
  const [showCheckoutHandoff, setShowCheckoutHandoff] = useState(false);
  
  const handleCheckout = () => {
    setShowCheckoutHandoff(true);
  };

  const handleContinueToCheckout = () => {
    // Navigate to Shopify checkout
    window.location.href = 'https://your-shop.myshopify.com/checkout';
  };

  const handleBackToCart = () => {
    setShowCheckoutHandoff(false);
  };

  const handleClose = () => {
    setShowCheckoutHandoff(false);
  };

  return (
    <>
      {/* Cart Content */}
      <button onClick={handleCheckout}>
        Proceed to Checkout
      </button>

      {/* Checkout Handoff Modal */}
      {showCheckoutHandoff && (
        <CheckoutHandoff
          itemCount={3}
          subtotal={5997}
          onContinue={handleContinueToCheckout}
          onBack={handleBackToCart}
          onClose={handleClose}
        />
      )}
    </>
  );
}
```

---

## Props API

```tsx
interface CheckoutHandoffProps {
  itemCount: number;      // Total number of items in cart
  subtotal: number;       // Cart subtotal amount (in ₹)
  onContinue: () => void; // Handler for "Continue" button
  onBack: () => void;     // Handler for "Back to cart" button
  onClose: () => void;    // Handler for modal close (scrim or Close button)
}
```

---

## Integration Points

### 1. ShoppingCart Drawer → CheckoutHandoff

```tsx
import { CheckoutHandoff } from './CheckoutHandoff';

function ShoppingCart() {
  const [showHandoff, setShowHandoff] = useState(false);

  return (
    <>
      {/* Cart Drawer */}
      <button onClick={() => setShowHandoff(true)}>
        Proceed to Checkout
      </button>

      {/* Handoff Modal */}
      {showHandoff && (
        <CheckoutHandoff
          itemCount={cartItems.length}
          subtotal={calculateSubtotal(cartItems)}
          onContinue={() => {
            // Redirect to Shopify checkout
            window.location.href = buildCheckoutUrl(cartItems);
          }}
          onBack={() => setShowHandoff(false)}
          onClose={() => setShowHandoff(false)}
        />
      )}
    </>
  );
}
```

### 2. StickyCtaRail → CheckoutHandoff

```tsx
function StickyCtaRail() {
  const [showHandoff, setShowHandoff] = useState(false);

  return (
    <>
      {/* Sticky CTA Rail */}
      <div style={{ position: 'fixed', bottom: 0, /* ... */ }}>
        <button onClick={() => setShowHandoff(true)}>
          Checkout • ₹5,997
        </button>
      </div>

      {/* Handoff Modal */}
      {showHandoff && (
        <CheckoutHandoff
          itemCount={3}
          subtotal={5997}
          onContinue={() => {
            window.location.href = '/checkout';
          }}
          onBack={() => setShowHandoff(false)}
          onClose={() => setShowHandoff(false)}
        />
      )}
    </>
  );
}
```

---

## Component Breakdown

### OrderSummaryCard

- **Variant**: Card / Subtle
- **Padding**: Md (16px)
- **Gap**: 10px (vertical)
- **Content**:
  - Items row: label (text-muted) + count (BodySm/600, text-primary)
  - Shipping row: label (text-muted) + "Calculated in checkout" (BodySm, text-primary)
  - Total row: label (text-muted) + amount (H4, text-primary)
  - Badge: "No password needed" (Neutral/Sm)

### ProgressCue

- **Container**: height 6px, radius 999px, fill neutral-200
- **Fill**: width 45%, height 6px, radius 999px, fill accent-600
- **Caption**: "Preparing your checkout…" (Caption, text-muted)
- **Animation**: 0.3s ease-out transition on width

### FooterActions

- **Layout**: Column, gap 12px
- **Buttons**: 
  - Ghost/Md: "Back to cart"
  - Primary/Md: "Continue"
- **Caption**: "If checkout doesn't open, try again." (right-aligned, text-muted)

---

## Design Tokens Used

### Colors
```
surface-subtle: #F9FAFB (card background)
border-subtle: #EAECF0 (dividers, card border)
text-primary: #101828 (headings, values)
text-secondary: #667085 (subtitle, labels, captions)
accent-600: #4F46E5 (progress bar, primary button)
neutral-200: #E5E7EB (progress bar background)
```

### Typography
```
H3: 18px, 600, line-height 28px (title)
H4: 20px, 600, line-height 30px (total amount)
BodySm: 14px, 400/600, line-height 20px (labels/values)
Caption: 12px, 400, line-height 18px (helper text)
```

### Spacing
```
Modal padding: 20px
Modal gap: 16px
Card padding: 16px (Md)
Card gap: 10px
Footer gap: 12px
Progress gap: 8px
```

---

## User Experience Flow

1. **Trigger**: User clicks "Proceed to Checkout" in cart/drawer
2. **Appear**: Center modal fades in with scrim
3. **Review**: User sees order summary with item count, shipping note, total
4. **Progress**: Visual cue shows checkout is being prepared (45% progress)
5. **Action**: User clicks "Continue" → redirects to Shopify checkout
6. **Escape**: User can click "Back to cart", "Close", or scrim to cancel

---

## Accessibility Notes

- Modal traps focus when open
- Scrim click closes modal (expected behavior)
- "Close" button in top-right header
- "Back to cart" provides escape route
- Progress cue is visual-only (informational, not functional)

---

## Best Practices

### ✅ Do

- Show real item count and subtotal from cart state
- Redirect to actual Shopify checkout URL on "Continue"
- Close modal and return to cart on "Back to cart"
- Use loading state if checkout URL generation takes time

### ❌ Don't

- Don't show payment icons or logos (per spec)
- Don't add external branding
- Don't create custom variants (use existing components only)
- Don't add password fields (badge indicates no password needed)

---

## Next Steps (Step 69)

The CheckoutHandoff component is ready for integration into:

1. **ShoppingCart** drawer → triggers on "Proceed to Checkout"
2. **StickyCtaRail** → triggers on checkout CTA click
3. **Toast feedback** → "Added to cart" micro-feedback (upcoming)

---

## Summary

✅ Center Modal composition using ModalCenterInstance  
✅ Order summary with Card/Subtle variant  
✅ Progress cue with calm animation  
✅ Footer actions with Primary + Ghost buttons  
✅ Badge for "No password needed" message  
✅ Divider below header for visual separation  
✅ No payment icons or external logos  
✅ All existing components, no new components created  

Ready for Step 69 wiring into order flow.
