import type { CSSProperties, ReactNode } from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Stack } from '../layout/Stack';

type LegalBlock =
  | { type: 'paragraph'; content: ReactNode }
  | { type: 'subheading'; content: ReactNode }
  | { type: 'list'; items: ReactNode[] };

export type LegalSection = {
  title: string;
  blocks: LegalBlock[];
};

export function LegalDocument({
  title,
  lastUpdated,
  intro = [],
  sections
}: {
  title: string;
  lastUpdated: string;
  intro?: ReactNode[];
  sections: LegalSection[];
}) {
  return (
    <Section paddingTop="48px" paddingBottom="64px" background="var(--background)">
      <Container>
        <Stack gap="24px">
          <header>
            <h1 style={titleStyle}>{title}</h1>
            <p style={lastUpdatedStyle}>Last updated: {lastUpdated}</p>
          </header>

          {intro.map((content, index) => (
            <p key={index} style={paragraphStyle}>
              {content}
            </p>
          ))}

          {sections.map((section) => (
            <section key={section.title}>
              <h2 style={sectionTitleStyle}>{section.title}</h2>
              <Stack gap="14px">
                {section.blocks.map((block, index) => {
                  if (block.type === 'subheading') {
                    return (
                      <h3 key={index} style={subheadingStyle}>
                        {block.content}
                      </h3>
                    );
                  }

                  if (block.type === 'list') {
                    return (
                      <ul key={index} style={listStyle}>
                        {block.items.map((item, itemIndex) => (
                          <li key={itemIndex} style={listItemStyle}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  return (
                    <p key={index} style={paragraphStyle}>
                      {block.content}
                    </p>
                  );
                })}
              </Stack>
            </section>
          ))}
        </Stack>
      </Container>
    </Section>
  );
}

export const legalLinkStyle: CSSProperties = {
  color: 'var(--primary)',
  textDecoration: 'none',
  fontWeight: 600
};

const titleStyle: CSSProperties = {
  margin: 0,
  color: 'var(--foreground)',
  fontSize: '36px',
  lineHeight: '44px',
  fontWeight: 700
};

const lastUpdatedStyle: CSSProperties = {
  marginTop: '8px',
  marginBottom: 0,
  color: 'var(--muted-foreground)',
  fontSize: '14px',
  lineHeight: '20px'
};

const sectionTitleStyle: CSSProperties = {
  marginTop: 0,
  marginBottom: '10px',
  color: 'var(--foreground)',
  fontSize: '20px',
  lineHeight: '30px',
  fontWeight: 600
};

const subheadingStyle: CSSProperties = {
  margin: 0,
  color: 'var(--foreground)',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 600
};

const paragraphStyle: CSSProperties = {
  margin: 0,
  color: 'var(--muted-foreground)',
  fontSize: '16px',
  lineHeight: '24px'
};

const listStyle: CSSProperties = {
  margin: 0,
  paddingLeft: '20px',
  color: 'var(--muted-foreground)',
  display: 'grid',
  gap: '8px'
};

const listItemStyle: CSSProperties = {
  fontSize: '16px',
  lineHeight: '24px'
};
