import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { ProductSearch } from "../features/products/components/ProductSearch";
import { ProductFilters } from "../features/products/components/ProductFilters";
import { ProductList } from "../features/products/components/ProductList";
import { CardInstance } from "../components/ui/Card";
import { BadgeInstance } from "../components/ui/Badge";
import { ButtonInstance } from "../components/ui/Button";

export function Products() {
  return (
    <Section paddingTop="48px" paddingBottom="64px" background="#FFFFFF">
      <Container>
        <PageHeader />
        <PageBody />
      </Container>
    </Section>
  );
}

function PageHeader() {
  return (
    <div style={{ marginBottom: "24px" }}>
      <TitleBlock />
      <SupportingCopy />
    </div>
  );
}

function PageBody() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <SearchRow />
      <FiltersRow />
      <ResultsHeader />
      <ProductGrid />
      <PaginationRow />
    </div>
  );
}

function TitleBlock() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      {/* Eyebrow */}
      <div
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: "12px",
          lineHeight: "18px",
          fontWeight: "400",
          color: "#98A2B3",
        }}
      >
        Curated gear
      </div>

      {/* Title */}
      <h1
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          color: "#101828",
          margin: 0,
        }}
      >
        Products
      </h1>
    </div>
  );
}

function SupportingCopy() {
  return (
    <div
      style={{
        fontFamily: "Inter, system-ui, sans-serif",
        fontSize: "18px",
        lineHeight: "28px",
        fontWeight: "400",
        color: "#667085",
        maxWidth: "640px",
        marginTop: "8px",
      }}
    >
      Best-in-class essentials chosen for durability, clarity, and real daily
      use.
    </div>
  );
}

function SearchRow() {
  return <ProductSearch />;
}

function FiltersRow() {
  return <ProductFilters />;
}

function ResultsHeader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Left - Results count */}
      <div
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          color: "#98A2B3",
        }}
      >
        Showing 12 results
      </div>

      {/* Right - Sort control */}
      <CardInstance variant="subtle" padding="sm" height="40px">
        <div
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "600",
            color: "#101828",
          }}
        >
          Sort: Recommended
        </div>
      </CardInstance>
    </div>
  );
}

function ProductGrid() {
  return <ProductList />;
}

function PaginationRow() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <ButtonInstance variant="ghost" size="sm" label="Prev" />
      <BadgeInstance label="1" variant="neutral" size="md" />
      <ButtonInstance variant="ghost" size="sm" label="2" />
      <ButtonInstance variant="ghost" size="sm" label="3" />
      <ButtonInstance variant="ghost" size="sm" label="Next" />
    </div>
  );
}
