import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';

export function Community() {
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
      <CommunityHero />
      <CommunityMetaSlot />
    </div>
  );
}

function PageBody() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <FeaturedStories />
      <CreatorSpotlight />
      <EventsAndDrops />
      <Resources />
      <JoinCommunityCta />
    </div>
  );
}

function CommunityHero() {
  return null;
}

function CommunityMetaSlot() {
  return null;
}

function FeaturedStories() {
  return null;
}

function CreatorSpotlight() {
  return null;
}

function EventsAndDrops() {
  return null;
}

function Resources() {
  return null;
}

function JoinCommunityCta() {
  return null;
}
