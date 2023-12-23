// schemas/announcement.js
export default {
    name: 'announcement',
    title: 'Announcement',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'The title of the announcement',
      },
      {
        name: 'content',
        title: 'Content',
        type: 'text',
        description: 'The content of the announcement',
      },
    ],
  };
  