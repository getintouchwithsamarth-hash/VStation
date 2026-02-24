import logo24 from "./Logo 24.svg";
import logo32 from "./Logo 32.svg";
import logo48 from "./Logo 48.svg";
import logo64 from "./Logo 64.svg";

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
  const logoSrc = {
    24: logo24,
    32: logo32,
    48: logo48,
    64: logo64,
  }[size];

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
          src={logoSrc}
          alt="Vibe Station Logo"
          style={{
            width: "100%",
            height: "100%",
            filter:
              variant === "light"
                ? "brightness(0) saturate(100%) invert(100%)"
                : "none",
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
