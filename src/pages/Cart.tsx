import { PresentationPage } from "../features/cart/components/PresentationPage";
import { Stack } from "../components/layout/Stack";
import { useCartMockData } from "../features/cart/hooks/useCartMockData";
import { CartPageSkeleton } from "../components/ui/PageSkeleton";

export default function Cart() {
  const { isLoading } = useCartMockData();
  if (isLoading) {
    return <CartPageSkeleton />;
  }

  return (
    <Stack gap="0px">
      <PageHeader />
      <PageBody />
    </Stack>
  );
}

function PageHeader() {
  return null; // Cart doesn't need a hero header, just the section
}

function PageBody() {
  return <PresentationPage />;
}
