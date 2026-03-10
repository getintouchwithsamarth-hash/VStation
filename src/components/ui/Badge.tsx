export function Badge() {
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
        <BadgeContainer />
        <BadgeDot />
        <BadgeLabel />
      </div>
    </div>
  );
}

function BadgeContainer() {
  return (
    <div className="p-2 border border-gray-200 rounded">
      <div className="text-sm font-medium">BadgeContainer</div>
      <div className="text-xs text-gray-600">Main badge wrapper</div>
    </div>
  );
}

function BadgeDot() {
  return (
    <div className="p-2 border border-gray-200 rounded">
      <div className="text-sm font-medium">BadgeDot</div>
      <div className="text-xs text-gray-600">Optional status indicator dot</div>
    </div>
  );
}

function BadgeLabel() {
  return (
    <div className="p-2 border border-gray-200 rounded">
      <div className="text-sm font-medium">BadgeLabel</div>
      <div className="text-xs text-gray-600">Badge text content</div>
    </div>
  );
}

function Sizes() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Sizes</h3>
      <div className="space-y-4">
        <SizeSm />
        <SizeMd />
      </div>
    </div>
  );
}

function SizeSm() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">Size / Sm</div>
      <div
        style={{
          height: '24px',
          paddingLeft: '10px',
          paddingRight: '10px',
          borderRadius: '999px',
          gap: '8px',
          backgroundColor: "var(--card)",
          border: '1px solid var(--border)',
          display: 'inline-flex',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--muted-foreground)'
          }}
        />
        <span
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '12px',
            lineHeight: '18px',
            fontWeight: '500',
            color: "var(--muted-foreground)"
          }}
        >
          Badge label
        </span>
      </div>
      <div className="text-xs text-gray-500">h24 • px10 • r999 • gap8 • Caption</div>
    </div>
  );
}

function SizeMd() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">Size / Md</div>
      <div
        style={{
          height: '28px',
          paddingLeft: '12px',
          paddingRight: '12px',
          borderRadius: '999px',
          gap: '8px',
          backgroundColor: "var(--card)",
          border: '1px solid var(--border)',
          display: 'inline-flex',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--muted-foreground)'
          }}
        />
        <span
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '600',
            color: "var(--muted-foreground)"
          }}
        >
          Badge label
        </span>
      </div>
      <div className="text-xs text-gray-500">h28 • px12 • r999 • gap8 • BodySm/600</div>
    </div>
  );
}

function Variants() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Variants</h3>
      <div className="space-y-4">
        <VariantNeutral />
        <VariantAccent />
      </div>
    </div>
  );
}

function VariantNeutral() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">Variant / Neutral</div>
      <div
        style={{
          height: '28px',
          paddingLeft: '12px',
          paddingRight: '12px',
          borderRadius: '999px',
          gap: '8px',
          backgroundColor: "var(--card)",
          border: '1px solid var(--border)',
          display: 'inline-flex',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--muted-foreground)'
          }}
        />
        <span
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '600',
            color: "var(--muted-foreground)"
          }}
        >
          Neutral badge
        </span>
      </div>
      <div className="text-xs text-gray-500">surface-subtle • border-subtle 1px • text-secondary • neutral-400 dot</div>
    </div>
  );
}

function VariantAccent() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">Variant / Accent</div>
      <div
        style={{
          height: '28px',
          paddingLeft: '12px',
          paddingRight: '12px',
          borderRadius: '999px',
          gap: '8px',
          backgroundColor: 'var(--accent)',
          border: '1px solid var(--border)',
          display: 'inline-flex',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--primary)'
          }}
        />
        <span
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '600',
            color: "var(--foreground)"
          }}
        >
          Accent badge
        </span>
      </div>
      <div className="text-xs text-gray-500">accent-subtle • border-subtle 1px • text-primary • accent-600 dot</div>
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
      <div
        style={{
          height: '28px',
          paddingLeft: '12px',
          paddingRight: '12px',
          borderRadius: '999px',
          gap: '8px',
          backgroundColor: "var(--card)",
          border: '1px solid var(--border)',
          display: 'inline-flex',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--muted-foreground)'
          }}
        />
        <span
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '600',
            color: "var(--muted-foreground)"
          }}
        >
          Default state
        </span>
      </div>
      <div className="text-xs text-gray-500">Variant / Neutral + Size / Md</div>
    </div>
  );
}

// Reusable Badge component instance
export function BadgeInstance({ 
  label, 
  variant = 'neutral', 
  size = 'md' 
}: { 
  label: string; 
  variant?: 'neutral' | 'accent';
  size?: 'sm' | 'md';
}) {
  const sizeStyles = size === 'sm' 
    ? {
        height: '24px',
        paddingLeft: '10px',
        paddingRight: '10px',
        fontSize: '12px',
        lineHeight: '18px',
        fontWeight: '500'
      }
    : {
        height: '28px',
        paddingLeft: '12px',
        paddingRight: '12px',
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '600'
      };

  const variantStyles = variant === 'neutral'
    ? {
        backgroundColor: "var(--card)",
        dotColor: 'var(--muted-foreground)',
        textColor: 'var(--foreground)'
      }
    : {
        backgroundColor: 'var(--accent)',
        dotColor: 'var(--primary)',
        textColor: 'var(--accent-foreground)'
      };

  return (
    <div
      style={{
        height: sizeStyles.height,
        paddingLeft: sizeStyles.paddingLeft,
        paddingRight: sizeStyles.paddingRight,
        borderRadius: '999px',
        gap: '8px',
        backgroundColor: variantStyles.backgroundColor,
        border: '1px solid var(--border)',
        display: 'inline-flex',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: variantStyles.dotColor
        }}
      />
      <span
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: sizeStyles.fontSize,
          lineHeight: sizeStyles.lineHeight,
          fontWeight: sizeStyles.fontWeight as any,
          color: variantStyles.textColor
        }}
      >
        {label}
      </span>
    </div>
  );
}
