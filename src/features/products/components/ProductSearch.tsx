import { ButtonInstance } from "../../../components/ui/Button";
import { Search } from "lucide-react";

export function ProductSearch({
  query,
  onQueryChange,
  onSearch,
  isSearching = false,
}: {
  query: string;
  onQueryChange: (value: string) => void;
  onSearch: () => void;
  isSearching?: boolean;
}) {
  return (
    <>
      <style>{`
        .product-search-form {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .product-search-input-wrapper {
          flex: 1;
          position: relative;
          height: 44px;
        }

        .product-search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          pointer-events: none;
          z-index: 1;
        }

        .product-search-input {
          width: 100%;
          height: 44px;
          border-radius: 12px;
          background-color: var(--card);
          border: 1px solid var(--border);
          padding-left: 48px;
          padding-right: 16px;
          font-family: Inter, system-ui, sans-serif;
          font-size: 16px;
          line-height: 24px;
          font-weight: 400;
          color: var(--foreground);
          box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
          outline: none;
          transition: all 150ms ease;
        }

        .product-search-button-wrapper {
          flex-shrink: 0;
        }

        @media (max-width: 640px) {
          .product-search-form {
            flex-direction: column;
            gap: 12px;
            margin-bottom: 16px;
          }

          .product-search-input-wrapper {
            width: 100%;
          }

          .product-search-button-wrapper {
            width: 100%;
          }

          .product-search-input {
            font-size: 16px; /* Prevent zoom on iOS */
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .product-search-button-wrapper {
            min-width: 120px;
          }
        }
      `}</style>
      <form
        className="product-search-form"
        onSubmit={(event) => {
          event.preventDefault();
          onSearch();
        }}
      >
        {/* Search field */}
        <div className="product-search-input-wrapper">
          <div className="product-search-icon">
            <Search size={20} color="var(--muted-foreground)" strokeWidth={2} />
          </div>
          <input
            type="text"
            placeholder="Search curated gear…"
            value={query}
            data-testid="search-input"
            onChange={(event) => onQueryChange(event.target.value)}
            className="product-search-input"
            aria-label="Search products"
            onFocus={(e) => {
              e.target.style.borderColor = "var(--ring)";
              e.target.style.boxShadow =
                "0 0 0 4px rgba(105, 65, 198, 0.12), 0 1px 2px 0 rgba(16, 24, 40, 0.05)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "var(--border)";
              e.target.style.boxShadow = "0 1px 2px 0 rgba(16, 24, 40, 0.05)";
            }}
          />
        </div>

        {/* Search button */}
        <div className="product-search-button-wrapper">
          <ButtonInstance
            variant="primary"
            size="md"
            type="submit"
            data-testid="search-submit"
            label={isSearching ? "Searching..." : "Search"}
            disabled={isSearching}
            fullWidth
          />
        </div>
      </form>
    </>
  );
}
