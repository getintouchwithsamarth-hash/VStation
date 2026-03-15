import { BadgeInstance } from "../../../components/ui/Badge";
import { useProductDetailMockData } from "../hooks/useProductDetailMockData";

export function ProductTitleBlock() {
  const { productHeader } = useProductDetailMockData();

  return (
    <>
      <style>{`
        .product-title-block {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .product-title-badge-row {
          display: flex;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
        }

        .product-title-vendor {
          font-family: Inter, system-ui, sans-serif;
          font-size: 13px;
          line-height: 18px;
          font-weight: 500;
          color: var(--muted-foreground);
        }

        .product-title-h1 {
          font-family: Inter, system-ui, sans-serif;
          font-size: 40px;
          line-height: 44px;
          letter-spacing: -0.02em;
          color: var(--foreground);
          margin: 0;
          max-width: 900px;
        }

        .product-title-meta {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
          line-height: 20px;
          color: var(--muted-foreground);
        }

        @media (max-width: 1024px) {
          .product-title-h1 {
            font-size: 32px;
            line-height: 38px;
          }

          .product-title-meta {
            font-size: 13px;
            gap: 14px;
          }
        }

        @media (max-width: 640px) {
          .product-title-block {
            gap: 12px;
          }

          .product-title-badge-row {
            gap: 10px;
          }

          .product-title-vendor {
            font-size: 12px;
            line-height: 16px;
          }

          .product-title-h1 {
            font-size: 24px;
            line-height: 32px;
          }

          .product-title-meta {
            font-size: 12px;
            line-height: 18px;
            gap: 12px;
          }
        }
      `}</style>
      <div className="product-title-block">
        <div className="product-title-badge-row">
          <BadgeInstance
            label={productHeader.badge}
            variant="accent"
            size="sm"
          />
          <span className="product-title-vendor">{productHeader.vendor}</span>
        </div>

        <h1 className="product-title-h1">{productHeader.title}</h1>

        <div className="product-title-meta">
          <span>SKU: {productHeader.sku}</span>
          <span>
            {productHeader.shareLabel}: {productHeader.shareUrl}
          </span>
        </div>
      </div>
    </>
  );
}
