// ExecutivesSection.js
import React from 'react';
import Image from 'next/image';

const Gallery = () => {

  return (
    <section id="executives" className="px-2 bg-gradient-to-r from-gray-400 to-gray-800 text-white py-16 pt-28">
      <div className="container mx-auto">
        <div className="text-center mb-6 md:mb-8 mt-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Executives Gallery</h2>
          <p className="text-gray-200 text-sm md:text-base">Meet our leadership team.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">          
            <div  className="bg-gray-800 p-4 rounded-lg w-full">
              <Image
                src=""
                alt=""
                width={500} // Set your desired width in pixels
                height={500} // Set your desired height in pixels
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-bold mb-2 text-white">Name</h4>
              <p className="text-gray-300 mb-2">Position</p>
              <p className="text-gray-300 mb-2">2013</p>
              <p className="text-gray-400">Im a developer</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
