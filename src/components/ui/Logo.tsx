import bigLogo from "./Big Logo.svg";
import logoDark from "./Logo Dark.svg";

const LOGO_VERSION = "2026-03-10-1";

interface LogoProps {
  size?: 24 | 32 | 48 | 64;
  variant?: "dark" | "light";
  showText?: boolean;
  href?: string;
}

export function Logo({
  size = 32,
  variant = "dark",
  showText = true,
  href = "/",
}: LogoProps) {
  const logoSrc = variant === "light" ? logoDark : bigLogo;

  const textColor = variant === "dark" ? "#101828" : "#FFFFFF";

  const content = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        textDecoration: "none",
      }}
    >
      {/* Logo Icon */}
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={`${logoSrc}?v=${LOGO_VERSION}`}
          alt="Vibe Station Logo"
          width={size}
          height={size}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>

      {/* Logo Text */}
      {showText && (
        <div
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: size >= 48 ? "24px" : size >= 32 ? "20px" : "16px",
            lineHeight: size >= 48 ? "32px" : size >= 32 ? "28px" : "24px",
            fontWeight: "600",
            letterSpacing: "-0.02em",
            color: textColor,
          }}
        >
          VIBE STATION
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        style={{
          textDecoration: "none",
          display: "inline-flex",
          cursor: "pointer",
        }}
      >
        {content}
      </a>
    );
  }

  return content;
}
