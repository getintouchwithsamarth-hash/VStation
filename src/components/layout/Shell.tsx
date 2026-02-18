import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

type ShellProps = {
  children?: ReactNode;
};

export function Shell({ children }: ShellProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ShellHeaderSlot />
      <ShellMainSlot>{children}</ShellMainSlot>
      <ShellFooterSlot />
    </div>
  );
}

function ShellHeaderSlot() {
  return <Header />;
}

function ShellMainSlot({ children }: ShellProps) {
  return <Main>{children}</Main>;
}

function ShellFooterSlot() {
  return <Footer />;
}

function Main({ children }: ShellProps) {
  return (
    <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      {children}
    </main>
  );
}
