// schemas/outreachAndCommunity.js
export default {
    name: 'outreachAndCommunity',
    title: 'Our Involvement',
    type: 'document',
    fields: [
      {
        name: 'localCommunity',
        title: 'Local Community Involvement',
        type: 'object',
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
            name: 'activities',
            title: 'Activities',
            type: 'array',
            of: [{ type: 'string' }],
          },
        ],
      },
      {
        name: 'globalOutreach',
        title: 'Global Outreach Efforts',
        type: 'object',
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
            name: 'initiatives',
            title: 'Initiatives',
            type: 'array',
            of: [{ type: 'string' }],
          },
        ],
      },
    ],
  };
  