import type { CollectionConfig } from 'payload';

import { formatSlug } from '../hooks/formatSlug';
import { isAdmin, isAdminOrEditor } from '../access/roles';

export const ProductTags: CollectionConfig = {
  slug: 'product-tags',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug'],
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
      name: 'slug',
      type: 'text',
      unique: true,
      index: true,
      hooks: {
        beforeValidate: [formatSlug('name')],
      },
    },
  ],
};

