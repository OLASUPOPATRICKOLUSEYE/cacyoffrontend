// schemas/contact.js

export default {
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
      {
        name: 'getInTouch',
        title: 'Get in Touch',
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text',
          },
          {
            name: 'address',
            title: 'Address',
            type: 'array',
            of: [{ type: 'string' }],
          },
          {
            name: 'telephone',
            title: 'Telephone',
            type: 'string',
          },
          {
            name: 'email',
            title: 'Email',
            type: 'string',
          },
          {
            name: 'locationMap',
            title: 'Location Map',
            type: 'url',
          },
        ],
      },
      {
        name: 'contactForm',
        title: 'Contact Form',
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
          {
            name: 'formFields',
            title: 'Form Fields',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'label',
                    title: 'Label',
                    type: 'string',
                  },
                  {
                    name: 'id',
                    title: 'ID',
                    type: 'string',
                  },
                  {
                    name: 'type',
                    title: 'Type',
                    type: 'string',
                  },
                  {
                    name: 'required',
                    title: 'Required',
                    type: 'boolean',
                  },
                ],
              },
            ],
          },
          {
            name: 'submitButton',
            title: 'Submit Button',
            type: 'object',
            fields: [
              {
                name: 'text',
                title: 'Text',
                type: 'string',
              },
              {
                name: 'backgroundColor',
                title: 'Background Color',
                type: 'string',
              },
              {
                name: 'textColor',
                title: 'Text Color',
                type: 'string',
              },
            ],
          },
        ],
      },
    ],
  };
  