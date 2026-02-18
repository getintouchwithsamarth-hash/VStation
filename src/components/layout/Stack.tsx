import type { CSSProperties, ReactNode } from 'react';

type StackProps = {
  children: ReactNode;
  gap?: string;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  style?: CSSProperties;
};

export function Stack({
  children,
  gap = '16px',
  align = 'stretch',
  justify = 'flex-start',
  style
}: StackProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap,
        alignItems: align,
        justifyContent: justify,
        ...style
      }}
    >
      {children}
    </div>
  );
}
