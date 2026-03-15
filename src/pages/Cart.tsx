import { PresentationPage } from "../features/cart/components/PresentationPage";
import { useCartMockData } from "../features/cart/hooks/useCartMockData";
import { CartPageSkeleton } from "../components/ui/PageSkeleton";

export default function Cart() {
  const { isLoading } = useCartMockData();
  if (isLoading) {
    return <CartPageSkeleton />;
  }

  return <PresentationPage />;
}
