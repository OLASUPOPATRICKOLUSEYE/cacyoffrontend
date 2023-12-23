// schemas/mission.js
export default {
    name: 'mission',
    title: 'Mission Section',
    type: 'document',
    fields: [
      {
        name: 'missionImage',
        title: 'Mission Image',
        type: 'image',
      },
      {
        name: 'missionContent',
        title: 'Mission Content',
        type: 'text',
      },
    ],
  };
  