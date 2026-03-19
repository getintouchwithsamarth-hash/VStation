# Customer Account Feature

A complete customer account management system for headless React storefronts using Shopify Storefront API.

## Overview

This feature provides authentication, profile management, order history, and address management functionality following the design guidelines defined in `/guidelines/Hard_rules.tsx`.

## Structure

```
account/
├── AuthContext.tsx           # Authentication state management
├── types.ts                  # TypeScript type definitions
├── mock-data.ts             # Mock data for demo
├── components/              # Reusable components
│   ├── FormInput.tsx        # Form input with validation
│   ├── AccountButton.tsx    # Button following design system
│   ├── FormAlert.tsx        # Alert/notification component
│   ├── EmptyState.tsx       # Empty state pattern
│   ├── AddressCard.tsx      # Address display card
│   ├── OrderCard.tsx        # Order display card
│   ├── AccountNav.tsx       # Account navigation
│   ├── AddressFormModal.tsx # Address add/edit modal
│   └── DeleteConfirmModal.tsx # Confirmation dialog
├── pages/                   # Main page components
│   ├── LoginPage.tsx
│   ├── RegisterPage.tsx
│   ├── PasswordResetRequestPage.tsx
│   ├── PasswordResetPage.tsx
│   └── AccountDashboard.tsx
├── sections/                # Dashboard sections
│   ├── OverviewSection.tsx
│   ├── OrdersSection.tsx
│   └── AddressesSection.tsx
└── styles/
    └── account-responsive.css
```

## Routes

- `/account/login` - Sign in page
- `/account/register` - Account creation
- `/account/password-reset` - Password reset request
- `/account/password-reset/confirm` - New password form
- `/account` - Account dashboard (protected)

## Authentication Context

The `AuthProvider` manages authentication state and provides:

- `customer` - Current customer data
- `accessToken` - Authentication token
- `isAuthenticated` - Auth status
- `isLoading` - Loading state
- `login(email, password)` - Sign in
- `register(data)` - Create account
- `logout()` - Sign out
- `updateProfile(data)` - Update customer info
- `refreshCustomerData()` - Refresh customer data

## Design System Compliance

All components follow the Hard Rules:

### Colors
- Uses only defined color tokens (neutral-*, accent-*, semantic colors)
- Surface tokens for backgrounds
- Text tokens for typography
- Border tokens for outlines

### Typography
- Type scale tokens (Body, BodySm, Button, H2, H3, etc.)
- Inter font family
- Proper font weights (400, 500, 600)

### Shadows
- Shadow-1 for cards
- Shadow-2 for dropdowns/modals
- Shadow-3 for dialogs

### Components
- Button sizes: sm (h36), md (h44), lg (h52)
- Border radius: 10px, 12px, 14px, 16px
- All interaction states (hover, focus, disabled, loading)

### Spacing
- Consistent spacing using 4px/8px grid
- Generous white space
- Proper section separation

## Responsive Design

- **Mobile (< 640px)**: Stacked layouts, horizontal nav scroll
- **Tablet (641px - 1024px)**: Two-column grids, smaller sidebar
- **Desktop (> 1024px)**: Full multi-column layouts

## Usage Example

```tsx
import { AuthProvider, useAuth } from '@/features/account';

function App() {
  return (
    <AuthProvider>
      <YourApp />
    </AuthProvider>
  );
}

function ProfileButton() {
  const { customer, isAuthenticated, logout } = useAuth();
  
  if (!isAuthenticated) {
    return <Link to="/account/login">Sign in</Link>;
  }
  
  return (
    <div>
      <p>Hello, {customer.firstName}</p>
      <button onClick={logout}>Sign out</button>
    </div>
  );
}
```

## Shopify API Integration

The feature is designed to work with these Shopify Storefront API mutations:

- `customerAccessTokenCreate` - Login
- `customerCreate` - Registration
- `customerAccessToken` - Token validation
- `customer` - Fetch customer data
- `customerUpdate` - Update profile
- `customerAddressCreate` - Add address
- `customerAddressUpdate` - Update address
- `customerAddressDelete` - Delete address
- `customerDefaultAddressUpdate` - Set default address
- `customerRecover` - Password reset request
- `customerReset` - Password reset

## Mock Data

For demonstration, the feature includes mock data and simulated API calls. Replace these with real Shopify API calls in production:

- Mock authentication (see `AuthContext.tsx`)
- Mock addresses (see `mock-data.ts`)
- Mock orders (see `mock-data.ts`)

## Form Validation

All forms include:
- Real-time validation
- Error states with helpful messages
- Loading states during submission
- Success confirmations
- Proper accessibility attributes

## Accessibility

- Semantic HTML elements
- Proper ARIA labels
- Keyboard navigation support
- Focus management
- Screen reader friendly
- High contrast ratios
- Touch-friendly tap targets (44px minimum)

## Premium UX Features

- Smooth transitions and animations
- Optimistic UI updates
- Clear feedback for all actions
- Empty states with guidance
- Inline editing where appropriate
- Confirmation dialogs for destructive actions
- Realistic example data
- Mobile-optimized interactions
