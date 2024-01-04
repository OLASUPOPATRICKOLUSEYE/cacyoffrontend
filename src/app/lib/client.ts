// lib/client.js
import imageUrlBuilder from '@sanity/image-url';
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'inrjwceq',
  dataset: 'production',
  apiVersion: '2022-03-07',
  useCdn: true,
  token: process.env.NEXT_JS_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

// Define urlFor here
function urlFor(source: string): any {
  return builder.image(source);
}



export { client, builder, imageUrlBuilder, urlFor };
