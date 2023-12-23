// schemas/personalInfo.js
export default {
    name: 'personalInfo',
    title: 'Personal Information',
    type: 'document',
    fields: [
      { name: 'firstName', title: 'First Name', type: 'string' },
      { name: 'lastName', title: 'Last Name', type: 'string' },
      { name: 'gender', title: 'Gender', type: 'string', options: { list: ['male', 'female', 'other'] } },
      { name: 'email', title: 'Email Address', type: 'string' },
      { name: 'phone', title: 'Phone Number', type: 'string' },
      { name: 'dateOfBirth', title: 'Date of Birth', type: 'date' },
      { name: 'address', title: 'Address', type: 'text' },
      { name: 'maritalStatus', title: 'Marital Status', type: 'string', options: { list: ['single', 'married', 'divorced', 'widowed'] } },
      { name: 'occupation', title: 'Occupation', type: 'string' },
      { name: 'education', title: 'Highest Education Level', type: 'string', options: { list: ['high-school', 'associate', 'bachelor', 'master', 'doctorate'] } },
      // Add more fields as needed...
    ],
  };
  