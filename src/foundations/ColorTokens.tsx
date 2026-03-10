// Color tokens

export function ColorTokens() {
  return (
    <>
      <Primitives />
      <Semantic />
      <Surfaces />
      <Text />
      <Borders />
      <Accent />
      <States />
      <ElevationOverlays />
    </>
  );
}

function Primitives() {
  return (
    <div className="space-y-4">
      <h3>Neutrals</h3>
      <div className="space-y-2">
        <ColorSwatch name="neutral-0" hex="#FFFFFF" />
        <ColorSwatch name="neutral-25" hex="#FCFCFD" />
        <ColorSwatch name="neutral-50" hex="#F9FAFB" />
        <ColorSwatch name="neutral-100" hex="#F2F4F7" />
        <ColorSwatch name="neutral-200" hex="#EAECF0" />
        <ColorSwatch name="neutral-300" hex="#D0D5DD" />
        <ColorSwatch name="neutral-400" hex="#98A2B3" />
        <ColorSwatch name="neutral-500" hex="#667085" />
        <ColorSwatch name="neutral-600" hex="#475467" />
        <ColorSwatch name="neutral-700" hex="#344054" />
        <ColorSwatch name="neutral-800" hex="#1D2939" />
        <ColorSwatch name="neutral-900" hex="#101828" />
      </div>
      
      <h3>Accent</h3>
      <div className="space-y-2">
        <ColorSwatch name="accent-500" hex="#4F46E5" />
        <ColorSwatch name="accent-600" hex="#4338CA" />
        <ColorSwatch name="accent-700" hex="#3730A3" />
      </div>
    </div>
  );
}

function ColorSwatch({ name, hex }: { name: string; hex: string }) {
  const swatchClassName = `foundation-color-swatch foundation-color-swatch--${name}`;

  return (
    <div className="flex items-center gap-3">
      <div className={swatchClassName} />
      <div>
        <div className="font-medium">{name}</div>
        <div className="text-sm text-gray-600">{hex}</div>
      </div>
    </div>
  );
}

function Semantic() {
  return (
    <div className="space-y-4">
      <h3>Success</h3>
      <div className="space-y-2">
        <ColorSwatch name="success-50" hex="#ECFDF3" />
        <ColorSwatch name="success-500" hex="#12B76A" />
        <ColorSwatch name="success-600" hex="#039855" />
      </div>
      
      <h3>Warning</h3>
      <div className="space-y-2">
        <ColorSwatch name="warning-50" hex="#FFFAEB" />
        <ColorSwatch name="warning-500" hex="#F79009" />
        <ColorSwatch name="warning-600" hex="#DC6803" />
      </div>
      
      <h3>Error</h3>
      <div className="space-y-2">
        <ColorSwatch name="error-50" hex="#FEF3F2" />
        <ColorSwatch name="error-500" hex="#F04438" />
        <ColorSwatch name="error-600" hex="#D92D20" />
      </div>
    </div>
  );
}

function Surfaces() {
  return (
    <div className="space-y-2">
      <ColorSwatch name="surface-canvas" hex="#FFFFFF" />
      <ColorSwatch name="surface-subtle" hex="#FCFCFD" />
      <ColorSwatch name="surface-muted" hex="#F9FAFB" />
      <ColorSwatch name="surface-elevated" hex="#FFFFFF" />
      <ColorSwatch name="surface-inverse" hex="#101828" />
    </div>
  );
}

function Text() {
  return (
    <div className="space-y-2">
      <ColorSwatch name="text-primary" hex="#101828" />
      <ColorSwatch name="text-secondary" hex="#344054" />
      <ColorSwatch name="text-muted" hex="#667085" />
      <ColorSwatch name="text-inverse" hex="#FFFFFF" />
      <ColorSwatch name="text-link" hex="#4338CA" />
    </div>
  );
}

function Borders() {
  return (
    <div className="space-y-2">
      <ColorSwatch name="border-subtle" hex="#EAECF0" />
      <ColorSwatch name="border-default" hex="#D0D5DD" />
      <ColorSwatch name="border-strong" hex="#98A2B3" />
      <ColorSwatch name="border-focus" hex="#4F46E5" />
    </div>
  );
}

function Accent() {
  return null;
}

function States() {
  return (
    <div className="space-y-2">
      <ColorSwatch name="overlay-hover" hex="#0000000F" />
      <ColorSwatch name="overlay-pressed" hex="#0000001F" />
      <ColorSwatch name="overlay-scrim" hex="#00000066" />
      <ColorSwatch name="accent-subtle" hex="#4F46E50F" />
    </div>
  );
}

function ElevationOverlays() {
  return null;
}
