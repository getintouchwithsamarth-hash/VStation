import { CardInstance } from "../../../components/ui/Card";
import { BadgeInstance } from "../../../components/ui/Badge";
import { useProductDetailMockData } from "../hooks/useProductDetailMockData";
import { Package, CheckCircle2, Info } from "lucide-react";

export function FeatureDeepDive() {
  const { featureDeepDive } = useProductDetailMockData();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      {/* Title */}
      <div style={{ textAlign: "center" }}>
        <h3
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            color: "var(--foreground)",
            margin: 0,
          }}
        >
          Product Deep Dive
        </h3>
      </div>

      {/* Main Content Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 380px",
          gap: "24px",
        }}
      >
        {/* Left Column - Main Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Overview Card */}
          <CardInstance variant="elevated" padding="lg">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Info size={20} style={{ color: "var(--primary)" }} />
                <h4
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: "18px",
                    lineHeight: "24px",
                    fontWeight: "600",
                    color: "var(--foreground)",
                    margin: 0,
                  }}
                >
                  {featureDeepDive.overviewTitle}
                </h4>
              </div>
              <div
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "15px",
                  lineHeight: "24px",
                  color: "var(--muted-foreground)",
                }}
                dangerouslySetInnerHTML={{
                  __html: featureDeepDive.overviewHtml,
                }}
              />
            </div>
          </CardInstance>

          {/* Buying Guide Card */}
          <CardInstance variant="elevated" padding="lg">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <h4
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "18px",
                  lineHeight: "24px",
                  fontWeight: "600",
                  color: "var(--foreground)",
                  margin: 0,
                }}
              >
                {featureDeepDive.buyingGuideTitle}
              </h4>
              <div
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "15px",
                  lineHeight: "24px",
                  color: "var(--muted-foreground)",
                }}
                dangerouslySetInnerHTML={{
                  __html: featureDeepDive.buyingGuideHtml,
                }}
              />
            </div>
          </CardInstance>

          {/* Why This Made The Cut */}
          {featureDeepDive.storyHtml ? (
            <CardInstance variant="subtle" padding="lg">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    padding: "6px 12px",
                    backgroundColor: "color-mix(in srgb, var(--primary) 10%, transparent)",
                    borderRadius: "8px",
                    alignSelf: "flex-start",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontSize: "14px",
                      lineHeight: "20px",
                      fontWeight: "600",
                      color: "var(--primary)",
                      margin: 0,
                    }}
                  >
                    {featureDeepDive.storyTitle}
                  </h4>
                </div>
                <div
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: "15px",
                    lineHeight: "24px",
                    fontWeight: "500",
                    color: "var(--foreground)",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: featureDeepDive.storyHtml,
                  }}
                />
              </div>
            </CardInstance>
          ) : null}
        </div>

        {/* Right Column - Highlights */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Perfect For */}
          <CardInstance variant="elevated" padding="lg">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <CheckCircle2 size={18} style={{ color: "var(--success-foreground)" }} />
                <BadgeInstance label="Perfect for" variant="accent" size="sm" />
              </div>
              <div
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: "600",
                  color: "var(--foreground)",
                }}
              >
                {featureDeepDive.curatedFor}
              </div>
            </div>
          </CardInstance>

          {/* Not Ideal For */}
          {featureDeepDive.notFor ? (
            <CardInstance variant="subtle" padding="lg">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <BadgeInstance
                  label="Not ideal for"
                  variant="neutral"
                  size="sm"
                />
                <div
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: "14px",
                    lineHeight: "22px",
                    fontWeight: "400",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {featureDeepDive.notFor}
                </div>
              </div>
            </CardInstance>
          ) : null}

          {/* Quick Info Card */}
          <CardInstance variant="subtle" padding="md">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <Package size={16} style={{ color: "var(--primary)" }} />
                <div
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: "13px",
                    lineHeight: "18px",
                    fontWeight: "600",
                    color: "var(--foreground)",
                  }}
                >
                  Quick Info
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  paddingTop: "4px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontSize: "11px",
                      lineHeight: "16px",
                      fontWeight: "600",
                      color: "var(--muted-foreground)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Protection Level
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontSize: "13px",
                      lineHeight: "18px",
                      fontWeight: "500",
                      color: "var(--foreground)",
                    }}
                  >
                    10mm Padding
                  </div>
                </div>
                <div
                  style={{
                    borderTop: "1px solid var(--border)",
                    paddingTop: "8px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontSize: "11px",
                      lineHeight: "16px",
                      fontWeight: "600",
                      color: "var(--muted-foreground)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Water Resistant
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontSize: "13px",
                      lineHeight: "18px",
                      fontWeight: "500",
                      color: "var(--foreground)",
                    }}
                  >
                    Light rain protection
                  </div>
                </div>
                <div
                  style={{
                    borderTop: "1px solid var(--border)",
                    paddingTop: "8px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontSize: "11px",
                      lineHeight: "16px",
                      fontWeight: "600",
                      color: "var(--muted-foreground)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Compatibility
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontSize: "13px",
                      lineHeight: "18px",
                      fontWeight: "500",
                      color: "var(--foreground)",
                    }}
                  >
                    Most acoustic & electric
                  </div>
                </div>
              </div>
            </div>
          </CardInstance>
        </div>
      </div>
    </div>
  );
}
