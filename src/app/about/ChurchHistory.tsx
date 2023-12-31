"use client"
// church-history-frontend/src/components/ChurchHistory.tsx
import React, { useEffect, useState } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../lib/client'; // Import your shared createClient instance

// Define the types for your data
interface ChurchHistoryData {
  title: string;
  subtitle: string;
  image: string;
  content: { children: { text: string }[] }[];
}

const builder = imageUrlBuilder(client);

function urlFor(source: any): string {
  return builder.image(source ?? '').url() ?? '';
}

const ChurchHistory: React.FC = () => {
  const [churchHistoryData, setChurchHistoryData] = useState<ChurchHistoryData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from Sanity
        const response: ChurchHistoryData | null = await client.fetch(`
          *[_type == "churchHistory"] {
            title,
            subtitle,
            "image": image.asset->url,
            content
          }[0]
        `);

        // Set the fetched data to state
        setChurchHistoryData(response);
      } catch (error) {
        console.error('Error fetching data from Sanity:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  return (
    <div className='flex flex-col md:flex-row'>
      <section id="churchhistory-image" className="md:w-1/2 bg-cover bg-center h-80 md:h-80" style={{ backgroundImage: `url("${churchHistoryData?.image}")` }}>
        {/* Replace 'mission-image.jpg' with the actual source of your mission image */}
      </section>

      {/* Church History Section */}
      <section id="church-history" className="px-2 md:w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold">{churchHistoryData?.title}</h2>
            <p className="text-gray-300">
              {churchHistoryData?.subtitle}
            </p>
          </div>

          {/* Church History Content */}
          <div className="max-w-3xl mx-auto px-2">
            {churchHistoryData?.content && churchHistoryData.content.map((paragraph, index) => (
              <p className="text-gray-300 mt-4" key={index}>{paragraph.children[0].text}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChurchHistory;
