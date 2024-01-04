// schemas/video_sermon.js
export default {
  name: 'video_sermon',
  title: 'Video Sermon',
  type: 'document',
  fields: [
    {
      name: 'sermons',
      title: 'Sermons',
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
              name: 'author',
              title: 'Author',
              type: 'string',
            },
            {
              name: 'date',
              title: 'Date',
              type: 'date',
            },
            {
              name: 'video',
              title: 'Video',
              type: 'file',
              options: {
                accept: 'video/*',
              },
              fields: [
                {
                  name: 'url',
                  type: 'url',
                  title: 'URL',
                },
              ],
            },
          ],
        },
      ],
      description: 'Add multiple sermons with associated information and videos',
    },
  ],
  preview: {
    select: {
      title: 'sermons.0.title', // Display the title of the first sermon in the preview
      subtitle: 'sermons.0.author', // Display the author of the first sermon in the preview
    },
  },
};
