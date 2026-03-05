import { Container } from './Container';

type SectionPaddingPreset = 'standard' | 'dense';
type SectionVariantPreset = 'canvas' | 'subtle' | 'inverse';
type ContainerWidthPreset = 'wide' | 'standard' | 'narrow';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  padding?: SectionPaddingPreset;
  variant?: SectionVariantPreset;
  containerWidth?: ContainerWidthPreset;
  contain?: boolean;
  paddingTop?: string;
  paddingBottom?: string;
  background?: string;
};

type SectionSlotProps = {
  children: React.ReactNode;
};

type SectionPaddingPresetProps = {
  children: React.ReactNode;
};

type SectionVariantPresetProps = {
  children: React.ReactNode;
};

type SectionComponent = ((props: SectionProps) => JSX.Element) & {
  SectionContainerSlot: (props: SectionSlotProps) => JSX.Element;
  PaddingStandard: (props: SectionPaddingPresetProps) => JSX.Element;
  PaddingDense: (props: SectionPaddingPresetProps) => JSX.Element;
  VariantCanvas: (props: SectionVariantPresetProps) => JSX.Element;
  VariantSubtle: (props: SectionVariantPresetProps) => JSX.Element;
  VariantInverse: (props: SectionVariantPresetProps) => JSX.Element;
};

const paddingByPreset: Record<SectionPaddingPreset, { top: string; bottom: string }> = {
  standard: { top: '56px', bottom: '56px' },
  dense: { top: '32px', bottom: '32px' }
};

const variantStylesByPreset: Record<SectionVariantPreset, React.CSSProperties> = {
  canvas: {
    backgroundColor: 'var(--surface-canvas, #FFFFFF)'
  },
  subtle: {
    backgroundColor: 'var(--surface-subtle, #FCFCFD)'
  },
  inverse: {
    backgroundColor: 'var(--surface-inverse, #101828)',
    color: 'var(--text-inverse, #FFFFFF)'
  }
};

function isContainerElement(element: React.ReactNode) {
  if (!element || typeof element !== 'object' || !('type' in element)) {
    return false;
  }

  const elementType = element.type;

  return (
    elementType === Container ||
    elementType === Container.Wide ||
    elementType === Container.Standard ||
    elementType === Container.Narrow
  );
}

function SectionContainerSlot({ children }: SectionSlotProps) {
  return <>{children}</>;
}

function PaddingStandard({ children }: SectionPaddingPresetProps) {
  return (
    <div
      style={{
        paddingTop: '56px',
        paddingBottom: '56px'
      }}
    >
      {children}
    </div>
  );
}

function PaddingDense({ children }: SectionPaddingPresetProps) {
  return (
    <div
      style={{
        paddingTop: '32px',
        paddingBottom: '32px'
      }}
    >
      {children}
    </div>
  );
}

function VariantCanvas({ children }: SectionVariantPresetProps) {
  return <div style={variantStylesByPreset.canvas}>{children}</div>;
}

function VariantSubtle({ children }: SectionVariantPresetProps) {
  return <div style={variantStylesByPreset.subtle}>{children}</div>;
}

function VariantInverse({ children }: SectionVariantPresetProps) {
  // Caption note: Inverse sets default text to text-inverse for readable content on dark surfaces.
  return <div style={variantStylesByPreset.inverse}>{children}</div>;
}

function SectionRoot({
  children,
  className,
  padding = 'standard',
  variant = 'canvas',
  containerWidth = 'standard',
  contain = true,
  paddingTop,
  paddingBottom,
  background
}: SectionProps) {
  const presetPadding = paddingByPreset[padding];

  const computedPaddingTop = paddingTop ?? presetPadding.top;
  const computedPaddingBottom = paddingBottom ?? presetPadding.bottom;

  const variantStyle: React.CSSProperties = {
    ...variantStylesByPreset[variant],
    backgroundColor: background ?? variantStylesByPreset[variant].backgroundColor
  };

  const shouldAutoSlot = contain && !isContainerElement(children);

  return (
    <section
      className={className}
      style={{
        ...variantStyle,
        paddingTop: computedPaddingTop,
        paddingBottom: computedPaddingBottom
      }}
    >
      <SectionContainerSlot>
        {shouldAutoSlot ? (
          <Container width={containerWidth}>{children}</Container>
        ) : (
          children
        )}
      </SectionContainerSlot>
    </section>
  );
}

// Ordered Section child primitives:
// 1) SectionContainerSlot
// 2) Padding / Standard
// 3) Padding / Dense
// 4) Variant / Canvas
// 5) Variant / Subtle
// 6) Variant / Inverse
export const Section = Object.assign(SectionRoot, {
  SectionContainerSlot,
  PaddingStandard,
  PaddingDense,
  VariantCanvas,
  VariantSubtle,
  VariantInverse
}) as SectionComponent;
