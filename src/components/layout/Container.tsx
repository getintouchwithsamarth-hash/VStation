export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '24px',
        paddingRight: '24px'
      }}
    >
      {children}
    </div>
  );
}