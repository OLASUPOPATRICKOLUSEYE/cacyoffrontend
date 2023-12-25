"use client";
// pages/audio.tsx
import React, { useRef, useEffect, useState } from 'react';
import {client} from '../../lib/client'; // Import your shared createClient instance

interface Sermon {
  _id: string;
  title: string;
  speaker: string;
  date: string;
  audioSrc: string;
}

const SermonsSection: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [sermons, setSermons] = useState<Sermon[]>([]);

  useEffect(() => {
    const fetchSermons = async () => {
      try {
        // Fetch sermons data from Sanity using the shared client instance
        const data = await client.fetch('*[_type == "sermon"]{_id, title, speaker, date, "audioSrc": audioSrc.asset->url}');
        setSermons(data);
      } catch (error) {
        console.error('Error fetching sermons from Sanity:', error);
      }
    };

    fetchSermons();
  }, []);

  const handleSermonClick = (sermon: Sermon) => {
    // Play the audio when a sermon is clicked
    if (audioRef.current) {
      audioRef.current.src = sermon.audioSrc;
      audioRef.current.play();
    }
  };

  return (
    <div className="bg-gray-800 min-h-screen p-2 py-40">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-4xl text-white md:text-3xl lg:text-4xl font-bold">Enjoy Our Sermon</h2>
        <p className="text-gray-200 text-sm md:text-base">Listening to our sermon/messages for a great transformation</p>
      </div>

      <h1 className="text-3xl font-bold text-white mb-4 text-center pt-5">Audio Sermons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {sermons.map((sermon) => (
          <div
            key={sermon._id}
            className="bg-white p-4 rounded-md cursor-pointer"
            onClick={() => handleSermonClick(sermon)}
          >
            <h2 className="text-xl font-bold mb-2">{sermon.title}</h2>

            {/* Audio Player */}
            <audio ref={audioRef} controls src={sermon.audioSrc} className="mb-2" />

            <p className="text-gray-600 mb-2">{sermon.speaker}</p>
            <p className="text-gray-600">{sermon.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SermonsSection;
