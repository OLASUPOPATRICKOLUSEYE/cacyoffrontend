"use client";
// /src/components/HomeHeroSection/HeroSection.tsx
import React from 'react';

const backgroundColors = ['#3366FF'];

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section relative h-screen py-32">
      {backgroundColors.map((color, index) => (
        <div
          key={index}
          className={`bg-${color} bg-cover bg-center h-full flex flex-col justify-center items-center text-white`}
        >
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>

          {/* Welcome Message */}
          <div className="text-center relative z-10 pt-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Christ Apostolic Campus Youth Fellowship
            </h1>
            <p className="text-lg md:text-xl mb-6">
              CACYOF OYSCATECH IGBOORA CHAPTER
            </p>
            <p className="text-lg md:text-xl mb-6 px-2">
              A place of warmth, connection, and spiritual growth.
            </p>
          </div>

          {/* Call to Action Button */}
          <a
            href="#"
            className="mt-4 px-6 py-3 bg-gray-900 text-white font-bold rounded transition duration-300 hover:bg-gray-300 hover:text-black relative z-10"
          >
            Plan Your Visit
          </a>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
