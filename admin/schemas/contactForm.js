// sanity/schemas/contactForm.js

export default {
    name: 'contactForm',
    title: 'Contact Form',
    type: 'document',
    fields: [
      { name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() },
      { name: 'contact', title: 'Contact Number', type: 'string', validation: (Rule) => Rule.required() },
      { name: 'email', title: 'Email', type: 'string', validation: (Rule) => Rule.required().email() },
      { name: 'message', title: 'Message', type: 'text', validation: (Rule) => Rule.required() },
    ],
    initialValue: {
      // Optional: Set default values for fields
    },
    preview: {
      select: {
        title: 'name',
      },
    },
  };
  