# Cart Implementation: Dual Presentation Architecture

## Overview

The shopping cart implementation follows a **dual presentation pattern**, providing two distinct user experiences from a shared set of components:

1. **Presentation / Drawer** - Modal overlay with right-side drawer (quick cart preview)
2. **Presentation / Page** - Full-width page layout (dedicated cart experience)

Both presentations share the same cart logic and reusable UI components, ensuring consistency while optimizing for different user flows.

---

## Architecture

### Component Hierarchy

```
ShoppingCart (root)
├── PresentationDrawer
│   ├── CartItemCard (×3)
│   └── OrderSummaryCard
└── PresentationPage
    ├── CartItemsColumn
    │   ├── CartItemCard (×3)
    │   └── Add-ons Section
    └── SummaryColumn
        ├── OrderSummaryCard
        └── Action Buttons
```

### File Structure

```
src/features/cart/components/
├── ShoppingCart.tsx          # Root orchestrator
├── PresentationDrawer.tsx    # Drawer variant
├── PresentationPage.tsx      # Full-page variant
├── CartItemsColumn.tsx       # Left column (page only)
├── SummaryColumn.tsx         # Right column (page only)
├── CartItemCard.tsx          # Reusable item card
└── OrderSummaryCard.tsx      # Reusable summary card
```

---

## Presentation / Drawer

### Purpose
Quick cart access from anywhere in the app. Appears as an overlay without navigating away from the current page.

### Visual Structure

```
┌─────────────────────────────────────┐
│ [Scrim - 50% black overlay]         │
│                                      │
│                  ┌──────────────────┤
│                  │ Header           │
│                  │ "Cart" + Badge   │
│                  ├──────────────────┤
│                  │                  │
│                  │ Cart Items       │
│                  │ [scrollable]     │
│                  │                  │
│                  │ Order Summary    │
│                  │                  │
│                  ├──────────────────┤
│                  │ Footer           │
│                  │ Checkout Button  │
│                  │ Continue Button  │
└──────────────────┴──────────────────┘
```

### Key Features

- **Fixed positioning** (`position: fixed`) - Overlays entire viewport
- **Scrim layer** - Semi-transparent black background (rgba(0, 0, 0, 0.5))
- **Right-side drawer** - 420px width, slides in from right
- **Three-slot layout**:
  - **HeaderSlot**: Cart title + item count badge
  - **BodySlot**: Scrollable cart items + order summary
  - **FooterSlot**: Sticky action buttons

### Implementation Details

```tsx
<div style={{ position: 'fixed', zIndex: 50 }}>
  {/* Scrim */}
  <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
  
  {/* Drawer Panel */}
  <div style={{ 
    position: 'absolute',
    right: 0,
    width: '420px',
    display: 'flex',
    flexDirection: 'column'
  }}>
    <HeaderSlot />
    <BodySlot />  {/* flex: 1, overflowY: auto */}
    <FooterSlot />
  </div>
</div>
```

### Design Tokens

- **Width**: 420px
- **Shadow**: `-4px 0 6px -1px rgba(0, 0, 0, 0.1)`
- **Border**: `1px solid #E5E7EB` (left side)
- **Padding**: 24px (consistent across all slots)
- **Gap**: 12px (between cart items), 24px (between sections)

---

## Presentation / Page

### Purpose
Dedicated full-screen cart experience with more space for item management, recommendations, and order details.

### Visual Structure

```
┌─────────────────────────────────────────────────────┐
│ [Section with #FAFBFC background]                   │
│ ┌─────────────────────────────────────────────────┐ │
│ │ [Container - max 1200px]                        │ │
│ │                                                  │ │
│ │ ┌──────────────────┬────────────────────────┐   │ │
│ │ │ Left Column 65%  │ Right Column 35%       │   │ │
│ │ │                  │ (sticky)               │   │ │
│ │ │ "Your cart"      │                        │   │ │
│ │ │                  │ Order Summary          │   │ │
│ │ │ Cart Item 1      │                        │   │ │
│ │ │ Cart Item 2      │ Checkout Button        │   │ │
│ │ │ Cart Item 3      │ Continue Shopping      │   │ │
│ │ │                  │ Caption                │   │ │
│ │ │ Add-ons Section  │                        │   │ │
│ │ │  [Mini card 1]   │                        │   │ │
│ │ │  [Mini card 2]   │                        │   │ │
│ │ └──────────────────┴────────────────────────┘   │ │
│ └─────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘
```

### Key Features

- **Section/Container layout** - Follows global page structure
- **Two-column grid** - 65% / 35% split
- **Sticky summary** - Right column stays visible on scroll
- **Add-ons section** - Cross-sell opportunities below cart items
- **Generous spacing** - Premium, breathable layout

### Left Column (CartItemsColumn)

**Contains:**
1. Page title: "Your cart" (H2)
2. Cart items stack (vertical, gap: 12px)
3. Add-ons section (Subtle Card):
   - Title: "Add-ons you may like" (H4)
   - 2-item horizontal row (200px each)
   - Mini product cards with "Add" buttons

**Styling:**
```tsx
<div style={{
  flex: '0 0 65%',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px'
}}>
```

### Right Column (SummaryColumn)

**Contains:**
1. OrderSummaryCard (reused component)
2. Primary Button: "Checkout"
3. Secondary Button: "Continue shopping"
4. Caption: "Taxes and shipping calculated at checkout."

**Styling:**
```tsx
<div style={{
  flex: '0 0 35%',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  position: 'sticky',
  top: '24px'
}}>
```

### Design Tokens

- **Background**: #FAFBFC (light gray section)
- **Section padding**: 80px top/bottom
- **Column gap**: 24px
- **Left column width**: 65%
- **Right column width**: 35%
- **Sticky offset**: 24px from top

---

## Shared Components

### CartItemCard

**Purpose**: Displays individual cart item with controls

**Props:**
```tsx
{
  name: string;      // "Clip-on Tuner Pro"
  variant: string;   // "High-contrast OLED display"
  price: string;     // "₹2,499"
  quantity: number;  // 1
}
```

**Structure:**
- 72×72px image placeholder (rounded)
- Product name + variant (stacked)
- Price
- Quantity controls (−/+)
- Remove button

**Used in:** Both drawer and page presentations

---

### OrderSummaryCard

**Purpose**: Displays order totals and cost breakdown

**Structure:**
- Title: "Order summary"
- Subtotal row
- Shipping row ("Calculated at checkout")
- Divider
- Total row (emphasized)
- Caption: "Taxes and shipping calculated at checkout."

**Styling:**
- Elevated card variant
- Medium padding
- 16px internal gap

**Used in:** Both drawer and page presentations

---

## Design Principles

### 1. Component Reusability
Both presentations share `CartItemCard` and `OrderSummaryCard` to ensure:
- Visual consistency
- Single source of truth for cart logic
- Easier maintenance and updates

### 2. Non-Invasive Layout
- **Drawer**: Overlays current page, doesn't disrupt flow
- **Page**: Dedicated space for focused cart management

### 3. Premium Aesthetic
- Generous spacing (24px+ gaps)
- Subtle card surfaces
- Minimal borders
- Consistent typography hierarchy
- Calm color palette (#111827, #6B7280, #F3F4F6)

### 4. Responsive Consideration
- Drawer has fixed 420px width (mobile may need adjustment)
- Page uses Container (max 1200px) for content bounds
- Column split (65/35) optimized for desktop

---

## Usage

### As Drawer (Modal)
```tsx
import { PresentationDrawer } from '../features/cart/components/PresentationDrawer';

// Triggered by cart icon in header
<PresentationDrawer />
```

### As Page (Route)
```tsx
// src/pages/Cart.tsx
import { PresentationPage } from '../features/cart/components/PresentationPage';

export default function Cart() {
  return (
    <>
      <PageHeader />
      <PageBody />
    </>
  );
}

function PageBody() {
  return <PresentationPage />;
}
```

### Full Integration
```tsx
// src/features/cart/components/ShoppingCart.tsx
export function ShoppingCart() {
  return (
    <>
      <PresentationDrawer />
      <PresentationPage />
    </>
  );
}
```

---

## Future Enhancements

### State Management
- Add React state/context for cart data
- Sync item counts between presentations
- Persist cart to localStorage or backend

### Interactions
- Drawer open/close animations
- Quantity change handlers
- Remove item functionality
- Add-to-cart from add-ons section

### Responsive Design
- Mobile-optimized drawer (full width or bottom sheet)
- Stack columns on smaller screens
- Touch-friendly controls

### Empty State
- Show message when cart is empty
- Suggest products or featured items
- CTA to browse catalog

### Loading States
- Skeleton screens for cart items
- Loading indicators for updates
- Optimistic UI updates

---

## Technical Notes

### Why Two Presentations?

1. **User Flow Priority**:
   - **Drawer**: Quick cart check without leaving current page (browse flow)
   - **Page**: Full cart management before checkout (conversion flow)

2. **Content Density**:
   - **Drawer**: Compact, essentials only (420px width constraint)
   - **Page**: Spacious, includes recommendations (full viewport)

3. **Navigation Context**:
   - **Drawer**: Temporary overlay, dismissible
   - **Page**: Dedicated route, part of checkout funnel

### Performance

- Both presentations render simultaneously but can be lazy-loaded
- Shared components prevent duplication
- Drawer's fixed positioning doesn't affect layout reflow

### Accessibility

- Drawer should trap focus when open
- Scrim should close drawer on click
- Keyboard navigation for quantity controls
- ARIA labels for buttons and regions

---

## Related Files

- `/src/components/ui/Card.tsx` - CardInstance component
- `/src/components/ui/Button.tsx` - ButtonInstance component
- `/src/components/ui/Badge.tsx` - BadgeInstance component
- `/src/components/layout/Section.tsx` - Section wrapper
- `/src/components/layout/Container.tsx` - Content container
- `/src/pages/Cart.tsx` - Cart page route

---

## Summary

The dual presentation architecture provides:
- ✅ **Flexibility** - Two UX patterns from shared components
- ✅ **Consistency** - Reusable CartItemCard and OrderSummaryCard
- ✅ **Scalability** - Easy to add new features to both presentations
- ✅ **Maintainability** - Single source of truth for cart UI
- ✅ **Premium Feel** - Generous spacing, subtle design, editorial aesthetic
