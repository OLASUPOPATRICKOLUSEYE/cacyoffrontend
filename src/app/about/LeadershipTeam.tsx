// components/LeadershipTeam.js
import React from 'react';
import Image from 'next/image';

const LeadershipTeam = () => {
  // Example data for leadership team
  const leadershipTeam = [
    {
      name: 'John Doe',
      role: 'Lead Pastor',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      photo: '/images/image1.jpg', // Replace with the actual file path
    },
    {
      name: 'Jane Smith',
      role: 'Elder',
      bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      photo: '/images/image2.jpg', // Replace with the actual file path
    },
    {
        name: 'Jane Smith',
        role: 'Elder',
        bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        photo: '/images/image2.jpg', // Replace with the actual file path
      },
    // Add more members as needed
  ];

  return (
    <section id="leadership" className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Leadership Team</h2>
          <p className="text-gray-600">Meet the leaders who guide our church community.</p>
        </div>

        {/* Leadership Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadershipTeam.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src={member.photo}
                alt={member.name}
                width={500} // Set your desired width in pixels
                height={500} // Set your desired height in pixels
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-500 mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
