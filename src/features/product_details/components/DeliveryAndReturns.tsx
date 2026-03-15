import { CardInstance } from "../../../components/ui/Card";
import { BadgeInstance } from "../../../components/ui/Badge";
import { useProductDetailMockData } from "../hooks/useProductDetailMockData";

export function DeliveryAndReturns() {
  const { deliveryAndReturns } = useProductDetailMockData();

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
        Delivery & Returns
      </h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {deliveryAndReturns.map((card) => (
          <CardInstance key={card.id} variant="subtle" padding="md">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <BadgeInstance label={card.badge} variant="neutral" size="sm" />
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
                  {card.title}
                </h4>
              </div>
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
            </div>
          </CardInstance>
        ))}
      </div>
    </div>
  );
}
