import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { Stack } from "../components/layout/Stack";
import { ProductSearch } from "../features/products/components/ProductSearch";
import { ProductFilters } from "../features/products/components/ProductFilters";
import { ProductList } from "../features/products/components/ProductList";
import { ProductsPageHeader } from "../features/products/components/ProductsPageHeader";
import { ProductResultsHeader } from "../features/products/components/ProductResultsHeader";
import { ProductPagination } from "../features/products/components/ProductPagination";
import { useProductList } from "../features/products/hooks";
import { ProductsPageSkeleton } from "../components/ui/PageSkeleton";

export function Products() {
  const { isLoading } = useProductList();
  if (isLoading) {
    return <ProductsPageSkeleton />;
  }

  return (
    <Section paddingTop="48px" paddingBottom="64px" background="var(--background)">
      <Container>
        <PageHeader />
        <PageBody />
      </Container>
    </Section>
  );
}

function PageHeader() {
  return <ProductsPageHeader />;
}

function PageBody() {
  return (
    <Stack gap="16px">
      <ProductSearch />
      <ProductFilters />
      <ProductResultsHeader />
      <ProductList />
      <ProductPagination />
    </Stack>
  );
}
