import { CardInstance } from "../../../components/ui/Card";
import { BadgeInstance } from "../../../components/ui/Badge";
import { useProductDetailMockData } from "../hooks/useProductDetailMockData";

export function DeliveryAndReturns() {
  const { deliveryAndReturns } = useProductDetailMockData();

  return (
    <>
      <style>{`
        .delivery-returns-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .delivery-returns-title {
          font-family: Inter, system-ui, sans-serif;
          color: var(--foreground);
          margin: 0;
          font-size: 20px;
          line-height: 28px;
        }

        .delivery-returns-cards {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .delivery-card-content {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .delivery-card-header {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .delivery-card-title {
          font-family: Inter, system-ui, sans-serif;
          font-size: 15px;
          line-height: 20px;
          font-weight: 600;
          color: var(--foreground);
          margin: 0;
        }

        .delivery-card-description {
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          color: var(--text-secondary);
        }

        .delivery-card-footer {
          font-family: Inter, system-ui, sans-serif;
          font-size: 12px;
          line-height: 18px;
          font-weight: 400;
          color: var(--text-secondary);
          padding-top: 8px;
          border-top: 1px solid var(--border);
        }

        @media (max-width: 640px) {
          .delivery-returns-title {
            font-size: 18px;
            line-height: 26px;
          }

          .delivery-card-title {
            font-size: 14px;
            line-height: 19px;
          }

          .delivery-card-description {
            font-size: 13px;
            line-height: 19px;
          }

          .delivery-card-footer {
            font-size: 11px;
            line-height: 16px;
          }
        }
      `}</style>
      <div className="delivery-returns-container">
        <h3 className="delivery-returns-title">Delivery & Returns</h3>

        <div className="delivery-returns-cards">
          {deliveryAndReturns.map((card) => (
            <CardInstance key={card.id} variant="subtle" padding="md">
              <div className="delivery-card-content">
                <div className="delivery-card-header">
                  <BadgeInstance
                    label={card.badge}
                    variant="neutral"
                    size="sm"
                  />
                  <h4 className="delivery-card-title">{card.title}</h4>
                </div>
                <div className="delivery-card-description">
                  {card.description}
                </div>
                {card.footer ? (
                  <div className="delivery-card-footer">{card.footer}</div>
                ) : null}
              </div>
            </CardInstance>
          ))}
        </div>
      </div>
    </>
  );
}
