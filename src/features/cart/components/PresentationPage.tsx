import { Section } from '../../../components/layout/Section';
import { Container } from '../../../components/layout/Container';
import { CartItemsColumn } from './CartItemsColumn';
import { SummaryColumn } from './SummaryColumn';

export function PresentationPage() {
  return (
    <Section paddingTop="80px" paddingBottom="80px" background="var(--muted)">
      <Container>
        {/* 2-column layout */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            alignItems: 'flex-start'
          }}
        >
          {/* Left column ~65% */}
          <CartItemsColumn />
          
          {/* Right column ~35% */}
          <SummaryColumn />
        </div>
      </Container>
    </Section>
  );
}
