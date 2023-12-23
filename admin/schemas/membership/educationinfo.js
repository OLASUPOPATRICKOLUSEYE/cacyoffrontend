// schemas/educationalInfo.js
export default {
    name: 'educationalInfo',
    title: 'Educational Information',
    type: 'document',
    fields: [
      { name: 'schoolName', title: 'School Name', type: 'string' },
      { name: 'degreeEarned', title: 'Degree Earned', type: 'string' },
      { name: 'fieldOfStudy', title: 'Field of Study', type: 'string' },
      { name: 'graduationYear', title: 'Graduation Year', type: 'number' },
      { name: 'gpa', title: 'GPA', type: 'number' },
      // Add more fields as needed...
    ],
  };
  