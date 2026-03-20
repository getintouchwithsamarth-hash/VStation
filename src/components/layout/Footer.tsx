import { Container } from "./Container";
import { Stack } from "./Stack";
import { Logo } from "../ui/Logo";
import { useTheme } from "next-themes";

export function Footer() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <>
      <style>{`
        .footer-container {
          background-color: var(--card);
          border-top: 1px solid var(--border);
          padding-top: 32px;
          padding-bottom: 24px;
        }

        .footer-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 32px;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .footer-social {
          display: flex;
          gap: 16px;
        }

        .footer-social-btn {
          height: 36px;
          padding-left: 12px;
          padding-right: 12px;
          border-radius: 10px;
          background-color: transparent;
          color: var(--foreground);
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          border: none;
          display: inline-flex;
          align-items: center;
          cursor: pointer;
          transition: background-color 0.15s ease;
        }

        .footer-social-btn:hover {
          background-color: var(--accent);
        }

        /* Tablet breakpoint */
        @media (max-width: 1024px) {
          .footer-container {
            padding-top: 28px;
            padding-bottom: 20px;
          }

          .footer-top {
            gap: 24px;
          }

          .footer-social {
            gap: 12px;
          }
        }

        /* Mobile breakpoint */
        @media (max-width: 640px) {
          .footer-container {
            padding-top: 24px;
            padding-bottom: 16px;
          }

          .footer-top {
            flex-direction: column;
            gap: 32px;
          }

          .footer-bottom {
            flex-direction: column-reverse;
            gap: 24px;
            align-items: flex-start;
          }

          .footer-social {
            flex-direction: column;
            width: 100%;
            gap: 12px;
          }

          .footer-social-btn {
            width: 100%;
            justify-content: center;
            height: 44px;
            font-size: 16px;
            line-height: 24px;
          }
        }
      `}</style>
      <footer className="footer-container">
        <Container>
          <Stack gap="24px">
            <div className="footer-top">
              <FooterNavSlot />
              <FooterTrustSlot />
            </div>
            <div className="footer-bottom">
              <FooterLegalSlot isDark={isDark} />
              <FooterSocialSlot />
            </div>
          </Stack>
        </Container>
      </footer>
    </>
  );
}

function FooterNavSlot() {
  return (
    <Stack gap="10px">
      <div
        style={{
          fontSize: "12px",
          lineHeight: "18px",
          fontWeight: "600",
          color: "var(--muted-foreground)",
        }}
      >
        Explore
      </div>
      <Stack gap="10px">
        <a
          href="#products"
          style={{
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "500",
            color: "var(--foreground)",
            textDecoration: "none",
          }}
        >
          Products
        </a>
        <a
          href="#philosophy"
          style={{
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "500",
            color: "var(--foreground)",
            textDecoration: "none",
          }}
        >
          Philosophy
        </a>
        <a
          href="#community"
          style={{
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "500",
            color: "var(--foreground)",
            textDecoration: "none",
          }}
        >
          Community
        </a>
        <a
          href="/privacy"
          style={{
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "500",
            color: "var(--foreground)",
            textDecoration: "none",
          }}
        >
          Privacy Policy
        </a>
      </Stack>
    </Stack>
  );
}

function FooterTrustSlot() {
  return (
    <Stack gap="10px">
      <div
        style={{
          fontSize: "12px",
          lineHeight: "18px",
          fontWeight: "600",
          color: "var(--muted-foreground)",
        }}
      >
        Standards
      </div>
      <Stack gap="10px">
        <div
          style={{
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "500",
            color: "var(--foreground)",
          }}
        >
          Curated for durability
        </div>
        <div
          style={{
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "500",
            color: "var(--foreground)",
          }}
        >
          Reliable support
        </div>
        <div
          style={{
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "500",
            color: "var(--foreground)",
          }}
        >
          Clear policies
        </div>
      </Stack>
    </Stack>
  );
}

function FooterLegalSlot({ isDark }: { isDark: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <Logo
        size={24}
        variant={isDark ? "light" : "dark"}
        showText={false}
        href="/"
      />
      <div
        style={{
          fontSize: "14px",
          lineHeight: "20px",
          color: "var(--muted-foreground)",
        }}
      >
        © VIBE STATION
      </div>
    </div>
  );
}

function FooterSocialSlot() {
  return (
    <div className="footer-social">
      <button className="footer-social-btn">Instagram</button>
      <button className="footer-social-btn">YouTube</button>
      <button className="footer-social-btn">Email</button>
    </div>
  );
}
