export function Button() {
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
        <Container />
        <Label />
        <LeftIconSlot />
        <RightIconSlot />
        <FocusRing />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="p-2 border border-gray-200 rounded">
      <div className="text-sm font-medium">Container</div>
      <div className="text-xs text-gray-600">Main button container</div>
    </div>
  );
}

function Label() {
  return (
    <div className="p-2 border border-gray-200 rounded">
      <div className="text-sm font-medium">Label</div>
      <div className="text-xs text-gray-600">Button text content</div>
    </div>
  );
}

function LeftIconSlot() {
  return (
    <div className="p-2 border border-gray-200 rounded">
      <div className="text-sm font-medium">LeftIconSlot</div>
      <div className="text-xs text-gray-600">Optional left icon</div>
    </div>
  );
}

function RightIconSlot() {
  return (
    <div className="p-2 border border-gray-200 rounded">
      <div className="text-sm font-medium">RightIconSlot</div>
      <div className="text-xs text-gray-600">Optional right icon</div>
    </div>
  );
}

function FocusRing() {
  return (
    <div className="p-2 border border-gray-200 rounded">
      <div className="text-sm font-medium">FocusRing</div>
      <div className="text-xs text-gray-600">Focus state indicator</div>
    </div>
  );
}

function Variants() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Variants</h3>
      <div className="space-y-4">
        <VariantPrimary />
        <VariantSecondary />
        <VariantGhost />
      </div>
    </div>
  );
}

function VariantPrimary() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">Variant / Primary</div>
      <button
        style={{
          height: '44px',
          paddingLeft: '16px',
          paddingRight: '16px',
          borderRadius: '12px',
          backgroundColor: '#4338CA',
          color: '#FFFFFF',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: '600',
          border: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          cursor: 'pointer'
        }}
      >
        Primary Button
      </button>
      <div className="text-xs text-gray-500">accent-600 fill • text-inverse • no border</div>
    </div>
  );
}

function VariantSecondary() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">Variant / Secondary</div>
      <button
        style={{
          height: '44px',
          paddingLeft: '16px',
          paddingRight: '16px',
          borderRadius: '12px',
          backgroundColor: '#FFFFFF',
          color: '#101828',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: '600',
          border: '1px solid #D0D5DD',
          display: 'inline-flex',
          alignItems: 'center',
          cursor: 'pointer'
        }}
      >
        Secondary Button
      </button>
      <div className="text-xs text-gray-500">surface-elevated • text-primary • border-default 1px</div>
    </div>
  );
}

function VariantGhost() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">Variant / Ghost</div>
      <button
        style={{
          height: '44px',
          paddingLeft: '16px',
          paddingRight: '16px',
          borderRadius: '12px',
          backgroundColor: 'transparent',
          color: '#101828',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: '600',
          border: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          cursor: 'pointer'
        }}
      >
        Ghost Button
      </button>
      <div className="text-xs text-gray-500">transparent • text-primary • no border</div>
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
        <SizeLg />
      </div>
    </div>
  );
}

function SizeSm() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">Size / Sm</div>
      <button
        style={{
          height: '36px',
          paddingLeft: '12px',
          paddingRight: '12px',
          borderRadius: '10px',
          gap: '8px',
          backgroundColor: '#4338CA',
          color: '#FFFFFF',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: '600',
          border: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          cursor: 'pointer'
        }}
      >
        Button
      </button>
      <div className="text-xs text-gray-500">h36 • px12 • r10 • gap8 • BodySm/600</div>
    </div>
  );
}

function SizeMd() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">Size / Md</div>
      <button
        style={{
          height: '44px',
          paddingLeft: '16px',
          paddingRight: '16px',
          borderRadius: '12px',
          gap: '10px',
          backgroundColor: '#4338CA',
          color: '#FFFFFF',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: '600',
          border: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          cursor: 'pointer'
        }}
      >
        Button
      </button>
      <div className="text-xs text-gray-500">h44 • px16 • r12 • gap10 • Button</div>
    </div>
  );
}

function SizeLg() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">Size / Lg</div>
      <button
        style={{
          height: '52px',
          paddingLeft: '20px',
          paddingRight: '20px',
          borderRadius: '14px',
          gap: '12px',
          backgroundColor: '#4338CA',
          color: '#FFFFFF',
          fontSize: '18px',
          lineHeight: '28px',
          fontWeight: '600',
          border: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          cursor: 'pointer'
        }}
      >
        Button
      </button>
      <div className="text-xs text-gray-500">h52 • px20 • r14 • gap12 • BodyLg/600</div>
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
        <StateDisabled />
        <StateFocus />
      </div>
    </div>
  );
}

function StateDefault() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">State / Default</div>
      <button
        style={{
          height: '44px',
          paddingLeft: '16px',
          paddingRight: '16px',
          borderRadius: '12px',
          backgroundColor: '#4338CA',
          color: '#FFFFFF',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: '600',
          border: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          cursor: 'pointer'
        }}
      >
        Default
      </button>
    </div>
  );
}

function StateHover() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">State / Hover</div>
      <button
        style={{
          height: '44px',
          paddingLeft: '16px',
          paddingRight: '16px',
          borderRadius: '12px',
          backgroundColor: '#4338CA',
          color: '#FFFFFF',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: '600',
          border: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          cursor: 'pointer',
          position: 'relative'
        }}
      >
        <span style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.06)',
          borderRadius: '12px',
          pointerEvents: 'none'
        }} />
        <span style={{ position: 'relative' }}>Hover</span>
      </button>
      <div className="text-xs text-gray-500">overlay-hover on top</div>
    </div>
  );
}

function StatePressed() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">State / Pressed</div>
      <button
        style={{
          height: '44px',
          paddingLeft: '16px',
          paddingRight: '16px',
          borderRadius: '12px',
          backgroundColor: '#4338CA',
          color: '#FFFFFF',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: '600',
          border: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          cursor: 'pointer',
          position: 'relative'
        }}
      >
        <span style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.12)',
          borderRadius: '12px',
          pointerEvents: 'none'
        }} />
        <span style={{ position: 'relative' }}>Pressed</span>
      </button>
      <div className="text-xs text-gray-500">overlay-pressed on top</div>
    </div>
  );
}

function StateDisabled() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">State / Disabled</div>
      <button
        style={{
          height: '44px',
          paddingLeft: '16px',
          paddingRight: '16px',
          borderRadius: '12px',
          backgroundColor: '#4338CA',
          color: '#FFFFFF',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: '600',
          border: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          cursor: 'not-allowed',
          opacity: 0.4
        }}
      >
        Disabled
      </button>
      <div className="text-xs text-gray-500">opacity 40%</div>
    </div>
  );
}

function StateFocus() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">State / Focus</div>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <button
          style={{
            height: '44px',
            paddingLeft: '16px',
            paddingRight: '16px',
            borderRadius: '12px',
            backgroundColor: '#4338CA',
            color: '#FFFFFF',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '600',
            border: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            cursor: 'pointer'
          }}
        >
          Focus
        </button>
        <span style={{
          position: 'absolute',
          inset: '-4px',
          border: '2px solid #4F46E5',
          borderRadius: '14px',
          pointerEvents: 'none'
        }} />
      </div>
      <div className="text-xs text-gray-500">border-focus 2px ring, 2px offset</div>
    </div>
  );
}

function Tokens() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Tokens</h3>
      <div className="text-sm space-y-1">
        <div><span className="font-medium">Fill:</span> accent-600, surface-elevated, transparent</div>
        <div><span className="font-medium">Text:</span> text-inverse, text-primary</div>
        <div><span className="font-medium">Border:</span> border-default (1px), border-focus (2px ring)</div>
        <div><span className="font-medium">Radius:</span> 10px (sm), 12px (md), 14px (lg)</div>
        <div><span className="font-medium">Height:</span> 36px (sm), 44px (md), 52px (lg)</div>
        <div><span className="font-medium">Padding:</span> 12px (sm), 16px (md), 20px (lg)</div>
        <div><span className="font-medium">Gap:</span> 8px (sm), 10px (md), 12px (lg)</div>
      </div>
    </div>
  );
}

function Examples() {
  return null;
}