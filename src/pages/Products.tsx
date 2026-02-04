import { ProductSearch } from "@features/products/components/ProductSearch";
import { ProductFilters } from "@features/products/components/ProductFilters";
import { ProductList } from "@features/products/components/ProductList";

export function Products() {
  return (
    <>
      <PageHeader />
      <PageBody />
    </>
  );
}

function PageHeader() {
  return (
    <>
      <TitleBlock />
      <SupportingCopy />
    </>
  );
}

function PageBody() {
  return (
    <>
      <SearchRow />
      <FiltersRow />
      <ResultsHeader />
      <ProductGrid />
      <PaginationRow />
    </>
  );
}

function TitleBlock() {
  return null;
}

function SupportingCopy() {
  return null;
}

function SearchRow() {
  return <ProductSearch />;
}

function FiltersRow() {
  return <ProductFilters />;
}

function ResultsHeader() {
  return null;
}

function ProductGrid() {
  return <ProductList />;
}

function PaginationRow() {
  return null;
}
