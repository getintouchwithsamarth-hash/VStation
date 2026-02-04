import { Header } from './Header';
import { Footer } from './Footer';

export function Shell() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ShellHeaderSlot />
      <ShellMainSlot />
      <ShellFooterSlot />
    </div>
  );
}

function ShellHeaderSlot() {
  return <Header />;
}

function ShellMainSlot() {
  return <Main />;
}

function ShellFooterSlot() {
  return <Footer />;
}

function Main() {
  return (
    <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      {/* Main content area */}
    </main>
  );
}