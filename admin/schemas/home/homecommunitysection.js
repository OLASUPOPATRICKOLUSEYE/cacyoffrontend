// schemas/communitySection.js
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
            { name: 'content', title: 'Content', type: 'text' },
            { name: 'author', title: 'Author', type: 'string' },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                  description: 'Alternative text for screen readers',
                  options: {
                    isHighlighted: true,
                  },
                },
                {
                  name: 'url',
                  type: 'url',
                  title: 'URL',
                },
              ],
            },
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
              of: [
                {
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    {
                      name: 'alt',
                      title: 'Alt Text',
                      type: 'string',
                      description: 'Alternative text for screen readers',
                      options: {
                        isHighlighted: true,
                      },
                    },
                    {
                      name: 'url',
                      type: 'url',
                      title: 'URL',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
