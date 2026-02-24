import { ButtonInstance } from "../../../components/ui/Button";
import { Search } from "lucide-react";

export function ProductSearch() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "12px",
        marginBottom: "32px",
      }}
    >
      {/* Search field */}
      <div
        style={{
          flex: 1,
          position: "relative",
          height: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          <Search size={20} color="#667085" strokeWidth={2} />
        </div>
        <input
          type="text"
          placeholder="Search curated gear…"
          style={{
            width: "100%",
            height: "48px",
            borderRadius: "12px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #D0D5DD",
            paddingLeft: "48px",
            paddingRight: "16px",
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "400",
            color: "#101828",
            boxShadow: "0 1px 2px 0 rgba(16, 24, 40, 0.05)",
            outline: "none",
            transition: "all 150ms ease",
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "#6941C6";
            e.target.style.boxShadow =
              "0 0 0 4px rgba(105, 65, 198, 0.12), 0 1px 2px 0 rgba(16, 24, 40, 0.05)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#D0D5DD";
            e.target.style.boxShadow = "0 1px 2px 0 rgba(16, 24, 40, 0.05)";
          }}
        />
      </div>

      {/* Search button */}
      <ButtonInstance variant="primary" size="md" label="Search" />
    </div>
  );
}
