// components/MovingAnnouncements.tsx
import React from 'react';

const Announcements: React.FC = () => {
  return (
    <div className="overflow-hidden bg-gray-900 py-3 text-white">
      <div className="animate-marquee">
        <span className="inline-block px-4">Announcement 1: Important event coming up!</span>
        <span className="inline-block px-4">Announcement 2: New updates on our website.</span>
        <span className="inline-block px-4">Announcement 3: Join us for the fellowship next week.</span>
        {/* Add more announcements as needed */}
      </div>
    </div>
  );
};

export default Announcements;
