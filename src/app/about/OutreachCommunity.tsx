// components/OutreachAndCommunity.tsx
"use client"
import React, { useEffect, useState } from 'react';
import { client } from '../lib/client';

interface Section {
  title: string;
  description: string;
  activities?: string[];
  initiatives?: string[];
}

interface OutreachAndCommunityData {
  sections: Section[];
}

const OutreachAndCommunity: React.FC = () => {
  const [data, setData] = useState<OutreachAndCommunityData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: OutreachAndCommunityData | null = await client.fetch(`
          *[_type == "outreachAndCommunity"][0]
        `);

        setData(response);
      } catch (error) {
        console.error('Error fetching data from Sanity:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="outreach" className="bg-white py-12 px-2">
      <h3 className="text-4xl text-center font-bold text-gray-900">Our Involvement</h3>
      <p className="text-gray-700 text-center pb-5">
        Our involvement is founded on the following principles:
      </p>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data?.sections.map((section, index) => (
          <div key={index} className="border rounded-md overflow-hidden bg-gray-200 mb-2">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{section.title}</h3>
              <p className="text-gray-700">{section.description}</p>
              {section.activities && (
                <ul className="list-disc pl-6 mt-4 text-gray-700">
                  {section.activities.map((activity, activityIndex) => (
                    <li key={activityIndex}>{activity}</li>
                  ))}
                </ul>
              )}
              {section.initiatives && (
                <ul className="list-disc pl-6 mt-4 text-gray-700">
                  {section.initiatives.map((initiative, initiativeIndex) => (
                    <li key={initiativeIndex}>{initiative}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OutreachAndCommunity;
