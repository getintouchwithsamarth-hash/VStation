import type { CSSProperties, ReactNode } from "react";

type StackProps = {
  children: ReactNode;
  direction?: "vertical" | "horizontal";
  gap?: 4 | 8 | 12 | 16 | 24 | 32 | string | number;
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  style?: CSSProperties;
  responsiveDirection?: {
    mobile?: "vertical" | "horizontal";
    tablet?: "vertical" | "horizontal";
    desktop?: "vertical" | "horizontal";
  };
  responsiveGap?: {
    mobile?: number | string;
    tablet?: number | string;
    desktop?: number | string;
  };
};

export function Stack({
  children,
  direction = "vertical",
  gap = 16,
  align = "stretch",
  justify = "flex-start",
  style,
  responsiveDirection,
  responsiveGap,
}: StackProps) {
  const flexDirection = direction === "horizontal" ? "row" : "column";
  const resolvedGap = typeof gap === "number" ? `${gap}px` : gap;

  // Generate responsive styles if provided
  const hasResponsiveStyles = responsiveDirection || responsiveGap;
  const uniqueId = hasResponsiveStyles
    ? `stack-${Math.random().toString(36).substr(2, 9)}`
    : "";

  return (
    <>
      {hasResponsiveStyles && (
        <style>{`
          .${uniqueId} {
            display: flex;
            flex-direction: ${flexDirection};
            gap: ${resolvedGap};
            align-items: ${align};
            justify-content: ${justify};
          }

          /* Tablet breakpoint */
          @media (max-width: 1024px) {
            .${uniqueId} {
              ${responsiveDirection?.tablet ? `flex-direction: ${responsiveDirection.tablet === "horizontal" ? "row" : "column"};` : ""}
              ${responsiveGap?.tablet ? `gap: ${typeof responsiveGap.tablet === "number" ? `${responsiveGap.tablet}px` : responsiveGap.tablet};` : ""}
            }
          }

          /* Mobile breakpoint */
          @media (max-width: 640px) {
            .${uniqueId} {
              ${responsiveDirection?.mobile ? `flex-direction: ${responsiveDirection.mobile === "horizontal" ? "row" : "column"};` : ""}
              ${responsiveGap?.mobile ? `gap: ${typeof responsiveGap.mobile === "number" ? `${responsiveGap.mobile}px` : responsiveGap.mobile};` : ""}
            }
          }
        `}</style>
      )}
      <div
        className={hasResponsiveStyles ? uniqueId : undefined}
        style={
          !hasResponsiveStyles
            ? {
                display: "flex",
                flexDirection,
                gap: resolvedGap,
                alignItems: align,
                justifyContent: justify,
                ...style,
              }
            : style
        }
      >
        {children}
      </div>
    </>
  );
}
