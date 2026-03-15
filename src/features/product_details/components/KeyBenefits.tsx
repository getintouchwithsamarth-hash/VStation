import { CardInstance } from "../../../components/ui/Card";
import { BadgeInstance } from "../../../components/ui/Badge";
import { Stack } from "../../../components/layout/Stack";
import { useProductDetailMockData } from "../hooks/useProductDetailMockData";
import { Shield, Package, Zap } from "lucide-react";

export function KeyBenefits() {
  const { keyBenefits } = useProductDetailMockData();

  if (keyBenefits.cards.length === 0) {
    return null;
  }

  const icons = [Shield, Package, Zap];

  return (
    <>
      <style>{`
        .key-benefits-title-container {
          text-align: center;
        }

        .key-benefits-title {
          font-family: Inter, system-ui, sans-serif;
          color: var(--foreground);
          margin: 0;
        }

        .key-benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .key-benefit-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, color-mix(in srgb, var(--primary) 10%, transparent) 0%, color-mix(in srgb, var(--primary) 5%, transparent) 100%);
          border: 1px solid color-mix(in srgb, var(--primary) 20%, transparent);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .key-benefit-icon svg {
          color: var(--primary);
          stroke-width: 2;
        }

        .key-benefit-badge {
          font-family: Inter, system-ui, sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: var(--primary);
          letter-spacing: 0.05em;
        }

        .key-benefit-title {
          font-family: Inter, system-ui, sans-serif;
          font-size: 16px;
          line-height: 24px;
          font-weight: 600;
          color: var(--foreground);
          margin: 0;
        }

        .key-benefit-description {
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          color: var(--muted-foreground);
        }

        .key-benefit-footer {
          font-family: Inter, system-ui, sans-serif;
          font-size: 12px;
          line-height: 18px;
          font-weight: 400;
          color: var(--muted-foreground);
          padding-top: 8px;
          border-top: 1px solid var(--border);
        }

        @media (max-width: 1024px) {
          .key-benefits-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 640px) {
          .key-benefits-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .key-benefit-icon {
            width: 40px;
            height: 40px;
          }

          .key-benefit-icon svg {
            width: 20px;
            height: 20px;
          }

          .key-benefit-title {
            font-size: 15px;
            line-height: 22px;
          }

          .key-benefit-description {
            font-size: 13px;
            line-height: 19px;
          }

          .key-benefit-footer {
            font-size: 11px;
            line-height: 16px;
          }
        }
      `}</style>
      <Stack direction="vertical" gap={24}>
        <div className="key-benefits-title-container">
          <h3 className="key-benefits-title">{keyBenefits.title}</h3>
        </div>

        <div className="key-benefits-grid">
          {keyBenefits.cards.map((card, index) => {
            const IconComponent = icons[index % icons.length];

            return (
              <CardInstance key={card.id} variant="elevated" padding="lg">
                <Stack
                  direction="vertical"
                  gap={16}
                  style={{ alignItems: "flex-start" }}
                >
                  {/* Icon with gradient background */}
                  <div className="key-benefit-icon">
                    <IconComponent size={24} />
                  </div>

                  {/* Number badge */}
                  <div className="key-benefit-badge">{card.badge}</div>

                  {/* Title */}
                  <h4 className="key-benefit-title">{card.title}</h4>

                  {card.description ? (
                    <div className="key-benefit-description">
                      {card.description}
                    </div>
                  ) : null}
                  {card.footer ? (
                    <div className="key-benefit-footer">{card.footer}</div>
                  ) : null}
                </Stack>
              </CardInstance>
            );
          })}
        </div>
      </Stack>
    </>
  );
}
