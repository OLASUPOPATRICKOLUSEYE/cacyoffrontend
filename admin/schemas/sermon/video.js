// schemas/sermon.js
export default {
    name: 'video_sermon',
    title: 'Video Sermon',
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
        name: 'videoSrc',
        title: 'Video Source',
        type: 'file',
        options: {
          accept: 'video/*',
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
  