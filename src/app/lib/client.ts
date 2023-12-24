// frontend/client.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: process.env.NEXT_JS_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-03-07',
  useCdn: true,
  token: process.env.NEXT_JS_APP_SANITY_TOKEN,
});

export default client;

const builder = imageUrlBuilder(client);

export const urlFor = (source:any) => builder.image(source);
