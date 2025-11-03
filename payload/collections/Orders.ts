import { randomUUID } from 'crypto';
import type { CollectionConfig, FieldHook } from 'payload';

import { isAdmin, ownerOrAdmin } from '../access/roles';

const ensureOrderNumber: FieldHook = (args) => {
  const { value } = args;

  if (typeof value === 'string' && value.length > 0) {
    return value;
  }

  return `ORD-${randomUUID().split('-')[0].toUpperCase()}`;
};

export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'orderNumber',
    defaultColumns: [
      'orderNumber',
      'email',
      'paymentStatus',
      'financials.total',
      'createdAt',
    ],
    group: 'Commerce',
    description:
      'Track completed purchases, fulfillment status, and payment history.',
  },
  access: {
    read: ownerOrAdmin('customer'),
    create: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'orderNumber',
      type: 'text',
      unique: true,
      required: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [ensureOrderNumber],
      },
    },
    {
      name: 'customer',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'lineItems',
      label: 'Line Items',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'product',
          type: 'relationship',
          relationTo: 'products',
          required: true,
        },
        {
          name: 'productName',
          type: 'text',
          required: true,
        },
        {
          name: 'variantName',
          type: 'text',
        },
        {
          name: 'sku',
          type: 'text',
        },
        {
          name: 'quantity',
          type: 'number',
          min: 1,
          required: true,
        },
        {
          name: 'unitPrice',
          type: 'number',
          min: 0,
          required: true,
        },
        {
          name: 'subtotal',
          type: 'number',
          min: 0,
          required: true,
        },
      ],
    },
    {
      name: 'financials',
      type: 'group',
      label: 'Financial Summary',
      fields: [
        {
          name: 'subtotal',
          type: 'number',
          min: 0,
          required: true,
        },
        {
          name: 'discountTotal',
          type: 'number',
          min: 0,
          defaultValue: 0,
        },
        {
          name: 'shippingTotal',
          type: 'number',
          min: 0,
          defaultValue: 0,
        },
        {
          name: 'taxTotal',
          type: 'number',
          min: 0,
          defaultValue: 0,
        },
        {
          name: 'total',
          type: 'number',
          min: 0,
          required: true,
        },
        {
          name: 'currency',
          type: 'text',
          defaultValue: 'USD',
        },
      ],
    },
    {
      name: 'paymentStatus',
      type: 'select',
      defaultValue: 'pending',
      options: [
        {
          label: 'Pending',
          value: 'pending',
        },
        {
          label: 'Authorized',
          value: 'authorized',
        },
        {
          label: 'Paid',
          value: 'paid',
        },
        {
          label: 'Refunded',
          value: 'refunded',
        },
        {
          label: 'Failed',
          value: 'failed',
        },
      ],
    },
    {
      name: 'fulfillmentStatus',
      type: 'select',
      defaultValue: 'unfulfilled',
      options: [
        {
          label: 'Unfulfilled',
          value: 'unfulfilled',
        },
        {
          label: 'In Progress',
          value: 'in-progress',
        },
        {
          label: 'Shipped',
          value: 'shipped',
        },
        {
          label: 'Delivered',
          value: 'delivered',
        },
        {
          label: 'Cancelled',
          value: 'cancelled',
        },
      ],
    },
    {
      name: 'transactions',
      type: 'array',
      admin: {
        description: 'Append events from your payment processor webhooks.',
      },
      fields: [
        {
          name: 'externalId',
          type: 'text',
        },
        {
          name: 'event',
          type: 'text',
        },
        {
          name: 'amount',
          type: 'number',
        },
        {
          name: 'processedAt',
          type: 'date',
        },
        {
          name: 'raw',
          type: 'json',
        },
      ],
    },
    {
      name: 'shippingAddress',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'line1',
          type: 'text',
        },
        {
          name: 'line2',
          type: 'text',
        },
        {
          name: 'city',
          type: 'text',
        },
        {
          name: 'state',
          type: 'text',
        },
        {
          name: 'postalCode',
          type: 'text',
        },
        {
          name: 'country',
          type: 'text',
        },
      ],
    },
    {
      name: 'billingAddress',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'line1',
          type: 'text',
        },
        {
          name: 'line2',
          type: 'text',
        },
        {
          name: 'city',
          type: 'text',
        },
        {
          name: 'state',
          type: 'text',
        },
        {
          name: 'postalCode',
          type: 'text',
        },
        {
          name: 'country',
          type: 'text',
        },
      ],
    },
    {
      name: 'notes',
      type: 'textarea',
    },
  ],
};

