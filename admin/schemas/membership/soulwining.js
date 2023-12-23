// schema.js
export default {
    name: 'soulWinningInfo',
    title: 'Soul Winning Information',
    type: 'document',
    fields: [
      {
        name: 'fullName',
        title: 'Full Name',
        type: 'string',
      },
      {
        name: 'gender',
        title: 'Gender',
        type: 'string',
        options: {
          list: ['Male', 'Female', 'Other'],
        },
      },
      {
        name: 'dateOfBirth',
        title: 'Date of Birth',
        type: 'date',
      },
      {
        name: 'contactNumber',
        title: 'Contact Number',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email Address',
        type: 'string',
        validation: (Rule) => Rule.email(),
      },
      {
        name: 'homeAddress',
        title: 'Home Address',
        type: 'text',
      },
      {
        name: 'city',
        title: 'City',
        type: 'string',
      },
      {
        name: 'state',
        title: 'State',
        type: 'string',
      },
      {
        name: 'zipCode',
        title: 'Zip Code',
        type: 'string',
      },
      {
        name: 'country',
        title: 'Country',
        type: 'string',
      },
      {
        name: 'maritalStatus',
        title: 'Marital Status',
        type: 'string',
        options: {
          list: ['Single', 'Married', 'Divorced', 'Widowed'],
        },
      },
      {
        name: 'occupation',
        title: 'Occupation',
        type: 'string',
      },
      {
        name: 'educationalBackground',
        title: 'Educational Background',
        type: 'string',
      },
      {
        name: 'spiritualAffiliation',
        title: 'Spiritual Affiliation',
        type: 'string',
      },
      {
        name: 'languagesSpoken',
        title: 'Languages Spoken',
        type: 'string',
      },
      // Add more fields based on your form
    ],
  };
  