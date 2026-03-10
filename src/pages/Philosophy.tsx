import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Stack } from '../components/layout/Stack';

export function Philosophy() {
  return (
    <Section paddingTop="48px" paddingBottom="64px" background="var(--background)">
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
      <ManifestoHero />
      <PrinciplesIntro />
    </Stack>
  );
}

function PageBody() {
  return (
    <Stack gap="16px">
      <ResearchMethod />
      <QualityBar />
      <MaterialStandards />
      <TestingProcess />
      <SourcingApproach />
      <SustainabilityNote />
      <Faq />
      <ClosingCta />
    </Stack>
  );
}

function ManifestoHero() {
  return null;
}

function PrinciplesIntro() {
  return null;
}

function ResearchMethod() {
  return null;
}

function QualityBar() {
  return null;
}

function MaterialStandards() {
  return null;
}

function TestingProcess() {
  return null;
}

function SourcingApproach() {
  return null;
}

function SustainabilityNote() {
  return null;
}

function Faq() {
  return null;
}

function ClosingCta() {
  return null;
}
