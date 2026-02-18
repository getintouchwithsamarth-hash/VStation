import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';

export function Philosophy() {
  return (
    <Section paddingTop="48px" paddingBottom="64px" background="#FFFFFF">
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
      <ManifestoHero />
      <PrinciplesIntro />
    </div>
  );
}

function PageBody() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ResearchMethod />
      <QualityBar />
      <MaterialStandards />
      <TestingProcess />
      <SourcingApproach />
      <SustainabilityNote />
      <Faq />
      <ClosingCta />
    </div>
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
