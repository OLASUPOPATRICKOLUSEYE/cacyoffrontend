// schemas/contactSection.js
export default {
    name: 'contactSection',
    title: 'Contact Section',
    type: 'document',
    fields: [
      {
        name: 'form',
        title: 'Contact Form',
        type: 'object',
        fields: [
          { name: 'name', title: 'Name', type: 'string' },
          { name: 'contact', title: 'Contact Number', type: 'string' },
          { name: 'email', title: 'Email', type: 'string' },
          { name: 'message', title: 'Message', type: 'text' },
        ],
      },
      {
        name: 'locationMap',
        title: 'Location Map',
        type: 'object',
        fields: [
          { name: 'mapUrl', title: 'Map URL', type: 'url' },
          // Add more fields as needed for the map
        ],
      },
    ],
  };
  