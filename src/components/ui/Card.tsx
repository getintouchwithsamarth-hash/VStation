import type { ReactNode } from 'react';

export function Card() {
  return (
    <div className="space-y-12 p-8">
      <Anatomy />
      <Variants />
      <Sizes />
      <States />
      <Tokens />
      <Examples />
    </div>
  );
}

function Anatomy() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Anatomy</h3>
      <div className="space-y-2">
        <CardContainer />
        <MediaSlot />
        <HeaderSlot />
        <BodySlot />
        <FooterSlot />
        <DividerSlot />
      </div>
    </div>
  );
}

function CardContainer() {
  return (
    <div className="p-2 border border-gray-200 rounded">
      <div className="text-sm font-medium">CardContainer</div>
      <div className="text-xs text-gray-600">Main card wrapper</div>
    </div>
  );
}

function MediaSlot() {
  return (
    <div className="p-2 border border-gray-200 rounded">
      <div className="text-sm font-medium">MediaSlot</div>
      <div className="text-xs text-gray-600">Optional media/image area</div>
    </div>
  );
}

function HeaderSlot() {
  return (
    <div className="p-2 border border-gray-200 rounded">
      <div className="text-sm font-medium">HeaderSlot</div>
      <div className="text-xs text-gray-600">Title and meta information</div>
    </div>
  );
}

function BodySlot() {
  return (
    <div className="p-2 border border-gray-200 rounded">
      <div className="text-sm font-medium">BodySlot</div>
      <div className="text-xs text-gray-600">Main content area</div>
    </div>
  );
}

function FooterSlot() {
  return (
    <div className="p-2 border border-gray-200 rounded">
      <div className="text-sm font-medium">FooterSlot</div>
      <div className="text-xs text-gray-600">Actions or additional info</div>
    </div>
  );
}

function DividerSlot() {
  return (
    <div className="p-2 border border-gray-200 rounded">
      <div className="text-sm font-medium">DividerSlot</div>
      <div className="text-xs text-gray-600">Optional divider line</div>
    </div>
  );
}

function Variants() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Variants</h3>
      <div className="space-y-4">
        <VariantElevated />
        <VariantSubtle />
        <VariantOutline />
      </div>
    </div>
  );
}

function VariantElevated() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">Variant / Elevated</div>
      <div 
        style={{
          backgroundColor: "var(--card)",
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '16px',
          width: '280px',
          boxShadow: '0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F'
        }}
      >
        <div className="text-sm">Card content</div>
      </div>
      <div className="text-xs text-gray-500">surface-elevated • border-subtle 1px • radius 16 • Shadow / 1</div>
    </div>
  );
}

function VariantSubtle() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">Variant / Subtle</div>
      <div 
        style={{
          backgroundColor: "var(--muted)",
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '16px',
          width: '280px'
        }}
      >
        <div className="text-sm">Card content</div>
      </div>
      <div className="text-xs text-gray-500">surface-subtle • border-subtle 1px • radius 16 • no shadow</div>
    </div>
  );
}

function VariantOutline() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">Variant / Outline</div>
      <div 
        style={{
          backgroundColor: 'transparent',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '16px',
          width: '280px'
        }}
      >
        <div className="text-sm">Card content</div>
      </div>
      <div className="text-xs text-gray-500">transparent • border-default 1px • radius 16 • no shadow</div>
    </div>
  );
}

function Sizes() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Sizes</h3>
      <div className="space-y-4">
        <PaddingSm />
        <PaddingMd />
        <PaddingLg />
      </div>
    </div>
  );
}

function PaddingSm() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">Padding / Sm</div>
      <div 
        style={{
          backgroundColor: "var(--card)",
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '12px',
          width: '200px'
        }}
      >
        <div className="text-sm">Content</div>
      </div>
      <div className="text-xs text-gray-500">padding: 12px</div>
    </div>
  );
}

function PaddingMd() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">Padding / Md</div>
      <div 
        style={{
          backgroundColor: "var(--card)",
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '16px',
          width: '200px'
        }}
      >
        <div className="text-sm">Content</div>
      </div>
      <div className="text-xs text-gray-500">padding: 16px</div>
    </div>
  );
}

function PaddingLg() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">Padding / Lg</div>
      <div 
        style={{
          backgroundColor: "var(--card)",
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '20px',
          width: '200px'
        }}
      >
        <div className="text-sm">Content</div>
      </div>
      <div className="text-xs text-gray-500">padding: 20px</div>
    </div>
  );
}

function States() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold">States</h3>
      <div className="space-y-4">
        <StateDefault />
        <StateHover />
        <StatePressed />
      </div>
    </div>
  );
}

function StateDefault() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">State / Default</div>
      <div 
        style={{
          backgroundColor: "var(--card)",
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '16px',
          width: '280px',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)'
        }}
      >
        <div className="text-sm">Default state</div>
      </div>
    </div>
  );
}

function StateHover() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">State / Hover</div>
      <div 
        style={{
          backgroundColor: "var(--card)",
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '16px',
          width: '280px',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
          position: 'relative'
        }}
      >
        <span style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.06)',
          borderRadius: '16px',
          pointerEvents: 'none'
        }} />
        <div className="text-sm" style={{ position: 'relative' }}>Hover state</div>
      </div>
      <div className="text-xs text-gray-500">border-default + overlay-hover</div>
    </div>
  );
}

function StatePressed() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">State / Pressed</div>
      <div 
        style={{
          backgroundColor: "var(--card)",
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '16px',
          width: '280px',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
          position: 'relative'
        }}
      >
        <span style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.12)',
          borderRadius: '16px',
          pointerEvents: 'none'
        }} />
        <div className="text-sm" style={{ position: 'relative' }}>Pressed state</div>
      </div>
      <div className="text-xs text-gray-500">overlay-pressed</div>
    </div>
  );
}

function Tokens() {
  return null;
}

function Examples() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Examples</h3>
      <div className="space-y-4">
        <ExampleProductCardSkeleton />
      </div>
    </div>
  );
}

function ExampleProductCardSkeleton() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">Example / ProductCardSkeleton</div>
      <div 
        style={{
          backgroundColor: "var(--card)",
          border: '1px solid var(--border)',
          borderRadius: '16px',
          width: '320px',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden'
        }}
      >
        {/* MediaSlot */}
        <div 
          style={{
            backgroundColor: "var(--muted)",
            height: '240px',
            width: '100%'
          }}
        />
        
        {/* Content area with padding */}
        <div style={{ padding: '16px' }}>
          {/* HeaderSlot */}
          <div style={{ marginBottom: '12px' }}>
            <div 
              style={{
                backgroundColor: "var(--muted)",
                height: '20px',
                width: '70%',
                borderRadius: '4px',
                marginBottom: '8px'
              }}
            />
            <div 
              style={{
                backgroundColor: "var(--muted)",
                height: '16px',
                width: '40%',
                borderRadius: '4px'
              }}
            />
          </div>
          
          {/* BodySlot */}
          <div style={{ marginBottom: '16px' }}>
            <div 
              style={{
                backgroundColor: "var(--muted)",
                height: '14px',
                width: '100%',
                borderRadius: '4px',
                marginBottom: '6px'
              }}
            />
            <div 
              style={{
                backgroundColor: "var(--muted)",
                height: '14px',
                width: '90%',
                borderRadius: '4px'
              }}
            />
          </div>
          
          {/* FooterSlot */}
          <div>
            <div 
              style={{
                backgroundColor: "var(--muted)",
                height: '36px',
                width: '100%',
                borderRadius: '10px'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

type CardVariant = 'elevated' | 'subtle' | 'outline';
type CardPadding = 'sm' | 'md' | 'lg';

const CARD_PADDING_MAP: Record<CardPadding, string> = {
  sm: '12px',
  md: '16px',
  lg: '20px'
};

function getCardStyles(variant: CardVariant) {
  switch (variant) {
    case 'subtle':
      return {
        backgroundColor: "var(--muted)",
        border: '1px solid var(--border)',
        boxShadow: 'none'
      };
    case 'outline':
      return {
        backgroundColor: 'transparent',
        border: '1px solid var(--border)',
        boxShadow: 'none'
      };
    case 'elevated':
    default:
      return {
        backgroundColor: "var(--card)",
        border: '1px solid var(--border)',
        boxShadow: '0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F'
      };
  }
}

export function CardInstance({
  children,
  mediaSlot,
  footerSlot,
  variant = 'elevated',
  padding = 'md',
  width = '100%',
  height
}: {
  children?: ReactNode;
  mediaSlot?: ReactNode;
  footerSlot?: ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  width?: string;
  height?: string;
}) {
  const variantStyles = getCardStyles(variant);
  const contentPadding = CARD_PADDING_MAP[padding];

  return (
    <div
      style={{
        ...variantStyles,
        borderRadius: '16px',
        width,
        height,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {mediaSlot}
      {children ? <div style={{ padding: contentPadding }}>{children}</div> : null}
      {footerSlot ? <div style={{ padding: contentPadding, paddingTop: '0' }}>{footerSlot}</div> : null}
    </div>
  );
}
