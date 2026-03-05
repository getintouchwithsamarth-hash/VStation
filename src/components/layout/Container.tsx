type ContainerWidth = 'wide' | 'standard' | 'narrow';

type ContainerBaseProps = {
  children: React.ReactNode;
  className?: string;
};

type ContainerProps = ContainerBaseProps & {
  width?: ContainerWidth;
};

type WidthPresetProps = ContainerBaseProps;

type ContainerComponent = ((props: ContainerProps) => JSX.Element) & {
  Wide: (props: WidthPresetProps) => JSX.Element;
  Standard: (props: WidthPresetProps) => JSX.Element;
  Narrow: (props: WidthPresetProps) => JSX.Element;
};

const baseContainerClassName = 'w-full mx-auto px-4 md:px-6 lg:px-8';

const widthClassByPreset: Record<ContainerWidth, string> = {
  wide: 'max-w-[1200px]',
  standard: 'max-w-[1080px]',
  narrow: 'max-w-[860px]'
};

function buildContainerClassName(width: ContainerWidth, className?: string) {
  return [baseContainerClassName, widthClassByPreset[width], className].filter(Boolean).join(' ');
}

function ContainerRoot({ children, width = 'wide', className }: ContainerProps) {
  return <div className={buildContainerClassName(width, className)}>{children}</div>;
}

function WidthWide({ children, className }: WidthPresetProps) {
  // Constraints note: Horizontal padding is 16px (mobile), 24px (tablet), 32px (desktop).
  return <ContainerRoot width="wide" className={className}>{children}</ContainerRoot>;
}

function WidthStandard({ children, className }: WidthPresetProps) {
  // Constraints note: Horizontal padding is 16px (mobile), 24px (tablet), 32px (desktop).
  return <ContainerRoot width="standard" className={className}>{children}</ContainerRoot>;
}

function WidthNarrow({ children, className }: WidthPresetProps) {
  // Constraints note: Horizontal padding is 16px (mobile), 24px (tablet), 32px (desktop).
  return <ContainerRoot width="narrow" className={className}>{children}</ContainerRoot>;
}

export const Container = Object.assign(ContainerRoot, {
  Wide: WidthWide,
  Standard: WidthStandard,
  Narrow: WidthNarrow
}) as ContainerComponent;
