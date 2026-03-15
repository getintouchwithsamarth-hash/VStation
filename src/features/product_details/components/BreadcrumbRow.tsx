import { useProductDetailMockData } from "../hooks/useProductDetailMockData";

export function BreadcrumbRow() {
  const { productHeader } = useProductDetailMockData();

  return (
    <>
      <style>{`
        .breadcrumb-nav {
          display: flex;
          gap: 8px;
          list-style: none;
          padding: 0;
          margin: 0;
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          color: var(--muted-foreground);
          flex-wrap: wrap;
        }

        .breadcrumb-link {
          color: var(--muted-foreground);
          text-decoration: none;
        }

        .breadcrumb-separator {
          color: var(--border);
        }

        .breadcrumb-current {
          color: var(--foreground);
        }

        @media (max-width: 640px) {
          .breadcrumb-nav {
            font-size: 12px;
            line-height: 18px;
            gap: 6px;
          }
        }
      `}</style>
      <nav aria-label="Breadcrumb">
        <ol className="breadcrumb-nav">
          <li>
            <a href="/" className="breadcrumb-link">
              Home
            </a>
          </li>
          <li className="breadcrumb-separator">/</li>
          <li>
            <a href="/products" className="breadcrumb-link">
              Products
            </a>
          </li>
          <li className="breadcrumb-separator">/</li>
          <li className="breadcrumb-current">{productHeader.title}</li>
        </ol>
      </nav>
    </>
  );
}
