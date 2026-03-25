import { BadgeInstance } from "../../../components/ui/Badge";
import { ButtonInstance } from "../../../components/ui/Button";
import { toast } from "sonner";
import type { Product } from "../types";
import { useCart } from "../../cart/CartContext";

export function ProductList({ products }: { products: Product[] }) {
  return (
    <>
      <style>{`
        .product-list-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .no-products-message {
          grid-column: 1 / -1;
          border: 1px solid var(--border);
          border-radius: 16px;
          background-color: var(--card);
          padding: 24px;
          font-family: Inter, system-ui, sans-serif;
          color: var(--muted-foreground);
          text-align: center;
        }

        @media (max-width: 1024px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
        }

        @media (max-width: 640px) {
          .product-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .no-products-message {
            padding: 20px;
            font-size: 14px;
          }
        }
      `}</style>
      <div className="product-list-container">
        <div className="product-grid">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="no-products-message">
              No products matched your search.
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function ProductCard({
  product,
  isHoverPreview = false,
}: {
  product: Product;
  isHoverPreview?: boolean;
}) {
  const { addItem, openCartDrawer } = useCart();
  const productHref = `/products/${product.id}`;

  return (
    <div
      data-testid="collection-product-card"
      role={isHoverPreview ? undefined : "link"}
      tabIndex={isHoverPreview ? undefined : 0}
      onClick={
        isHoverPreview
          ? undefined
          : (event) => {
              const target = event.target as HTMLElement;
              if (target.closest("button")) {
                return;
              }

              window.location.href = productHref;
            }
      }
      onKeyDown={
        isHoverPreview
          ? undefined
          : (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                window.location.href = productHref;
              }
            }
      }
      style={{
        backgroundColor: "var(--card)",
        border: isHoverPreview
          ? "1px solid var(--border)"
          : "1px solid var(--border)",
        borderRadius: "16px",
        width: "100%",
        minHeight: "460px",
        maxHeight: "520px",
        boxShadow: isHoverPreview
          ? "0 4px 6px -2px #1018280D, 0 12px 16px -4px #10182814"
          : "0 1px 2px 0 #1018280A, 0 1px 3px 0 #1018280F",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        cursor: isHoverPreview ? "default" : "pointer",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "220px",
          backgroundColor: "var(--muted)",
        }}
      >
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.imageAlt || product.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : null}

        {isHoverPreview ? (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#10182808",
            }}
          />
        ) : null}

        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            zIndex: isHoverPreview ? 1 : "auto",
          }}
        >
          <BadgeInstance
            label={product.badgeLabel}
            variant={product.badgeVariant}
            size="sm"
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            zIndex: isHoverPreview ? 1 : "auto",
          }}
        >
          <button
            style={{
              height: "32px",
              paddingLeft: "12px",
              paddingRight: "12px",
              borderRadius: "8px",
              backgroundColor: "transparent",
              color: "var(--muted-foreground)",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "600",
              border: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            Save
          </button>
        </div>
      </div>

      <div
        style={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          flex: 1,
        }}
      >
        <h4
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "22px",
            lineHeight: "30px",
            fontWeight: "600",
            color: "var(--foreground)",
            margin: 0,
          }}
        >
          {product.name}
        </h4>

        <p
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
            color: "var(--muted-foreground)",
            margin: 0,
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.descriptor}
        </p>

        <div
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "12px",
            lineHeight: "18px",
            fontWeight: "500",
            color: "var(--muted-foreground)",
          }}
        >
          {product.featureLine}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "auto",
            paddingTop: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "22px",
              lineHeight: "30px",
              fontWeight: "600",
              color: "var(--foreground)",
            }}
          >
            {product.priceLabel}
          </div>
          <div
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "12px",
              lineHeight: "18px",
              fontWeight: "500",
              color: "var(--muted-foreground)",
            }}
          >
            {product.shippingLabel}
          </div>
        </div>
      </div>

      <div style={{ padding: "16px", paddingTop: "0" }}>
        <ButtonInstance
          variant="primary"
          size="md"
          label={product.isInStock ? "Add to cart" : "Out of stock"}
          disabled={!product.isInStock || !product.variantId}
          onClick={async () => {
            if (!product.variantId) {
              return;
            }

            const result = await addItem(product.variantId);
            if (!result.ok) {
              toast.error("Unable to add item", {
                description: result.error || "Please try again.",
                duration: 5000,
              });
              return;
            }

            toast.success("Added to cart", {
              description: `${product.name} is in your cart.`,
              duration: Infinity,
              action: {
                label: "View cart",
                onClick: () => {
                  closeCartDrawer();
                  window.location.href = "/cart";
                },
              },
              cancel: {
                label: "Close",
                onClick: () => {},
              },
            });
          }}
          fullWidth
        />
      </div>
    </div>
  );
}
