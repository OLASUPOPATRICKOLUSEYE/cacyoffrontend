// components/Mission.tsx
"use client";
import React, { useEffect, useState } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../lib/client';

interface MissionData {
  missionImage: {
    asset: {
      url: string;
    };
  };
  missionContent: string;
}

const builder = imageUrlBuilder(client);

function urlFor(source: string | undefined): string {
  return builder.image(source ?? '').url() ?? '';
}

const Mission: React.FC = () => {
  const [missionData, setMissionData] = useState<MissionData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: MissionData | null = await client.fetch(`
          *[_type == "mission"] {
            missionImage,
            missionContent
          }[0]
        `);

        setMissionData(response);
      } catch (error) {
        console.error('Error fetching data from Sanity:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-col md:flex-row'>
      {/* Image Section for Mission */}
      <section
        id="mission-image"
        className="md:w-1/2 bg-cover bg-center h-64 md:h-80"
        style={{ backgroundImage: `url("${urlFor(missionData?.missionImage.asset.url)}")` }}
      >
        {/* Replace 'mission-image.jpg' with the actual source of your mission image */}
      </section>

      {/* Mission Section */}
      <section
        id="mission"
        className="px-2 md:w-1/2 bg-cover bg-center text-white py-16"
        style={{
          backgroundImage: 'url("/missionvission.jpeg")',
          backgroundSize: 'cover',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          minHeight: '300px',
        }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold">Mission</h2>
            <p className="text-gray-300">
              Explore the purpose and goals that guide our churchs activities and outreach.
            </p>
          </div>

          {/* Mission Content */}
          <div className="max-w-3xl mx-auto px-2">
            <p className="text-gray-300">{missionData?.missionContent}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
