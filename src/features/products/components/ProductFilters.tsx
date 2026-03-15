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
    <>
      <style>{`
        .product-filters-wrapper {
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border);
        }

        .filter-label {
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          color: var(--muted-foreground);
          margin-right: 4px;
        }

        .filter-chip {
          height: 30px;
          padding-left: 12px;
          padding-right: 12px;
          border-radius: 16px;
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          cursor: pointer;
          transition: all 150ms ease;
          outline: none;
          white-space: nowrap;
        }

        .filter-spacer {
          margin-left: auto;
        }

        .filter-reset-button {
          height: 30px;
          padding-left: 12px;
          padding-right: 12px;
          border-radius: 8px;
          background-color: transparent;
          border: none;
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          color: var(--muted-foreground);
          cursor: pointer;
          transition: color 150ms ease;
          outline: none;
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }

        @media (max-width: 640px) {
          .product-filters-wrapper {
            margin-bottom: 12px;
            padding-bottom: 12px;
          }

          .filter-label {
            font-size: 13px;
            width: 100%;
            margin-bottom: 8px;
          }

          .filter-chip {
            font-size: 13px;
            height: 28px;
            padding-left: 10px;
            padding-right: 10px;
          }

          .filter-spacer {
            display: none;
          }

          .filter-reset-button {
            font-size: 13px;
            height: 28px;
            padding-left: 10px;
            padding-right: 10px;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .filter-chip {
            font-size: 13px;
          }
        }
      `}</style>
      <Cluster
        wrap="on"
        gap={10}
        align="center"
        className="product-filters-wrapper"
      >
        {/* Filter label */}
        <span className="filter-label">Filter:</span>

        {/* Filter chip badges */}
        {visibleFilters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className="filter-chip"
            style={{
              backgroundColor:
                activeFilter === filter.id ? "var(--accent)" : "var(--muted)",
              border:
                activeFilter === filter.id
                  ? "1px solid var(--ring)"
                  : "1px solid var(--border)",
              color:
                activeFilter === filter.id
                  ? "var(--primary)"
                  : "var(--muted-foreground)",
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
            className="filter-chip"
            style={{
              backgroundColor: "transparent",
              border: "1px solid var(--border)",
              color: "var(--muted-foreground)",
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
        <div className="filter-spacer" />

        {/* Reset button */}
        {activeFilterLabel && activeFilter !== filters[0]?.id && (
          <button
            onClick={() => onFilterChange(filters[0]?.id ?? "all")}
            className="filter-reset-button"
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
    </>
  );
}
