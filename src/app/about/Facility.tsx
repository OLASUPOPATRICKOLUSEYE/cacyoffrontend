"use client";
// components/Facilities.tsx
import React, { useEffect, useState } from 'react';
import { client } from '../lib/client';

interface Facility {
  name: string;
  description: string;
}

interface FacilitiesData {
  mainVenue: Facility;
  additionalFacilities: Facility[];
}

const Facilities: React.FC = () => {
  const [facilitiesData, setFacilitiesData] = useState<FacilitiesData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: FacilitiesData | null = await client.fetch(`
          *[_type == "facilities"][0]
        `);
        setFacilitiesData(response);
      } catch (error) {
        console.error('Error fetching data from Sanity:', error);
      }
    };

    fetchData();
  }, []);

  if (!facilitiesData) {
    // You can render a loading state here if needed
    return null;
  }

  const { mainVenue, additionalFacilities } = facilitiesData;

  return (
    <section id="facilities" className="px-2 py-12 bg-gray-200">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-4xl">{mainVenue.name}</h1>
          <p className="text-gray-600">{mainVenue.description}</p>
        </div>

        {/* Additional Facilities */}
        {additionalFacilities.map((facility, index) => (
          <div key={index} className="border rounded-md overflow-hidden bg-white mb-8">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 sm:text-3xl lg:text-3xl">{facility.name}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;
