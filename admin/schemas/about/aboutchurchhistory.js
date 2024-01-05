// schemas/churchHistory.js
export default {
  name: 'churchHistory',
  title: 'Church History',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables the hotspot for cropping
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
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },
  ],
};
