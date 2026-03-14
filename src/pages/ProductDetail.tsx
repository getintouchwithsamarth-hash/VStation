import { BreadcrumbRow } from '../features/product_details/components/BreadcrumbRow';
import { ProductTitleBlock } from '../features/product_details/components/ProductTitleBlock';
import { ProductMain } from '../features/product_details/components/ProductMain';
import { KeyBenefits } from '../features/product_details/components/KeyBenefits';
import { FeatureDeepDive } from '../features/product_details/components/FeatureDeepDive';
import { SpecsAndInBox } from '../features/product_details/components/SpecsAndInBox';
import { DeliveryAndReturns } from '../features/product_details/components/DeliveryAndReturns';
import { Reviews } from '../features/product_details/components/Reviews';
import { Faq } from '../features/product_details/components/Faq';
import { RelatedProducts } from '../features/product_details/components/RelatedProducts';
import { StickyCtaRail } from '../features/product_details/components/StickyCtaRail';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Stack } from '../components/layout/Stack';
import { useProductDetailMockData } from '../features/product_details/hooks/useProductDetailMockData';
import { ProductDetailPageSkeleton } from '../components/ui/PageSkeleton';

export function ProductDetail() {
  const { isLoading } = useProductDetailMockData();
  if (isLoading) {
    return <ProductDetailPageSkeleton />;
  }

  return (
    <>
      <PageHeader />
      <PageBody />
    </>
  );
}

function PageHeader() {
  return (
    <Stack gap="0px">
      <Section paddingTop="24px" paddingBottom="16px" background="var(--card)">
        <Container>
          <BreadcrumbRow />
        </Container>
      </Section>
      <Section paddingTop="16px" paddingBottom="32px" background="var(--card)">
        <Container>
          <ProductTitleBlock />
        </Container>
      </Section>
    </Stack>
  );
}

function PageBody() {
  return (
    <Stack gap="0px">
      <Section paddingTop="24px" paddingBottom="48px" background="var(--background)">
        <Container>
          <ProductMain />
        </Container>
      </Section>
      <Section paddingTop="48px" paddingBottom="48px" background="var(--card)">
        <Container>
          <KeyBenefits />
        </Container>
      </Section>
      <Section paddingTop="48px" paddingBottom="48px" background="var(--background)">
        <Container>
          <FeatureDeepDive />
        </Container>
      </Section>
      <Section paddingTop="48px" paddingBottom="48px" background="var(--card)">
        <Container>
          <SpecsAndInBox />
        </Container>
      </Section>
      <Section paddingTop="48px" paddingBottom="48px" background="var(--background)">
        <Container>
          <DeliveryAndReturns />
        </Container>
      </Section>
      <Section paddingTop="48px" paddingBottom="48px" background="var(--card)">
        <Container>
          <Reviews />
        </Container>
      </Section>
      <Section paddingTop="48px" paddingBottom="48px" background="var(--background)">
        <Container>
          <Faq />
        </Container>
      </Section>
      <Section paddingTop="48px" paddingBottom="56px" background="var(--background)">
        <Container>
          <RelatedProducts />
        </Container>
      </Section>
      <Section paddingTop="0px" paddingBottom="56px" background="var(--background)">
        <Container>
          <StickyCtaRail />
        </Container>
      </Section>
    </Stack>
  );
}
