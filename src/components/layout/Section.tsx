export function Section({ 
  children, 
  paddingTop = '40px', 
  paddingBottom = '40px',
  background = '#FFFFFF'
}: { 
  children: React.ReactNode;
  paddingTop?: string;
  paddingBottom?: string;
  background?: string;
}) {
  return (
    <section
      style={{
        paddingTop,
        paddingBottom,
        backgroundColor: background
      }}
    >
      {children}
    </section>
  );
}