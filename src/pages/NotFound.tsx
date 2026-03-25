import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Stack } from '../components/layout/Stack';

export function NotFound() {
  return (
    <Section paddingTop="64px" paddingBottom="80px" background="var(--card)">
      <Container>
        <PageHeader />
        <PageBody />
      </Container>
    </Section>
  );
}

function PageHeader() {
  return (
    <Stack gap="0px" style={{ marginBottom: '24px' }}>
      <ErrorTitleBlock />
    </Stack>
  );
}

function PageBody() {
  return (
    <Stack gap="16px">
      <HelpfulLinks />
      <SearchCta />
      <BackToHomeCta />
    </Stack>
  );
}

function ErrorTitleBlock() {
  return (
    <header>
      <h1
        style={{
          margin: 0,
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          lineHeight: 1.1,
          color: 'var(--text-primary)'
        }}
      >
        Page not found
      </h1>
      <p
        style={{
          margin: '12px 0 0',
          maxWidth: '52ch',
          color: 'var(--text-secondary)'
        }}
      >
        The page you requested is not available in the current storefront route set.
      </p>
    </header>
  );
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
