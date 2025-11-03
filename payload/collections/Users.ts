import type { CollectionConfig } from 'payload';

import { adminsOrSelf, isAdmin } from '../access/roles';

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    verify: true,
  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'roles', 'lastLogin', 'createdAt'],
    group: 'Administration',
    description:
      'Control access to the CMS and manage staff or customer accounts.',
  },
  access: {
    read: adminsOrSelf,
    create: isAdmin,
    update: adminsOrSelf,
    delete: isAdmin,
    unlock: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Full Name',
      required: true,
    },
    {
      name: 'roles',
      type: 'select',
      label: 'Roles',
      hasMany: true,
      required: true,
      defaultValue: ['customer'],
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Editor',
          value: 'editor',
        },
        {
          label: 'Author',
          value: 'author',
        },
        {
          label: 'Customer',
          value: 'customer',
        },
      ],
      admin: {
        description:
          'Admins can manage everything. Editors can manage content. Authors can write blog posts. Customers have read-only access to their own orders.',
      },
    },
  ],
};

