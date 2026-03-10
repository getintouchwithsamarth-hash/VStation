import { X } from "lucide-react";
import { useState } from "react";
import { Cluster } from "../../../components/layout/Cluster";

export function ProductFilters() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Practice", "Stage", "Studio", "Power", "Bundles"];

  return (
    <Cluster
      wrap="on"
      gap={12}
      align="center"
      style={{
        marginBottom: "24px",
        paddingBottom: "24px",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Filter label */}
      <span
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "600",
          color: "var(--muted-foreground)",
          marginRight: "4px",
        }}
      >
        Filter:
      </span>

      {/* Filter chip badges */}
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          style={{
            height: "32px",
            paddingLeft: "12px",
            paddingRight: "12px",
            borderRadius: "16px",
            backgroundColor: activeFilter === filter ? "var(--accent)" : "var(--muted)",
            border:
              activeFilter === filter
                ? "1px solid var(--ring)"
                : "1px solid var(--border)",
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "500",
            color: activeFilter === filter ? "var(--primary)" : "var(--muted-foreground)",
            cursor: "pointer",
            transition: "all 150ms ease",
            outline: "none",
          }}
          onMouseEnter={(e) => {
            if (activeFilter !== filter) {
              e.currentTarget.style.backgroundColor = "var(--muted)";
              e.currentTarget.style.borderColor = "var(--border)";
            }
          }}
          onMouseLeave={(e) => {
            if (activeFilter !== filter) {
              e.currentTarget.style.backgroundColor = "var(--muted)";
              e.currentTarget.style.borderColor = "var(--border)";
            }
          }}
        >
          {filter}
        </button>
      ))}

      {/* Spacer */}
      <div style={{ marginLeft: "auto" }} />

      {/* Reset button */}
      {activeFilter !== "All" && (
        <button
          onClick={() => setActiveFilter("All")}
          style={{
            height: "32px",
            paddingLeft: "12px",
            paddingRight: "12px",
            borderRadius: "8px",
            backgroundColor: "transparent",
            border: "none",
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "600",
            color: "var(--muted-foreground)",
            cursor: "pointer",
            transition: "color 150ms ease",
            outline: "none",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--foreground)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--muted-foreground)";
          }}
        >
          <X size={14} strokeWidth={2.5} />
          Reset filters
        </button>
      )}
    </Cluster>
  );
}
