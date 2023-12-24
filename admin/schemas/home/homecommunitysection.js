// sanity/schemas/communitySection.js
export default {
  name: 'communitySection',
  title: 'Community Section',
  type: 'document',
  fields: [
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'author', title: 'Author', type: 'string' },
            { name: 'content', title: 'Content', type: 'text' },
            { name: 'image', title: 'Image', type: 'image' }, // Add image field
          ],
        },
      ],
    },
    {
      name: 'photoGalleries',
      title: 'Photo Galleries',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            {
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
    },
  ],
};
