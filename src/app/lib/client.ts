// lib/client.js
// import { urlFor } from './client';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: 'inrjwceq',
  // projectId: process.env.NEXT_JS_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-03-07',
  useCdn: true,
  token: process.env.NEXT_JS_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export { client, builder, imageUrlBuilder, 
  // urlFor 
};
