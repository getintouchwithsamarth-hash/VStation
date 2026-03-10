import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Stack } from '../layout/Stack';
import { Skeleton } from './Skeleton';

export function HomePageSkeleton() {
  return (
    <Stack gap="0px">
      <Section paddingTop="56px" paddingBottom="48px" background="var(--background)">
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '48px' }}>
            <Stack gap="16px">
              <Skeleton width="140px" height="14px" />
              <Skeleton width="88%" height="56px" borderRadius="12px" />
              <Skeleton width="92%" height="24px" />
              <Skeleton width="80%" height="24px" />
              <div style={{ display: 'flex', gap: '12px' }}>
                <Skeleton width="136px" height="44px" borderRadius="12px" />
                <Skeleton width="136px" height="44px" borderRadius="12px" />
              </div>
            </Stack>
            <Skeleton width="100%" height="420px" borderRadius="16px" />
          </div>
        </Container>
      </Section>
      <Section paddingTop="48px" paddingBottom="56px" background="var(--background)">
        <Container>
          <Stack gap="16px">
            <Skeleton width="180px" height="18px" />
            <Skeleton width="56%" height="32px" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {[1, 2, 3].map((item) => (
                <Skeleton key={item} height="240px" borderRadius="16px" />
              ))}
            </div>
          </Stack>
        </Container>
      </Section>
    </Stack>
  );
}

export function ProductsPageSkeleton() {
  return (
    <Section paddingTop="48px" paddingBottom="64px" background="var(--background)">
      <Container>
        <Stack gap="16px">
          <Skeleton width="96px" height="14px" />
          <Skeleton width="180px" height="40px" />
          <Skeleton width="420px" height="24px" />
          <Skeleton width="100%" height="44px" borderRadius="12px" />
          <div style={{ display: 'flex', gap: '12px' }}>
            {[1, 2, 3, 4].map((item) => (
              <Skeleton key={item} width="112px" height="36px" borderRadius="999px" />
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Skeleton key={item} height="460px" borderRadius="16px" />
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}

export function ProductDetailPageSkeleton() {
  return (
    <Stack gap="0px">
      <Section paddingTop="24px" paddingBottom="16px" background="var(--card)">
        <Container>
          <Skeleton width="280px" height="16px" />
        </Container>
      </Section>
      <Section paddingTop="16px" paddingBottom="32px" background="var(--card)">
        <Container>
          <Stack gap="12px">
            <Skeleton width="120px" height="14px" />
            <Skeleton width="52%" height="36px" />
            <Skeleton width="72%" height="22px" />
          </Stack>
        </Container>
      </Section>
      <Section paddingTop="24px" paddingBottom="48px" background="var(--background)">
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: '48px' }}>
            <Skeleton width="100%" height="560px" borderRadius="16px" />
            <Skeleton width="100%" height="560px" borderRadius="16px" />
          </div>
        </Container>
      </Section>
      <Section paddingTop="48px" paddingBottom="56px" background="var(--card)">
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {[1, 2, 3].map((item) => (
              <Skeleton key={item} height="220px" borderRadius="16px" />
            ))}
          </div>
        </Container>
      </Section>
    </Stack>
  );
}

export function CartPageSkeleton() {
  return (
    <Section paddingTop="80px" paddingBottom="80px" background="var(--muted)">
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '24px', alignItems: 'start' }}>
          <Stack gap="20px">
            <Skeleton width="180px" height="38px" />
            {[1, 2].map((item) => (
              <Skeleton key={item} width="100%" height="164px" borderRadius="16px" />
            ))}
            <Skeleton width="100%" height="300px" borderRadius="16px" />
          </Stack>
          <Stack gap="12px">
            <Skeleton width="100%" height="260px" borderRadius="16px" />
            <Skeleton width="100%" height="48px" borderRadius="12px" />
            <Skeleton width="100%" height="48px" borderRadius="12px" />
          </Stack>
        </div>
      </Container>
    </Section>
  );
}
