import path from 'path';
import dotenv from 'dotenv';
import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';

import { Users } from './src/payload/collections/Users';
import { Media } from './src/payload/collections/Media';
import { BlogCategories } from './src/payload/collections/BlogCategories';
import { BlogTags } from './src/payload/collections/BlogTags';
import { BlogPosts } from './src/payload/collections/BlogPosts';
import { ProductCategories } from './src/payload/collections/ProductCategories';
import { ProductTags } from './src/payload/collections/ProductTags';
import { Products } from './src/payload/collections/Products';
import { Promotions } from './src/payload/collections/Promotions';
import { Orders } from './src/payload/collections/Orders';
import { SiteSettings } from './src/payload/globals/SiteSettings';
import DashboardOverview from './src/payload/components/DashboardOverview';
import seed from './src/payload/seed';

dotenv.config();

const serverURL = process.env.PAYLOAD_PUBLIC_SERVER_URL ?? 'http://localhost:3100';
const databaseUri = process.env.DATABASE_URI ?? '';
const payloadSecret = process.env.PAYLOAD_SECRET ?? '';

if (!payloadSecret) {
  console.warn('PAYLOAD_SECRET is not set. Authentication will fail.');
}

if (!databaseUri) {
  console.warn('DATABASE_URI is not set. Payload cannot connect to Postgres.');
}

export default buildConfig({
  serverURL,
  secret: payloadSecret,
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ' | Chart Champions CMS',
      description:
        'Internal content console for managing blog articles and commerce inventory.',
    },
    components: {
      afterDashboard: [DashboardOverview],
    },
  },
  collections: [
    Users,
    Media,
    BlogCategories,
    BlogTags,
    BlogPosts,
    ProductCategories,
    ProductTags,
    Products,
    Promotions,
    Orders,
  ],
  globals: [SiteSettings],
  localization: false,
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: databaseUri,
    },
  }),
  cors: [
    process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3001',
    serverURL,
  ],
  rateLimit: {
    enabled: true,
  },
  seed,
});

