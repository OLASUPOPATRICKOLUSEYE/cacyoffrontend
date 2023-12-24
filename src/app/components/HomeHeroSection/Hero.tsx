"use client"
// /src/components/HomeHeroSection/HeroSection.tsx
import React, { useEffect, useState } from 'react';
import sanityClient from '../../lib/sanityClient';

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
        const result = await sanityClient.fetch<HeroSectionData>('*[_type == "heroSection"][0]');
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
    <div className="hero-section relative h-screen py-32">
      {backgroundColors.map((color: string, index: number) => (
        <div
          key={index}
          className={`bg-${color} bg-cover bg-center h-full flex flex-col justify-center items-center text-white`}
        >
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>

          <div className="text-center relative z-10 pt-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{welcomeMessage.title}</h1>
            <p className="text-lg md:text-xl mb-6">{welcomeMessage.subtitle}</p>
            <p className="text-lg md:text-xl mb-6 px-2">{welcomeMessage.description}</p>
          </div>

          <a
            href={ctaButton.link}
            className="mt-4 px-6 py-3 bg-gray-900 text-white font-bold rounded transition duration-300 hover:bg-gray-300 hover:text-black relative z-10"
          >
            {ctaButton.text}
          </a>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
