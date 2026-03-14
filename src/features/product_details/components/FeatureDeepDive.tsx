import { CardInstance } from '../../../components/ui/Card';
import { BadgeInstance } from '../../../components/ui/Badge';
import { useProductDetailMockData } from '../hooks/useProductDetailMockData';

export function FeatureDeepDive() {
  const { featureDeepDive } = useProductDetailMockData();

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '24px'
      }}
    >
      <CardInstance variant="elevated" padding="lg">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <ContentBlock title={featureDeepDive.overviewTitle} html={featureDeepDive.overviewHtml} />
          <ContentBlock title={featureDeepDive.storyTitle} html={featureDeepDive.storyHtml} />
          <ContentBlock title={featureDeepDive.buyingGuideTitle} html={featureDeepDive.buyingGuideHtml} />
        </div>
      </CardInstance>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <CardInstance variant="subtle" padding="lg">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <BadgeInstance label="Best for" variant="neutral" size="sm" />
            <div
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '18px',
                lineHeight: '28px',
                fontWeight: '600',
                color: 'var(--foreground)'
              }}
            >
              {featureDeepDive.curatedFor}
            </div>
          </div>
        </CardInstance>

        <CardInstance variant="subtle" padding="lg">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <BadgeInstance label="Not ideal for" variant="neutral" size="sm" />
            <div
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '16px',
                lineHeight: '24px',
                fontWeight: '400',
                color: 'var(--muted-foreground)'
              }}
            >
              {featureDeepDive.notFor}
            </div>
          </div>
        </CardInstance>
      </div>
    </div>
  );
}

function ContentBlock({ title, html }: { title: string; html: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <h3
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          color: 'var(--foreground)',
          margin: 0
        }}
      >
        {title}
      </h3>
      <div
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '15px',
          lineHeight: '24px',
          color: 'var(--muted-foreground)'
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
