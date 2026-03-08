import type { CSSProperties, ReactNode } from 'react';

type ClusterProps = {
  children: ReactNode;
  wrap?: 'on' | 'off';
  gap?: 8 | 12 | 16 | 20 | string | number;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  style?: CSSProperties;
};

export function Cluster({
  children,
  wrap = 'on',
  gap = 12,
  align = 'center',
  justify = 'flex-start',
  style
}: ClusterProps) {
  const resolvedGap = typeof gap === 'number' ? `${gap}px` : gap;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: wrap === 'on' ? 'wrap' : 'nowrap',
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
