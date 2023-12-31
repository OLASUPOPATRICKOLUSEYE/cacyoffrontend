"use client"
// /src/components/HomeHeroSection/HeroSection.tsx
import React, { useEffect, useState } from 'react';
import {client} from '../../lib/client'; // Import your shared createClient instance

interface HeroSectionData {
  backgroundColors: string[];
  welcomeMessage: {
    title: string;
    subtitle: string;
    description: string;
  };
  ctaButton: {
    link: string;
    text: string;
  };
}

const HeroSection: React.FC = () => {
  const [data, setData] = useState<HeroSectionData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from Sanity using the shared client instance
        const result = await client.fetch<HeroSectionData>('*[_type == "heroSection"][0]');
        setData(result);
      } catch (error) {
        console.error('Error fetching data from Sanity:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const { backgroundColors, welcomeMessage, ctaButton } = data;

  return (
    <div className="hero-section relative min-h-full py-32">
      {backgroundColors.map((color: string, index: number) => (
        <div
          key={index}
          className={`bg-${color} bg-cover bg-center h-full flex flex-col justify-center items-center text-white`}
        >
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>

          <div className="text-center relative z-10 pt-20">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              {welcomeMessage.title}
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-4">
              {welcomeMessage.subtitle}
            </p>
            <p className="text-base md:text-lg lg:text-xl mb-4 px-2">
              {welcomeMessage.description}
            </p>
          </div>

          <a
            href={ctaButton.link}
            className="mt-4 px-4 md:px-6 py-2 md:py-3 bg-gray-900 text-white font-bold rounded transition duration-300 hover:bg-gray-300 hover:text-black relative z-10"
          >
            {ctaButton.text}
          </a>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
