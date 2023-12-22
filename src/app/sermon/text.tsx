// pages/audio.tsx
import React, { useState } from 'react';

interface Sermon {
  id: number;
  title: string;
  speaker: string;
  date: string;
  content: string; // Assuming content is the text of the sermon
}

const sermonsData: Sermon[] = [
  {
    id: 1,
    title: 'Sermon 1',
    speaker: 'Pastor John Doe',
    date: '2023-01-01',
    content: 'This is the written text for Sermon 1. It might be a longer text.This is the written text for Sermon 1. It might be a longer text.This is the written text for Sermon 1. It might be a longer text.This is the written text for Sermon 1. It might be a longer text.',
  },
  {
    id: 2,
    title: 'Sermon 2',
    speaker: 'Pastor Jane Smith',
    date: '2023-02-01',
    content: 'This is the written text for Sermon 1. It might be a longer text.This is the written text for Sermon 1. It might be a longer text.This is the written text for Sermon 1. It might be a longer text.This is the written text for Sermon 1. It might be a longer text.',
  },
  // Add more sermons as needed
];

const Sermon: React.FC<{ sermon: Sermon }> = ({ sermon }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="bg-white p-4 rounded-md cursor-pointer">
      <h2 className="text-xl font-bold mb-2">{sermon.title}</h2>
      <p className="text-gray-600 mb-2">{sermon.speaker}</p>
      <p className="text-gray-600">{sermon.date}</p>
      <div className="text-gray-800 mt-2">
        {showFullText ? (
          <>
            {sermon.content}
            <button onClick={toggleFullText} className="text-blue-500 hover:underline">
              Hide
            </button>
          </>
        ) : (
          <>
            {sermon.content.slice(0, 100)} {/* Display first 100 characters */}
            {sermon.content.length > 100 && (
              <button onClick={toggleFullText} className="text-blue-500 hover:underline">
                Read More
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const Text: React.FC = () => (
  <div className="p-0 pt-10">
    <h1 className="text-3xl font-bold text-white mb-4 text-center">Text Sermons</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {sermonsData.map((sermon) => (
        <Sermon key={sermon.id} sermon={sermon} />
      ))}
    </div>
  </div>
);

export default Text;
