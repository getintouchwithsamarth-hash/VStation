import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { NextSteps } from "../features/order/components/NextSteps";
import { OrderConfirmationHeader } from "../features/order/components/OrderConfirmationHeader";
import { OrderDetails } from "../features/order/components/OrderDetails";

export function OrderConfirmation() {
  return (
    <Section paddingTop="48px" paddingBottom="64px" background="#FFFFFF">
      <Container>
        <OrderConfirmationHeader />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "65% 35%",
            gap: "24px",
          }}
        >
          <OrderDetails />
          <NextSteps />
        </div>
      </Container>
    </Section>
  );
}
