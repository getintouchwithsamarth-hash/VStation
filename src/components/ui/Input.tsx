export function Input() {
  return (
    <>
      <Anatomy />
      <Variants />
      <Sizes />
      <States />
      <Tokens />
      <Examples />
    </>
  );
}

// =====================
// ANATOMY
// =====================

function Anatomy() {
  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <h2>Input Anatomy</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <FieldContainer>
          <Label>Label</Label>
          <InputRow>
            <LeadingSlot />
            <TextValue />
            <TrailingSlot />
          </InputRow>
          <HelperText>Helper text</HelperText>
          <FocusRing />
        </FieldContainer>
      </div>
    </div>
  );
}

function FieldContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        position: "relative",
      }}
    >
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label
      style={{
        fontSize: "12px",
        lineHeight: "18px",
        fontWeight: "600",
        color: "var(--muted-foreground)",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {children}
    </label>
  );
}

function InputRow({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      {children}
    </div>
  );
}

function LeadingSlot() {
  return (
    <div
      style={{
        position: "absolute",
        left: "12px",
        display: "flex",
        alignItems: "center",
        color: "var(--muted-foreground)",
      }}
    />
  );
}

function TextValue({
  placeholder,
  value,
}: {
  placeholder?: string;
  value?: string;
}) {
  return (
    <input
      type="text"
      placeholder={placeholder || "Enter text..."}
      value={value}
      style={{
        width: "100%",
        border: "none",
        outline: "none",
        background: "transparent",
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: "400",
        fontFamily: "Inter, system-ui, sans-serif",
        color: "var(--foreground)",
        padding: 0,
      }}
    />
  );
}

function TrailingSlot() {
  return (
    <div
      style={{
        position: "absolute",
        right: "12px",
        display: "flex",
        alignItems: "center",
        color: "var(--muted-foreground)",
      }}
    />
  );
}

function HelperText({
  children,
  error,
}: {
  children: React.ReactNode;
  error?: boolean;
}) {
  return (
    <div
      style={{
        fontSize: "12px",
        lineHeight: "18px",
        fontWeight: "400",
        color: error ? "var(--destructive)" : "var(--muted-foreground)",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {children}
    </div>
  );
}

function FocusRing({ show }: { show?: boolean }) {
  if (!show) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: "24px", // Offset for label
        left: "-2px",
        right: "-2px",
        bottom: "-26px", // Offset for helper text
        border: "2px solid var(--ring)",
        borderRadius: "14px",
        pointerEvents: "none",
      }}
    />
  );
}

// =====================
// SIZES
// =====================

function Sizes() {
  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <h2>Input Sizes</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div>
          <h4 style={{ marginBottom: "12px" }}>Size / Sm</h4>
          <SizeSm />
        </div>

        <div>
          <h4 style={{ marginBottom: "12px" }}>Size / Md</h4>
          <SizeMd />
        </div>
      </div>
    </div>
  );
}

function SizeSm() {
  return (
    <FieldContainer>
      <Label>Label</Label>
      <InputRow>
        <div
          style={{
            width: "100%",
            height: "36px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "12px",
            paddingRight: "12px",
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "10px",
          }}
        >
          <TextValue placeholder="Enter text..." />
        </div>
      </InputRow>
      <HelperText>Helper text</HelperText>
    </FieldContainer>
  );
}

function SizeMd() {
  return (
    <FieldContainer>
      <Label>Label</Label>
      <InputRow>
        <div
          style={{
            width: "100%",
            height: "44px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "14px",
            paddingRight: "14px",
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
          }}
        >
          <TextValue placeholder="Enter text..." />
        </div>
      </InputRow>
      <HelperText>Helper text</HelperText>
    </FieldContainer>
  );
}

// =====================
// VARIANTS
// =====================

function Variants() {
  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <h2>Input Variants</h2>

      <div>
        <h4 style={{ marginBottom: "12px" }}>Variant / Default</h4>
        <VariantDefault />
      </div>
    </div>
  );
}

function VariantDefault() {
  return (
    <FieldContainer>
      <Label>Email address</Label>
      <InputRow>
        <div
          style={{
            width: "100%",
            height: "44px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "14px",
            paddingRight: "14px",
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
          }}
        >
          <TextValue placeholder="you@example.com" />
        </div>
      </InputRow>
      <HelperText>We'll never share your email.</HelperText>
    </FieldContainer>
  );
}

// =====================
// STATES
// =====================

function States() {
  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      <h2>Input States (Variant / Default + Size / Md)</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div>
          <h4 style={{ marginBottom: "12px" }}>State / Default</h4>
          <StateDefault />
        </div>

        <div>
          <h4 style={{ marginBottom: "12px" }}>State / Hover</h4>
          <StateHover />
        </div>

        <div>
          <h4 style={{ marginBottom: "12px" }}>State / Focus</h4>
          <StateFocus />
        </div>

        <div>
          <h4 style={{ marginBottom: "12px" }}>State / Error</h4>
          <StateError />
        </div>

        <div>
          <h4 style={{ marginBottom: "12px" }}>State / Disabled</h4>
          <StateDisabled />
        </div>
      </div>
    </div>
  );
}

function StateDefault() {
  return (
    <FieldContainer>
      <Label>Email address</Label>
      <InputRow>
        <div
          style={{
            width: "100%",
            height: "44px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "14px",
            paddingRight: "14px",
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
          }}
        >
          <TextValue placeholder="you@example.com" />
        </div>
      </InputRow>
      <HelperText>Enter your email address.</HelperText>
    </FieldContainer>
  );
}

function StateHover() {
  return (
    <FieldContainer>
      <Label>Email address</Label>
      <InputRow>
        <div
          style={{
            width: "100%",
            height: "44px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "14px",
            paddingRight: "14px",
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)", // border-strong
            borderRadius: "12px",
          }}
        >
          <TextValue placeholder="you@example.com" />
        </div>
      </InputRow>
      <HelperText>Enter your email address.</HelperText>
    </FieldContainer>
  );
}

function StateFocus() {
  return (
    <FieldContainer>
      <Label>Email address</Label>
      <InputRow>
        <div
          style={{
            width: "100%",
            height: "44px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "14px",
            paddingRight: "14px",
            backgroundColor: "var(--card)",
            border: "1px solid var(--ring)", // border-focus
            borderRadius: "12px",
            position: "relative",
          }}
        >
          <TextValue placeholder="you@example.com" />
        </div>
      </InputRow>
      <HelperText>Enter your email address.</HelperText>
      <FocusRing show />
    </FieldContainer>
  );
}

function StateError() {
  return (
    <FieldContainer>
      <Label>Email address</Label>
      <InputRow>
        <div
          style={{
            width: "100%",
            height: "44px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "14px",
            paddingRight: "14px",
            backgroundColor: "var(--card)",
            border: "1px solid var(--destructive)",
            borderRadius: "12px",
          }}
        >
          <TextValue placeholder="you@example.com" />
        </div>
      </InputRow>
      <HelperText error>Please enter a valid email address.</HelperText>
    </FieldContainer>
  );
}

function StateDisabled() {
  return (
    <FieldContainer>
      <Label>Email address</Label>
      <InputRow>
        <div
          style={{
            width: "100%",
            height: "44px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "14px",
            paddingRight: "14px",
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            opacity: 0.4,
          }}
        >
          <TextValue placeholder="you@example.com" />
        </div>
      </InputRow>
      <div style={{ opacity: 0.4 }}>
        <HelperText>Enter your email address.</HelperText>
      </div>
    </FieldContainer>
  );
}

// =====================
// TOKENS
// =====================

function Tokens() {
  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <h2>Design Tokens</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div>
          <h4>Colors</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: "8px 0" }}>
            <li>surface-elevated: #FFFFFF</li>
            <li>border-default: #D0D5DD</li>
            <li>border-strong: #98A2B3</li>
            <li>border-focus: #4F46E5</li>
            <li>text-primary: #101828</li>
            <li>text-muted: #667085</li>
            <li>error-500: #F04438</li>
            <li>error-600: #D92D20</li>
          </ul>
        </div>

        <div>
          <h4>Typography</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: "8px 0" }}>
            <li>Label: Caption (12px / 18px, weight 600)</li>
            <li>Input: BodySm (14px / 20px, weight 400)</li>
            <li>HelperText: Caption (12px / 18px, weight 400)</li>
          </ul>
        </div>

        <div>
          <h4>Spacing</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: "8px 0" }}>
            <li>Small: height 36px, padding-x 12px, radius 10px</li>
            <li>Medium: height 44px, padding-x 14px, radius 12px</li>
            <li>Gap (label → field): 6px</li>
            <li>Gap (field → helper): 6px</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// =====================
// EXAMPLES
// =====================

function Examples() {
  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <h2>Examples</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          maxWidth: "400px",
        }}
      >
        <InputInstance
          label="Full name"
          placeholder="John Doe"
          helperText="Enter your full legal name."
        />

        <InputInstance
          label="Email"
          placeholder="you@example.com"
          helperText="We'll never share your email."
          size="sm"
        />

        <InputInstance
          label="Delivery pincode"
          placeholder="110001"
          helperText="Enter your 6-digit pincode."
        />

        <InputInstance
          label="Postal code"
          placeholder="400001"
          helperText="Invalid pincode. Please check and try again."
          error
        />
      </div>
    </div>
  );
}

// =====================
// INSTANCE COMPONENT
// =====================

export function InputInstance({
  label,
  placeholder,
  helperText,
  error,
  disabled,
  size = "md",
}: {
  label?: string;
  placeholder?: string;
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
  size?: "sm" | "md";
}) {
  const height = size === "sm" ? "36px" : "44px";
  const paddingX = size === "sm" ? "12px" : "14px";
  const borderRadius = size === "sm" ? "10px" : "12px";

  let borderColor = "var(--border)"; // border-default
  if (error) borderColor = "var(--destructive)";

  return (
    <FieldContainer>
      {label && <Label>{label}</Label>}
      <InputRow>
        <div
          style={{
            width: "100%",
            height: height,
            display: "flex",
            alignItems: "center",
            paddingLeft: paddingX,
            paddingRight: paddingX,
            backgroundColor: "var(--card)",
            border: `1px solid ${borderColor}`,
            borderRadius: borderRadius,
            opacity: disabled ? 0.4 : 1,
            transition: "border-color 150ms ease",
          }}
        >
          <TextValue placeholder={placeholder} />
        </div>
      </InputRow>
      {helperText && (
        <div style={{ opacity: disabled ? 0.4 : 1 }}>
          <HelperText error={error}>{helperText}</HelperText>
        </div>
      )}
    </FieldContainer>
  );
}
