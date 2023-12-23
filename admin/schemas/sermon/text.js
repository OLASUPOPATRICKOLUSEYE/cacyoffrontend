// schemas/sermon.js
export default {
  name: 'text_sermon',
  title: 'Text Sermon',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'speaker',
      title: 'Speaker',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'TextSermon',
      subtitle: 'speaker',
    },
  },
};
