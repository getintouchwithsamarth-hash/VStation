import { BadgeInstance } from '../../../components/ui/Badge';
import { Cluster } from '../../../components/layout/Cluster';
import { Container } from '../../../components/layout/Container';
import { Section } from '../../../components/layout/Section';
import { useHomeMockData } from '../hooks/useHomeMockData';

export function HeroMetaSlot() {
  const { heroMetaBadges } = useHomeMockData();

  return (
    <Section contain={false} paddingTop="24px" paddingBottom="24px" background="var(--card)">
      <Container width="wide">
        <Cluster wrap="on" gap={12} align="center">
          {heroMetaBadges.map((badge) => (
            <BadgeInstance key={badge} label={badge} variant="neutral" size="md" />
          ))}
        </Cluster>
      </Container>
    </Section>
  );
}
