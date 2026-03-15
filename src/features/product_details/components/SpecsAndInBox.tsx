import { CardInstance } from "../../../components/ui/Card";
import { BadgeInstance } from "../../../components/ui/Badge";
import { useProductDetailMockData } from "../hooks/useProductDetailMockData";

export function SpecsAndInBox() {
  const { specsAndInBox } = useProductDetailMockData();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h3
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          color: "var(--foreground)",
          margin: 0,
          fontSize: "20px",
          lineHeight: "28px",
        }}
      >
        Specifications & What's Included
      </h3>

      {/* Technical Specs */}
      <CardInstance variant="elevated" padding="md">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <h4
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: "20px",
              fontWeight: "600",
              color: "var(--foreground)",
              margin: 0,
            }}
          >
            {specsAndInBox.specificationsTitle}
          </h4>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {specsAndInBox.specifications.map((spec) => (
              <div
                key={spec.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingBottom: "8px",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: "13px",
                    lineHeight: "18px",
                    fontWeight: "500",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {spec.label}
                </div>
                <div
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: "13px",
                    lineHeight: "18px",
                    fontWeight: "400",
                    color: "var(--foreground)",
                  }}
                >
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardInstance>

      {/* In the Box */}
      <CardInstance variant="subtle" padding="md">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <h4
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "15px",
                lineHeight: "20px",
                fontWeight: "600",
                color: "var(--foreground)",
                margin: 0,
              }}
            >
              {specsAndInBox.inBoxTitle}
            </h4>
            <BadgeInstance
              label={specsAndInBox.inBoxBadge}
              variant="neutral"
              size="sm"
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            {specsAndInBox.inBoxItems.map((item) => (
              <div
                key={item}
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "13px",
                  lineHeight: "18px",
                  fontWeight: "400",
                  color: "var(--muted-foreground)",
                }}
              >
                • {item}
              </div>
            ))}
          </div>
        </div>
      </CardInstance>

      {/* Product Details */}
      <CardInstance variant="subtle" padding="md">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h4
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "15px",
              lineHeight: "20px",
              fontWeight: "600",
              color: "var(--foreground)",
              margin: 0,
            }}
          >
            {specsAndInBox.productDetailsTitle}
          </h4>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {specsAndInBox.productDetails.map((detail) => (
              <div key={detail.label}>
                <div
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: "12px",
                    lineHeight: "18px",
                    fontWeight: "600",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {detail.label}
                </div>
                <div
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: "13px",
                    lineHeight: "18px",
                    fontWeight: "400",
                    color: "var(--foreground)",
                  }}
                >
                  {detail.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardInstance>
    </div>
  );
}
