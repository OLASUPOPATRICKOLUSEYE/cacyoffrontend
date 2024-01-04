"use client";
// ExecutivesSection.tsx
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '../lib/client';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

interface Executive {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  presidents?: Array<{
    name: string;
    position: string;
    photo: {
      url: string;
    };
    bio: string;
    serviceYear: string;
    isBioVisible: boolean; // Added property to track bio visibility
  }>;
}

const ExecutivesSection: React.FC = () => {
  const [executives, setExecutives] = useState<Executive[]>([]);

  useEffect(() => {
    const fetchExecutives = async () => {
      try {
        // Fetch executives from Sanity
        const result: Executive[] = await client.fetch('*[_type == "executive"]');
        // Set initial visibility state for each president
        const executivesWithVisibility = result.map((executive) => ({
          ...executive,
          presidents: executive.presidents?.map((president) => ({
            ...president,
            isBioVisible: false,
          })),
        }));
        setExecutives(executivesWithVisibility);
      } catch (error) {
        console.error('Error fetching executives from Sanity:', error);
      }
    };

    fetchExecutives();
  }, []);

  const toggleBioVisibility = (executiveId: string, presidentIndex: number) => {
    setExecutives((prevExecutives) =>
      prevExecutives.map((executive) => ({
        ...executive,
        presidents: executive.presidents?.map((president, index) =>
          index === presidentIndex
            ? { ...president, isBioVisible: !president.isBioVisible }
            : president
        ),
      }))
    );
  };

  return (
    <section id="executives" className="px-2 bg-gradient-to-r from-gray-800 to-gray-700 py-8 md:py-12 text-white">
      <div className="container mx-auto">
        {executives.map((executive) => (
          <div key={executive._id} className="text-center mb-6 md:mb-8 mt-28">
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold pt-10 ">{executive.title}</h2>
            <h2 className="text-sm md:text-2xl lg:text-xl py-4">{executive.subtitle}</h2>
            <p className="text-gray-200 text-justify px-4 text-lg md:text-base pb-10">{executive.description}</p>
          </div>
        ))}

        <div className="mb-6 md:mb-8">
          <div className="">
            {executives.map((executive) => (
              <div key={executive._id} className="p-4 rounded-lg">
                <div className="text-center rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {executive.presidents && executive.presidents.map((president, index) => (
                    <div key={index} className='bg-gray-800 p-4 rounded-lg mb-4 md:mb-0 lg:w-full'>
                      {/* <div className='flex flex-col items-center bg-gray-800 p-4 rounded-lg mb-4 md:mb-0 lg:w-full'> */}
                      <Image
                        src={president.photo.url}
                        alt={president.name}
                        width={100}
                        height={100}
                        className="object-cover rounded-full mx-auto mb-4"
                      />
                      <h4 className="text-lg font-bold uppercase mb-2 text-white">{president.name}</h4>
                      <p className="text-gray-300 mb-2">{president.position}</p>
                      <p className="text-gray-300 mb-2">{president.serviceYear}</p>
                      <div className="flex items-center">
                        <p className="text-gray-100 bg-gray-700 w-full mx-auto rounded-md py-4 px-4 hover:bg-gray-900 transition-all cursor-pointer">
                          {president.isBioVisible ? president.bio : 'My Biography'}
                        </p>
                        <button onClick={() => toggleBioVisibility(executive._id, index)} className="ml-2">
                          {president.isBioVisible ? <MdArrowDropUp /> : <MdArrowDropDown />}
                        </button>
                      </div>
                    </div>
                    // </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutivesSection;
