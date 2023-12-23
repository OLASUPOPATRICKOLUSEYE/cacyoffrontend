// schemas/sermon.js

export default {
    name: 'audio_sermon',
    title: 'Audio Sermon',
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
        name: 'audioSrc',
        title: 'Audio Source',
        type: 'file',
        options: {
          accept: 'audio/*',
        },
      },
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'speaker',
      },
    },
  };
  