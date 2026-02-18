export function Modal() {
  return (
    <>
      <Anatomy />
      <Variants />
      <States />
      <Examples />
    </>
  );
}

function Anatomy() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "48px",
        padding: "40px",
      }}
    >
      <div>
        <h2 style={{ marginBottom: "8px" }}>Modal Anatomy</h2>
        <p style={{ color: "#667085", fontSize: "14px" }}>
          Component layers in render order
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        {/* Scrim */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <h4 style={{ margin: 0 }}>Scrim</h4>
          <div
            style={{
              width: "100%",
              height: "120px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "8px",
            }}
          />
          <div style={{ fontSize: "13px", color: "#667085" }}>
            Fill: overlay-scrim (rgba(0, 0, 0, 0.5))
          </div>
        </div>

        {/* Panel */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <h4 style={{ margin: 0 }}>Panel</h4>
          <div
            style={{
              width: "420px",
              height: "200px",
              backgroundColor: "#FFFFFF",
              borderRadius: "0",
              border: "1px solid #E5E7EB",
              borderRight: "none",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
          <div style={{ fontSize: "13px", color: "#667085" }}>
            Fill: surface-canvas (#FFFFFF) · Border left: 1px border-subtle ·
            Shadow / 3 · Radius: 0
          </div>
        </div>

        {/* HeaderSlot */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <h4 style={{ margin: 0 }}>HeaderSlot</h4>
          <div
            style={{
              width: "420px",
              padding: "24px",
              backgroundColor: "#FAFBFC",
              border: "1px dashed #D0D5DD",
              borderRadius: "8px",
            }}
          >
            <div style={{ fontSize: "14px", color: "#667085" }}>
              Header content area
            </div>
          </div>
        </div>

        {/* BodySlot */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <h4 style={{ margin: 0 }}>BodySlot</h4>
          <div
            style={{
              width: "420px",
              padding: "24px",
              backgroundColor: "#FAFBFC",
              border: "1px dashed #D0D5DD",
              borderRadius: "8px",
              minHeight: "200px",
            }}
          >
            <div style={{ fontSize: "14px", color: "#667085" }}>
              Body content area (scrollable)
            </div>
          </div>
        </div>

        {/* FooterSlot */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <h4 style={{ margin: 0 }}>FooterSlot</h4>
          <div
            style={{
              width: "420px",
              padding: "24px",
              backgroundColor: "#FAFBFC",
              border: "1px dashed #D0D5DD",
              borderRadius: "8px",
            }}
          >
            <div style={{ fontSize: "14px", color: "#667085" }}>
              Footer content area
            </div>
          </div>
        </div>

        {/* CloseSlot */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <h4 style={{ margin: 0 }}>CloseSlot</h4>
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#FAFBFC",
              border: "1px dashed #D0D5DD",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: "14px", color: "#667085" }}>×</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Variants() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "48px",
        padding: "40px",
        backgroundColor: "#FAFBFC",
      }}
    >
      <div>
        <h2 style={{ marginBottom: "8px" }}>Modal Variants</h2>
        <p style={{ color: "#667085", fontSize: "14px" }}>
          Center and DrawerRight layouts
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
        {/* Variant: Center */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ margin: 0 }}>Variant / Center</h3>
          <VariantCenter />
          <div style={{ fontSize: "13px", color: "#667085" }}>
            Width: 520px (max 92% mobile) · Centered · Radius: 20px · Shadow / 3
            · Padding: 20px · Gap: 16px
          </div>
        </div>

        {/* Variant: DrawerRight */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ margin: 0 }}>Variant / DrawerRight</h3>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "500px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {/* Drawer Panel */}
            <div
              style={{
                width: "420px",
                height: "100%",
                backgroundColor: "#FFFFFF",
                borderLeft: "1px solid #E5E7EB",
                boxShadow:
                  "-4px 0 6px -1px rgba(0, 0, 0, 0.1), -2px 0 4px -1px rgba(0, 0, 0, 0.06)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Header */}
              <div
                style={{
                  padding: "24px",
                  borderBottom: "1px solid #E5E7EB",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#111827",
                  }}
                >
                  Shopping Cart
                </div>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "6px",
                    backgroundColor: "#F9FAFB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  ×
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "24px", flex: 1, overflowY: "auto" }}>
                <div style={{ fontSize: "14px", color: "#667085" }}>
                  Cart items appear here
                </div>
              </div>

              {/* Footer */}
              <div
                style={{
                  padding: "24px",
                  borderTop: "1px solid #E5E7EB",
                  flexShrink: 0,
                }}
              >
                <button
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#4F46E5",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
          <div style={{ fontSize: "13px", color: "#667085" }}>
            Width: 420px · Height: 100vh · Border left: 1px · Shadow / 3 ·
            Radius: 0
          </div>
        </div>
      </div>
    </div>
  );
}

// =====================
// VARIANT CENTER COMPONENT
// =====================

function VariantCenter() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "500px",
        backgroundColor: "rgba(0, 0, 0, 0.4)", // overlay-scrim
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Centered Panel */}
      <div
        style={{
          width: "520px",
          maxWidth: "92%",
          backgroundColor: "#FFFFFF", // surface-canvas
          borderRadius: "20px",
          border: "1px solid #EAECF0", // border-subtle
          boxShadow: "0 12px 24px -4px #1018280F, 0 6px 12px -4px #10182814", // Shadow / 3
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          position: "relative",
        }}
      >
        {/* HeaderSlot */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            position: "relative",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#101828",
                lineHeight: "28px",
              }}
            >
              Checkout Confirmation
            </div>
            <div
              style={{
                fontSize: "14px",
                color: "#667085",
                lineHeight: "20px",
                marginTop: "4px",
              }}
            >
              Please review your order details
            </div>
          </div>

          {/* CloseSlot - aligned top-right */}
          <div style={{ position: "absolute", top: 0, right: 0 }}>
            <button
              style={{
                height: "36px",
                paddingLeft: "12px",
                paddingRight: "12px",
                borderRadius: "10px",
                backgroundColor: "transparent",
                color: "#101828",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: "600",
                border: "none",
                display: "inline-flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>

        {/* BodySlot */}
        <div
          style={{
            flex: 1,
            minHeight: "200px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div
            style={{ fontSize: "14px", color: "#344054", lineHeight: "20px" }}
          >
            Your order will be processed and shipped within 2-3 business days.
            You'll receive a confirmation email with tracking details.
          </div>

          <div
            style={{
              padding: "16px",
              backgroundColor: "#F9FAFB",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: "14px", color: "#667085" }}>
                Subtotal
              </span>
              <span
                style={{ fontSize: "14px", color: "#101828", fontWeight: 500 }}
              >
                ₹5,997
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: "14px", color: "#667085" }}>
                Shipping
              </span>
              <span
                style={{ fontSize: "14px", color: "#101828", fontWeight: 500 }}
              >
                ₹150
              </span>
            </div>
            <div
              style={{
                height: "1px",
                backgroundColor: "#EAECF0",
                margin: "4px 0",
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span
                style={{ fontSize: "16px", color: "#101828", fontWeight: 600 }}
              >
                Total
              </span>
              <span
                style={{ fontSize: "16px", color: "#101828", fontWeight: 600 }}
              >
                ₹6,147
              </span>
            </div>
          </div>
        </div>

        {/* FooterSlot */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px",
          }}
        >
          <button
            style={{
              height: "44px",
              paddingLeft: "16px",
              paddingRight: "16px",
              borderRadius: "12px",
              backgroundColor: "transparent",
              color: "#101828",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "600",
              border: "1px solid #D0D5DD",
              display: "inline-flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            Go back
          </button>
          <button
            style={{
              height: "44px",
              paddingLeft: "16px",
              paddingRight: "16px",
              borderRadius: "12px",
              gap: "10px",
              backgroundColor: "#4338CA",
              color: "#FFFFFF",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "600",
              border: "none",
              display: "inline-flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}

function States() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "48px",
        padding: "40px",
      }}
    >
      <div>
        <h2 style={{ marginBottom: "8px" }}>Modal States</h2>
        <p style={{ color: "#667085", fontSize: "14px" }}>
          Open state with scrim and panel visible
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        {/* State: Open (DrawerRight) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3 style={{ margin: 0 }}>State / Open</h3>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "400px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "stretch",
            }}
          >
            {/* Drawer Panel - Open */}
            <div
              style={{
                width: "420px",
                height: "100%",
                backgroundColor: "#FFFFFF",
                borderLeft: "1px solid #E5E7EB",
                boxShadow:
                  "-4px 0 6px -1px rgba(0, 0, 0, 0.1), -2px 0 4px -1px rgba(0, 0, 0, 0.06)",
                display: "flex",
                flexDirection: "column",
                animation: "slideInFromRight 0.3s ease-out",
              }}
            >
              <div
                style={{
                  padding: "24px",
                  borderBottom: "1px solid #E5E7EB",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#111827",
                  }}
                >
                  Cart (3 items)
                </div>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "6px",
                    backgroundColor: "#F9FAFB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontSize: "20px",
                    color: "#6B7280",
                  }}
                >
                  ×
                </div>
              </div>

              <div style={{ padding: "24px", flex: 1, overflowY: "auto" }}>
                <div style={{ fontSize: "14px", color: "#667085" }}>
                  Cart drawer content with scrim visible behind
                </div>
              </div>

              <div
                style={{
                  padding: "24px",
                  borderTop: "1px solid #E5E7EB",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                  }}
                >
                  <span style={{ fontSize: "14px", color: "#6B7280" }}>
                    Subtotal
                  </span>
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#111827",
                    }}
                  >
                    ₹5,997
                  </span>
                </div>
                <button
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#4F46E5",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
          <div style={{ fontSize: "13px", color: "#667085" }}>
            Scrim visible (opacity 0.5) · Panel slides in from right · Full
            viewport height
          </div>
        </div>
      </div>
    </div>
  );
}

function Examples() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "48px",
        padding: "40px",
        backgroundColor: "#FAFBFC",
      }}
    >
      <div>
        <h2 style={{ marginBottom: "8px" }}>Usage Examples</h2>
        <p style={{ color: "#667085", fontSize: "14px" }}>
          Modal component instances
        </p>
      </div>

      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
        <button
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "1px solid #E5E7EB",
            backgroundColor: "#FFFFFF",
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Open Cart Drawer
        </button>
        <button
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "1px solid #E5E7EB",
            backgroundColor: "#FFFFFF",
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Open Center Modal
        </button>
      </div>

      <div style={{ fontSize: "14px", color: "#667085", maxWidth: "600px" }}>
        <p>The Modal component supports two primary variants:</p>
        <ul style={{ paddingLeft: "20px", margin: "12px 0" }}>
          <li style={{ marginBottom: "8px" }}>
            <strong>Center:</strong> Traditional modal centered on screen with
            rounded corners and large shadow
          </li>
          <li>
            <strong>DrawerRight:</strong> Slide-in drawer from right edge,
            perfect for cart, filters, or detail views
          </li>
        </ul>
      </div>
    </div>
  );
}

// =====================
// REUSABLE INSTANCE COMPONENT
// =====================

export function ModalCenterInstance({
  title,
  subtitle,
  children,
  onClose,
  footer,
}: {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  onClose?: () => void;
  footer?: React.ReactNode;
}) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)", // overlay-scrim
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
      }}
      onClick={onClose}
    >
      {/* Centered Panel */}
      <div
        style={{
          width: "520px",
          maxWidth: "92%",
          backgroundColor: "#FFFFFF", // surface-canvas
          borderRadius: "20px",
          border: "1px solid #EAECF0", // border-subtle
          boxShadow: "0 12px 24px -4px #1018280F, 0 6px 12px -4px #10182814", // Shadow / 3
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* HeaderSlot */}
        {(title || subtitle) && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              position: "relative",
            }}
          >
            <div>
              {title && (
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#101828",
                    lineHeight: "28px",
                  }}
                >
                  {title}
                </div>
              )}
              {subtitle && (
                <div
                  style={{
                    fontSize: "14px",
                    color: "#667085",
                    lineHeight: "20px",
                    marginTop: "4px",
                  }}
                >
                  {subtitle}
                </div>
              )}
            </div>

            {/* CloseSlot - aligned top-right */}
            {onClose && (
              <div style={{ position: "absolute", top: 0, right: 0 }}>
                <button
                  onClick={onClose}
                  style={{
                    height: "36px",
                    paddingLeft: "12px",
                    paddingRight: "12px",
                    borderRadius: "10px",
                    backgroundColor: "transparent",
                    color: "#101828",
                    fontSize: "14px",
                    lineHeight: "20px",
                    fontWeight: "600",
                    border: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        )}

        {/* BodySlot */}
        <div
          style={{
            flex: 1,
            minHeight: "100px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {children}
        </div>

        {/* FooterSlot */}
        {footer && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "12px",
            }}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
