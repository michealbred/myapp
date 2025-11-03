declare module 'payload/config' {
  import type { Config, SanitizedConfig } from 'payload/dist/config/types.js';

  export type { Config, SanitizedConfig };

  export function buildConfig(config: Config): Promise<SanitizedConfig>;
}

declare module 'payload/types' {
  export * from 'payload/dist/types/index.js';
}
