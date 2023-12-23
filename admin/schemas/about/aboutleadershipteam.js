// schemas/leadershipTeam.js
export default {
    name: 'leadershipTeam',
    title: 'Leadership Team Section',
    type: 'document',
    fields: [
      {
        name: 'members',
        title: 'Leadership Team Members',
        type: 'array',
        of: [
          {
            name: 'member',
            title: 'Team Member',
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Name',
                type: 'string',
              },
              {
                name: 'role',
                title: 'Role',
                type: 'string',
              },
              {
                name: 'bio',
                title: 'Biography',
                type: 'text',
              },
              {
                name: 'photo',
                title: 'Photo',
                type: 'image',
              },
            ],
          },
        ],
      },
    ],
  };
  