// components/OutreachAndCommunity.js
import React from 'react';

const OutreachAndCommunity = () => {
  const localCommunityContent = {
    title: 'Local Community Involvement',
    description: 'At [Your Church/Fellowship Name], we are deeply committed to serving and supporting our local community. Through various initiatives and activities, we strive to make a positive impact and foster a sense of community.',
    activities: [
      'Community service projects',
      'Food drives and donations',
      'Local events and partnerships',
    ],
  };

  const globalOutreachContent = {
    title: 'Global Outreach Efforts',
    description: 'Our commitment extends beyond our local community to make a meaningful difference globally. We actively engage in outreach programs, mission trips, and partnerships with organizations to address global challenges and contribute to positive change.',
    initiatives: [
      'International mission trips',
      'Support for global humanitarian projects',
      'Partnerships with international organizations',
    ],
  };

  return (
    <section id="outreach" className="bg-gray-500 py-12 px-2">
        <h3 className="text-4xl text-center font-bold  text-white">Our Involvement</h3>
          <p className="text-gray-100 text-center pb-5">
            Our involvement is founded on the following principles:
          </p>
      <div className="container mx-auto">
        {/* Local Community Involvement */}
        <div className="border rounded-md overflow-hidden bg-white mb-8">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">{localCommunityContent.title}</h3>
            <p className="text-gray-600">{localCommunityContent.description}</p>
            <ul className="list-disc pl-6 mt-4 text-gray-600">
              {localCommunityContent.activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Global Outreach Efforts */}
        <div className="border rounded-md overflow-hidden bg-white">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">{globalOutreachContent.title}</h3>
            <p className="text-gray-600">{globalOutreachContent.description}</p>
            <ul className="list-disc pl-6 mt-4 text-gray-600">
              {globalOutreachContent.initiatives.map((initiative, index) => (
                <li key={index}>{initiative}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutreachAndCommunity;
