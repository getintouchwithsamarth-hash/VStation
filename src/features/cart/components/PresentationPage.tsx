import { Section } from '../../../components/layout/Section';
import { Container } from '../../../components/layout/Container';
import { CartItemsColumn } from './CartItemsColumn';
import { SummaryColumn } from './SummaryColumn';

export function PresentationPage() {
  return (
    <Section paddingTop="80px" paddingBottom="80px" background="var(--muted)">
      <style>{`
        .cart-page__layout {
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }

        @media (max-width: 960px) {
          .cart-page__layout {
            flex-direction: column;
          }
        }
      `}</style>
      <Container>
        <div className="cart-page__layout">
          {/* Left column ~65% */}
          <CartItemsColumn />
          
          {/* Right column ~35% */}
          <SummaryColumn />
        </div>
      </Container>
    </Section>
  );
}
