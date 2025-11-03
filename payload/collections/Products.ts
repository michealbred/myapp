import type { Access, CollectionConfig } from 'payload';

import { formatSlug } from '../hooks/formatSlug';
import { isAdmin, isAdminOrEditor } from '../access/roles';

const publishedProducts: Access = ({ req }) => {
  if (req.user) {
    return true;
  }

  return {
    status: {
      equals: 'published',
    },
  };
};

export const Products: CollectionConfig = {
  slug: 'products',
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: [
      'title',
      'status',
      'pricing.price',
      'inventory.stockOnHand',
      'updatedAt',
    ],
    group: 'Commerce',
  },
  access: {
    read: publishedProducts,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Product Name',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      index: true,
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Scheduled',
          value: 'scheduled',
        },
        {
          label: 'Published',
          value: 'published',
        },
        {
          label: 'Archived',
          value: 'archived',
        },
      ],
    },
    {
      name: 'summary',
      type: 'textarea',
      label: 'Short Summary',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Detailed Description',
      required: true,
    },
    {
      name: 'mediaGallery',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
      label: 'Gallery Images',
    },
    {
      name: 'pricing',
      type: 'group',
      label: 'Pricing',
      fields: [
        {
          name: 'currency',
          type: 'text',
          defaultValue: 'USD',
          admin: {
            width: '33%',
          },
        },
        {
          name: 'price',
          type: 'number',
          min: 0,
          required: true,
          admin: {
            width: '33%',
          },
        },
        {
          name: 'salePrice',
          type: 'number',
          min: 0,
          admin: {
            width: '33%',
          },
        },
      ],
    },
    {
      name: 'inventory',
      type: 'group',
      label: 'Inventory',
      admin: {
        description: 'Stock controls for manual fulfillment products.',
      },
      fields: [
        {
          name: 'track',
          type: 'checkbox',
          label: 'Track Inventory',
          defaultValue: true,
        },
        {
          name: 'stockOnHand',
          type: 'number',
          min: 0,
          admin: {
            condition: (_: unknown, siblingData?: { track?: boolean }) =>
              Boolean(siblingData?.track),
          },
        },
        {
          name: 'sku',
          type: 'text',
        },
      ],
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'product-categories',
      hasMany: true,
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'product-tags',
      hasMany: true,
    },
    {
      name: 'variants',
      label: 'Variants',
      type: 'array',
      admin: {
        description: 'Define purchasable options like size or bundles.',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Variant Name',
          required: true,
        },
        {
          name: 'sku',
          type: 'text',
        },
        {
          name: 'price',
          type: 'number',
          min: 0,
          required: true,
        },
        {
          name: 'compareAtPrice',
          type: 'number',
          min: 0,
        },
        {
          name: 'stock',
          type: 'number',
          min: 0,
        },
      ],
    },
    {
      name: 'relatedProducts',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      label: 'Feature on homepage',
      defaultValue: false,
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
  ],
};

