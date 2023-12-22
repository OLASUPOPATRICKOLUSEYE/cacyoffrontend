// pages/audio.tsx
import React, { useRef } from 'react';

interface Sermon {
  id: number;
  title: string;
  speaker: string;
  date: string;
  videoSrc: string; // Update property name to videoSrc
}

const sermonsData: Sermon[] = [
  {
    id: 1,
    title: 'Sermon 1',
    speaker: 'Pastor John Doe',
    date: '2023-01-01',
    videoSrc: '/video/How to Compress a Video File without Losing Quality How to Make Video Files Smaller.mp4'
  },
  {
    id: 2,
    title: 'Sermon 2',
    speaker: 'Pastor Jane Smith',
    date: '2023-02-01',
    videoSrc: '/video/How to Quickly Compress Large Video Files via VLC - GIZBOT.mp4'
  },
  {
    id: 3,
    title: 'Sermon 3',
    speaker: 'Pastor John Doe',
    date: '2023-01-01',
    videoSrc: '/video/How to reduce a video file size.mp4'
  },
  {
    id: 4,
    title: 'Sermon 4',
    speaker: 'Pastor Jane Smith',
    date: '2023-02-01',
    videoSrc: '/video/How to reduce a video file size.mp4'
  },  
];

const Video: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null); // Update ref type to HTMLVideoElement

  const handleSermonClick = (sermon: Sermon) => {
    // Play the video when a sermon is clicked
    if (videoRef.current) {
      videoRef.current.src = sermon.videoSrc; // Update property name to videoSrc
      videoRef.current.play();
    }
  };

  return (
    <div className="p-1 pt-10">
      <h1 className="text-3xl font-bold text-white mb-4 text-center">Video Sermons</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {sermonsData.map((sermon) => (
          <div
            key={sermon.id}
            className="bg-white p-4 rounded-md cursor-pointer"
            onClick={() => handleSermonClick(sermon)}
          >
            <h2 className="text-xl font-bold mb-2">{sermon.title}</h2>

            {/* Video Player */}
            <video ref={videoRef} controls src={sermon.videoSrc} className="mb-2" /> {/* Update property name to videoSrc */}

            <p className="text-gray-600 mb-2">{sermon.speaker}</p>
            <p className="text-gray-600">{sermon.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
