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
    <Stack direction="vertical" gap={24}>
      <div style={{ textAlign: "center" }}>
        <h3
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            color: "var(--foreground)",
            margin: 0,
          }}
        >
          {keyBenefits.title}
        </h3>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}
      >
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
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background:
                      "linear-gradient(135deg, color-mix(in srgb, var(--primary) 10%, transparent) 0%, color-mix(in srgb, var(--primary) 5%, transparent) 100%)",
                    border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconComponent
                    size={24}
                    style={{
                      color: "var(--primary)",
                      strokeWidth: 2,
                    }}
                  />
                </div>

                {/* Number badge */}
                <div
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "var(--primary)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {card.badge}
                </div>

                {/* Title */}
                <h4
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: "600",
                    color: "var(--foreground)",
                    margin: 0,
                  }}
                >
                  {card.title}
                </h4>

                {card.description ? (
                  <div
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontSize: "14px",
                      lineHeight: "20px",
                      fontWeight: "400",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {card.description}
                  </div>
                ) : null}
                {card.footer ? (
                  <div
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontSize: "12px",
                      lineHeight: "18px",
                      fontWeight: "400",
                      color: "var(--muted-foreground)",
                      paddingTop: "8px",
                      borderTop: "1px solid var(--border)",
                    }}
                  >
                    {card.footer}
                  </div>
                ) : null}
              </Stack>
            </CardInstance>
          );
        })}
      </div>
    </Stack>
  );
}
