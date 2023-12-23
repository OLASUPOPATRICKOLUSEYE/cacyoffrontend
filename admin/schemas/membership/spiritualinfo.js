// schemas/spiritualInfo.js
export default {
    name: 'spiritualInfo',
    title: 'Spirituality Information',
    type: 'document',
    fields: [
      { name: 'churchName', title: 'Church Name', type: 'string' },
      { name: 'pastorsName', title: 'Pastor\'s Name', type: 'string' },
      { name: 'ministryInvolvement', title: 'Ministry Involvement', type: 'string' },
      { name: 'spiritualGifts', title: 'Spiritual Gifts', type: 'string' },
      { name: 'baptismDate', title: 'Baptism Date', type: 'date' },
      // Add more fields as needed...
    ],
  };
  