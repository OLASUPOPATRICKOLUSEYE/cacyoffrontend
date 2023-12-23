// schemas/footer.js

export default {
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
      {
        name: 'sections',
        title: 'Sections',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Title',
                type: 'string',
              },
              {
                name: 'links',
                title: 'Links',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    fields: [
                      {
                        name: 'text',
                        title: 'Text',
                        type: 'string',
                      },
                      {
                        name: 'url',
                        title: 'URL',
                        type: 'url',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'copyright',
        title: 'Copyright',
        type: 'string',
      },
    ],
  };
  