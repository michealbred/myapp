import { getPayload } from 'payload';

import payloadConfig from '../../payload.config';

let cachedPayloadPromise: ReturnType<typeof getPayload> | null = null;

export const getPayloadClient = () => {
  if (!cachedPayloadPromise) {
    cachedPayloadPromise = getPayload({ config: payloadConfig });
  }

  return cachedPayloadPromise;
};

