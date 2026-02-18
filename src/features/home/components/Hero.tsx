export function Hero() {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        paddingTop: "56px",
        paddingBottom: "48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Quiet glow backdrop */}
      <div
        style={{
          position: "absolute",
          top: "-200px",
          right: "-200px",
          width: "600px",
          height: "600px",
          backgroundColor: "#4F46E50F",
          borderRadius: "50%",
          filter: "blur(120px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Content wrapper */}
      <div
        style={{
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* 2-column layout */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "64px",
            alignItems: "center",
          }}
        >
          {/* Left column */}
          <div style={{ flex: "0 0 55%" }}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {/* Eyebrow */}
              <div
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "12px",
                  lineHeight: "18px",
                  fontWeight: "500",
                  color: "#667085",
                }}
              >
                Curated essentials for musicians
              </div>

              {/* Headline */}
              <h1
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "48px",
                  lineHeight: "56px",
                  fontWeight: "600",
                  color: "#101828",
                  letterSpacing: "-0.01em",
                  margin: 0,
                }}
              >
                Gear that survives practice, travel, and stage.
              </h1>

              {/* Supporting copy */}
              <p
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "18px",
                  lineHeight: "28px",
                  fontWeight: "400",
                  color: "#344054",
                  maxWidth: "540px",
                  margin: 0,
                }}
              >
                We research what musicians actually need, then pick durable,
                best-in-class tools with modern features — so you buy once and
                keep playing.
              </p>

              {/* CTA row */}
              <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                <ButtonPrimary label="Shop products" />
                <ButtonSecondary label="Our philosophy" />
              </div>

              {/* Micro meta row */}
              <div
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: "400",
                  color: "#667085",
                  marginTop: "8px",
                }}
              >
                Fast delivery · Clear returns · Responsive support
              </div>
            </div>
          </div>

          {/* Right column */}
          <div style={{ flex: "0 0 45%", position: "relative" }}>
            {/* Main featured card */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #EAECF0",
                borderRadius: "16px",
                width: "480px",
                height: "420px",
                boxShadow: "0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F",
                overflow: "hidden",
              }}
            >
              {/* MediaSlot - product image placeholder */}
              <div
                style={{
                  backgroundColor: "#F2F4F7",
                  height: "280px",
                  width: "100%",
                }}
              />

              {/* BodySlot - content */}
              <div style={{ padding: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontSize: "12px",
                      lineHeight: "18px",
                      fontWeight: "500",
                      color: "#667085",
                    }}
                  >
                    Featured drop
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontSize: "22px",
                      lineHeight: "30px",
                      fontWeight: "600",
                      color: "#101828",
                    }}
                  >
                    Clip-on tuner, pro grade
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontSize: "14px",
                      lineHeight: "20px",
                      fontWeight: "400",
                      color: "#344054",
                    }}
                  >
                    Accurate, fast, stage-ready.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Button components
function ButtonPrimary({ label }: { label: string }) {
  return (
    <button
      style={{
        height: "44px",
        paddingLeft: "16px",
        paddingRight: "16px",
        borderRadius: "12px",
        backgroundColor: "#4338CA",
        color: "#FFFFFF",
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: "600",
        border: "none",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {label}
    </button>
  );
}

function ButtonSecondary({ label }: { label: string }) {
  return (
    <button
      style={{
        height: "44px",
        paddingLeft: "16px",
        paddingRight: "16px",
        borderRadius: "12px",
        backgroundColor: "#FFFFFF",
        color: "#101828",
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: "600",
        border: "1px solid #D0D5DD",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {label}
    </button>
  );
}
