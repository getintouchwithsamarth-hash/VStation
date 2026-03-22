import type {
  CustomerAddressInput as ShopifyCustomerAddressInput,
  CustomerOrderDetail as ShopifyCustomerOrderDetail,
  CustomerOrderConnection as ShopifyCustomerOrderConnection,
  CustomerProfile as ShopifyCustomerProfile
} from '../../../lib/shopify-customer';
import type { Customer, CustomerAddress, CustomerOrder, CustomerOrderDetail } from '../types';

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

const mapAddress = (
  address: ShopifyCustomerOrderDetail['shippingAddress'] | ShopifyCustomerOrderDetail['billingAddress']
) => {
  if (!address?.address1 || !address.city || !address.country) {
    return undefined;
  }

  return {
    name: address.name || undefined,
    address1: address.address1,
    address2: address.address2 || undefined,
    city: address.city,
    province: address.province || undefined,
    zip: address.zip || undefined,
    country: address.country,
    phone: address.phone || undefined
  };
};

export const mapCustomerOrderDetail = (order: ShopifyCustomerOrderDetail | null): CustomerOrderDetail | null => {
  if (!order) {
    return null;
  }

  return {
    id: order.id,
    name: order.name || `Order #${order.orderNumber}`,
    orderNumber: String(order.orderNumber),
    createdAt: order.processedAt,
    financialStatus: order.financialStatus || undefined,
    fulfillmentStatus: order.fulfillmentStatus || undefined,
    subtotalPrice: formatMoney(order.subtotalPrice?.amount, order.subtotalPrice?.currencyCode),
    shippingPrice: formatMoney(order.totalShippingPrice?.amount, order.totalShippingPrice?.currencyCode),
    taxPrice: formatMoney(order.totalTax?.amount, order.totalTax?.currencyCode),
    totalPrice: formatMoney(order.totalPrice?.amount, order.totalPrice?.currencyCode),
    refundedPrice: formatMoney(order.totalRefunded?.amount, order.totalRefunded?.currencyCode),
    shippingAddress: mapAddress(order.shippingAddress),
    billingAddress: mapAddress(order.billingAddress),
    discounts: order.discountApplications.nodes.map((discount) => ({
      allocationMethod: discount.allocationMethod || undefined,
      targetSelection: discount.targetSelection || undefined,
      value:
        discount.value && 'currencyCode' in discount.value
          ? formatMoney(discount.value.amount, discount.value.currencyCode)
          : discount.value && 'percentage' in discount.value
            ? `${discount.value.percentage}%`
            : ''
    })),
    fulfillments: order.successfulFulfillments.map((fulfillment) => ({
      trackingCompany: fulfillment.trackingCompany || undefined,
      tracking: fulfillment.trackingInfo.map((tracking) => ({
        number: tracking.number || undefined,
        url: tracking.url || undefined
      })),
      items: fulfillment.fulfillmentLineItems.nodes.map((item) => ({
        title: item.lineItem?.title || 'Line item',
        quantity: item.quantity,
        sku: item.lineItem?.variant?.sku || undefined
      }))
    })),
    lineItems: order.lineItems.nodes.map((lineItem, index) => ({
      id: `${order.id}-${index}`,
      title: lineItem.title,
      quantity: lineItem.quantity,
      unitPrice: formatMoney(lineItem.variant?.price?.amount, lineItem.variant?.price?.currencyCode),
      discountedTotalPrice: formatMoney(
        lineItem.discountedTotalPrice?.amount,
        lineItem.discountedTotalPrice?.currencyCode
      ),
      originalTotalPrice: formatMoney(lineItem.originalTotalPrice?.amount, lineItem.originalTotalPrice?.currencyCode),
      variantTitle: lineItem.variant?.title || undefined,
      sku: lineItem.variant?.sku || undefined,
      imageUrl: lineItem.variant?.image?.url || undefined,
      imageAlt: lineItem.variant?.image?.altText || undefined,
      productHandle: lineItem.variant?.product?.handle || undefined,
      selectedOptions: lineItem.variant?.selectedOptions || []
    })),
    statusUrl: order.statusUrl || undefined,
    customerUrl: order.customerUrl || undefined
  };
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
