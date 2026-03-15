import { ProductTitleBlock } from "../features/product_details/components/ProductTitleBlock";
import { BreadcrumbRow } from "../features/product_details/components/BreadcrumbRow";
import { ProductMain } from "../features/product_details/components/ProductMain";
import { DeliveryAndReturns } from "../features/product_details/components/DeliveryAndReturns";
import { FeatureDeepDive } from "../features/product_details/components/FeatureDeepDive";
import { KeyBenefits } from "../features/product_details/components/KeyBenefits";
import { SpecsAndInBox } from "../features/product_details/components/SpecsAndInBox";
import { Reviews } from "../features/product_details/components/Reviews";
import { Faq } from "../features/product_details/components/Faq";
import { RelatedProducts } from "../features/product_details/components/RelatedProducts";
import { Container } from "../components/layout/Container";

export function ProductDetail() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* Hero Section - Title + Product Main combined */}
      <section
        style={{
          paddingTop: "24px",
          paddingBottom: "40px",
          backgroundColor: "var(--card)",
        }}
      >
        <Container>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            <BreadcrumbRow />
            <ProductTitleBlock />
            <ProductMain />
          </div>
        </Container>
      </section>

      {/* Info Grid - Delivery & Specs side by side */}
      <section
        style={{
          paddingTop: "40px",
          paddingBottom: "40px",
          backgroundColor: "var(--background)",
        }}
      >
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px",
            }}
          >
            <DeliveryAndReturns />
            <SpecsAndInBox />
          </div>
        </Container>
      </section>

      {/* Key Benefits */}
      <section
        style={{
          paddingTop: "40px",
          paddingBottom: "40px",
          backgroundColor: "var(--card)",
        }}
      >
        <Container>
          <KeyBenefits />
        </Container>
      </section>

      {/* Feature Deep Dive */}
      <section
        style={{
          paddingTop: "40px",
          paddingBottom: "40px",
          backgroundColor: "var(--background)",
        }}
      >
        <Container>
          <FeatureDeepDive />
        </Container>
      </section>

      {/* Reviews */}
      <section
        style={{
          paddingTop: "40px",
          paddingBottom: "40px",
          backgroundColor: "var(--card)",
        }}
      >
        <Container>
          <Reviews />
        </Container>
      </section>

      {/* FAQ */}
      <section
        style={{
          paddingTop: "40px",
          paddingBottom: "40px",
          backgroundColor: "var(--background)",
        }}
      >
        <Container>
          <Faq />
        </Container>
      </section>

      {/* Related Products */}
      <section
        style={{
          paddingTop: "40px",
          paddingBottom: "48px",
          backgroundColor: "var(--card)",
        }}
      >
        <Container>
          <RelatedProducts />
        </Container>
      </section>
    </div>
  );
}
