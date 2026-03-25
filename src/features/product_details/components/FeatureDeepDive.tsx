import { CardInstance } from "../../../components/ui/Card";
import { BadgeInstance } from "../../../components/ui/Badge";
import { useProductDetailMockData } from "../hooks/useProductDetailMockData";
import { Package, CheckCircle2, Info } from "lucide-react";

export function FeatureDeepDive() {
  const { featureDeepDive } = useProductDetailMockData();

  return (
    <>
      <style>{`
        .feature-deep-dive-container {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .feature-deep-dive-title-wrapper {
          text-align: center;
        }

        .feature-deep-dive-title {
          font-family: Inter, system-ui, sans-serif;
          color: var(--foreground);
          margin: 0;
        }

        .feature-deep-dive-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 24px;
        }

        .feature-deep-dive-main {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .feature-deep-dive-sidebar {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .feature-card-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .feature-card-header {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .feature-card-title {
          font-family: Inter, system-ui, sans-serif;
          font-size: 18px;
          line-height: 24px;
          font-weight: 600;
          color: var(--foreground);
          margin: 0;
        }

        .feature-card-html {
          font-family: Inter, system-ui, sans-serif;
          font-size: 15px;
          line-height: 24px;
          color: var(--muted-foreground);
        }

        .feature-story-badge {
          display: inline-flex;
          padding: 6px 12px;
          background-color: color-mix(in srgb, var(--primary) 10%, transparent);
          border-radius: 8px;
          align-self: flex-start;
        }

        .feature-story-title {
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          color: var(--primary);
          margin: 0;
        }

        .feature-story-html {
          font-family: Inter, system-ui, sans-serif;
          font-size: 15px;
          line-height: 24px;
          font-weight: 500;
          color: var(--foreground);
        }

        .feature-perfect-for {
          font-family: Inter, system-ui, sans-serif;
          font-size: 16px;
          line-height: 24px;
          font-weight: 600;
          color: var(--foreground);
        }

        .feature-not-for {
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
          line-height: 22px;
          font-weight: 400;
          color: var(--text-secondary);
        }

        .quick-info-title {
          font-family: Inter, system-ui, sans-serif;
          font-size: 13px;
          line-height: 18px;
          font-weight: 600;
          color: var(--foreground);
        }

        .quick-info-label {
          font-family: Inter, system-ui, sans-serif;
          font-size: 11px;
          line-height: 16px;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .quick-info-value {
          font-family: Inter, system-ui, sans-serif;
          font-size: 13px;
          line-height: 18px;
          font-weight: 500;
          color: var(--foreground);
        }

        @media (max-width: 1024px) {
          .feature-deep-dive-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .feature-deep-dive-sidebar {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }

        @media (max-width: 640px) {
          .feature-deep-dive-container {
            gap: 24px;
          }

          .feature-deep-dive-sidebar {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .feature-card-title {
            font-size: 16px;
            line-height: 22px;
          }

          .feature-card-html {
            font-size: 14px;
            line-height: 22px;
          }

          .feature-perfect-for {
            font-size: 15px;
            line-height: 22px;
          }

          .feature-not-for {
            font-size: 13px;
            line-height: 20px;
          }
        }
      `}</style>
      <div className="feature-deep-dive-container">
        {/* Title */}
        <div className="feature-deep-dive-title-wrapper">
          <h3 className="feature-deep-dive-title">Product Deep Dive</h3>
        </div>

        {/* Main Content Grid */}
        <div className="feature-deep-dive-grid">
          {/* Left Column - Main Content */}
          <div className="feature-deep-dive-main">
            {/* Overview Card */}
            <CardInstance variant="elevated" padding="lg">
              <div className="feature-card-content">
                <div className="feature-card-header">
                  <Info size={20} style={{ color: "var(--primary)" }} />
                  <h4 className="feature-card-title">
                    {featureDeepDive.overviewTitle}
                  </h4>
                </div>
                <div
                  className="feature-card-html"
                  dangerouslySetInnerHTML={{
                    __html: featureDeepDive.overviewHtml,
                  }}
                />
              </div>
            </CardInstance>

            {/* Buying Guide Card */}
            <CardInstance variant="elevated" padding="lg">
              <div className="feature-card-content">
                <h4 className="feature-card-title">
                  {featureDeepDive.buyingGuideTitle}
                </h4>
                <div
                  className="feature-card-html"
                  dangerouslySetInnerHTML={{
                    __html: featureDeepDive.buyingGuideHtml,
                  }}
                />
              </div>
            </CardInstance>

            {/* Why This Made The Cut */}
            {featureDeepDive.storyHtml ? (
              <CardInstance variant="subtle" padding="lg">
                <div className="feature-card-content" style={{ gap: "12px" }}>
                  <div className="feature-story-badge">
                    <h4 className="feature-story-title">
                      {featureDeepDive.storyTitle}
                    </h4>
                  </div>
                  <div
                    className="feature-story-html"
                    dangerouslySetInnerHTML={{
                      __html: featureDeepDive.storyHtml,
                    }}
                  />
                </div>
              </CardInstance>
            ) : null}
          </div>

          {/* Right Column - Highlights */}
          <div className="feature-deep-dive-sidebar">
            {/* Perfect For */}
            <CardInstance variant="elevated" padding="lg">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <CheckCircle2
                    size={18}
                    style={{ color: "var(--success-foreground)" }}
                  />
                  <BadgeInstance
                    label="Perfect for"
                    variant="accent"
                    size="sm"
                  />
                </div>
                <div className="feature-perfect-for">
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
                  <div className="feature-not-for">
                    {featureDeepDive.notFor}
                  </div>
                </div>
              </CardInstance>
            ) : null}

            {/* Quick Info Card */}
            <CardInstance variant="subtle" padding="md">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <Package size={16} style={{ color: "var(--primary)" }} />
                  <div className="quick-info-title">Quick Info</div>
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
                    <div className="quick-info-label">Protection Level</div>
                    <div className="quick-info-value">10mm Padding</div>
                  </div>
                  <div
                    style={{
                      borderTop: "1px solid var(--border)",
                      paddingTop: "8px",
                    }}
                  >
                    <div className="quick-info-label">Water Resistant</div>
                    <div className="quick-info-value">
                      Light rain protection
                    </div>
                  </div>
                  <div
                    style={{
                      borderTop: "1px solid var(--border)",
                      paddingTop: "8px",
                    }}
                  >
                    <div className="quick-info-label">Compatibility</div>
                    <div className="quick-info-value">
                      Most acoustic & electric
                    </div>
                  </div>
                </div>
              </div>
            </CardInstance>
          </div>
        </div>
      </div>
    </>
  );
}
