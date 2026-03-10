import type { ReactNode } from 'react';

export function Toast() {
  return (
    <div className="space-y-12 p-8">
      <Anatomy />
      <Sizes />
      <Variants />
      <States />
    </div>
  );
}

function Anatomy() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Anatomy</h3>
      <div className="space-y-2">
        <AnatomyItem name="ToastContainer" description="Main toast wrapper surface." />
        <AnatomyItem name="Title" description="Primary feedback headline." />
        <AnatomyItem name="Message" description="Secondary supporting text." />
        <AnatomyItem name="ActionSlot" description="Optional action control area." />
        <AnatomyItem name="CloseSlot" description="Dismiss control area." />
      </div>
    </div>
  );
}

function AnatomyItem({ name, description }: { name: string; description: string }) {
  return (
    <div className="p-2 border border-gray-200 rounded">
      <div className="text-sm font-medium">{name}</div>
      <div className="text-xs text-gray-600">{description}</div>
    </div>
  );
}

function Sizes() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Sizes</h3>
      <div className="space-y-4">
        <SizeMd />
      </div>
    </div>
  );
}

function SizeMd() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">Size / Md</div>
      <ToastInstance
        variant="neutral"
        title="Added to cart"
        message="Clip-on Tuner Pro is in your cart."
        actionSlot={<GhostMiniButton label="View cart" />}
        closeSlot={<GhostMiniButton label="Close" />}
      />
      <div className="text-xs text-gray-500">height auto • padding 14 • radius 14 • gap 10</div>
    </div>
  );
}

function Variants() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Variants</h3>
      <div className="space-y-4">
        <VariantNeutral />
        <VariantSuccess />
      </div>
    </div>
  );
}

function VariantNeutral() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">Variant / Neutral</div>
      <ToastInstance
        variant="neutral"
        title="Added to cart"
        message="Clip-on Tuner Pro is in your cart."
        actionSlot={<GhostMiniButton label="View cart" />}
        closeSlot={<GhostMiniButton label="Close" />}
      />
      <div className="text-xs text-gray-500">
        Fill: surface-canvas • Border: 1px border-subtle • Shadow: Shadow / 2 • Title: text-primary • Message:
        text-secondary
      </div>
    </div>
  );
}

function VariantSuccess() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">Variant / Success</div>
      <ToastInstance
        variant="success"
        title="Added to cart"
        message="Clip-on Tuner Pro is in your cart."
        actionSlot={<GhostMiniButton label="View cart" />}
        closeSlot={<GhostMiniButton label="Close" />}
      />
      <div className="text-xs text-gray-500">Fill: success-50 • Border: 1px border-subtle • Shadow: Shadow / 2</div>
    </div>
  );
}

function States() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold">States</h3>
      <div className="space-y-4">
        <StateDefault />
      </div>
    </div>
  );
}

function StateDefault() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">State / Default</div>
      <ToastInstance
        variant="neutral"
        title="Added to cart"
        message="Clip-on Tuner Pro is in your cart."
        actionSlot={<GhostMiniButton label="View cart" />}
        closeSlot={<GhostMiniButton label="Close" />}
      />
      <div className="text-xs text-gray-500">Variant / Neutral + Size / Md</div>
    </div>
  );
}

function GhostMiniButton({ label }: { label: string }) {
  return (
    <button
      style={{
        height: '28px',
        paddingLeft: '10px',
        paddingRight: '10px',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: 'transparent',
        color: "var(--muted-foreground)",
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: '12px',
        lineHeight: '18px',
        fontWeight: '600',
        cursor: 'pointer'
      }}
      type="button"
    >
      {label}
    </button>
  );
}

type ToastVariant = 'neutral' | 'success';

function getToastVariantStyles(variant: ToastVariant) {
  if (variant === 'success') {
    return {
      backgroundColor: 'var(--success-background)',
      border: '1px solid var(--border)',
      titleColor: 'var(--success-foreground)',
      messageColor: 'var(--success-foreground)'
    };
  }

  return {
    backgroundColor: "var(--card)",
    border: '1px solid var(--border)',
    titleColor: 'var(--foreground)',
    messageColor: 'var(--muted-foreground)'
  };
}

export function ToastInstance({
  title,
  message,
  variant = 'neutral',
  actionSlot,
  closeSlot
}: {
  title: string;
  message: string;
  variant?: ToastVariant;
  actionSlot?: ReactNode;
  closeSlot?: ReactNode;
}) {
  const variantStyles = getToastVariantStyles(variant);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: '10px',
        padding: '14px',
        borderRadius: '14px',
        width: '100%',
        maxWidth: '420px',
        minHeight: 'auto',
        backgroundColor: variantStyles.backgroundColor,
        border: variantStyles.border,
        boxShadow: '0 4px 6px -2px #1018280D, 0 12px 16px -4px #10182814'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '600',
            color: variantStyles.titleColor
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '400',
            color: variantStyles.messageColor
          }}
        >
          {message}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
        {actionSlot}
        {closeSlot}
      </div>
    </div>
  );
}
