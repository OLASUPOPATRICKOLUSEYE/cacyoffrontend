// schemas/aboutleadership.js
export default {
  name: 'leadership',
  title: 'Leadership Gallery',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Sub-Title',
      type: 'string',
    },
    {
      name: 'leadership',
      title: 'Leadership',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'position',
              title: 'Position',
              type: 'string',
            },
            {
              name: 'photo',
              title: 'Photo',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'url',
                  type: 'url',
                  title: 'URL',
                },
              ],
            },
            {
              name: 'bio',
              title: 'Bio',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
};
