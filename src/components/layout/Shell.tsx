import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Stack } from './Stack';

type ShellProps = {
  children?: ReactNode;
};

export function Shell({ children }: ShellProps) {
  return (
    <Stack gap="0px" style={{ minHeight: '100vh' }}>
      <ShellHeaderSlot />
      <ShellMainSlot>{children}</ShellMainSlot>
      <ShellFooterSlot />
    </Stack>
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
    <main style={{ flex: 1 }}>
      <Stack gap="0px" style={{ height: '100%' }}>{children}</Stack>
    </main>
  );
}
