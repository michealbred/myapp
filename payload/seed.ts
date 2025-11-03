import type { CollectionSlug, Payload } from 'payload';

const collectionsToPrime: CollectionSlug[] = [
  'blog-categories',
  'blog-tags',
  'product-categories',
  'product-tags',
];

export const seed = async (payload: Payload) => {
  for (const slug of collectionsToPrime) {
    const existing = await payload.count({ collection: slug });

    if (existing.totalDocs > 0) {
      continue;
    }

    const name = slug.replace('-', ' ');

    await payload.create({
      collection: slug,
      data: {
        name: name.replace(/\b\w/g, (char: string) => char.toUpperCase()),
      },
    });
  }
};

export default seed;

