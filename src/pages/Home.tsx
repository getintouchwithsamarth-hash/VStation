import { Hero } from '../features/home/components/Hero';
import { HeroMetaSlot } from '../features/home/components/HeroMetaSlot';
import { FeaturedDrop } from '../features/home/components/FeaturedDrop';
import { WhyItMatters } from '../features/home/components/WhyItMatters';
import { CraftAndDurability } from '../features/home/components/CraftAndDurability';
import { FeatureHighlights } from '../features/home/components/FeatureHighlights';
import { UseCases } from '../features/home/components/UseCases';
import { SocialProof } from '../features/home/components/SocialProof';
import { CommunityTeaser } from '../features/home/components/CommunityTeaser';
import { FaqPreview } from '../features/home/components/FaqPreview';
import { ClosingCta } from '../features/home/components/ClosingCta';

export function Home() {
  return (
    <>
      <PageHeader />
      <PageBody />
    </>
  );
}

function PageHeader() {
  return (
    <>
      <Hero />
      <HeroMetaSlot />
    </>
  );
}

function PageBody() {
  return (
    <>
      <FeaturedDrop />
      <WhyItMatters />
      <CraftAndDurability />
      <FeatureHighlights />
      <UseCases />
      <SocialProof />
      <CommunityTeaser />
      <FaqPreview />
      <ClosingCta />
    </>
  );
}
