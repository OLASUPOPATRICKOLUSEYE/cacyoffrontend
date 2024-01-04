// schemas/outreachAndCommunity.js
export default {
  name: 'outreachAndCommunity',
  title: 'Outreach And Community',
  type: 'document',
  fields: [
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'localCommunity',
          title: 'Local Community Involvement',
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
          type: 'object',
          name: 'globalOutreach',
          title: 'Global Outreach Efforts',
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
    },
  ],
};
