import path from 'path';
import type { CollectionConfig } from 'payload';

import { isAdmin, isAdminOrEditor } from '../access/roles';

const mediaStoragePath = path.resolve(process.cwd(), 'storage', 'media');

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'filename',
    defaultColumns: ['filename', 'filesize', 'createdAt'],
    group: 'Shared',
  },
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdmin,
  },
  upload: {
    staticURL: '/media',
    staticDir: mediaStoragePath,
    mimeTypes: ['image/*', 'video/*', 'audio/*'],
  },
  fields: [
    {
      name: 'altText',
      type: 'text',
      label: 'Alt Text',
      required: true,
    },
    {
      name: 'caption',
      type: 'textarea',
      label: 'Caption',
    },
    {
      name: 'credit',
      type: 'text',
      label: 'Credit / Attribution',
    },
  ],
};

