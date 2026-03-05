Shopify Headless Storefront - Access Token Usage Guide
Overview
Your Shopify headless setup uses two types of access tokens:
Storefront API Public Access Token
For frontend (React app)
Admin API Private Access Token
For backend server operations only

1. Storefront API Public Access Token (Frontend)
   Purpose: Customer-facing operations in your React application
   Safe to use in: Client-side code (browser)
   Use cases:
   Fetch products, collections, variants
   Query inventory and availability
   Create and manage shopping carts
   Customer authentication (login/register)
   Generate checkout URLs
   Fetch customer orders and account data
   Implementation:
   // config/shopify.js
   export const SHOPIFY_CONFIG = {
   domain: 'kz9z4f-2a.myshopify.com',
   storefrontAccessToken: 'YOUR_PUBLIC_STOREFRONT_TOKEN',
   apiVersion: '2024-01'
   };

// utils/storefrontApi.js
import { SHOPIFY_CONFIG } from '../config/shopify';

const storefrontApiUrl = `https://${SHOPIFY_CONFIG.domain}/api/${SHOPIFY_CONFIG.apiVersion}/graphql.json`;

export async function storefrontQuery(query, variables = {}) {
const response = await fetch(storefrontApiUrl, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'X-Shopify-Storefront-Access-Token': SHOPIFY_CONFIG.storefrontAccessToken,
},
body: JSON.stringify({ query, variables })
});

const { data, errors } = await response.json();

if (errors) {
console.error('Storefront API errors:', errors);
throw new Error(errors[0].message);
}

return data;
}
Example Usage - Fetch Products:
// services/products.js
import { storefrontQuery } from '../utils/storefrontApi';

export async function getProducts(limit = 10) {
const query = `     query GetProducts($limit: Int!) {
      products(first: $limit) {
        edges {
          node {
            id
            title
            handle
            description
            availableForSale
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
            variants(first: 10) {
              edges {
                node {
                  id
                  title
                  availableForSale
                  quantityAvailable
                  priceV2 {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

return storefrontQuery(query, { limit });
}
Example Usage - Create Cart:
// services/cart.js
import { storefrontQuery } from '../utils/storefrontApi';

export async function createCart(merchandiseId, quantity = 1) {
const mutation = `     mutation CreateCart($merchandiseId: ID!, $quantity: Int!) {
      cartCreate(
        input: {
          lines: [
            {
              merchandiseId: $merchandiseId
              quantity: $quantity
            }
          ]
        }
      ) {
        cart {
          id
          checkoutUrl
          lines(first: 10) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    priceV2 {
                      amount
                      currencyCode
                    }
                    product {
                      title
                    }
                  }
                }
              }
            }
          }
          cost {
            totalAmount {
              amount
              currencyCode
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

return storefrontQuery(mutation, { merchandiseId, quantity });
}

export async function addToCart(cartId, merchandiseId, quantity = 1) {
const mutation = `     mutation AddToCart($cartId: ID!, $merchandiseId: ID!, $quantity: Int!) {
      cartLinesAdd(
        cartId: $cartId
        lines: [
          {
            merchandiseId: $merchandiseId
            quantity: $quantity
          }
        ]
      ) {
        cart {
          id
          checkoutUrl
          lines(first: 50) {
            edges {
              node {
                id
                quantity
              }
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

return storefrontQuery(mutation, { cartId, merchandiseId, quantity });
}
Example Usage - Customer Authentication:
// services/customer.js
import { storefrontQuery } from '../utils/storefrontApi';

export async function customerLogin(email, password) {
const mutation = `     mutation CustomerLogin($email: String!, $password: String!) {
      customerAccessTokenCreate(input: {
        email: $email
        password: $password
      }) {
        customerAccessToken {
          accessToken
          expiresAt
        }
        customerUserErrors {
          code
          field
          message
        }
      }
    }
  `;

return storefrontQuery(mutation, { email, password });
}

export async function getCustomerData(customerAccessToken) {
const query = `     query GetCustomer($customerAccessToken: String!) {
      customer(customerAccessToken: $customerAccessToken) {
        id
        email
        firstName
        lastName
        phone
        defaultAddress {
          address1
          city
          province
          country
          zip
        }
        orders(first: 10) {
          edges {
            node {
              id
              orderNumber
              totalPriceV2 {
                amount
                currencyCode
              }
              processedAt
            }
          }
        }
      }
    }
  `;

return storefrontQuery(query, { customerAccessToken });
} 2. Admin API Private Access Token (Backend Only)
Purpose: Administrative operations on your backend server
⚠️ NEVER use in: Client-side code or expose in frontend
Use cases:
Order management and fulfillment
Inventory updates from your backend
Webhook processing
Creating draft orders
Advanced product management
Analytics and reporting
Implementation (Node.js/Express Backend):
// backend/config/shopify.js
require('dotenv').config();

export const ADMIN_CONFIG = {
domain: process.env.SHOPIFY_DOMAIN,
adminAccessToken: process.env.SHOPIFY_ADMIN_TOKEN, // Keep in .env file!
apiVersion: '2024-01'
};

// backend/utils/adminApi.js
import { ADMIN_CONFIG } from '../config/shopify';

const adminApiUrl = `https://${ADMIN_CONFIG.domain}/admin/api/${ADMIN_CONFIG.apiVersion}/graphql.json`;

export async function adminQuery(query, variables = {}) {
const response = await fetch(adminApiUrl, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'X-Shopify-Access-Token': ADMIN_CONFIG.adminAccessToken,
},
body: JSON.stringify({ query, variables })
});

const { data, errors } = await response.json();

if (errors) {
console.error('Admin API errors:', errors);
throw new Error(errors[0].message);
}

return data;
}
Example Usage - Get Order Details (Backend):
// backend/services/orders.js
import { adminQuery } from '../utils/adminApi';

export async function getOrderById(orderId) {
const query = `     query GetOrder($id: ID!) {
      order(id: $id) {
        id
        name
        email
        createdAt
        totalPriceSet {
          shopMoney {
            amount
            currencyCode
          }
        }
        lineItems(first: 50) {
          edges {
            node {
              title
              quantity
              variant {
                id
                title
              }
            }
          }
        }
        shippingAddress {
          address1
          city
          province
          country
          zip
        }
      }
    }
  `;

return adminQuery(query, { id: orderId });
} 3. Environment Variables Setup
Frontend (.env):
REACT_APP_SHOPIFY_DOMAIN=kz9z4f-2a.myshopify.com
REACT_APP_STOREFRONT_TOKEN=your_public_storefront_token_here
REACT_APP_API_VERSION=2024-01
Backend (.env):
SHOPIFY_DOMAIN=kz9z4f-2a.myshopify.com
SHOPIFY_ADMIN_TOKEN=your_private_admin_token_here
SHOPIFY_API_VERSION=2024-01
PORT=3001 4. Security Best Practices
✅ DO:
Use Storefront API token in your React frontend
Store Admin API token only in backend environment variables
Add .env to .gitignore
Use HTTPS for all API requests
Validate and sanitize all user inputs
Implement rate limiting on your backend
❌ DON'T:
Never commit tokens to version control
Never expose Admin API token in frontend code
Never hardcode tokens in your source code
Don't share tokens publicly 5. Token Management
Where to find your tokens:
Storefront API: Settings > Apps and sales channels > Develop apps > [Your App] > API credentials
Admin API: Same location, different section
Rotating tokens: If a token is compromised, regenerate it immediately in your Shopify admin and update your environment variables. 6. Complete React Component Example
// components/ProductList.jsx
import { useState, useEffect } from 'react';
import { getProducts } from '../services/products';
import { createCart } from '../services/cart';

export default function ProductList() {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
async function fetchProducts() {
try {
const data = await getProducts(10);
setProducts(data.products.edges);
} catch (error) {
console.error('Error fetching products:', error);
} finally {
setLoading(false);
}
}

    fetchProducts();

}, []);

const handleAddToCart = async (variantId) => {
try {
const { cartCreate } = await createCart(variantId, 1);

      if (cartCreate.userErrors.length > 0) {
        console.error('Cart errors:', cartCreate.userErrors);
        return;
      }

      // Store cart ID in localStorage
      localStorage.setItem('cartId', cartCreate.cart.id);

      // Redirect to checkout
      window.location.href = cartCreate.cart.checkoutUrl;
    } catch (error) {
      console.error('Error adding to cart:', error);
    }

};

if (loading) return <div>Loading products...</div>;

return (

<div className="product-grid">
{products.map(({ node: product }) => (
<div key={product.id} className="product-card">
<h3>{product.title}</h3>
<p>{product.description}</p>
<p className="price">
{product.priceRange.minVariantPrice.currencyCode}{' '}
{product.priceRange.minVariantPrice.amount}
</p>
<button
onClick={() => handleAddToCart(product.variants.edges[0].node.id)}
disabled={!product.availableForSale} >
{product.availableForSale ? 'Add to Cart' : 'Out of Stock'}
</button>
</div>
))}
</div>
);
}
Summary
Token Type Use In Purpose Security Level
Storefront API (Public) React Frontend Customer operations, cart, checkout Public (safe in browser)
Admin API (Private) Backend Server Only Admin operations, order management Private (never expose)
Your headless storefront architecture:
Frontend (React) → Storefront API → Products, Cart, Checkout - /Users/samarthvyas/Library/Mobile Documents/com~apple~CloudDocs/Vibe Station/Create organizational components
Backend (Node.js) → Admin API → Orders, Inventory, Webhooks - /Users/samarthvyas/Library/Mobile Documents/com~apple~CloudDocs/Vibe Station/VS Backend/shopify-api-backend
Checkout → Shopify Hosted Checkout → Payment Processing
