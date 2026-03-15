import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function ProductResultsHeader({ resultCount }: { resultCount: number }) {
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
    <>
      <style>{`
        .product-results-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          gap: 16px;
        }

        .results-count {
          font-family: Inter, system-ui, sans-serif;
          font-size: 16px;
          line-height: 24px;
          font-weight: 500;
          color: var(--muted-foreground);
        }

        .results-count-number {
          font-weight: 600;
          color: var(--foreground);
        }

        .sort-controls {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .sort-label {
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          color: var(--muted-foreground);
          white-space: nowrap;
        }

        .sort-dropdown-wrapper {
          position: relative;
        }

        .sort-button {
          height: 40px;
          padding-left: 14px;
          padding-right: 14px;
          border-radius: 8px;
          background-color: var(--card);
          border: 1px solid var(--border);
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          color: var(--foreground);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 180px;
          justify-content: space-between;
          transition: all 150ms ease;
          outline: none;
          box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
        }

        .sort-dropdown {
          position: absolute;
          top: calc(100% + 4px);
          right: 0;
          min-width: 200px;
          background-color: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          box-shadow: 0 4px 6px -2px rgba(16, 24, 40, 0.05), 0 12px 16px -4px rgba(16, 24, 40, 0.10);
          padding: 6px;
          z-index: 50;
        }

        .sort-option {
          width: 100%;
          text-align: left;
          padding: 10px 12px;
          border-radius: 8px;
          border: none;
          font-family: Inter, system-ui, sans-serif;
          font-size: 14px;
          line-height: 20px;
          cursor: pointer;
          transition: all 150ms ease;
          outline: none;
        }

        @media (max-width: 640px) {
          .product-results-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            margin-bottom: 12px;
          }

          .results-count {
            font-size: 14px;
            line-height: 21px;
          }

          .sort-controls {
            width: 100%;
            gap: 8px;
          }

          .sort-label {
            font-size: 13px;
          }

          .sort-button {
            flex: 1;
            min-width: 0;
            font-size: 13px;
            height: 38px;
          }

          .sort-dropdown {
            left: 0;
            right: 0;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .results-count {
            font-size: 15px;
            line-height: 22px;
          }

          .sort-label {
            font-size: 13px;
          }

          .sort-button {
            min-width: 160px;
            font-size: 13px;
          }
        }
      `}</style>
      <div className="product-results-header">
        {/* Left - Results count */}
        <div className="results-count">
          Showing <span className="results-count-number">{resultCount}</span>{" "}
          results
        </div>

        {/* Right - Sort control */}
        <div className="sort-controls">
          <span className="sort-label">Sort by:</span>
          <div className="sort-dropdown-wrapper">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="sort-button"
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
              <div className="sort-dropdown">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelectedSort(option);
                      setSortOpen(false);
                    }}
                    className="sort-option"
                    style={{
                      backgroundColor:
                        selectedSort === option
                          ? "var(--muted)"
                          : "transparent",
                      fontWeight: selectedSort === option ? "600" : "500",
                      color:
                        selectedSort === option
                          ? "var(--primary)"
                          : "var(--muted-foreground)",
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
    </>
  );
}
