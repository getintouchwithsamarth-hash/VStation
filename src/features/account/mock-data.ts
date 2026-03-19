import { CustomerAddress, CustomerOrder } from './types';

export const MOCK_ADDRESSES: CustomerAddress[] = [
  {
    id: '1',
    firstName: 'Sarah',
    lastName: 'Chen',
    address1: '123 Market Street',
    address2: 'Apt 4B',
    city: 'San Francisco',
    province: 'CA',
    zip: '94103',
    country: 'United States',
    phone: '+1 (555) 123-4567',
    isDefault: true
  },
  {
    id: '2',
    firstName: 'Sarah',
    lastName: 'Chen',
    company: 'Tech Solutions Inc.',
    address1: '456 Business Plaza',
    city: 'Palo Alto',
    province: 'CA',
    zip: '94301',
    country: 'United States',
    phone: '+1 (555) 987-6543',
    isDefault: false
  }
];

export const MOCK_ORDERS: CustomerOrder[] = [
  {
    id: '1',
    orderNumber: '1024',
    createdAt: '2026-03-10T10:30:00Z',
    totalPrice: '$248.00',
    fulfillmentStatus: 'FULFILLED',
    lineItems: [
      {
        id: '1',
        title: 'Minimalist Leather Tote',
        quantity: 1,
        price: '$198.00'
      },
      {
        id: '2',
        title: 'Classic Canvas Wallet',
        quantity: 1,
        price: '$50.00'
      }
    ]
  },
  {
    id: '2',
    orderNumber: '1023',
    createdAt: '2026-03-05T14:20:00Z',
    totalPrice: '$145.00',
    fulfillmentStatus: 'UNFULFILLED',
    lineItems: [
      {
        id: '3',
        title: 'Merino Wool Scarf',
        quantity: 1,
        price: '$85.00'
      },
      {
        id: '4',
        title: 'Leather Card Holder',
        quantity: 1,
        price: '$60.00'
      }
    ]
  },
  {
    id: '3',
    orderNumber: '1022',
    createdAt: '2026-02-28T09:15:00Z',
    totalPrice: '$320.00',
    fulfillmentStatus: 'FULFILLED',
    lineItems: [
      {
        id: '5',
        title: 'Italian Leather Briefcase',
        quantity: 1,
        price: '$320.00'
      }
    ]
  },
  {
    id: '4',
    orderNumber: '1021',
    createdAt: '2026-02-15T16:45:00Z',
    totalPrice: '$180.00',
    fulfillmentStatus: 'FULFILLED',
    lineItems: [
      {
        id: '6',
        title: 'Cashmere Beanie',
        quantity: 2,
        price: '$90.00'
      }
    ]
  }
];
