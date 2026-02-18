import type { CSSProperties, HTMLAttributes } from 'react';

type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
};

export function Skeleton({ width = '100%', height = '16px', borderRadius = '8px', style, ...props }: SkeletonProps) {
  const baseStyle: CSSProperties = {
    width,
    height,
    borderRadius,
    background: 'linear-gradient(90deg, #f2f4f7 25%, #e4e7ec 37%, #f2f4f7 63%)',
    backgroundSize: '400% 100%',
    animation: 'vs-skeleton-shimmer 1.2s ease-in-out infinite'
  };

  return (
    <>
      <style>{`
        @keyframes vs-skeleton-shimmer {
          0% { background-position: 100% 50%; }
          100% { background-position: 0 50%; }
        }
      `}</style>
      <div aria-hidden="true" style={{ ...baseStyle, ...style }} {...props} />
    </>
  );
}
