import { BadgeInstance } from "../ui/Badge";
import { ButtonInstance } from "../ui/Button";
import { Logo } from "../ui/Logo";
import { Container } from "./Container";
import { useCart } from "../../features/cart/CartContext";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <header
      style={{
        height: "72px",
        backgroundColor: "var(--background)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <Container>
        <div
          style={{
            height: "72px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <HeaderLeftSlot isDark={isDark} />
          <HeaderCenterSlot />
          <HeaderRightSlot
            isDark={isDark}
            onToggleTheme={() => setTheme(isDark ? "light" : "dark")}
          />
        </div>
      </Container>
    </header>
  );
}

function HeaderLeftSlot({ isDark }: { isDark: boolean }) {
  return <BrandMarkSlot isDark={isDark} />;
}

function HeaderCenterSlot() {
  return <PrimaryNavSlot />;
}

function HeaderRightSlot({
  isDark,
  onToggleTheme,
}: {
  isDark: boolean;
  onToggleTheme: () => void;
}) {
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <ThemeToggleSlot isDark={isDark} onToggleTheme={onToggleTheme} />
      <AccountSlot />
      <CartSlot />
    </div>
  );
}

function BrandMarkSlot({ isDark }: { isDark: boolean }) {
  return <Logo size={32} variant={isDark ? "light" : "dark"} showText href="/" />;
}

function ThemeToggleSlot({
  isDark,
  onToggleTheme,
}: {
  isDark: boolean;
  onToggleTheme: () => void;
}) {
  return (
    <button
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={onToggleTheme}
      style={{
        height: "36px",
        paddingLeft: "12px",
        paddingRight: "12px",
        borderRadius: "10px",
        backgroundColor: "transparent",
        color: "var(--foreground)",
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: "600",
        border: "1px solid var(--border)",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer",
      }}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      {isDark ? "Light" : "Dark"}
    </button>
  );
}

function PrimaryNavSlot() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <a
        href="/products"
        style={{
          color: "var(--muted-foreground)",
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "600",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        Products
      </a>
      <a
        href="/philosophy"
        style={{
          color: "var(--muted-foreground)",
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "600",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        Philosophy
      </a>
      <a
        href="/community"
        style={{
          color: "var(--muted-foreground)",
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "600",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        Community
      </a>
    </nav>
  );
}

function AccountSlot() {
  return (
    <button
      style={{
        height: "36px",
        paddingLeft: "12px",
        paddingRight: "12px",
        borderRadius: "10px",
        backgroundColor: "transparent",
        color: "var(--foreground)",
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: "600",
        border: "none",
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      Account
    </button>
  );
}

function CartSlot() {
  const { cartCount, openCartDrawer } = useCart();
  const handleCartClick = () => {
    const path = window.location.pathname.replace(/\/+$/, '') || '/';
    if (path === '/cart') {
      return;
    }

    openCartDrawer();
  };

  return (
    <div style={{ position: "relative", display: "inline-flex" }}>
      <ButtonInstance
        label="Cart"
        variant="ghost"
        size="sm"
        onClick={handleCartClick}
      />
      <div
        style={{
          position: "absolute",
          top: "-6px",
          right: "-8px",
          pointerEvents: "none",
          opacity: 0.78,
        }}
      >
        <BadgeInstance label={String(cartCount)} variant="accent" size="sm" />
      </div>
    </div>
  );
}
