import { CardInstance } from '../../../components/ui/Card';
import { BadgeInstance } from '../../../components/ui/Badge';
import { ButtonInstance } from '../../../components/ui/Button';

export function Reviews() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px'
      }}
    >
      {/* Section header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          textAlign: 'center'
        }}
      >
        <h3
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            color: '#101828',
            margin: 0
          }}
        >
          Reviews
        </h3>
        <div
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '400',
            color: '#667085'
          }}
        >
          Focused on daily use, clarity, and durability.
        </div>
      </div>

      {/* Badge and button row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <BadgeInstance label="— avg" variant="neutral" size="md" />
        <ButtonInstance variant="secondary" size="sm" label="Write a review" />
      </div>

      {/* Review cards stack */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}
      >
        {/* Review card 1 */}
        <CardInstance
          variant="elevated"
          padding="md"
          height="170px"
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              height: '100%'
            }}
          >
            {/* Top row - Name/role and verified badge */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <div
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontWeight: '600',
                    color: '#101828'
                  }}
                >
                  Arjun S.
                </div>
                <div
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '12px',
                    lineHeight: '18px',
                    fontWeight: '400',
                    color: '#98A2B3'
                  }}
                >
                  Professional guitarist
                </div>
              </div>
              <BadgeInstance label="Verified" variant="neutral" size="sm" />
            </div>

            {/* Main quote */}
            <div
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '16px',
                lineHeight: '24px',
                fontWeight: '400',
                color: '#667085',
                flex: 1
              }}
            >
              Fast and stable. Doesn't drift even after long practice sessions.
            </div>

            {/* Bottom row - Use case */}
            <div
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '12px',
                lineHeight: '18px',
                fontWeight: '400',
                color: '#98A2B3'
              }}
            >
              Use case: Practice
            </div>
          </div>
        </CardInstance>

        {/* Review card 2 */}
        <CardInstance
          variant="elevated"
          padding="md"
          height="170px"
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              height: '100%'
            }}
          >
            {/* Top row - Name/role and verified badge */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <div
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontWeight: '600',
                    color: '#101828'
                  }}
                >
                  Priya M.
                </div>
                <div
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '12px',
                    lineHeight: '18px',
                    fontWeight: '400',
                    color: '#98A2B3'
                  }}
                >
                  Violin instructor
                </div>
              </div>
              <BadgeInstance label="Verified" variant="neutral" size="sm" />
            </div>

            {/* Main quote */}
            <div
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '16px',
                lineHeight: '24px',
                fontWeight: '400',
                color: '#667085',
                flex: 1
              }}
            >
              Display is super clear under bright light. Easy to use on stage.
            </div>

            {/* Bottom row - Use case */}
            <div
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '12px',
                lineHeight: '18px',
                fontWeight: '400',
                color: '#98A2B3'
              }}
            >
              Use case: Studio
            </div>
          </div>
        </CardInstance>

        {/* Review card 3 */}
        <CardInstance
          variant="elevated"
          padding="md"
          height="170px"
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              height: '100%'
            }}
          >
            {/* Top row - Name/role and verified badge */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <div
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontWeight: '600',
                    color: '#101828'
                  }}
                >
                  Ravi K.
                </div>
                <div
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '12px',
                    lineHeight: '18px',
                    fontWeight: '400',
                    color: '#98A2B3'
                  }}
                >
                  Bass player
                </div>
              </div>
              <BadgeInstance label="Verified" variant="neutral" size="sm" />
            </div>

            {/* Main quote */}
            <div
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '16px',
                lineHeight: '24px',
                fontWeight: '400',
                color: '#667085',
                flex: 1
              }}
            >
              Feels durable. The clamp hasn't loosened and it holds firmly.
            </div>

            {/* Bottom row - Use case */}
            <div
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '12px',
                lineHeight: '18px',
                fontWeight: '400',
                color: '#98A2B3'
              }}
            >
              Use case: Live
            </div>
          </div>
        </CardInstance>
      </div>

      {/* Load more button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4px' }}>
        <ButtonInstance variant="ghost" size="md" label="Load more" />
      </div>
    </div>
  );
}