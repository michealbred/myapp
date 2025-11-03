This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Payload CMS Admin

This repository now includes a [Payload CMS](https://payloadcms.com) instance that powers blog and e-commerce content.

### 1. Configure Environment Variables

Copy the example file and fill in your credentials:

```bash
cp .env.example .env.local
# Update PAYLOAD_SECRET (use a long random string) and DATABASE_URI
```

> **Database:** the configuration is set up for Postgres using `DATABASE_URI`. Update the value for your environment or managed provider.

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Payload Admin

```bash
npm run payload:dev
```

The admin UI is available at [`http://localhost:3100/admin`](http://localhost:3100/admin) by default. Use the built-in `users` collection to create additional administrators, editors, or authors.

### 4. Seed Sample Content (optional)

Add your own seeding script or call the REST/GraphQL APIs to populate blog posts, products, and orders. A custom seed script can be wired to `npm run payload:seed`.

### 5. Consume Content from Next.js

Use the helper in `src/lib/payload.ts` to access Payload from server components, API routes, or ISR tasks.

```ts
import { getPayloadClient } from '@/lib/payload';

export const getFeaturedProducts = async () => {
  const payload = await getPayloadClient();

  return payload.find({
    collection: 'products',
    where: { isFeatured: { equals: true } },
    limit: 8,
  });
};
```

## Collections at a Glance

- **users** ? auth-enabled collection with role-based access (`admin`, `editor`, `author`, `customer`).
- **blog-categories & blog-tags** ? taxonomies for organising articles.
- **blog-posts** ? rich text content with publishing workflow, relationships, and SEO group.
- **product-categories & product-tags** ? commerce taxonomies.
- **products** ? pricing, inventory, variants, media gallery, and SEO metadata.
- **promotions** ? coupon-like discounts with scheduling options.
- **orders** ? immutable records of customer purchases, totals, and fulfillment states.
- **media** ? shared upload bucket for images, video, and audio.
- **Site Settings (global)** ? navigation and default SEO values shared across the app.

Access control rules keep public reads limited to published content and restrict mutations to admins or editors.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment Notes

- Provision a Postgres database (e.g., Neon, Supabase, RDS) and set `DATABASE_URI`.
- Set `PAYLOAD_SECRET` and `PAYLOAD_PUBLIC_SERVER_URL` in the deployment environment.
- Ensure the admin server is reachable at `/admin` (PM2, Docker, or serverless adapter) and that media storage is persistent (S3 or similar for production).
- Update your hosting solution (Vercel, Render, Fly.io, etc.) to run `npm run payload:dev` (development) or `payload start` in production alongside the Next.js app.
