"use client";
// components/HomeHeroSection/Announcements.tsx
import React, { useEffect, useState } from 'react';
import sanityClient from '../../lib/sanityClient';
// import { Announcement } from '../../types'; // Adjust the import path based on your project structure

// ../../types/types.ts
export interface Announcement {
  title: string;
  content: string;
  // Add any other properties if present in your Sanity schema
}



const Announcements: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    // Example query to fetch announcements from Sanity using sanityClient
    sanityClient.fetch('*[_type == "announcement"]{title, content}')
      .then((data: Announcement[]) => {
        console.log('Fetched data:', data);  // Log the fetched data to the console
        setAnnouncements(data);
      })
      .catch((error) => console.error('Error fetching announcements:', error));
  }, []);

  return (
    <div className="overflow-hidden bg-gray-900 py-3 text-white">
      <div className="animate-marquee">
        {announcements.map((announcement) => (
          <span key={announcement.title} className="inline-block px-4">
            {announcement.title}: {announcement.content}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
