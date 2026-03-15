import { useState } from "react";
import { CardInstance } from "../../../components/ui/Card";
import { BadgeInstance } from "../../../components/ui/Badge";
import { ButtonInstance } from "../../../components/ui/Button";
import { PincodeEstimator } from "../../../components/ui/PincodeEstimator";
import { useProductDetailMockData } from "../hooks/useProductDetailMockData";
import { useCart } from "../../cart/CartContext";
import { Check } from "lucide-react";
import "./ProductMain.css";

export function ProductMain() {
  return (
    <div className="product-main">
      <Gallery />
      <BuyBox />
    </div>
  );
}

function Gallery() {
  const { productMain } = useProductDetailMockData();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = productMain.gallery.images;
  const activeImage = images[activeImageIndex];

  const showPrev = () => {
    if (images.length === 0) {
      return;
    }
    setActiveImageIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    if (images.length === 0) {
      return;
    }
    setActiveImageIndex((current) => (current + 1) % images.length);
  };

  return (
    <div className="product-main__gallery">
      <CardInstance
        variant="elevated"
        height="560px"
        mediaSlot={
          <div className="product-main__gallery-frame">
            {activeImage ? (
              <img
                className="product-main__gallery-image"
                src={activeImage.url}
                alt={activeImage.altText}
              />
            ) : (
              <div className="product-main__gallery-placeholder" />
            )}

            <div className="product-main__gallery-badge">
              <BadgeInstance
                label={productMain.gallery.zoomLabel}
                variant="neutral"
                size="sm"
              />
            </div>

            <div className="product-main__gallery-actions">
              <ButtonInstance
                variant="ghost"
                size="sm"
                label={productMain.gallery.prevLabel}
                onClick={showPrev}
              />
              <ButtonInstance
                variant="ghost"
                size="sm"
                label={productMain.gallery.nextLabel}
                onClick={showNext}
              />
            </div>
          </div>
        }
      />

      <div className="product-main__thumbnail-row">
        {images.length > 0
          ? images.map((image, index) => (
              <button
                className={`product-main__thumbnail-button${index === activeImageIndex ? " product-main__thumbnail-button--active" : ""}`}
                key={image.id}
                type="button"
                onClick={() => setActiveImageIndex(index)}
              >
                <img
                  className="product-main__thumbnail-image"
                  src={image.url}
                  alt={image.altText}
                />
              </button>
            ))
          : [1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`product-main__thumbnail-placeholder${i === 1 ? " product-main__thumbnail-placeholder--active" : ""}`}
              />
            ))}
      </div>
    </div>
  );
}

function BuyBox() {
  const { addItem } = useCart();
  const { productMain } = useProductDetailMockData();
  const isInStock = productMain.buyBox.isInStock;

  return (
    <div className="product-main__buy-box">
      <CardInstance variant="elevated" padding="lg">
        <div className="product-main__buy-box-content">
          <div className="product-main__badge-row">
            <BadgeInstance
              label={productMain.buyBox.badge}
              variant="accent"
              size="sm"
            />
          </div>

          <h2 className="product-main__title">{productMain.buyBox.name}</h2>

          <div className="product-main__descriptor">
            {productMain.buyBox.descriptor}
          </div>

          <div className="product-main__price-row">
            <h3 className="product-main__price">{productMain.buyBox.price}</h3>
            <div className="product-main__stock-column">
              {productMain.buyBox.compareAtPrice ? (
                <span className="product-main__compare-price">
                  {productMain.buyBox.compareAtPrice}
                </span>
              ) : null}
              <span
                className={`product-main__stock${isInStock ? " product-main__stock--in-stock" : " product-main__stock--out-of-stock"}`}
              >
                {productMain.buyBox.stock}
              </span>
            </div>
          </div>

          <PincodeEstimator />

          {productMain.buyBox.reassurancePoints.length > 0 ? (
            <div className="product-main__reassurance-list">
              {productMain.buyBox.reassurancePoints.map((point) => (
                <div key={point} className="product-main__reassurance-item">
                  <div className="product-main__reassurance-icon">
                    <Check
                      className="product-main__reassurance-check"
                      size={12}
                      strokeWidth={3}
                    />
                  </div>
                  <div className="product-main__reassurance-text">
                    {point}
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          <div className="product-main__actions">
            <ButtonInstance
              variant="primary"
              size="lg"
              label={productMain.buyBox.primaryCta}
              disabled={!isInStock || !productMain.buyBox.variantId}
              onClick={() => {
                if (!productMain.buyBox.variantId) {
                  return;
                }
                void addItem(productMain.buyBox.variantId);
              }}
            />
            <ButtonInstance
              variant="secondary"
              size="lg"
              label={productMain.buyBox.secondaryCta}
            />
          </div>

          <div className="product-main__micro-line">
            {productMain.buyBox.microLine}
          </div>
        </div>
      </CardInstance>
    </div>
  );
}
