// schemas/sermon.js
export default {
    name: 'sermon',
    title: 'Sermon',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'speaker',
        title: 'Speaker',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'date',
        title: 'Date',
        type: 'date',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'audioSrc',
        title: 'Audio Source',
        type: 'file',
        options: {
          accept: 'audio/*',
        },
        validation: (Rule) => Rule.required(),
      },
    ],
    initialValue: {
      // Optional: Set default values for fields
    },
    preview: {
      select: {
        title: 'title',
        subtitle: 'speaker',
      },
    },
  };
  