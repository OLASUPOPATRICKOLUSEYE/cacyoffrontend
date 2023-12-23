// schemas/facilities.js
export default {
    name: 'facilities',
    title: 'Facilities Section',
    type: 'document',
    fields: [
      {
        name: 'mainVenue',
        title: 'Main Worship Venue',
        type: 'object',
        fields: [
          {
            name: 'name',
            title: 'Name',
            type: 'string',
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text',
          },
        ],
      },
      {
        name: 'additionalFacilities',
        title: 'Additional Facilities',
        type: 'array',
        of: [
          {
            name: 'facility',
            title: 'Facility',
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Name',
                type: 'string',
              },
              {
                name: 'description',
                title: 'Description',
                type: 'text',
              },
            ],
          },
        ],
      },
    ],
  };
  