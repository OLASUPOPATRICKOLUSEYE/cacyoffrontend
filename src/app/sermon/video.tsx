"use client";
// pages/index.tsx
import React, { useState, useEffect, useRef } from 'react';
import { client } from '../lib/client';
import ReactPlayer from 'react-player';

interface Sermon {
  _id: string;
  sermons: {
    _key: string;
    title: string;
    author: string;
    date: string;
    video: {
      asset: {
        _ref: string;
      };
    };
  }[];
}

const Video: React.FC = () => {
  const [sermonsData, setSermonsData] = useState<Sermon[]>([]);
  const [selectedSermon, setSelectedSermon] = useState<Sermon | null>(null);

  useEffect(() => {
    const fetchSermons = async () => {
      try {
        const result: Sermon[] = await client.fetch('*[_type == "video_sermon"]');
        setSermonsData(result);
      } catch (error) {
        console.error('Error fetching sermons from Sanity:', error);
      }
    };

    fetchSermons();
  }, []);

  const handleSermonClick = (sermon: Sermon) => {
    setSelectedSermon(sermon);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectedSermon &&
      event.target instanceof Node &&
      !event.target.closest('.selected-sermon')
    ) {
      setSelectedSermon(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [selectedSermon]);

  return (
    <div className="bg-gray-800 min-h-screen p-2 py-40">
      <h1 className="text-3xl font-bold text-white mb-4 text-center pt-5">Video Sermons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {sermonsData.map((sermon) => (
          <div
            key={sermon._id}
            className={`bg-white p-4 rounded-md cursor-pointer ${
              selectedSermon === sermon ? 'selected-sermon' : ''
            }`}
            onClick={() => handleSermonClick(sermon)}
          >
            <h2 className="text-xl font-bold mb-2">{sermon.sermons[0].title}</h2>
            <p className="text-gray-600 mb-2">Author: {sermon.sermons[0].author}</p>
            <p className="text-gray-600">Date: {sermon.sermons[0].date}</p>
          </div>
        ))}
      </div>

      {/* Conditionally render selected sermon details */}
      {selectedSermon && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-white mb-2">{selectedSermon.sermons[0].title}</h2>
          <p className="text-gray-400 mb-2">Author: {selectedSermon.sermons[0].author}</p>
          <p className="text-gray-400 mb-4">Date: {selectedSermon.sermons[0].date}</p>

          {/* React Player */}
          <ReactPlayer
            url={`https://cdn.sanity.io/files/inrjwceq/production/${process.env.NEXT_JS_APP_SANITY_PROJECT_ID}/0/${selectedSermon.sermons[0].video.asset._ref}`}
            controls
            width="100%"
            height="auto"
          />
        </div>
      )}
    </div>
  );
};

export default Video;
