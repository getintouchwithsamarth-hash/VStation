import type {
  CustomerAddressInput as ShopifyCustomerAddressInput,
  CustomerOrderConnection as ShopifyCustomerOrderConnection,
  CustomerProfile as ShopifyCustomerProfile
} from '../../../lib/shopify-customer';
import type { Customer, CustomerAddress, CustomerOrder } from '../types';

const formatMoney = (amount?: string | null, currencyCode?: string | null): string => {
  const parsed = Number(amount);
  if (!Number.isFinite(parsed) || !currencyCode) {
    return amount || '';
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode
  }).format(parsed);
};

export const mapCustomerProfileToAccountCustomer = (
  profile: ShopifyCustomerProfile,
  fallbackCreatedAt?: string
): Customer => ({
  id: profile.id,
  email: profile.email,
  firstName: profile.firstName || '',
  lastName: profile.lastName || '',
  phone: profile.phone || undefined,
  acceptsMarketing: false,
  createdAt: fallbackCreatedAt || new Date().toISOString()
});

export const mapCustomerProfileToAddresses = (profile: ShopifyCustomerProfile): CustomerAddress[] => {
  const defaultAddressId = profile.defaultAddress?.id || null;

  return profile.addresses.edges
    .map((edge) => edge.node)
    .filter((address): address is NonNullable<typeof address> => Boolean(address?.id))
    .map((address) => ({
      id: address.id,
      firstName: address.firstName || '',
      lastName: address.lastName || '',
      company: address.company || undefined,
      address1: address.address1 || '',
      address2: address.address2 || undefined,
      city: address.city || '',
      province: address.province || '',
      zip: address.zip || '',
      country: address.country || '',
      phone: address.phone || undefined,
      isDefault: address.id === defaultAddressId
    }));
};

export const mapCustomerOrders = (orders: ShopifyCustomerOrderConnection | null): CustomerOrder[] => {
  if (!orders) {
    return [];
  }

  return orders.edges.map((edge) => ({
    id: edge.node.id,
    orderNumber: String(edge.node.orderNumber),
    createdAt: edge.node.processedAt,
    totalPrice: formatMoney(edge.node.totalPriceV2?.amount, edge.node.totalPriceV2?.currencyCode),
    fulfillmentStatus:
      edge.node.fulfillmentStatus === 'FULFILLED' ||
      edge.node.fulfillmentStatus === 'UNFULFILLED' ||
      edge.node.fulfillmentStatus === 'PARTIALLY_FULFILLED' ||
      edge.node.fulfillmentStatus === 'CANCELLED'
        ? edge.node.fulfillmentStatus
        : 'UNFULFILLED',
    lineItems: edge.node.lineItems.edges.map((lineEdge, index) => ({
      id: `${edge.node.id}-${index}`,
      title: lineEdge.node.title,
      quantity: lineEdge.node.quantity,
      price: ''
    }))
  }));
};

export const mapAddressFormToShopifyInput = (
  address: Omit<CustomerAddress, 'id' | 'isDefault'> | CustomerAddress
): ShopifyCustomerAddressInput => ({
  firstName: address.firstName || undefined,
  lastName: address.lastName || undefined,
  company: address.company || undefined,
  address1: address.address1 || undefined,
  address2: address.address2 || undefined,
  city: address.city || undefined,
  province: address.province || undefined,
  zip: address.zip || undefined,
  country: address.country || undefined,
  phone: address.phone || undefined
});
