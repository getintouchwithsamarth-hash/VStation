/**
 * Shopify API - Main Export
 *
 * This file re-exports all Shopify API functions for backward compatibility
 * and provides a single import point.
 *
 * Usage:
 * import { getProduct } from '@/lib/shopify';
 * import { getProductWithTaxonomy } from '@/lib/shopify';
 * import { loginCustomer } from '@/lib/shopify';
 *
 * Or import from specific files:
 * import { getProduct } from '@/lib/shopify-storefront';
 * import { getProductWithTaxonomy } from '@/lib/shopify-admin';
 * import { loginCustomer } from '@/lib/shopify-customer';
 *
 * API USAGE GUIDE
 *
 * STOREFRONT API (`shopify-storefront.ts`)
 * - `getProduct(handle)` - basic product data
 * - `getProducts(firstOrParams)` - product listings
 * - `getCollection(handle)` - collection data
 * - `getProductCustomMetafields(handle)` - custom storefront metafields
 *
 * ADMIN API (`shopify-admin.ts`)
 * - `getProductWithTaxonomy(handle)` - product + category + Shopify metafields
 * - `getProductShopifyMetafields(handle)` - Shopify namespace metafields only
 * - `getProductCategory(handle)` - taxonomy category only
 *
 * CUSTOMER API (`shopify-customer.ts`)
 * - `loginCustomer()` - customer login
 * - `refreshCustomerToken()` - session renewal
 * - `requestPasswordReset()` - password recovery email
 * - `logout()` - customer logout
 * - `isCustomerLoggedIn()` - login status
 *
 * MIGRATION GUIDE
 *
 * If you have existing code using `shopify.ts`, it will continue to work
 * because we re-export everything from the main file.
 *
 * However, for new code, prefer importing from specific files:
 *
 * OLD:
 * import { getProductByHandle, getProductWithTaxonomy } from '@/lib/shopify';
 *
 * NEW (recommended):
 * import { getProductByHandle } from '@/lib/shopify-storefront';
 * import { getProductWithTaxonomy } from '@/lib/shopify-admin';
 *
 * This makes it clearer which API you're using and helps with code organization.
 */

export * from './shopify-storefront';
export * from './shopify-admin';
export * from './shopify-customer';
