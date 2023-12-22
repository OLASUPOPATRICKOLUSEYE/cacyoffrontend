// components/Vision.js
import React from 'react';

const Vision = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      {/* Image Section for Vision */}
      <section id="vision-image" className="md:w-1/2 bg-cover bg-center h-64 md:h-80" style={{ backgroundImage: 'url("/images/image2.jpg")' }}>
        {/* Replace 'vision-image.jpg' with the actual source of your vision image */}
      </section>

      {/* Vision Section */}
      <section id="vision" className="px-2 md:w-1/2 bg-cover bg-center text-white py-16" style={{ backgroundImage: 'url("/missionvission.jpeg")', backgroundSize: 'cover', backgroundColor: 'rgba(0, 0, 0, 0.5)', minHeight: '300px' }}>
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold">Vision</h2>
            <p className="text-gray-300">
              Explore the desired outcomes that guide the future of our church.
            </p>
          </div>

          {/* Vision Content */}
          <div className="max-w-3xl mx-auto px-2">
            <p className="text-gray-300">
              We envision a [describe your vision] where [explain the desired outcome]. By living out our core values and principles, we aim to [impact or result of achieving the vision].
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
