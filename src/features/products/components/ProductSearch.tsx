import { ButtonInstance } from "../../../components/ui/Button";
import { Search } from "lucide-react";

export function ProductSearch({
  query,
  onQueryChange,
  onSearch,
  isSearching = false
}: {
  query: string;
  onQueryChange: (value: string) => void;
  onSearch: () => void;
  isSearching?: boolean;
}) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSearch();
      }}
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
          <Search size={20} color="var(--muted-foreground)" strokeWidth={2} />
        </div>
        <input
          type="text"
          placeholder="Search curated gear…"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          style={{
            width: "100%",
            height: "48px",
            borderRadius: "12px",
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
            paddingLeft: "48px",
            paddingRight: "16px",
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "400",
            color: "var(--foreground)",
            boxShadow: "0 1px 2px 0 rgba(16, 24, 40, 0.05)",
            outline: "none",
            transition: "all 150ms ease",
          }}
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
      <ButtonInstance variant="primary" size="md" label={isSearching ? "Searching..." : "Search"} disabled={isSearching} />
    </form>
  );
}
