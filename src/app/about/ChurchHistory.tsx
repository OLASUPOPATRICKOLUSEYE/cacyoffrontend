// components/ChurchMissionSection.tsx
"use client";
import React, { useEffect, useState } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../lib/client';
import Image from 'next/image';

interface HistoryData {
  image: {
    asset: {
      _ref: string;
    };
  };
  title: string;
  content: string;
}

const builder = imageUrlBuilder(client);

function urlFor(source: string | undefined): string {
  return source ? builder.image(source).url() : '';
}

const ChurchHistory: React.FC = () => {
  const [historyData, setHistoryData] = useState<HistoryData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: HistoryData | null = await client.fetch(`
          *[_type == "churchHistory"] {
            image,
            title,
            content
          }[0]
        `);

        setHistoryData(response);
      } catch (error) {
        console.error('Error fetching data from Sanity:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-16 flex flex-col md:flex-row items-center bg-gray-400">
      {/* Church History Image */}
      {historyData?.image.asset._ref && (
        <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <Image
            src={urlFor(historyData.image.asset._ref)}
            alt={historyData.title}
            layout="responsive"
            width={300}
            height={300}
            objectFit="cover"
            className='rounded-md px-1'
          />
        </div>
      )}

      {/* Mission Content */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-4xl font-bold mb-4 text-white">{historyData?.title}</h2>
        <p className="text-black">{historyData?.content}</p>
      </div>
    </section>
  );
};

export default ChurchHistory;
