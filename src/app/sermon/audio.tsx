// pages/audio.tsx
import React, { useRef } from 'react';
import Video from './video';
import Text from './text';

interface Sermon {
  id: number;
  title: string;
  speaker: string;
  date: string;
  audioSrc: string;
}

const sermonsData: Sermon[] = [
  {
    id: 1,
    title: 'Sermon 1',
    speaker: 'Pastor John Doe',
    date: '2023-01-01',
    audioSrc: '/public/audio/lesson1.mp4',
  },
  {
    id: 2,
    title: 'Sermon 2',
    speaker: 'Pastor Jane Smith',
    date: '2023-02-01',
    audioSrc: '/public/audio/lesson2.mp4',
  },
  {
    id: 3,
    title: 'Sermon 3',
    speaker: 'Pastor John Doe',
    date: '2023-01-01',
    audioSrc: '/public/audio/lesson3.mp4',
  },
  {
    id: 4,
    title: 'Sermon 4',
    speaker: 'Pastor Jane Smith',
    date: '2023-02-01',
    audioSrc: '/public/audio/lesson4.mp4',
  },
  {
    id: 5,
    title: 'Sermon 5',
    speaker: 'Pastor John Doe',
    date: '2023-01-01',
    audioSrc: '/public/audio/lesson5.mp4',
  },
];

const Audio: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
        {sermonsData.map((sermon) => (
          <div
            key={sermon.id}
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
      <Video/>
      <Text/>
    </div>
  );
};

export default Audio;
