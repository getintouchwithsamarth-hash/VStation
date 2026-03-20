import type { CSSProperties, ReactNode } from "react";

type ClusterProps = {
  children: ReactNode;
  wrap?: "on" | "off";
  gap?: 8 | 12 | 16 | 20 | string | number;
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  style?: CSSProperties;
  responsiveGap?: {
    mobile?: number | string;
    tablet?: number | string;
    desktop?: number | string;
  };
};

export function Cluster({
  children,
  wrap = "on",
  gap = 12,
  align = "center",
  justify = "flex-start",
  style,
  responsiveGap,
}: ClusterProps) {
  const resolvedGap = typeof gap === "number" ? `${gap}px` : gap;

  // Generate responsive styles if provided
  const hasResponsiveStyles = !!responsiveGap;
  const uniqueId = hasResponsiveStyles
    ? `cluster-${Math.random().toString(36).substr(2, 9)}`
    : "";

  return (
    <>
      {hasResponsiveStyles && (
        <style>{`
          .${uniqueId} {
            display: flex;
            flex-direction: row;
            flex-wrap: ${wrap === "on" ? "wrap" : "nowrap"};
            gap: ${resolvedGap};
            align-items: ${align};
            justify-content: ${justify};
          }

          /* Tablet breakpoint */
          @media (max-width: 1024px) {
            .${uniqueId} {
              ${responsiveGap?.tablet ? `gap: ${typeof responsiveGap.tablet === "number" ? `${responsiveGap.tablet}px` : responsiveGap.tablet};` : ""}
            }
          }

          /* Mobile breakpoint */
          @media (max-width: 640px) {
            .${uniqueId} {
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
                flexDirection: "row",
                flexWrap: wrap === "on" ? "wrap" : "nowrap",
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
