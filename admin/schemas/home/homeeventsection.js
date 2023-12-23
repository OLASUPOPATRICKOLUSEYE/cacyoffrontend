// schemas/event.js
export default {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required().max(100),
      },
      {
        name: 'date',
        title: 'Date',
        type: 'date',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'time',
        title: 'Time',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
        validation: (Rule) => Rule.required().max(200),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule) => Rule.max(500),
      },
    ],
    initialValue: {
      // Optional: Set default values for fields
    },
    preview: {
      select: {
        title: 'title',
        date: 'date',
        time: 'time',
        location: 'location',
      },
      prepare: ({ title, date, time, location }) => ({
        title: title,
        subtitle: `${date} | ${time} | ${location}`,
      }),
    },
  };
  