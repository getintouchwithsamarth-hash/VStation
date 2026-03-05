# Shopify Setup

This project uses Shopify in a headless architecture:

- Frontend (this repo): Shopify Storefront API for products, cart, checkout, and customer account flows.
- Backend (separate service): Shopify Admin API for private/admin operations only.

## 1. Create Shopify App Credentials

In Shopify Admin:

1. Go to `Settings > Apps and sales channels > Develop apps`.
2. Open your app.
3. Copy:
- Storefront API access token (public token, frontend-safe).
- Admin API access token (private token, backend-only).

## 2. Frontend Environment Variables

Create `.env` in this repo and set values from `.env.example`.

Required direct Storefront mode:

```env
VITE_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_storefront_access_token
VITE_SHOPIFY_STOREFRONT_API_VERSION=2026-01
```

Optional token bridge mode (frontend requests short-lived token from backend):

```env
VITE_BACKEND_URL=http://localhost:3001
VITE_SHOPIFY_TOKEN_ENDPOINT=/api/shopify/access-token
VITE_SHOPIFY_TOKEN_METHOD=GET
VITE_SHOPIFY_AUTH_HEADER=X-Shopify-Storefront-Access-Token
```

Optional full proxy mode (frontend sends GraphQL to backend, backend calls Shopify):

```env
VITE_BACKEND_URL=http://localhost:3001
VITE_SHOPIFY_PROXY_ENDPOINT=/api/shopify
```

## 3. Backend Rules

Keep Admin API token in backend `.env` only:

```env
SHOPIFY_DOMAIN=your-store.myshopify.com
SHOPIFY_ADMIN_TOKEN=your_private_admin_token
SHOPIFY_API_VERSION=2026-01
```

Never expose `SHOPIFY_ADMIN_TOKEN` to frontend bundles or browser requests.

## 4. Features Implemented in `src/lib/shopify.ts`

- Product list/search/details/recommendations
- Cart create/add/update/remove/fetch
- Customer register/login/get/update
- Customer address create/update/delete

## 5. Security Checklist

- Do not commit real tokens.
- Keep `.env` files out of git.
- Use HTTPS in production.
- Rotate tokens immediately if compromised.
