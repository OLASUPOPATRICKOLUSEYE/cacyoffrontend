// schemas/heroSection.js
export default {
    name: 'heroSection',
    title: 'Hero Section',
    type: 'document',
    fields: [
      {
        name: 'backgroundColors',
        title: 'Background Colors',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          list: [
            { title: 'Blue', value: '#3366FF' },
            // Add more color options as needed
          ],
        },
      },
      {
        name: 'welcomeMessage',
        title: 'Welcome Message',
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
          {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text',
          },
        ],
      },
      {
        name: 'ctaButton',
        title: 'Call-to-Action Button',
        type: 'object',
        fields: [
          {
            name: 'text',
            title: 'Button Text',
            type: 'string',
          },
          {
            name: 'link',
            title: 'Button Link',
            type: 'url',
          },
        ],
      },
    ],
  };
  