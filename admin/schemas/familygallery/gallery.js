// schemas/executive.js

export default {
    name: 'executive',
    title: 'Executive',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'position',
        title: 'Position',
        type: 'string',
      },
      {
        name: 'photo',
        title: 'Photo',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'bio',
        title: 'Bio',
        type: 'text',
      },
    ],
  };
  