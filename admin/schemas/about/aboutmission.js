// schemas/churchVision.js
export default {
  name: 'churchMission',
  title: 'Church Mision',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables the hotspot for cropping
      },
      fields: [
        {
          name: 'url',
          type: 'url',
          title: 'URL',
        },
      ],
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },
  ],
};
