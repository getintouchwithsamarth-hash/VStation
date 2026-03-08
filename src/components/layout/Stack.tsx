import type { CSSProperties, ReactNode } from 'react';

type StackProps = {
  children: ReactNode;
  direction?: 'vertical' | 'horizontal';
  gap?: 4 | 8 | 12 | 16 | 24 | 32 | string | number;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  style?: CSSProperties;
};

export function Stack({
  children,
  direction = 'vertical',
  gap = 16,
  align = 'stretch',
  justify = 'flex-start',
  style
}: StackProps) {
  const flexDirection = direction === 'horizontal' ? 'row' : 'column';
  const resolvedGap = typeof gap === 'number' ? `${gap}px` : gap;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection,
        gap: resolvedGap,
        alignItems: align,
        justifyContent: justify,
        ...style
      }}
    >
      {children}
    </div>
  );
}
