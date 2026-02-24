import { BadgeInstance } from "../../../components/ui/Badge";
import { ButtonInstance } from "../../../components/ui/Button";
import { X } from "lucide-react";
import { useState } from "react";

export function ProductFilters() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Practice", "Stage", "Studio", "Power", "Bundles"];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "12px",
        marginBottom: "24px",
        paddingBottom: "24px",
        borderBottom: "1px solid #EAECF0",
      }}
    >
      {/* Filter label */}
      <span
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "600",
          color: "#344054",
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
            backgroundColor: activeFilter === filter ? "#F4F3FF" : "#F9FAFB",
            border:
              activeFilter === filter
                ? "1px solid #D6BBFB"
                : "1px solid #EAECF0",
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "500",
            color: activeFilter === filter ? "#6941C6" : "#344054",
            cursor: "pointer",
            transition: "all 150ms ease",
            outline: "none",
          }}
          onMouseEnter={(e) => {
            if (activeFilter !== filter) {
              e.currentTarget.style.backgroundColor = "#F2F4F7";
              e.currentTarget.style.borderColor = "#D0D5DD";
            }
          }}
          onMouseLeave={(e) => {
            if (activeFilter !== filter) {
              e.currentTarget.style.backgroundColor = "#F9FAFB";
              e.currentTarget.style.borderColor = "#EAECF0";
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
            color: "#667085",
            cursor: "pointer",
            transition: "color 150ms ease",
            outline: "none",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#344054";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#667085";
          }}
        >
          <X size={14} strokeWidth={2.5} />
          Reset filters
        </button>
      )}
    </div>
  );
}
