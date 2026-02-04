import { ShoppingCart } from "@features/cart/components/ShoppingCart";

export function ProductDetail() {
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
      <BreadcrumbRow />
      <ProductTitleBlock />
    </>
  );
}

function PageBody() {
  return (
    <>
      <ProductMain />
      <KeyBenefits />
      <FeatureDeepDive />
      <SpecsAndInBox />
      <DeliveryAndReturns />
      <Reviews />
      <RelatedProducts />
      <StickyCtaRail />
    </>
  );
}

function BreadcrumbRow() {
  return null;
}

function ProductTitleBlock() {
  return null;
}

function ProductMain() {
  return null;
}

function KeyBenefits() {
  return null;
}

function FeatureDeepDive() {
  return null;
}

function SpecsAndInBox() {
  return null;
}

function DeliveryAndReturns() {
  return null;
}

function Reviews() {
  return null;
}

function RelatedProducts() {
  return null;
}

function StickyCtaRail() {
  return <ShoppingCart />;
}
