// schemas/statementOfFaith.js
export default {
    name: 'statementOfFaith',
    title: 'Statement of Faith',
    type: 'document',
    fields: [
      {
        name: 'coreBeliefs',
        title: 'Core Beliefs',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'doctrinalStance',
        title: 'Doctrinal Stance',
        type: 'array',
        of: [{ type: 'string' }],
      },
    ],
  };
  