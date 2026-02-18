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
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "400px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Centered Panel */}
            <div
              style={{
                width: "480px",
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                border: "1px solid #E5E7EB",
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                overflow: "hidden",
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
                }}
              >
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#111827",
                  }}
                >
                  Modal Title
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
              <div style={{ padding: "24px", minHeight: "120px" }}>
                <div style={{ fontSize: "14px", color: "#667085" }}>
                  Modal body content
                </div>
              </div>

              {/* Footer */}
              <div
                style={{
                  padding: "24px",
                  borderTop: "1px solid #E5E7EB",
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "12px",
                }}
              >
                <button
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    border: "1px solid #E5E7EB",
                    backgroundColor: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
                <button
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#4F46E5",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
          <div style={{ fontSize: "13px", color: "#667085" }}>
            Max width: 480px · Centered · Rounded: 12px · Shadow / 4
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
