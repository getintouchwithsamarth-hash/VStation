import { CardInstance } from "../../../components/ui/Card";
import { BadgeInstance } from "../../../components/ui/Badge";
import { useProductDetailMockData } from "../hooks/useProductDetailMockData";

const COLOR_OPTION_PATTERN = /^(.*?)\s*,?\s*\((#[0-9a-f]{3,8})\)$/i;

const parseColorOptions = (value: string) => {
  const options = value
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const match = part.match(COLOR_OPTION_PATTERN);
      if (!match) {
        return null;
      }

      return {
        label: match[1].trim().replace(/,\s*$/, ""),
        hex: match[2]
      };
    });

  return options.every(Boolean)
    ? (options as Array<{ label: string; hex: string }>)
    : [];
};

function SpecValue({ value }: { value: string }) {
  const colorOptions = parseColorOptions(value);

  if (colorOptions.length === 0) {
    return <>{value}</>;
  }

  return (
    <div className="specs-swatch-list">
      {colorOptions.map((option) => (
        <div key={`${option.label}-${option.hex}`} className="specs-swatch-item">
          <span
            className="specs-swatch-box"
            style={{ backgroundColor: option.hex }}
            aria-hidden="true"
          />
          <span>{option.label}</span>
        </div>
      ))}
    </div>
  );
}

export function SpecsAndInBox() {
  const { specsAndInBox } = useProductDetailMockData();

  return (
    <>
      <style>{`
        .specs-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .specs-title {
          font-family: Inter, system-ui, sans-serif;
          color: var(--foreground);
          margin: 0;
          font-size: 20px;
          line-height: 28px;
        }

        .specs-card-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .specs-card-title {
          font-family: Inter, system-ui, sans-serif;
          font-size: 15px;
          line-height: 20px;
          font-weight: 600;
          color: var(--foreground);
          margin: 0;
        }

        .specs-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .specs-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--border);
          gap: 16px;
        }

        .specs-label {
          font-family: Inter, system-ui, sans-serif;
          font-size: 13px;
          line-height: 18px;
          font-weight: 500;
          color: var(--muted-foreground);
        }

        .specs-value {
          font-family: Inter, system-ui, sans-serif;
          font-size: 13px;
          line-height: 18px;
          font-weight: 400;
          color: var(--foreground);
          text-align: right;
        }

        .specs-swatch-list {
          display: inline-flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 8px 12px;
        }

        .specs-swatch-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }

        .specs-swatch-box {
          width: 12px;
          height: 12px;
          border-radius: 3px;
          flex: 0 0 auto;
        }

        .inbox-header {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .inbox-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .inbox-item {
          font-family: Inter, system-ui, sans-serif;
          font-size: 13px;
          line-height: 18px;
          font-weight: 400;
          color: var(--text-secondary);
        }

        .details-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .details-item-label {
          font-family: Inter, system-ui, sans-serif;
          font-size: 12px;
          line-height: 18px;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .details-item-value {
          font-family: Inter, system-ui, sans-serif;
          font-size: 13px;
          line-height: 18px;
          font-weight: 400;
          color: var(--foreground);
        }

        @media (max-width: 640px) {
          .specs-title {
            font-size: 18px;
            line-height: 26px;
          }

          .specs-card-title {
            font-size: 14px;
            line-height: 19px;
          }

          .specs-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
            padding-bottom: 10px;
          }

          .specs-label {
            font-size: 12px;
            line-height: 17px;
          }

          .specs-value {
            font-size: 12px;
            line-height: 17px;
            text-align: left;
          }

          .specs-swatch-list {
            justify-content: flex-start;
          }

          .inbox-item {
            font-size: 12px;
            line-height: 17px;
          }

          .details-item-label {
            font-size: 11px;
            line-height: 16px;
          }

          .details-item-value {
            font-size: 12px;
            line-height: 17px;
          }
        }
      `}</style>
      <div className="specs-container">
        <h3 className="specs-title">Specifications & What's Included</h3>

        {/* Technical Specs */}
        <CardInstance variant="elevated" padding="md">
          <div className="specs-card-content">
            <h4 className="specs-card-title">
              {specsAndInBox.specificationsTitle}
            </h4>

            <div className="specs-list">
              {specsAndInBox.specifications.map((spec) => (
                <div key={spec.label} className="specs-row">
                  <div className="specs-label">{spec.label}</div>
                  <div className="specs-value">
                    <SpecValue value={spec.value} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardInstance>

        {/* In the Box */}
        <CardInstance variant="subtle" padding="md">
          <div className="specs-card-content" style={{ gap: "10px" }}>
            <div className="inbox-header">
              <h4 className="specs-card-title">{specsAndInBox.inBoxTitle}</h4>
              <BadgeInstance
                label={specsAndInBox.inBoxBadge}
                variant="neutral"
                size="sm"
              />
            </div>

            <div className="inbox-list">
              {specsAndInBox.inBoxItems.map((item) => (
                <div key={item} className="inbox-item">
                  • {item}
                </div>
              ))}
            </div>
          </div>
        </CardInstance>

        {/* Product Details */}
        <CardInstance variant="subtle" padding="md">
          <div className="specs-card-content" style={{ gap: "10px" }}>
            <h4 className="specs-card-title">
              {specsAndInBox.productDetailsTitle}
            </h4>

            <div className="details-list">
              {specsAndInBox.productDetails.map((detail) => (
                <div key={detail.label}>
                  <div className="details-item-label">{detail.label}</div>
                  <div className="details-item-value">
                    <SpecValue value={detail.value} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardInstance>
      </div>
    </>
  );
}
