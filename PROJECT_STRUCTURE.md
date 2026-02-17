# VIBE STATION - Project Structure

This document outlines the complete file structure and architecture of the VIBE STATION Shopify-based React application.

## Architecture Overview

The project follows a **scaffolding-first approach** with a feature-based organization, emphasizing separation of concerns and a premium, trustworthy design aesthetic.

### Core Principles
- **Feature-based organization** (products, cart)
- **Slot-based composition** for layouts
- **Design token system** (foundations)
- **Component library architecture** (ui, layout, seo)
- **Premium quiet luxury aesthetic**

---

## Directory Structure

```
/
├── guidelines/
│   └── Guidelines.md                    # Project guidelines and implementation instructions
│
├── src/
│   ├── app/                             # Application entry point
│   │   ├── App.tsx                      # Main app component (uses Shell)
│   │   ├── providers.tsx                # React providers
│   │   ├── router.tsx                   # React Router configuration
│   │   └── components/
│   │       ├── figma/
│   │       │   └── ImageWithFallback.tsx    # Protected: Image component with fallback
│   │       └── ui/                      # Shadcn UI component library (50+ components)
│   │           ├── accordion.tsx
│   │           ├── alert-dialog.tsx
│   │           ├── alert.tsx
│   │           ├── aspect-ratio.tsx
│   │           ├── avatar.tsx
│   │           ├── badge.tsx
│   │           ├── breadcrumb.tsx
│   │           ├── button.tsx
│   │           ├── calendar.tsx
│   │           ├── card.tsx
│   │           ├── carousel.tsx
│   │           ├── chart.tsx
│   │           ├── checkbox.tsx
│   │           ├── collapsible.tsx
│   │           ├── command.tsx
│   │           ├── context-menu.tsx
│   │           ├── dialog.tsx
│   │           ├── drawer.tsx
│   │           ├── dropdown-menu.tsx
│   │           ├── form.tsx
│   │           ├── hover-card.tsx
│   │           ├── input-otp.tsx
│   │           ├── input.tsx
│   │           ├── label.tsx
│   │           ├── menubar.tsx
│   │           ├── navigation-menu.tsx
│   │           ├── pagination.tsx
│   │           ├── popover.tsx
│   │           ├── progress.tsx
│   │           ├── radio-group.tsx
│   │           ├── resizable.tsx
│   │           ├── scroll-area.tsx
│   │           ├── select.tsx
│   │           ├── separator.tsx
│   │           ├── sheet.tsx
│   │           ├── sidebar.tsx
│   │           ├── skeleton.tsx
│   │           ├── slider.tsx
│   │           ├── sonner.tsx
│   │           ├── switch.tsx
│   │           ├── table.tsx
│   │           ├── tabs.tsx
│   │           ├── textarea.tsx
│   │           ├── toggle-group.tsx
│   │           ├── toggle.tsx
│   │           ├── tooltip.tsx
│   │           ├── use-mobile.ts
│   │           └── utils.ts
│   │
│   ├── components/                      # Custom application components
│   │   ├── layout/                      # Layout components with slot-based composition
│   │   │   ├── Shell.tsx                # Global shell (Header/Main/Footer slots)
│   │   │   ├── Header.tsx               # ✅ Implemented with brand, nav, actions
│   │   │   ├── Footer.tsx               # ✅ Implemented with nav, trust, legal, social
│   │   │   ├── Container.tsx
│   │   │   ├── Section.tsx
│   │   │   ├── Stack.tsx
│   │   │   ├── Cluster.tsx
│   │   │   ├── Divider.tsx
│   │   │   └── Breadcrumbs.tsx
│   │   │
│   │   ├── ui/                          # Premium custom UI components
│   │   │   ├── Button.tsx               # ✅ Implemented with full variant system
│   │   │   ├── Card.tsx                 # ✅ Implemented with quiet luxury surfaces
│   │   │   ├── Input.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Checkbox.tsx
│   │   │   ├── Radio.tsx
│   │   │   ├── Switch.tsx
│   │   │   ├── Textarea.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Toast.tsx
│   │   │   ├── Tooltip.tsx
│   │   │   ├── Accordion.tsx
│   │   │   ├── Tabs.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Tag.tsx
│   │   │   ├── Avatar.tsx
│   │   │   ├── Skeleton.tsx
│   │   │   ├── Pagination.tsx
│   │   │   ├── Link.tsx
│   │   │   └── IconButton.tsx
│   │   │
│   │   └── seo/                         # SEO components
│   │       ├── SeoHead.tsx
│   │       ├── OpenGraph.tsx
│   │       └── JsonLd.tsx
│   │
│   ├── features/                        # Feature modules
│   │   ├── products/
│   │   │   ├── components/
│   │   │   │   ├── ProductList.tsx
│   │   │   │   ├── ProductFilters.tsx
│   │   │   │   └── ProductSearch.tsx
│   │   │   └── types.ts
│   │   │
│   │   └── cart/
│   │       ├── components/
│   │       │   └── ShoppingCart.tsx
│   │       └── CartContext.tsx
│   │
│   ├── pages/                           # Page compositions (use PageHeader/PageBody pattern)
│   │   ├── Home.tsx
│   │   ├── Products.tsx
│   │   ├── ProductDetail.tsx
│   │   ├── Philosophy.tsx
│   │   ├── Community.tsx
│   │   └── NotFound.tsx
│   │
│   ├── foundations/                     # Design token system
│   │   ├── ColorTokens.tsx              # ✅ Complete color palette & semantic tokens
│   │   ├── TypeScale.tsx                # ✅ Typography scale (H1-H4, Body, Caption, Button)
│   │   ├── SpacingScale.tsx             # Spacing system
│   │   ├── Shadows.tsx                  # ✅ Shadow token system (subtle, medium, strong)
│   │   ├── Radii.tsx                    # Border radius tokens
│   │   ├── Motion.tsx                   # Animation/transition tokens
│   │   ├── Iconography.tsx              # Icon system
│   │   ├── Brand.tsx                    # Brand guidelines & trust system
│   │   └── Grid.tsx                     # Grid system & layout foundations
│   │
│   ├── lib/                             # External integrations
│   │   └── shopify.ts                   # Shopify API integration
│   │
│   ├── styles/                          # Global styles
│   │   ├── index.css                    # Main style entry point
│   │   ├── globals.css                  # Global CSS
│   │   ├── tailwind.css                 # Tailwind imports
│   │   ├── theme.css                    # Theme tokens
│   │   └── fonts.css                    # Font imports (protected)
│   │
│   ├── main.tsx                         # Application entry
│   └── env.d.ts                         # Environment types
│
├── ATTRIBUTIONS.md                      # Component attributions
├── README.md                            # Project README
├── SHOPIFY_SETUP.md                     # Shopify setup guide
├── package.json                         # Dependencies
├── postcss.config.mjs                   # PostCSS configuration
└── vite.config.ts                       # Vite configuration
```

---

## Implementation Status

### ✅ Completed Components

#### Foundations
- **ColorTokens** - Complete color palette with neutral scale + semantic tokens
- **TypeScale** - Typography scale (H1: 48px, H2: 36px, H3: 28px, H4: 22px, BodyLg: 18px, Body: 16px, BodySm: 14px, Caption: 12px, Button: 14px)
- **Shadows** - Three-level shadow system (subtle, medium, strong)

#### Layout
- **Header** - Premium header with:
  - BrandMarkSlot: "VIBE STATION" in H4
  - NavSlot: Products, Philosophy, Community links
  - ActionsSlot: Search, Account, Cart ghost buttons
  - 72px height, white background, subtle border
  
- **Footer** - Quiet trust footer with:
  - FooterNavSlot: "Explore" section
  - FooterTrustSlot: "Standards" trust cues (no "trust" words)
  - FooterLegalSlot: "© VIBE STATION"
  - FooterSocialSlot: Instagram, YouTube, Email buttons
  - surface-subtle background, proper spacing

#### UI Components
- **Button** - Full implementation with anatomy documentation:
  - Variants: Primary, Secondary, Ghost
  - Sizes: Lg (44px), Default (40px), Sm (36px)
  - States: Enabled, Hover, Pressed, Disabled
  - Premium interaction states
  
- **Card** - Quiet luxury surface system:
  - Variants: Elevated (white), Subtle (off-white), Muted (light gray)
  - Proper shadow integration
  - Premium visual polish

### 🚧 Placeholder Components
All other components in `/src/components/` and `/src/features/` are scaffolded with slots but return `null` (awaiting implementation).

---

## Design System

### Color Tokens

**Neutral Scale**
- neutral-50: #F9FAFB
- neutral-100: #F3F4F6
- neutral-200: #EAECF0
- neutral-300: #D0D5DD
- neutral-400: #98A2B3
- neutral-500: #667085
- neutral-600: #475467
- neutral-700: #344054
- neutral-800: #1D2939
- neutral-900: #101828

**Semantic Tokens**
- Surface: canvas, subtle, muted, elevated, inverse
- Text: primary (#101828), secondary (#344054), muted (#667085), inverse, link
- Border: subtle (#EAECF0), default (#D0D5DD), strong (#98A2B3), focus
- Interactive: primary, secondary, accent, destructive

### Typography Scale
- **H1**: 48px / 56px, weight 600
- **H2**: 36px / 44px, weight 600
- **H3**: 28px / 36px, weight 600
- **H4**: 22px / 30px, weight 600
- **BodyLg**: 18px / 28px, weight 400
- **Body**: 16px / 24px, weight 400
- **BodySm**: 14px / 20px, weight 400
- **Caption**: 12px / 18px, weight 500
- **Button**: 14px / 20px, weight 600

### Shadow Tokens
- **subtle**: 0px 1px 2px rgba(16, 24, 40, 0.05)
- **medium**: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)
- **strong**: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)

---

## Key Architectural Patterns

### 1. Slot-Based Composition
Components use internal slot functions for flexible composition:

```tsx
export function Header() {
  return (
    <header>
      <BrandMarkSlot />
      <NavSlot />
      <ActionsSlot />
    </header>
  );
}
```

### 2. Shell Pattern
Global `Shell` component provides header/main/footer structure. Pages only provide content through `PageHeader` and `PageBody` components.

### 3. Feature Modules
Features (products, cart) are self-contained with their own components and types.

### 4. Design Tokens
All styling uses the foundations system - no arbitrary values. Tokens ensure consistency across the entire application.

---

## Protected Files

These files are system-managed and must not be modified:
- `/src/app/components/figma/ImageWithFallback.tsx`
- `/pnpm-lock.yaml`

---

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4 + CSS variables
- **Routing**: React Router (Data mode pattern)
- **UI Library**: Shadcn UI (50+ components)
- **E-commerce**: Shopify Storefront API
- **State**: React Context API

---

## Next Steps

Continue implementing components according to the Guidelines.md sequence:
- Style remaining page compositions
- Implement product components
- Add cart functionality
- Build out remaining UI components
- Integrate Shopify API
