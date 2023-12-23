// schemas/welcome.js
export default {
    name: 'welcome',
    title: 'Welcome Section',
    type: 'document',
    fields: [
      {
        name: 'heading',
        title: 'Heading',
        type: 'string',
      },
      {
        name: 'backgroundImage',
        title: 'Background Image',
        type: 'image',
        options: {
          hotspot: true, // Enable if needed
        },
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{ type: 'block' }],
      },
    ],
  };
  