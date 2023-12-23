// components/Mission.js
import React from 'react';

const Vision = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      {/* Image Section for Mission */}
      <section id="mission-image" className="md:w-1/2 bg-cover bg-center h-64 md:h-80" style={{ backgroundImage: 'url("/images/image1.jpg")' }}>
        {/* Replace 'mission-image.jpg' with the actual source of your mission image */}
      </section>

      {/* Mission Section */}
      <section id="mission" className="px-2 md:w-1/2 bg-cover bg-center text-white py-16" style={{ backgroundImage: 'url("/missionvission.jpeg")', backgroundSize: 'cover', backgroundColor: 'rgba(0, 0, 0, 0.5)', minHeight: '300px' }}>
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold">Mission</h2>
            <p className="text-gray-300">
              Explore the purpose and goals that guide our churchs activities and outreach.
            </p>
          </div>

          {/* Mission Content */}
          <div className="max-w-3xl mx-auto px-2">
            <p className="text-gray-300">
              At [Your Church/Fellowship Name], our mission is to [articulate your mission]. Our purpose is rooted in [core belief or value], and we strive to [specific goals or activities that support the mission].
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
