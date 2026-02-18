import { BreadcrumbRow } from '../features/product_details/components/BreadcrumbRow';
import { ProductTitleBlock } from '../features/product_details/components/ProductTitleBlock';
import { ProductMain } from '../features/product_details/components/ProductMain';
import { KeyBenefits } from '../features/product_details/components/KeyBenefits';
import { FeatureDeepDive } from '../features/product_details/components/FeatureDeepDive';
import { SpecsAndInBox } from '../features/product_details/components/SpecsAndInBox';
import { DeliveryAndReturns } from '../features/product_details/components/DeliveryAndReturns';
import { Reviews } from '../features/product_details/components/Reviews';
import { RelatedProducts } from '../features/product_details/components/RelatedProducts';
import { StickyCtaRail } from '../features/product_details/components/StickyCtaRail';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';

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
      <Section paddingTop="24px" paddingBottom="16px" background="#FCFCFD">
        <Container>
          <BreadcrumbRow />
        </Container>
      </Section>
      <Section paddingTop="16px" paddingBottom="32px" background="#FCFCFD">
        <Container>
          <ProductTitleBlock />
        </Container>
      </Section>
    </>
  );
}

function PageBody() {
  return (
    <>
      <Section paddingTop="24px" paddingBottom="48px" background="#FFFFFF">
        <Container>
          <ProductMain />
        </Container>
      </Section>
      <Section paddingTop="48px" paddingBottom="48px" background="#FCFCFD">
        <Container>
          <KeyBenefits />
        </Container>
      </Section>
      <Section paddingTop="48px" paddingBottom="48px" background="#FFFFFF">
        <Container>
          <FeatureDeepDive />
        </Container>
      </Section>
      <Section paddingTop="48px" paddingBottom="48px" background="#FCFCFD">
        <Container>
          <SpecsAndInBox />
        </Container>
      </Section>
      <Section paddingTop="48px" paddingBottom="48px" background="#FFFFFF">
        <Container>
          <DeliveryAndReturns />
        </Container>
      </Section>
      <Section paddingTop="48px" paddingBottom="48px" background="#FCFCFD">
        <Container>
          <Reviews />
        </Container>
      </Section>
      <Section paddingTop="48px" paddingBottom="56px" background="#FFFFFF">
        <Container>
          <RelatedProducts />
        </Container>
      </Section>
      <Section paddingTop="0px" paddingBottom="56px" background="#FFFFFF">
        <Container>
          <StickyCtaRail />
        </Container>
      </Section>
    </>
  );
}
