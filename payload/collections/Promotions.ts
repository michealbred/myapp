import type { CollectionConfig } from 'payload';

import { isAdmin, isAdminOrEditor } from '../access/roles';
import { formatSlug } from '../hooks/formatSlug';

export const Promotions: CollectionConfig = {
  slug: 'promotions',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'code', 'discountType', 'startsAt', 'endsAt'],
    group: 'Commerce',
  },
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'code',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Typed exactly by customers during checkout.',
      },
      hooks: {
        beforeValidate: [formatSlug('name')],
      },
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'discountType',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Percentage',
          value: 'percentage',
        },
        {
          label: 'Fixed Amount',
          value: 'fixed',
        },
        {
          label: 'Free Shipping',
          value: 'free-shipping',
        },
      ],
    },
    {
      name: 'discountValue',
      type: 'number',
      min: 0,
      admin: {
        condition: (_: unknown, siblingData?: { discountType?: string }) =>
          siblingData?.discountType !== 'free-shipping',
      },
    },
    {
      name: 'appliesTo',
      type: 'relationship',
      relationTo: ['products', 'product-categories'],
      hasMany: true,
      admin: {
        description: 'Leave empty to apply to every product.',
      },
    },
    {
      name: 'startsAt',
      type: 'date',
    },
    {
      name: 'endsAt',
      type: 'date',
    },
    {
      name: 'maxUses',
      type: 'number',
      min: 0,
    },
    {
      name: 'usageCount',
      type: 'number',
      min: 0,
      defaultValue: 0,
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
};

