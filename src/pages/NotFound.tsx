import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';

export function NotFound() {
  return (
    <Section paddingTop="64px" paddingBottom="80px" background="#FCFCFD">
      <Container>
        <PageHeader />
        <PageBody />
      </Container>
    </Section>
  );
}

function PageHeader() {
  return (
    <div style={{ marginBottom: '24px' }}>
      <ErrorTitleBlock />
    </div>
  );
}

function PageBody() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <HelpfulLinks />
      <SearchCta />
      <BackToHomeCta />
    </div>
  );
}

function ErrorTitleBlock() {
  return null;
}

function HelpfulLinks() {
  return null;
}

function SearchCta() {
  return null;
}

function BackToHomeCta() {
  return null;
}
