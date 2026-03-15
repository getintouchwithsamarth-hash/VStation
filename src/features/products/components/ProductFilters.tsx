import { X } from "lucide-react";
import { Cluster } from "../../../components/layout/Cluster";
import type { ProductFilterOption } from "../types";
import { useState } from "react";

const INITIAL_VISIBLE_COUNT = 15;

export function ProductFilters({
  filters,
  activeFilter,
  onFilterChange,
  resetLabel,
}: {
  filters: ProductFilterOption[];
  activeFilter: string;
  onFilterChange: (filterId: string) => void;
  resetLabel?: string;
}) {
  const [showAll, setShowAll] = useState(false);
  const activeFilterLabel = filters.find(
    (filter) => filter.id === activeFilter,
  )?.label;

  const hasMoreFilters = filters.length > INITIAL_VISIBLE_COUNT;
  const visibleFilters = showAll
    ? filters
    : filters.slice(0, INITIAL_VISIBLE_COUNT);
  const remainingCount = filters.length - INITIAL_VISIBLE_COUNT;

  return (
    <Cluster
      wrap="on"
      gap={10}
      align="center"
      style={{
        marginBottom: "16px",
        paddingBottom: "16px",
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
      {visibleFilters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          style={{
            height: "30px",
            paddingLeft: "12px",
            paddingRight: "12px",
            borderRadius: "16px",
            backgroundColor:
              activeFilter === filter.id ? "var(--accent)" : "var(--muted)",
            border:
              activeFilter === filter.id
                ? "1px solid var(--ring)"
                : "1px solid var(--border)",
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "500",
            color:
              activeFilter === filter.id
                ? "var(--primary)"
                : "var(--muted-foreground)",
            cursor: "pointer",
            transition: "all 150ms ease",
            outline: "none",
          }}
          onMouseEnter={(e) => {
            if (activeFilter !== filter.id) {
              e.currentTarget.style.backgroundColor = "var(--muted)";
              e.currentTarget.style.borderColor = "var(--border)";
            }
          }}
          onMouseLeave={(e) => {
            if (activeFilter !== filter.id) {
              e.currentTarget.style.backgroundColor = "var(--muted)";
              e.currentTarget.style.borderColor = "var(--border)";
            }
          }}
        >
          {filter.label}
        </button>
      ))}

      {/* Show more/less button */}
      {hasMoreFilters && (
        <button
          onClick={() => setShowAll(!showAll)}
          style={{
            height: "30px",
            paddingLeft: "12px",
            paddingRight: "12px",
            borderRadius: "16px",
            backgroundColor: "transparent",
            border: "1px solid var(--border)",
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "600",
            color: "var(--muted-foreground)",
            cursor: "pointer",
            transition: "all 150ms ease",
            outline: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--muted)";
            e.currentTarget.style.color = "var(--foreground)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "var(--muted-foreground)";
          }}
        >
          {showAll ? "Show less" : `+${remainingCount} more`}
        </button>
      )}

      {/* Spacer */}
      <div style={{ marginLeft: "auto" }} />

      {/* Reset button */}
      {activeFilterLabel && activeFilter !== filters[0]?.id && (
        <button
          onClick={() => onFilterChange(filters[0]?.id ?? "all")}
          style={{
            height: "30px",
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
          {resetLabel ?? "Reset filters"}
        </button>
      )}
    </Cluster>
  );
}
