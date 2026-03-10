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
