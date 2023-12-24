// frontend/client.js
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'inrjwceq',
  dataset: 'production',
  apiVersion: '2022-03-07',
  useCdn: true,
  token: 'skOTqBGSpzfMfvzGJzlBoYfPbZp61FOHn2EYkWY7sCQOUG5MBunDP3dSTwBpVz6H8JbPAcqnBdiNpkCmkXIwX5f5L8voQRtbiZRjO2TR5NJGob579Q2JZBv4KwWy9dbRQa39RZ98dMTZ4dSgRHWVLlJZjwAVommJ1WZuBRaxjm8Ya245eGXr',
});

export default client;


