export function ProductsPageHeader() {
  return (
    <>
      <style>{`
        .products-page-header {
          margin-bottom: 24px;
        }

        .products-page-header-content {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 12px;
        }

        .products-page-eyebrow {
          font-family: Inter, system-ui, sans-serif;
          font-size: 12px;
          line-height: 18px;
          font-weight: 400;
          color: var(--muted-foreground);
        }

        .products-page-title {
          font-family: Inter, system-ui, sans-serif;
          color: var(--foreground);
          margin: 0;
        }

        .products-page-description {
          font-family: Inter, system-ui, sans-serif;
          font-size: 16px;
          line-height: 24px;
          font-weight: 400;
          color: var(--muted-foreground);
          max-width: 640px;
        }

        @media (max-width: 1024px) {
          .products-page-description {
            font-size: 15px;
            line-height: 22px;
          }
        }

        @media (max-width: 640px) {
          .products-page-header {
            margin-bottom: 20px;
          }

          .products-page-eyebrow {
            font-size: 11px;
            line-height: 16px;
          }

          .products-page-description {
            font-size: 14px;
            line-height: 21px;
          }
        }
      `}</style>
      <div className="products-page-header">
        {/* Eyebrow + Title Block */}
        <div className="products-page-header-content">
          {/* Eyebrow */}
          <div className="products-page-eyebrow">Curated gear</div>

          {/* Title */}
          <h1 className="products-page-title">Products</h1>
        </div>

        {/* Supporting Copy */}
        <div className="products-page-description">
          Best-in-class essentials chosen for durability, clarity, and real
          daily use.
        </div>
      </div>
    </>
  );
}
