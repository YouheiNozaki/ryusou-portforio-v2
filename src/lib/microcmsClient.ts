import { createClient } from 'microcms-js-sdk';

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: 'ryusou-portfolio',
  apiKey: process.env.NEXT_PUBLIC__X_API_KEY,
});
