import React from 'react';

const ChurchHistory = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <section id="churchhistory-image" className="md:w-1/2 bg-cover bg-center h-80 md:h-80" style={{ backgroundImage: 'url("/images/image3.jpg")' }}>
        {/* Replace 'mission-image.jpg' with the actual source of your mission image */}
      </section>

      {/* Church History Section */}
      <section
        id="church-history"
        className="px-2 md:w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16"
      >
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold">Church History</h2>
            <p className="text-gray-300">
              Discover the journey that has shaped our church into the community it is today.
            </p>
          </div>

          {/* Church History Content */}
          <div className="max-w-3xl mx-auto px-2">
            <p className="text-gray-300">
              [Your Church/Fellowship Name] has a rich history that began with [founders name] in [year of founding]. Since our humble beginnings, we have grown into a thriving community dedicated to worship, fellowship, and service.
            </p>

            <p className="text-gray-300 mt-4">
              Throughout the years, we have celebrated numerous milestones, faced challenges, and experienced significant events that have contributed to the unique identity of our church. From [mention key events] to [highlight other milestones], each moment has played a vital role in shaping who we are today.
            </p>

            <p className="text-gray-300 mt-4">
              Our commitment to faith, unity, and service has been unwavering. As we reflect on our journey, we express gratitude for the support of our members and the guidance of [spiritual leaders]. Together, we look forward to continuing our mission of [mention your mission] and serving the community with love and compassion.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ChurchHistory;
