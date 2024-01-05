// components/ChurchVisionSection.tsx
"use client";
import React, { useEffect, useState } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../lib/client';
import Image from 'next/image';

interface VisionData {
  image: {
    asset: {
      _ref: string;
    };
  };
  title: string;
  subtitle: string;
  content: string;
}

const builder = imageUrlBuilder(client);

function urlFor(source: string | undefined): string {
  return source ? builder.image(source).url() : '';
}

const ChurchVisionSection: React.FC = () => {
  const [visionData, setVisionData] = useState<VisionData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: VisionData | null = await client.fetch(`
          *[_type == "churchVision"] {
            image,
            title,
            subtitle,
            content
          }[0]
        `);

        setVisionData(response);
      } catch (error) {
        console.error('Error fetching data from Sanity:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-16 flex flex-col md:flex-row items-center bg-gray-400">
      {/* Vision Image */}
      {visionData?.image.asset._ref && (
        <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <Image
            src={urlFor(visionData.image.asset._ref)}
            alt={visionData.title}
            layout="responsive"
            width={300}
            height={300}
            objectFit="cover"
            className='rounded-md px-1'
          />
        </div>
      )}

      {/* Vision Content */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-4xl font-bold mb-4 text-white">{visionData?.title}</h2>
        <h3 className="text-sm font-semibold mb-10 text-white">{visionData?.subtitle}</h3>
        <p className="text-black">{visionData?.content}</p>
      </div>
    </section>
  );
};

export default ChurchVisionSection;
