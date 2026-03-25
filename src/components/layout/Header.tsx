import { BadgeInstance } from "../ui/Badge";
import { ButtonInstance } from "../ui/Button";
import { Logo } from "../ui/Logo";
import { Container } from "./Container";
import { useAuth } from "../../features/account";
import { useCart } from "../../features/cart/CartContext";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const { customer, isAuthenticated } = useAuth();
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const accountLabel = isAuthenticated ? customer?.firstName || "Account" : "Sign in";
  const accountHref = isAuthenticated ? "/account" : "/account/login";

  return (
    <>
      <style>{`
        .header-container {
          height: 72px;
          background-color: var(--background);
          border-bottom: 1px solid var(--border);
        }

        .header-inner {
          height: 72px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .header-nav {
          display: flex;
          gap: 20px;
          flex: 1;
          justify-content: center;
        }

        .header-nav-link {
          color: var(--muted-foreground);
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.15s ease;
        }

        .header-nav-link:hover {
          color: var(--foreground);
        }

        .header-right {
          display: flex;
          gap: 16px;
        }

        .header-mobile-menu-btn {
          display: none;
        }

        .header-mobile-menu {
          display: none;
        }

        /* Tablet breakpoint */
        @media (max-width: 1024px) {
          .header-nav {
            gap: 16px;
          }

          .header-right {
            gap: 12px;
          }

          .theme-toggle-text {
            display: none;
          }
        }

        /* Mobile breakpoint */
        @media (max-width: 640px) {
          .header-container {
            height: 64px;
          }

          .header-inner {
            height: 64px;
            gap: 12px;
          }

          .header-nav {
            display: none;
          }

          .header-account-btn {
            display: none;
          }

          .header-mobile-menu-btn {
            display: inline-flex;
            height: 36px;
            width: 36px;
            padding: 0;
            border-radius: 10px;
            background-color: transparent;
            color: var(--foreground);
            border: 1px solid var(--border);
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }

          .header-mobile-menu {
            display: block;
            position: fixed;
            top: 64px;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: var(--background);
            z-index: 50;
            overflow-y: auto;
            padding: 24px;
            transform: translateX(100%);
            transition: transform 0.3s ease;
          }

          .header-mobile-menu.open {
            transform: translateX(0);
          }

          .header-mobile-nav {
            display: flex;
            flex-direction: column;
            gap: 24px;
          }

          .header-mobile-nav-link {
            color: var(--foreground);
            font-size: 18px;
            line-height: 28px;
            font-weight: 600;
            text-decoration: none;
            padding: 12px 0;
            border-bottom: 1px solid var(--border);
          }

          .header-mobile-actions {
            margin-top: 32px;
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .header-mobile-account-btn {
            height: 44px;
            padding: 0 16px;
            border-radius: 10px;
            background-color: transparent;
            color: var(--foreground);
            font-size: 16px;
            line-height: 24px;
            font-weight: 600;
            border: 1px solid var(--border);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
        }
      `}</style>
      <header className="header-container">
        <Container>
          <div className="header-inner">
            <HeaderLeftSlot isDark={isDark} />
            <HeaderCenterSlot />
            <HeaderRightSlot
              accountHref={accountHref}
              accountLabel={accountLabel}
              isDark={isDark}
              onToggleTheme={() => setTheme(isDark ? "light" : "dark")}
            />
            <button
              className="header-mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </Container>
        <div className={`header-mobile-menu${mobileMenuOpen ? " open" : ""}`}>
          <nav className="header-mobile-nav">
            <a
              href="/products"
              className="header-mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="/philosophy"
              className="header-mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Philosophy
            </a>
            <a
              href="/community"
              className="header-mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </a>
          </nav>
          <div className="header-mobile-actions">
            <a
              href={accountHref}
              className="header-mobile-account-btn"
              onClick={() => setMobileMenuOpen(false)}
              style={{ textDecoration: "none" }}
            >
              {accountLabel}
            </a>
            <button
              className="header-mobile-account-btn"
              onClick={() => setTheme(isDark ? "light" : "dark")}
            >
              {isDark ? (
                <Sun size={20} style={{ marginRight: "8px" }} />
              ) : (
                <Moon size={20} style={{ marginRight: "8px" }} />
              )}
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

function HeaderLeftSlot({ isDark }: { isDark: boolean }) {
  return <BrandMarkSlot isDark={isDark} />;
}

function HeaderCenterSlot() {
  return <PrimaryNavSlot />;
}

function HeaderRightSlot({
  accountHref,
  accountLabel,
  isDark,
  onToggleTheme,
}: {
  accountHref: string;
  accountLabel: string;
  isDark: boolean;
  onToggleTheme: () => void;
}) {
  return (
    <div className="header-right">
      <ThemeToggleSlot isDark={isDark} onToggleTheme={onToggleTheme} />
      <AccountSlot href={accountHref} label={accountLabel} />
      <CartSlot />
    </div>
  );
}

function BrandMarkSlot({ isDark }: { isDark: boolean }) {
  return (
    <Logo size={32} variant={isDark ? "light" : "dark"} showText href="/" />
  );
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
      <span className="theme-toggle-text">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}

function PrimaryNavSlot() {
  return (
    <nav className="header-nav">
      <a href="/products" className="header-nav-link" data-testid="header-products-link">
        Products
      </a>
      <a href="/philosophy" className="header-nav-link" data-testid="header-philosophy-link">
        Philosophy
      </a>
      <a href="/community" className="header-nav-link" data-testid="header-community-link">
        Community
      </a>
    </nav>
  );
}

function AccountSlot({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      data-testid="header-account-link"
      className="header-account-btn"
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
        textDecoration: "none",
      }}
    >
      {label}
    </a>
  );
}

function CartSlot() {
  const { cartCount, openCartDrawer } = useCart();
  const handleCartClick = () => {
    const path = window.location.pathname.replace(/\/+$/, "") || "/";
    if (path === "/cart") {
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
        data-testid="cart-link"
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
