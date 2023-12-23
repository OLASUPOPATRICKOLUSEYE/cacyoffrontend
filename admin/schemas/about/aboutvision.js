// schemas/mission.js
export default {
    name: 'vision',
    title: 'Vision',
    type: 'document',
    fields: [
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Enables the hotspot for cropping
        },
      },
    ],
  };
  