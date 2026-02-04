// Typography scale

export function TypeScale() {
  return (
    <>
      <FontFamilies />
      <Scale />
      <LineHeights />
      <LetterSpacing />
      <TextStylesMap />
    </>
  );
}

function FontFamilies() {
  return (
    <div className="space-y-3">
      <div>
        <div className="text-sm text-gray-600">Display</div>
        <div className="font-semibold" style={{ fontFamily: 'Inter, -apple-system, SF Pro Display, system-ui, sans-serif' }}>
          Inter
        </div>
      </div>
      <div>
        <div className="text-sm text-gray-600">Text</div>
        <div className="font-semibold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          Inter
        </div>
      </div>
      <div>
        <div className="text-sm text-gray-600">Mono</div>
        <div className="font-semibold" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          JetBrains Mono
        </div>
      </div>
    </div>
  );
}

function Scale() {
  return (
    <div className="space-y-4">
      <TextStyle name="H1" size="48px" lineHeight="56px" weight="600" />
      <TextStyle name="H2" size="36px" lineHeight="44px" weight="600" />
      <TextStyle name="H3" size="28px" lineHeight="36px" weight="600" />
      <TextStyle name="H4" size="22px" lineHeight="30px" weight="600" />
      <TextStyle name="BodyLg" size="18px" lineHeight="28px" weight="400" />
      <TextStyle name="Body" size="16px" lineHeight="24px" weight="400" />
      <TextStyle name="BodySm" size="14px" lineHeight="20px" weight="400" />
      <TextStyle name="Caption" size="12px" lineHeight="18px" weight="500" />
      <TextStyle name="Button" size="14px" lineHeight="20px" weight="600" />
    </div>
  );
}

function TextStyle({ 
  name, 
  size, 
  lineHeight, 
  weight 
}: { 
  name: string; 
  size: string; 
  lineHeight: string; 
  weight: string;
}) {
  return (
    <div className="space-y-1">
      <div className="text-sm text-gray-600">
        {name} — {size} / {lineHeight}, weight {weight}
      </div>
      <div 
        style={{ 
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: size,
          lineHeight: lineHeight,
          fontWeight: weight
        }}
      >
        The quick brown fox jumps
      </div>
    </div>
  );
}

function LineHeights() {
  return null;
}

function LetterSpacing() {
  return (
    <div className="space-y-3">
      <div>
        <div className="text-sm text-gray-600">Default</div>
        <div className="text-lg" style={{ letterSpacing: '0' }}>
          Letter spacing: 0
        </div>
      </div>
      <div>
        <div className="text-sm text-gray-600">Tight</div>
        <div className="text-lg" style={{ letterSpacing: '-0.01em' }}>
          Letter spacing: -1%
        </div>
      </div>
      <div>
        <div className="text-sm text-gray-600">Wide</div>
        <div className="text-lg" style={{ letterSpacing: '0.02em' }}>
          Letter spacing: +2%
        </div>
      </div>
    </div>
  );
}

function TextStylesMap() {
  return null;
}