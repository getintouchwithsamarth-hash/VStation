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

        .product-card {
          background-color: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          width: 100%;
          min-height: 460px;
          max-height: 520px;
          box-shadow: 0 1px 2px 0 #1018280a, 0 1px 3px 0 #1018280f;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .product-card__title {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

          .product-card {
            min-height: 0;
            max-height: none;
          }

          .product-card__media {
            height: 200px !important;
          }

          .product-card__body {
            padding: 14px !important;
          }

          .product-card__title {
            font-size: 20px !important;
            line-height: 28px !important;
          }

          .product-card__descriptor {
            -webkit-line-clamp: 3 !important;
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
      className="product-card"
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
        boxShadow: isHoverPreview
          ? "0 4px 6px -2px #1018280D, 0 12px 16px -4px #10182814"
          : undefined,
        cursor: isHoverPreview ? "default" : "pointer",
      }}
    >
      <div
        className="product-card__media"
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
        className="product-card__body"
        style={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          flex: 1,
        }}
      >
        <h2
          className="product-card__title"
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
        </h2>

        <p
          className="product-card__descriptor"
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
