// frontend/client.js
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_JS_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-03-07',
  useCdn: true,
  token: process.env.NEXT_JS_APP_SANITY_TOKEN,
});

export default client;


