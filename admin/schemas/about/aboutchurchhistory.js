// schemas/churchHistory.js

export default {
    name: 'churchHistory',
    title: 'Church History',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Church History Image',
        type: 'image',
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'text',
      },
      {
        name: 'content',
        title: 'Church History Content',
        type: 'array',
        of: [{ type: 'block' }],
      },
    ],
    preview: {
      select: {
        title: 'title',
        media: 'image',
      },
    },
  };
  