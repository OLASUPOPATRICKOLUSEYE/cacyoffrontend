// schemas/statementOfFaith.js
export default {
  name: 'statementOfFaith',
  title: 'Statement of Faith',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'subheading',
      title: 'Sub-Heading',
      type: 'string',
    },
    {
      name: 'coreBeliefs',
      title: 'Core Beliefs',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'beliefItem',
          title: 'Belief Item',
          fields: [
            {
              type: 'string',
              name: 'title',
              title: 'Title',
            },
            {
              type: 'string',
              name: 'subtitle',
              title: 'Sub-Title',
            },
            {
              type: 'text',
              name: 'content',
              title: 'Content',
            },
          ],
        },
      ],
    },
  ],
};
