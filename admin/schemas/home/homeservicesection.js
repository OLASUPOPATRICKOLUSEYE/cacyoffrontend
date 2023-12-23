// schemas/servicesSection.js
export default {
    name: 'servicesSection',
    title: 'Services Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'services',
        title: 'Services',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'category',
                title: 'Category',
                type: 'string',
              },
              {
                name: 'details',
                title: 'Details',
                type: 'text',
              },
            ],
          },
        ],
      },
    ],
  };
  