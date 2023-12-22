// components/Facilities.js
import React from 'react';

const Facilities = () => {
  const facilitiesContent = {
    mainVenue: {
      name: 'Main Worship Venue',
      description: 'Our main worship venue is a welcoming space where our congregation gathers for meaningful worship services, events, and fellowship. Explore the beauty of our sanctuary designed to create a sense of reverence and community.',
    },
    additionalFacilities: [
      {
        name: 'Fellowship Hall',
        description: 'The Fellowship Hall serves as a central hub for community events, gatherings, and celebrations. It provides a versatile space for fellowship and shared meals.',
      },
      {
        name: 'Prayer Room',
        description: 'Experience a quiet and contemplative atmosphere in our dedicated Prayer Room. It is a place for personal reflection, prayer, and seeking spiritual guidance.',
      },
      // Add more facilities as needed
    ],
  };

  return (
    <section id="facilities" className="px-2 bg-gray-200 py-12">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Facilities and Meeting Spaces</h2>
          <p className="text-gray-600">Discover the spaces that enhance our worship, fellowship, and community activities.</p>
        </div>

        {/* Main Worship Venue */}
        <div className="border rounded-md overflow-hidden bg-white mb-8">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">{facilitiesContent.mainVenue.name}</h3>
            <p className="text-gray-600">{facilitiesContent.mainVenue.description}</p>
          </div>
        </div>

        {/* Additional Facilities */}
        {facilitiesContent.additionalFacilities.map((facility, index) => (
          <div key={index} className="border rounded-md overflow-hidden bg-white mb-8">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{facility.name}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;
