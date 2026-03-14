Vibe Station PDP Data Mapping Guide
Overview
This document maps Shopify product data (from Admin API and Storefront API) to the headless React PDP components. All data should be fetched via Storefront API for the frontend, with metafields exposed for Storefront API access.

1. Product Specifications Section
Data Source: product.metafields.custom.specifications
Metafield Type: rich_text_field
Component Location: Specifications accordion/tab
What to display:
Render as HTML (rich text contains <strong>, <br> tags)
Parse and display in a clean spec table or list format
Example data structure:
<strong>Gauge:</strong> Light (.012-.053)<br>
<strong>Material:</strong> Phosphor Bronze wound over hexagonal steel core<br>
<strong>Number of Strings:</strong> 6<br>
<strong>String Gauges:</strong> .012, .016, .024, .032, .042, .053
Frontend implementation:
<div className="specifications">
  <h3>Specifications</h3>
  <div dangerouslySetInnerHTML={{ __html: product.metafields.specifications }} />
</div>
2. What's in the Box Section
Data Source: product.metafields.custom.whats_in_box
Metafield Type: multi_line_text_field
Component Location: What's in the Box section
What to display:
Parse line breaks (<br> or \n)
Display as bulleted list or formatted text
Example data:
1x 3-meter instrument cable
Gold-plated 1/4 inch TS connectors on both ends
Cable tie for storage
Frontend implementation:
<div className="whats-in-box">
  <h3>What's in the Box</h3>
  <ul>
    {product.metafields.whats_in_box.split('<br>').map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
</div>
3. Why It Feels Different Section
Data Source: product.metafields.custom.why_different
Metafield Type: rich_text_field
Component Location: Why It Feels Different section (hero/featured content area)
What to display:
Full rich text with formatting
This is the curation story
highlight it prominently
Example data:
D'Addario EJ16 strings are the gold standard for acoustic players. We chose these because they deliver professional tone quality at an accessible price. The phosphor bronze winding creates warm, bright sound perfect for strumming and fingerpicking...
Frontend implementation:
<div className="why-different">
  <h2>Why It Feels Different</h2>
  <div className="curation-story" dangerouslySetInnerHTML={{ __html: product.metafields.why_different }} />
</div>
4. Buying Guide Section
Data Source: product.metafields.custom.buying_guide
Metafield Type: rich_text_field
Component Location: Buying Guide accordion/expandable section
What to display:
Rich text with headings, lists, formatting
Contains FAQs and decision-making guidance
Example data:
<strong>Which gauge should I start with?</strong><br>
Start with medium (0.73mm) for balanced control.<br><br>
<strong>Thin vs Medium vs Heavy:</strong><br>
<strong>Thin (0.46mm):</strong> Bright tone, fast strumming...
Frontend implementation:
<div className="buying-guide">
  <h3>Buying Guide</h3>
  <div dangerouslySetInnerHTML={{ __html: product.metafields.buying_guide }} />
</div>
5. Product Images & Gallery
   Data Source: product.media (Storefront API)
   Component Location: Product image gallery/carousel
   What to fetch:
   media(first: 10) {
   edges {
   node {
   ... on MediaImage {
   id
   image {
   url
   altText
   width
   height
   }
   }
   }
   }
   }
   What to display:
   Main product image (first image)
   Thumbnail carousel for additional images
   Use altText for accessibility and SEO
   Implement zoom/lightbox functionality
   Image types to expect:
   Main product shot (white background)
   Close-up texture/detail shots
   Product in use / lifestyle images
   Packaging/contents laid out
   Scale reference images
6. Delivery & Returns Information
Data Source:
product.metafields.custom.delivery_info (single_line_text_field)
product.metafields.custom.return_policy (multi_line_text_field)
Component Location: Near CTA / Trust signals section
Delivery Info example:
Ships within 24 hours | Delivery in 3-5 business days | Free shipping on orders over ₹999
Return Policy example:
30-day returns for unopened packages only. Free replacement if damaged on arrival.
Frontend implementation:
<div className="trust-signals">
  <div className="delivery-info">
    <Icon name="shipping" />
    <span>{product.metafields.delivery_info}</span>
  </div>
  <div className="return-policy">
    <Icon name="returns" />
    <span>{product.metafields.return_policy}</span>
  </div>
</div>
7. Product Details (SKU, Origin, Care)
Data Sources:
SKU: product.variants[0].sku (standard field)
Vendor/Brand: product.vendor (standard field)
Country of Origin: product.metafields.custom.country_of_origin (single_line_text_field)
Care Instructions: product.metafields.custom.care_instructions (multi_line_text_field)
Component Location: Product details accordion/footer section
Frontend implementation:
<div className="product-details">
  <dl>
    <dt>SKU</dt>
    <dd>{product.variants[0].sku}</dd>
    
    <dt>Brand</dt>
    <dd>{product.vendor}</dd>
    
    <dt>Country of Origin</dt>
    <dd>{product.metafields.country_of_origin}</dd>
    
    <dt>Care Instructions</dt>
    <dd>{product.metafields.care_instructions}</dd>
  </dl>
</div>
8. Price & Inventory
Data Sources:
Price: product.priceRange.minVariantPrice.amount
Compare-at Price: product.compareAtPriceRange.minVariantPrice.amount
Availability: product.variants[0].availableForSale
Stock Quantity: product.variants[0].quantityAvailable
Component Location: Price section near CTA
Frontend implementation:
<div className="price-section">
  {product.compareAtPriceRange && (
    <span className="compare-price">
      ₹{product.compareAtPriceRange.minVariantPrice.amount}
    </span>
  )}
  <span className="current-price">
    ₹{product.priceRange.minVariantPrice.amount}
  </span>

  <div className="stock-status">
    {product.variants[0].availableForSale ? (
      <span className="in-stock">In Stock ({product.variants[0].quantityAvailable} available)</span>
    ) : (
      <span className="out-of-stock">Out of Stock</span>
    )}
  </div>
</div>
9. Product Description (SEO & Overview)
Data Source: product.description or product.descriptionHtml
Component Location: Main product description area (above fold or in overview tab)
What to display:
Full HTML description with formatting
Contains SEO keywords and detailed product overview
Frontend implementation:
<div className="product-description">
  <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
</div>
10. Related Products / Cross-sell
Data Source:
Option A: product.metafields.custom.recommended_products (list.product_reference) Option B: Shopify's productRecommendations query
Component Location: Related Products section (below main content)
Storefront API Query:
productRecommendations(productId: $productId) {
  id
  title
  handle
  priceRange {
    minVariantPrice {
      amount
      currencyCode
    }
  }
  images(first: 1) {
    edges {
      node {
        url
        altText
      }
    }
  }
}
Frontend implementation:
<div className="related-products">
  <h3>Complete Your Setup</h3>
  <div className="product-grid">
    {relatedProducts.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</div>
11. Reviews Section
Data Source:
Option A: Shopify Product Reviews app (if installed)
Option B: Third-party review app API (Judge.me, Loox, Yotpo)
Component Location: Reviews tab/section
What to display:
Average rating (stars)
Total review count
Star breakdown (5-star, 4-star, etc.)
Individual reviews with verified badge
Review tags (e.g., "Great grip", "Durable", "Good value")
Note: Most review apps provide embeddable widgets or API endpoints for headless implementations.
12. SEO Meta Tags
Data Sources:
SEO Title: product.seo.title or product.title
SEO Description: product.seo.description
Image Alt Text: product.images[].altText
Component Location: <head> meta tags
Frontend implementation:
<Head>
  <title>{product.seo.title || product.title}</title>
  <meta name="description" content={product.seo.description} />
  <meta property="og:title" content={product.seo.title} />
  <meta property="og:description" content={product.seo.description} />
  <meta property="og:image" content={product.images[0].url} />
</Head>
13. Trust Signals Near CTA
Data Sources:
product.metafields.custom.delivery_info
product.metafields.custom.return_policy
Shop-level settings for COD, secure checkout
Component Location: Directly below Add to Cart button
Frontend implementation:
<div className="cta-trust-signals">
  <button className="add-to-cart">Add to Cart</button>
  
  <ul className="trust-badges">
    <li>✓ Ships within 24 hours</li>
    <li>✓ 30-day returns</li>
    <li>✓ COD available</li>
    <li>✓ Secure checkout</li>
    <li>✓ Free shipping over ₹999</li>
  </ul>
</div>
Complete Storefront API Query Example
query getProduct($handle: String!) {
  product(handle: $handle) {
    id
    title
    handle
    description
    descriptionHtml
    vendor
    
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    
    compareAtPriceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    
    images(first: 10) {
      edges {
        node {
          url
          altText
          width
          height
        }
      }
    }
    
    variants(first: 10) {
      edges {
        node {
          id
          sku
          availableForSale
          quantityAvailable
          priceV2 {
            amount
            currencyCode
          }
        }
      }
    }
    
    metafields(identifiers: [
      {namespace: "custom", key: "specifications"},
      {namespace: "custom", key: "whats_in_box"},
      {namespace: "custom", key: "why_different"},
      {namespace: "custom", key: "buying_guide"},
      {namespace: "custom", key: "delivery_info"},
      {namespace: "custom", key: "return_policy"},
      {namespace: "custom", key: "country_of_origin"},
      {namespace: "custom", key: "care_instructions"}
    ]) {
      key
      value
      type
    }
    
    seo {
      title
      description
    }
  }
}
Priority Implementation Checklist
Phase 1: Critical (Week 1)
 Product images gallery with alt text
 Specifications metafield → Specifications section
 What's in the Box metafield → What's in the Box section
 Delivery info → Trust signals near CTA
 Price, stock, and Add to Cart functionality
Phase 2: Conversion Boosters (Week 2)
 Buying Guide metafield → Buying Guide accordion
 Why It Feels Different metafield → Curation story section
 Return policy → Policy details section
 Related products → Cross-sell section
 SKU, vendor, origin → Product details
Phase 3: Polish (Week 3)
 Reviews integration (Judge.me or Shopify Reviews)
 SEO meta tags from product data
 Care instructions → Product care section
 FAQ section (if using FAQ metaobjects)
 Social sharing buttons
Metafield Exposure Checklist
CRITICAL: All custom metafields MUST be exposed to Storefront API:
Go to Settings → Custom Data → Products
For each metafield definition, check "Storefront API access"
Metafields to expose:
custom.specifications
custom.whats_in_box
custom.why_different
custom.buying_guide
custom.delivery_info
custom.return_policy
custom.country_of_origin
custom.care_instructions
Component Hierarchy
<ProductPage>
  ├── <ProductGallery images={product.images} />
  ├── <ProductInfo>
  │   ├── <ProductTitle title={product.title} vendor={product.vendor} />
  │   ├── <ProductPrice price={product.priceRange} compareAt={product.compareAtPriceRange} />
  │   ├── <StockStatus variant={product.variants[0]} />
  │   ├── <AddToCart />
  │   └── <TrustSignals deliveryInfo={metafields.delivery_info} returnPolicy={metafields.return_policy} />
  ├── <ProductTabs>
  │   ├── <DescriptionTab html={product.descriptionHtml} />
  │   ├── <SpecificationsTab html={metafields.specifications} />
  │   ├── <WhatsInBoxTab content={metafields.whats_in_box} />
  │   ├── <BuyingGuideTab html={metafields.buying_guide} />
  │   └── <ReviewsTab productId={product.id} />
  ├── <WhyDifferent content={metafields.why_different} />
  ├── <ProductDetails sku={variant.sku} origin={metafields.country_of_origin} care={metafields.care_instructions} />
  └── <RelatedProducts recommendations={relatedProducts} />
</ProductPage>
