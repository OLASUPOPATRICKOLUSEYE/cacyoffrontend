"use client";
// components/LeadershipTeam.tsx
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '../lib/client';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

interface Leadership {
  _id: string;
  title: string;
  subtitle: string;
  leadership?: Array<{
    name: string;
    position: string;
    photo: {
      url: string;
    };
    bio: string;
    isBioVisible: boolean; // Added property to track bio visibility
  }>;
}

const LeadershipTeam: React.FC = () => {
  const [leaderships, setLeaderships] = useState<Leadership[]>([]);

  useEffect(() => {
    const fetchLeaderships = async () => {
      try {
        // Fetch leaderships from Sanity
        const result: Leadership[] = await client.fetch('*[_type == "leadership"]');
        // Set initial visibility state for each leader
        const leadershipsWithVisibility = result.map((leadership) => ({
          ...leadership,
          leadership: leadership.leadership?.map((leader) => ({
            ...leader,
            isBioVisible: false,
          })),
        }));
        setLeaderships(leadershipsWithVisibility);
      } catch (error) {
        console.error('Error fetching leaderships from Sanity:', error);
      }
    };

    fetchLeaderships();
  }, []);

  const toggleBioVisibility = (leadershipId: string, leaderIndex: number) => {
    setLeaderships((prevLeaderships) =>
      prevLeaderships.map((leadership) => ({
        ...leadership,
        leadership: leadership.leadership?.map((leader, index) =>
          index === leaderIndex
            ? { ...leader, isBioVisible: !leader.isBioVisible }
            : leader
        ),
      }))
    );
  };

  return (
    <section id="leadership" className="px-2 bg-gradient-to-r from-gray-800 to-gray-700 py-8 md:py-12 text-white">
      <div className="container mx-auto">
        {leaderships.map((leadership) => (
          <div key={leadership._id} className="text-center mb-6 md:mb-8 ">
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold pt-10 ">{leadership.title}</h1>
            <h2 className="text-3xl md:text-3xl lg:text-xl font-bold pt-4">{leadership.subtitle}</h2>
          </div>
        ))}

        <div className="mb-6 md:mb-8">
          <div className="">
            {leaderships.map((leadership) => (
              <div key={leadership._id} className="p-4 rounded-lg">
                <div className="text-center rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {leadership.leadership && leadership.leadership.map((leader, index) => (
                    <div key={index} className='bg-gray-800 p-4 rounded-lg mb-4 md:mb-0 lg:w-full'>
                      <Image
                        src={leader.photo.url}
                        alt={leader.name}
                        width={100}
                        height={100}
                        className="object-cover rounded-full mx-auto mb-4"
                      />
                      <h4 className="text-lg font-bold uppercase mb-2 text-white">{leader.name}</h4>
                      <p className="text-gray-300 mb-2">{leader.position}</p>
                      <div className="flex items-center">
                        <p className="text-gray-100 bg-gray-700 w-full mx-auto rounded-md py-4 px-4 hover:bg-gray-900 transition-all cursor-pointer">
                          {leader.isBioVisible ? leader.bio : 'My Biography'}
                        </p>
                        <button onClick={() => toggleBioVisibility(leadership._id, index)} className="ml-2">
                          {leader.isBioVisible ? <MdArrowDropUp /> : <MdArrowDropDown />}
                        </button>
                      </div>
                    </div>
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

export default LeadershipTeam;