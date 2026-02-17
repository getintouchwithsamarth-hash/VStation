# FOUNDATIONS: HARD RULES (NON-NEGOTIABLE)

This document defines the **absolute, non-negotiable design and architectural rules** for the VIBE STATION project. These are the foundations that ensure consistency, quality, and the premium aesthetic across the entire application.

---

## 🎨 COLOR SYSTEM — MANDATORY

### Rule #1: No Arbitrary Colors
**❌ NEVER use arbitrary hex values, RGB values, or color names directly in components.**  
**✅ ALWAYS use the defined color tokens.**

### Color Token Reference

#### Neutral Scale (Base Palette)
```
neutral-0:   #FFFFFF
neutral-25:  #FCFCFD
neutral-50:  #F9FAFB
neutral-100: #F2F4F7
neutral-200: #EAECF0
neutral-300: #D0D5DD
neutral-400: #98A2B3
neutral-500: #667085
neutral-600: #475467
neutral-700: #344054
neutral-800: #1D2939
neutral-900: #101828
```

#### Accent Colors
```
accent-500: #4F46E5
accent-600: #4338CA (Primary interactive color)
accent-700: #3730A3
```

#### Semantic Colors
```
Success: success-50 (#ECFDF3), success-500 (#12B76A), success-600 (#039855)
Warning: warning-50 (#FFFAEB), warning-500 (#F79009), warning-600 (#DC6803)
Error:   error-50 (#FEF3F2), error-500 (#F04438), error-600 (#D92D20)
```

#### Surface Tokens (For Backgrounds)
```
surface-canvas:   #FFFFFF (Main page background)
surface-subtle:   #FCFCFD (Subtle areas, footer)
surface-muted:    #F9FAFB (Muted sections)
surface-elevated: #FFFFFF (Cards, modals - with shadow)
surface-inverse:  #101828 (Dark surfaces)
```

#### Text Tokens
```
text-primary:   #101828 (Main content)
text-secondary: #344054 (Supporting text)
text-muted:     #667085 (De-emphasized text)
text-inverse:   #FFFFFF (White text on dark)
text-link:      #4338CA (Interactive links)
```

#### Border Tokens
```
border-subtle:  #EAECF0 (Subtle borders)
border-default: #D0D5DD (Standard borders)
border-strong:  #98A2B3 (Emphasized borders)
border-focus:   #4F46E5 (Focus rings - 2px)
```

#### State Overlays
```
overlay-hover:   rgba(0, 0, 0, 0.06) — #0000000F
overlay-pressed: rgba(0, 0, 0, 0.12) — #0000001F
overlay-scrim:   rgba(0, 0, 0, 0.40) — #00000066
accent-subtle:   rgba(79, 70, 229, 0.06) — #4F46E50F
```

### Rule #2: Surface Usage
- **Canvas** for page backgrounds
- **Subtle** for quiet sections (footer, sidebars)
- **Elevated** for cards and modals (must have shadow)
- **Muted** for de-emphasized areas

---

## 📐 TYPOGRAPHY SYSTEM — MANDATORY

### Rule #3: No Arbitrary Font Sizes
**❌ NEVER use arbitrary px values for font-size or line-height.**  
**✅ ALWAYS use the defined type scale tokens.**

### Type Scale Reference

```
H1:      48px / 56px, weight 600  (Hero headlines)
H2:      36px / 44px, weight 600  (Section headers)
H3:      28px / 36px, weight 600  (Subsections)
H4:      22px / 30px, weight 600  (Component headers, brand mark)
BodyLg:  18px / 28px, weight 400  (Large body text)
Body:    16px / 24px, weight 400  (Standard body text)
BodySm:  14px / 20px, weight 400  (Small body, nav links)
Caption: 12px / 18px, weight 500  (Captions, labels)
Button:  14px / 20px, weight 600  (Button labels)
```

### Rule #4: Font Family
- **Display/Text**: `Inter, system-ui, sans-serif`
- **Monospace**: `JetBrains Mono, monospace` (code only)

### Rule #5: Letter Spacing
- **Default**: 0 (most text)
- **Tight**: -0.01em (large headings)
- **Wide**: +0.02em (uppercase labels)

### Rule #6: Font Weight Usage
- **400**: Body text, descriptions
- **500**: Captions, subtle emphasis
- **600**: Headings, buttons, strong emphasis
- **700**: Reserved for extreme emphasis only

---

## 🎭 SHADOW SYSTEM — MANDATORY

### Rule #7: No Custom Shadows
**❌ NEVER create custom box-shadow values.**  
**✅ ALWAYS use one of the three defined shadow levels.**

### Shadow Token Reference

```css
/* Shadow / 0 — No shadow */
box-shadow: none;

/* Shadow / 1 — Subtle (Cards, hover states) */
box-shadow: 0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F;

/* Shadow / 2 — Medium (Dropdowns, popovers) */
box-shadow: 0 4px 10px -2px #1018280A, 0 2px 6px -2px #10182814;

/* Shadow / 3 — Strong (Modals, dialogs) */
box-shadow: 0 12px 24px -4px #1018280F, 0 6px 12px -4px #10182814;
```

### Rule #8: Shadow Usage Guidelines
- **Cards**: Use Shadow-1
- **Modals/Dialogs**: Use Shadow-3
- **Dropdowns/Popovers**: Use Shadow-2
- **Hover States**: May step up +1 level (e.g., card goes from Shadow-1 to Shadow-2)
- **Surface-elevated** must have a shadow (typically Shadow-1)

---

## 📏 COMPONENT SIZING — MANDATORY

### Rule #9: Button Sizes (Fixed Heights)
```
Small (Sm):   h36 • px12 • r10 • gap8  • BodySm/600
Default (Md): h44 • px16 • r12 • gap10 • Button
Large (Lg):   h52 • px20 • r14 • gap12 • BodyLg/600
```

### Rule #10: Button Variants
```
Primary:   accent-600 fill • text-inverse • no border
Secondary: surface-elevated • text-primary • border-default 1px
Ghost:     transparent • text-primary • no border
```

### Rule #11: Button States
- **Enabled**: Base colors
- **Hover**: Add `overlay-hover` (rgba(0,0,0,0.06)) on top
- **Pressed**: Add `overlay-pressed` (rgba(0,0,0,0.12)) on top
- **Disabled**: `opacity: 0.4` + `cursor: not-allowed`
- **Focus**: 2px `border-focus` ring with 2px offset

### Rule #12: Border Radius Scale
```
10px — Small components (sm buttons, inputs)
12px — Medium components (md buttons, cards)
14px — Large components (lg buttons)
16px — Extra large (hero cards)
```

---

## 🏗️ ARCHITECTURAL RULES — MANDATORY

### Rule #13: Slot-Based Composition
**All layout components MUST use internal slot functions for composition.**

```tsx
// ✅ CORRECT
export function Header() {
  return (
    <header>
      <BrandMarkSlot />
      <NavSlot />
      <ActionsSlot />
    </header>
  );
}

// ❌ WRONG
export function Header({ brand, nav, actions }) {
  return <header>{brand}{nav}{actions}</header>;
}
```

### Rule #14: Shell Pattern
**The Shell component provides the global structure. Pages MUST NOT render their own header/footer.**

```tsx
// ✅ CORRECT — Shell.tsx
<div>
  <ShellHeaderSlot /> {/* Renders <Header /> */}
  <ShellMainSlot />   {/* Renders page content */}
  <ShellFooterSlot /> {/* Renders <Footer /> */}
</div>

// ❌ WRONG — Page component should NOT have:
<>
  <Header />
  <MyPageContent />
  <Footer />
</>
```

### Rule #15: Feature Module Structure
**Features MUST be self-contained with their own components and types.**

```
src/features/
  └── products/
      ├── components/
      │   ├── ProductList.tsx
      │   ├── ProductFilters.tsx
      │   └── ProductSearch.tsx
      └── types.ts
```

### Rule #16: Protected Files
**These files are system-managed and MUST NOT be modified:**
- `/src/app/components/figma/ImageWithFallback.tsx`
- `/pnpm-lock.yaml`

---

## 🎯 DESIGN PHILOSOPHY — MANDATORY

### Rule #17: Quiet Luxury Aesthetic
**The design MUST convey premium quality through restraint, not decoration.**

Principles:
- Generous white space
- Subtle, refined details
- No gradients, no drop shadows (except defined tokens)
- No bright, saturated colors
- Minimal use of accent color
- Let content breathe

### Rule #18: Trust Without "Trust" Language
**NEVER use the word "trust" or "trustworthy" in user-facing content.**

```
❌ WRONG: "Trusted by thousands"
✅ CORRECT: "Curated for durability"

❌ WRONG: "Trustworthy support"
✅ CORRECT: "Reliable support"

❌ WRONG: "Building trust"
✅ CORRECT: "Clear policies"
```

### Rule #19: Premium Interaction States
**All interactive elements MUST have visible state changes.**

Required states:
- ✅ Hover (visual feedback)
- ✅ Pressed/Active (deeper visual feedback)
- ✅ Focus (accessibility ring)
- ✅ Disabled (de-emphasized, not-allowed cursor)

### Rule #20: No Half-Implementations
**Components MUST be either fully implemented or return `null`.**

```tsx
// ✅ CORRECT — Full implementation
export function Button({ variant, size, children }) {
  return <button className={getStyles()}>{children}</button>;
}

// ✅ CORRECT — Scaffold (awaiting implementation)
export function ProductList() {
  return null;
}

// ❌ WRONG — Partial implementation with placeholders
export function ProductList() {
  return <div>TODO: Implement product list</div>;
}
```

---

## 📦 SPACING SYSTEM — MANDATORY

### Rule #21: Spacing Scale (To Be Fully Implemented)
**Use consistent spacing units based on 4px or 8px grid.**

Common values (to be codified):
```
4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 120px
```

### Rule #22: Component Internal Spacing
**Match spacing to the established patterns:**
- Buttons: Follow size-specific padding (see Rule #9)
- Cards: Typically 16-24px internal padding
- Sections: 48-80px vertical spacing
- Container max-width: ~1280px with side gutters

---

## 🚫 ABSOLUTE PROHIBITIONS

### ❌ NEVER:
1. Use arbitrary color values outside the token system
2. Use arbitrary font sizes outside the type scale
3. Create custom shadow values
4. Use the word "trust" in UI copy
5. Use gradients (unless specifically for subtle overlays)
6. Use bright, saturated colors
7. Modify protected files
8. Bypass the Shell pattern
9. Create components without interaction states
10. Use inline styles for arbitrary values (tokens via inline are acceptable)

### ✅ ALWAYS:
1. Reference color tokens
2. Reference type scale tokens
3. Reference shadow tokens
4. Use slot-based composition
5. Implement all interaction states
6. Follow the quiet luxury aesthetic
7. Ensure generous spacing
8. Test focus/keyboard accessibility
9. Use semantic HTML
10. Document anatomy when creating new component types

---

## 🔒 COMPLIANCE

**Every component, page, and feature MUST comply with these rules.**  
**No exceptions. No "temporary" violations.**

These rules exist to maintain consistency, quality, and the premium brand experience across the entire application.

---

## 📚 Reference Quick Links

- **Color Tokens**: `/src/foundations/ColorTokens.tsx`
- **Type Scale**: `/src/foundations/TypeScale.tsx`
- **Shadows**: `/src/foundations/Shadows.tsx`
- **Button Spec**: `/src/components/ui/Button.tsx`
- **Card Spec**: `/src/components/ui/Card.tsx`
- **Header**: `/src/components/layout/Header.tsx`
- **Footer**: `/src/components/layout/Footer.tsx`
- **Shell**: `/src/components/layout/Shell.tsx`

---

**Last Updated**: Based on current implementation status  
**Status**: Active — All rules in effect
