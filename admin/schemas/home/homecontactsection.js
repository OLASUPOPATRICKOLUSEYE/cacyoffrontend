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
        { name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() },
        { name: 'contact', title: 'Contact Number', type: 'string', validation: (Rule) => Rule.required() },
        { name: 'email', title: 'Email', type: 'string', validation: (Rule) => Rule.required().email() },
        { name: 'message', title: 'Message', type: 'text', validation: (Rule) => Rule.required() },
      ],
    },
    {
      name: 'locationMap',
      title: 'Location Map',
      type: 'object',
      fields: [
        { name: 'mapUrl', title: 'Map URL', type: 'url', validation: (Rule) => Rule.required() },
        // Add more fields as needed for the map
      ],
    },
  ],
  initialValue: {
    // Optional: Set default values for fields
  },
  preview: {
    select: {
      title: 'title',
    },
  },
};
