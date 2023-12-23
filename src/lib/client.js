// frontend/client.js
import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'inrjwceq', // replace with your Sanity project ID
  dataset: 'production', // replace with your Sanity dataset name
  apiVersion: '2023-03-04', // replace with the desired API version
  useCdn: true, // set to true if you want to enable the Content Delivery Network
  token: 'skOTqBGSpzfMfvzGJzlBoYfPbZp61FOHn2EYkWY7sCQOUG5MBunDP3dSTwBpVz6H8JbPAcqnBdiNpkCmkXIwX5f5L8voQRtbiZRjO2TR5NJGob579Q2JZBv4KwWy9dbRQa39RZ98dMTZ4dSgRHWVLlJZjwAVommJ1WZuBRaxjm8Ya245eGXr',
});

export default client;


