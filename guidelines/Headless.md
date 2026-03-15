Here are the hard rules for when to use each Shopify API:
STOREFRONT API - Customer-Facing Operations
Use for:
✅ Product browsing and search (product listings, collections, filters)
✅ Product details (variants, images, prices, inventory availability)
✅ Cart operations (create, add items, update quantities, remove items)
✅ Checkout initiation and management
✅ Customer account queries (orders, addresses) - read-only
✅ Blog posts and articles (content marketing)
✅ Menus and navigation
✅ Any customer-facing frontend functionality
Token Type:
Public token: browser/mobile app (React frontend)
Private token: server-side rendering or sensitive operations
NEVER use for:
❌ Creating/editing products
❌ Order management/fulfillment
❌ Inventory updates
❌ Admin operations
❌ Discount creation
❌ Customer data modification
ADMIN API - Store Management & Operations
Use for:
✅ Product CRUD (create, update, delete products/variants)
✅ Inventory management (stock levels, locations, transfers)
✅ Order management (view, update, fulfill, cancel, refund)
✅ Customer management (create, update, delete, segmentation)
✅ Discount/promotion creation and management
✅ Collection management (automated/manual collections)
✅ Shipping rates and fulfillment services
✅ Store settings and configuration
✅ Analytics and reports
✅ Webhooks setup
✅ Metafields and metaobjects
✅ 3PL integrations (Shiprocket, etc.)
✅ Bulk operations
✅ Multi-location inventory sync
Token Type:
Admin access token (custom app credentials)
ALWAYS server-side only
never expose in frontend
NEVER use for:
❌ Customer-facing checkout flows
❌ Public product browsing (use Storefront API instead)
❌ Frontend cart operations
CUSTOMER ACCOUNT API - Customer Authentication & Self-Service
Use for:
✅ Customer login/logout (OAuth flow)
✅ Customer profile management (addresses, preferences)
✅ Order history viewing (customer's own orders)
✅ Password reset flows
✅ Customer-initiated account updates
✅ Saved payment methods
✅ Subscription management (if applicable)
Token Type:
OAuth client credentials + customer access tokens
Hybrid: server initiates OAuth, customer gets session token
NEVER use for:
❌ Admin viewing all customers
❌ Checkout operations (use Storefront API)
❌ Product browsing (use Storefront API)
DECISION MATRIX
Operation API Token Where
Browse products Storefront Public Frontend
Add to cart Storefront Public Frontend
Checkout Storefront Public Frontend
Customer login Customer Account OAuth Backend → Frontend
View my orders Customer Account Customer token Frontend
Create product Admin Admin token Backend only
Update inventory Admin Admin token Backend only
Fulfill order Admin Admin token Backend only
Create discount Admin Admin token Backend only
Sync 3PL stock Admin Admin token Backend only
SSR product page Storefront Private Backend (Node)
Webhook processing Admin Admin token Backend only
SECURITY RULES
Frontend (React/Azure) can use:
✅ Storefront API public token
✅ Customer Account API customer tokens (after OAuth)
❌ NEVER Admin API
❌ NEVER Storefront private token
Backend (Node/Express) can use:
✅ All APIs
✅ Storefront private token
✅ Admin API token
✅ Customer Account OAuth credentials
YOUR HEADLESS ARCHITECTURE
Frontend (Azure/React):
// Use Storefront API public token

- Product listings
- Product details
- Cart operations
- Checkout initiation
- Customer order viewing (with Customer Account API)
  Backend (Node/Express):
  // Use Admin API
- Inventory sync with 3PL
- Order fulfillment automation
- Product imports/updates
- Webhook handlers
- Analytics processing

// Use Storefront API private token

- SSR product pages (if needed)
- Server-side cart operations
- Rate-limit-sensitive queries
  RATE LIMITS TO REMEMBER
  Storefront API: 2 requests/second (public), higher for private
  Admin API: Cost-based (1000 points/second)
  Customer Account API: OAuth flow limits
  Rule of Thumb:
  Customer sees it? → Storefront API
  You manage it? → Admin API
  Customer logs in? → Customer Account API
  Need specific implementation examples for any of these scenarios?

So does that mean I do not need to integrate admin apis in my headless
Not exactly - it depends on what functionality you need in your headless storefront.
You DON'T need Admin API in frontend, but you WILL need it in your backend for:
Essential Operations (likely needed):
✅ Inventory sync
If you're using 3PL (Shiprocket), you need Admin API to update stock levels
✅ Order webhooks
Processing order events (created, fulfilled, cancelled) on your backend
✅ Product imports/updates
Bulk product management, syncing from external systems
✅ Metafields
If you're storing custom data (specs, badges, custom attributes) that Storefront API needs to read
✅ Multi-location inventory
Managing stock across warehouses/locations
✅ Fulfillment automation
Auto-fulfilling orders, creating shipping labels
Optional Operations (depends on your needs):
⚠️ Custom analytics
If Shopify's built-in analytics aren't enough
⚠️ Discount automation
Creating dynamic discounts based on business logic
⚠️ Customer segmentation
Advanced customer tagging/grouping
⚠️ Pre-order logic
Managing pre-order inventory states
Your Headless Architecture Should Be:
┌─────────────────────────────────────────┐
│ FRONTEND (Azure/React) │
│ - Storefront API (public token) │
│ - Customer Account API (OAuth) │
│ - NO Admin API │
└─────────────────────────────────────────┘
↓
┌─────────────────────────────────────────┐
│ BACKEND (Node/Express) │
│ - Admin API (for operations) │
│ - Storefront API (private token) │
│ - Webhook handlers │
│ - 3PL integrations │
└─────────────────────────────────────────┘
↓
┌─────────────────────────────────────────┐
│ SHOPIFY (checkout-vibestation) │
│ - Checkout infrastructure │
│ - Order processing │
│ - Payment handling │
└─────────────────────────────────────────┘
Based on Your Profile, You NEED Admin API for:
3PL Integration (Shiprocket)
Sync inventory, update fulfillment status
Multi-location inventory
Track stock across India/US warehouses
Metafields
Store custom product data (guitar specs, premium attributes)
Webhooks
Process order events, inventory changes
Bulk operations
Product imports, inventory updates
What You Can Skip:
❌ Admin API in your frontend code (React/Azure)
❌ Admin API for customer-facing operations
❌ Direct Admin API calls from browser/mobile
Minimal Setup:
If you only want basic e-commerce:
Frontend: Storefront API only ✅
Backend: Minimal (just for webhooks if needed)
For your premium guitar store with 3PL:
Frontend: Storefront API ✅
Backend: Admin API + Storefront API ✅ (you need this)
Bottom line: Your frontend doesn't need Admin API, but your backend does for inventory management, 3PL sync, and operational automation. The Admin API stays server-side only for security.
