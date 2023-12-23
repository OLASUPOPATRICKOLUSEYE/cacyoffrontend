// schemas/donation.js
export default {
    name: 'donation',
    title: 'Donation',
    type: 'document',
    fields: [
      {
        name: 'amount',
        title: 'Amount',
        type: 'number',
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'message',
        title: 'Message',
        type: 'text',
      },
    ],
  };
  