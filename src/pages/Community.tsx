import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Stack } from '../components/layout/Stack';

export function Community() {
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
      <CommunityHero />
      <CommunityMetaSlot />
    </Stack>
  );
}

function PageBody() {
  return (
    <Stack gap="16px">
      <FeaturedStories />
      <CreatorSpotlight />
      <EventsAndDrops />
      <Resources />
      <JoinCommunityCta />
    </Stack>
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
