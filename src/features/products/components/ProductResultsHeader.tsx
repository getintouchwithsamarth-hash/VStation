import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function ProductResultsHeader() {
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Recommended");
  const sortOptions = [
    "Recommended",
    "Price: Low to High",
    "Price: High to Low",
    "Newest",
    "Most Popular",
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "24px",
      }}
    >
      {/* Left - Results count */}
      <div
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: "500",
          color: "var(--muted-foreground)",
        }}
      >
        Showing <span style={{ fontWeight: "600", color: "var(--foreground)" }}>12</span>{" "}
        results
      </div>

      {/* Right - Sort control */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "500",
            color: "var(--muted-foreground)",
          }}
        >
          Sort by:
        </span>
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setSortOpen(!sortOpen)}
            style={{
              height: "40px",
              paddingLeft: "14px",
              paddingRight: "14px",
              borderRadius: "8px",
              backgroundColor: "var(--card)",
              border: "1px solid var(--border)",
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "500",
              color: "var(--foreground)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              minWidth: "180px",
              justifyContent: "space-between",
              transition: "all 150ms ease",
              outline: "none",
              boxShadow: "0 1px 2px 0 rgba(16, 24, 40, 0.05)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--muted)";
              e.currentTarget.style.borderColor = "var(--border)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--card)";
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          >
            {selectedSort}
            <ChevronDown
              size={16}
              color="var(--muted-foreground)"
              style={{
                transition: "transform 150ms ease",
                transform: sortOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>

          {/* Dropdown menu */}
          {sortOpen && (
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 4px)",
                right: 0,
                minWidth: "200px",
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                boxShadow:
                  "0 4px 6px -2px rgba(16, 24, 40, 0.05), 0 12px 16px -4px rgba(16, 24, 40, 0.10)",
                padding: "6px",
                zIndex: 50,
              }}
            >
              {sortOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setSelectedSort(option);
                    setSortOpen(false);
                  }}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "10px 12px",
                    borderRadius: "8px",
                    backgroundColor:
                      selectedSort === option ? "var(--muted)" : "transparent",
                    border: "none",
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: "14px",
                    lineHeight: "20px",
                    fontWeight: selectedSort === option ? "600" : "500",
                    color:
                      selectedSort === option ? "var(--primary)" : "var(--muted-foreground)",
                    cursor: "pointer",
                    transition: "all 150ms ease",
                    outline: "none",
                  }}
                  onMouseEnter={(e) => {
                    if (selectedSort !== option) {
                      e.currentTarget.style.backgroundColor = "var(--muted)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedSort !== option) {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
