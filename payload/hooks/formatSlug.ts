import type { FieldHook } from 'payload';
import slugify from 'slugify';

const slugOptions = {
  lower: true,
  strict: true,
  trim: true,
};

export const formatSlug = (fallbackField: string): FieldHook => {
  return (args) => {
    const { value, data, originalDoc } = args;

    if (typeof value === 'string' && value.trim().length > 0) {
      return slugify(value, slugOptions);
    }

    const source = data?.[fallbackField] ?? originalDoc?.[fallbackField];

    if (typeof source === 'string' && source.trim().length > 0) {
      return slugify(source, slugOptions);
    }

    return value;
  };
};

