import type { Access, CollectionConfig } from 'payload';

import { isAdmin, isAdminOrAuthor } from '../access/roles';
import { formatSlug } from '../hooks/formatSlug';

const publishedOrPrivileged: Access = ({ req }) => {
  if (req.user) {
    return true;
  }

  const today = new Date().toISOString();

  return {
    and: [
      {
        status: {
          equals: 'published',
        },
      },
      {
        publishDate: {
          less_than_equal: today,
        },
      },
    ],
  };
};

export const BlogPosts: CollectionConfig = {
  slug: 'blog-posts',
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'publishDate', 'updatedAt'],
    group: 'Blog',
    description: 'Compose and schedule articles for the marketing site.',
  },
  access: {
    read: publishedOrPrivileged,
    create: isAdminOrAuthor,
    update: isAdminOrAuthor,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlug('title')],
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
          label: 'In Review',
          value: 'review',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
      admin: {
        description: 'Only published posts dated today or earlier are publicly visible.',
      },
    },
    {
      name: 'publishDate',
      label: 'Publish Date',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'author',
      label: 'Author',
      type: 'relationship',
      relationTo: 'users',
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'blog-categories',
      hasMany: true,
      admin: {
        description: 'Used for primary navigation and content filtering.',
      },
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'blog-tags',
      hasMany: true,
      admin: {
        description: 'Secondary taxonomy displayed as badges.',
      },
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Hero Image',
      required: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Summary',
      required: true,
      admin: {
        description: 'Appears on listing cards and metadata.',
      },
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Body',
      required: true,
    },
    {
      name: 'readingTime',
      type: 'number',
      label: 'Estimated Reading Time (minutes)',
      min: 1,
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Feature on homepage',
      defaultValue: false,
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Title',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Open Graph Image',
        },
      ],
    },
    {
      name: 'relatedPosts',
      type: 'relationship',
      relationTo: 'blog-posts',
      hasMany: true,
      admin: {
        description: 'Optional curated list displayed at the end of the article.',
      },
    },
  ],
};

