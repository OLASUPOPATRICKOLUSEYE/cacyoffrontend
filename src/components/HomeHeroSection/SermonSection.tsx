// components/SermonsSection.js
import React from 'react';

const SermonsSection = () => {
  const sermonSeries = [
    {
      title: 'Finding Hope in Adversity',
      sermons: [
        {
          title: 'Overcoming Challenges',
          speaker: 'Rev. John Doe',
          date: 'January 8, 2023',
          mediaUrl: 'https://example.com/sermon1.mp3',
        },
        {
          title: 'Faith in Difficult Times',
          speaker: 'Pastor Jane Smith',
          date: 'January 15, 2023',
          mediaUrl: 'https://example.com/sermon2.mp3',
        },
        {
            title: 'Faith in Difficult Times',
            speaker: 'Pastor Jane Smith',
            date: 'January 15, 2023',
            mediaUrl: 'https://example.com/sermon2.mp3',
          },
        // Add more sermons as needed
      ],
    },
    {
      title: 'Journey through the Psalms',
      sermons: [
        {
          title: 'Psalm 23: The Lord is My Shepherd',
          speaker: 'Rev. Michael Johnson',
          date: 'January 22, 2023',
          mediaUrl: 'https://example.com/sermon3.mp3',
        },
        {
          title: 'Psalm 51: A Prayer for Forgiveness',
          speaker: 'Pastor Sarah Williams',
          date: 'January 29, 2023',
          mediaUrl: 'https://example.com/sermon4.mp3',
        },
        {
            title: 'Psalm 51: A Prayer for Forgiveness',
            speaker: 'Pastor Sarah Williams',
            date: 'January 29, 2023',
            mediaUrl: 'https://example.com/sermon4.mp3',
          },
        // Add more sermons as needed
      ],
    },
    // Add more sermon series as needed
  ];

  return (
    <section id="sermons" className="px-2 bg-gradient-to-r from-red-900 to-indigo-900 py-12 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold">Sermons</h2>
          <p className="text-gray-200">Explore our sermons and find inspiration.</p>
        </div>

        {sermonSeries.map((series, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-2xl font-bold mb-4">{series.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

              {series.sermons.map((sermon, sermonIndex) => (
                <div key={sermonIndex} className="bg-indigo-900 p-4 rounded-lg">
                  <h4 className="text-lg font-bold mb-2">{sermon.title}</h4>
                  <p className="text-gray-200">
                    <span className="font-bold">Speaker:</span> {sermon.speaker}<br />
                    <span className="font-bold">Date:</span> {sermon.date}<br />
                  </p>
                  <div className="mt-4">
                    {/* Media Player */}
                    <audio controls>
                      <source src={sermon.mediaUrl} type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio>

                    {/* Download Options */}
                    <div className="mt-2">
                      <a href={sermon.mediaUrl} download className="text-blue-300 hover:text-blue-100 transition duration-300">
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              ))}              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SermonsSection;
