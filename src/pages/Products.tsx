import { useEffect, useState } from "react";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { Stack } from "../components/layout/Stack";
import { ProductSearch } from "../features/products/components/ProductSearch";
import { ProductFilters } from "../features/products/components/ProductFilters";
import { ProductList } from "../features/products/components/ProductList";
import { ProductsPageHeader } from "../features/products/components/ProductsPageHeader";
import { ProductResultsHeader } from "../features/products/components/ProductResultsHeader";
import { useProductList } from "../features/products/hooks";
import { ProductsPageSkeleton } from "../components/ui/PageSkeleton";

export function Products() {
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [hasLoadedInitialResults, setHasLoadedInitialResults] = useState(false);
  const { products, isLoading } = useProductList(searchQuery);

  useEffect(() => {
    if (!isLoading) {
      setHasLoadedInitialResults(true);
    }
  }, [isLoading]);

  if (!hasLoadedInitialResults && isLoading) {
    return <ProductsPageSkeleton />;
  }

  return (
    <Section paddingTop="48px" paddingBottom="64px" background="var(--background)">
      <Container>
        <PageHeader />
        <PageBody
          searchInput={searchInput}
          onSearchInputChange={setSearchInput}
          onSearchSubmit={() => setSearchQuery(searchInput.trim())}
          isSearching={isLoading}
          resultCount={products.length}
          products={products}
        />
      </Container>
    </Section>
  );
}

function PageHeader() {
  return <ProductsPageHeader />;
}

function PageBody({
  searchInput,
  onSearchInputChange,
  onSearchSubmit,
  isSearching,
  resultCount,
  products
}: {
  searchInput: string;
  onSearchInputChange: (value: string) => void;
  onSearchSubmit: () => void;
  isSearching: boolean;
  resultCount: number;
  products: Parameters<typeof ProductList>[0]["products"];
}) {
  return (
    <Stack gap="16px">
      <ProductSearch
        query={searchInput}
        onQueryChange={onSearchInputChange}
        onSearch={onSearchSubmit}
        isSearching={isSearching}
      />
      <ProductFilters />
      <ProductResultsHeader resultCount={resultCount} />
      <ProductList products={products} />
    </Stack>
  );
}
