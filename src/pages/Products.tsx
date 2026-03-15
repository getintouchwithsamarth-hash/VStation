import { useEffect, useState } from "react";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { Stack } from "../components/layout/Stack";
import { ProductSearch } from "../features/products/components/ProductSearch";
import { ProductFilters } from "../features/products/components/ProductFilters";
import { ProductList } from "../features/products/components/ProductList";
import { ProductsPageHeader } from "../features/products/components/ProductsPageHeader";
import { ProductResultsHeader } from "../features/products/components/ProductResultsHeader";
import { useProductFilters, useProductList } from "../features/products/hooks";
import { ProductsPageSkeleton } from "../components/ui/PageSkeleton";
import { ALL_PRODUCTS_FILTER_ID } from "../features/products/utils/categoryFilters";

export function Products() {
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState(ALL_PRODUCTS_FILTER_ID);
  const [hasLoadedInitialResults, setHasLoadedInitialResults] = useState(false);
  const { products, isLoading } = useProductList(searchQuery);
  const { filters, resetLabel } = useProductFilters(products);

  const visibleProducts =
    activeFilter === ALL_PRODUCTS_FILTER_ID
      ? products
      : products.filter((product) => product.categoryIds.includes(activeFilter));

  useEffect(() => {
    if (!isLoading) {
      setHasLoadedInitialResults(true);
    }
  }, [isLoading]);

  useEffect(() => {
    if (!filters.some((filter) => filter.id === activeFilter)) {
      setActiveFilter(ALL_PRODUCTS_FILTER_ID);
    }
  }, [activeFilter, filters]);

  if (!hasLoadedInitialResults && isLoading) {
    return <ProductsPageSkeleton />;
  }

  return (
    <Section paddingTop="48px" paddingBottom="72px" background="var(--background)">
      <Container>
        <PageHeader />
        <PageBody
          searchInput={searchInput}
          onSearchInputChange={setSearchInput}
          onSearchSubmit={() => setSearchQuery(searchInput.trim())}
          isSearching={isLoading}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          filters={filters}
          resetLabel={resetLabel}
          resultCount={visibleProducts.length}
          products={visibleProducts}
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
  activeFilter,
  onFilterChange,
  filters,
  resetLabel,
  resultCount,
  products
}: {
  searchInput: string;
  onSearchInputChange: (value: string) => void;
  onSearchSubmit: () => void;
  isSearching: boolean;
  activeFilter: string;
  onFilterChange: (filterId: string) => void;
  filters: Parameters<typeof ProductFilters>[0]["filters"];
  resetLabel: string;
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
      <ProductFilters
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={onFilterChange}
        resetLabel={resetLabel}
      />
      <ProductResultsHeader resultCount={resultCount} />
      <ProductList products={products} />
    </Stack>
  );
}
