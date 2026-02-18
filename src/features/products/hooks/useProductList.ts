import type { Product } from '../types';

const MOCK_PRODUCTS: Product[] = [
  {
    id: 'clip-on-tuner-pro',
    name: 'Clip-on Tuner Pro',
    descriptor: 'Fast response · Strong clamp · Clear display',
    featureLine: 'USB-C · ±0.1 cent · 360° swivel',
    priceLabel: '₹—',
    shippingLabel: 'Ships in 24–48h',
    badgeLabel: 'Curated',
    badgeVariant: 'accent'
  },
  {
    id: 'in-ear-monitor-kit',
    name: 'In-Ear Monitor Kit',
    descriptor: 'Clean stage mix · Lightweight fit',
    featureLine: 'Dual driver · Noise isolation · Detachable cable',
    priceLabel: '₹—',
    shippingLabel: 'Ships in 24–48h',
    badgeLabel: 'Curated',
    badgeVariant: 'accent'
  },
  {
    id: 'pedalboard-power-mini',
    name: 'Pedalboard Power Mini',
    descriptor: 'Quiet rails · Compact footprint',
    featureLine: 'Isolated outputs · 9V/12V · Short-circuit safe',
    priceLabel: '₹—',
    shippingLabel: 'Ships in 24–48h',
    badgeLabel: 'Curated',
    badgeVariant: 'accent'
  },
  {
    id: 'practice-headphone-amp',
    name: 'Practice Headphone Amp',
    descriptor: 'Silent practice · Pocket sized',
    featureLine: 'Bluetooth audio · Rechargeable · Low latency',
    priceLabel: '₹—',
    shippingLabel: 'Ships in 24–48h',
    badgeLabel: 'Curated',
    badgeVariant: 'accent'
  },
  {
    id: 'studio-vocal-mic',
    name: 'Studio Vocal Mic',
    descriptor: 'Natural tone · Low self-noise',
    featureLine: 'Cardioid pattern · Shock mount · Pop filter',
    priceLabel: '₹—',
    shippingLabel: 'Ships in 24–48h',
    badgeLabel: 'Curated',
    badgeVariant: 'accent'
  },
  {
    id: 'gig-bag-deluxe',
    name: 'Gig Bag Deluxe',
    descriptor: 'Weather ready · Reinforced seams',
    featureLine: 'Padded straps · Accessory pockets · Water resistant',
    priceLabel: '₹—',
    shippingLabel: 'Ships in 24–48h',
    badgeLabel: 'Curated',
    badgeVariant: 'accent'
  }
];

export function useProductList() {
  return {
    products: MOCK_PRODUCTS,
    hoverPreviewProduct: MOCK_PRODUCTS[0]
  };
}
