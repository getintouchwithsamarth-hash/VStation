import { useState } from 'react';
import { CardInstance } from '../../../components/ui/Card';
import { BadgeInstance } from '../../../components/ui/Badge';
import { ButtonInstance } from '../../../components/ui/Button';
import { PincodeEstimator } from '../../../components/ui/PincodeEstimator';
import { useProductDetailMockData } from '../hooks/useProductDetailMockData';
import { useCart } from '../../cart/CartContext';

export function ProductMain() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 420px',
        gap: '48px',
        alignItems: 'flex-start'
      }}
    >
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
    setActiveImageIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const showNext = () => {
    if (images.length === 0) {
      return;
    }
    setActiveImageIndex((current) => (current + 1) % images.length);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
      <CardInstance
        variant="elevated"
        height="560px"
        mediaSlot={
          <div style={{ position: 'relative', width: '100%', height: '560px' }}>
            {activeImage ? (
              <img
                src={activeImage.url}
                alt={activeImage.altText}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            ) : (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#F9FAFB'
                }}
              />
            )}

            <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
              <BadgeInstance label={productMain.gallery.zoomLabel} variant="neutral" size="sm" />
            </div>

            <div
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                display: 'flex',
                gap: '8px'
              }}
            >
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

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '12px'
        }}
      >
        {images.length > 0
          ? images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setActiveImageIndex(index)}
                style={{
                  width: '88px',
                  height: '88px',
                  borderRadius: '12px',
                  border: index === activeImageIndex ? '2px solid #4F46E5' : '1px solid #E5E7EB',
                  flexShrink: 0,
                  cursor: 'pointer',
                  padding: 0,
                  overflow: 'hidden',
                  backgroundColor: '#F9FAFB'
                }}
              >
                <img
                  src={image.url}
                  alt={image.altText}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </button>
            ))
          : [1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  width: '88px',
                  height: '88px',
                  borderRadius: '12px',
                  backgroundColor: '#F9FAFB',
                  border: i === 1 ? '2px solid #4F46E5' : '1px solid #E5E7EB',
                  flexShrink: 0
                }}
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
      <CardInstance variant="elevated" padding="lg">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <BadgeInstance label={productMain.buyBox.badge} variant="accent" size="sm" />
          </div>

          <h2
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              color: '#101828',
              margin: 0
            }}
          >
            {productMain.buyBox.name}
          </h2>

          <div
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: '400',
              color: '#667085'
            }}
          >
            {productMain.buyBox.descriptor}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '8px',
              paddingBottom: '8px',
              borderTop: '1px solid #F3F4F6',
              borderBottom: '1px solid #F3F4F6'
            }}
          >
            <h3
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                color: '#101828',
                margin: 0
              }}
            >
              {productMain.buyBox.price}
            </h3>
            <span
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '500',
                color: isInStock ? '#10B981' : '#EF4444'
              }}
            >
              {productMain.buyBox.stock}
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}
          >
            {productMain.buyBox.features.map((feature) => (
              <div
                key={feature}
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: '400',
                  color: '#667085'
                }}
              >
                • {feature}
              </div>
            ))}
          </div>

          <PincodeEstimator />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '8px' }}>
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
            <ButtonInstance variant="secondary" size="lg" label={productMain.buyBox.secondaryCta} />
          </div>

          <div
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '12px',
              lineHeight: '18px',
              fontWeight: '400',
              color: '#98A2B3',
              paddingTop: '8px',
              borderTop: '1px solid #F3F4F6'
            }}
          >
            {productMain.buyBox.microLine}
          </div>
        </div>
      </CardInstance>

      <CardInstance variant="subtle" padding="md">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '600',
              color: '#101828'
            }}
          >
            {productMain.buyBox.inBoxTitle}
          </div>
          <div
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              lineHeight: '20px',
              fontWeight: '400',
              color: '#667085'
            }}
          >
            {productMain.buyBox.inBoxLine}
          </div>
        </div>
      </CardInstance>
    </div>
  );
}
