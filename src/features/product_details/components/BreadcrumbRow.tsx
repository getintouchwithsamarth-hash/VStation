import { useProductDetailMockData } from '../hooks/useProductDetailMockData';

export function BreadcrumbRow() {
  const { productHeader } = useProductDetailMockData();

  return (
    <nav aria-label="Breadcrumb">
      <ol
        style={{
          display: "flex",
          gap: "8px",
          listStyle: "none",
          padding: 0,
          margin: 0,
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          color: "var(--muted-foreground)",
        }}
      >
        <li>
          <a
            href="/"
            style={{
              color: "var(--muted-foreground)",
              textDecoration: "none",
            }}
          >
            Home
          </a>
        </li>
        <li style={{ color: "var(--border)" }}>/</li>
        <li>
          <a
            href="/products"
            style={{
              color: "var(--muted-foreground)",
              textDecoration: "none",
            }}
          >
            Products
          </a>
        </li>
        <li style={{ color: "var(--border)" }}>/</li>
        <li style={{ color: "var(--foreground)" }}>
          {productHeader.title}
        </li>
      </ol>
    </nav>
  );
}
