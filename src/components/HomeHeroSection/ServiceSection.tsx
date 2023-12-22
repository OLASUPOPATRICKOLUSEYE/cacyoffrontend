// components/ServicesSection.js
import React from 'react';

const ServicesSection = () => {
  return (
    <section id="services" className="bg-gradient-to-l from-red-900 to-blue-900 py-12 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="text-gray-200">Join us for worship and fellowship.</p>
        </div>

        <div className="flex flex-wrap justify-center">
          {/* Schedule */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-red-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Schedule</h3>
              <ul className="list-disc ml-6">
                <li>Sunday Worship: 07:30 AM - 11:00 AM - Fellowship Hall</li>
                <li>Monday Prayer Meeting: 06:15 PM - 07:30 PM - Fellowship Hall</li>
                <li>Thursday Bible Study: 06:15 PM - 07:30 PM - Fellowship Hall</li>
                <li>Friday School Fellowship: 01:00 PM - 02:30 PM - OYSCATECH CLASSROOM 3</li>
                <li>Saturday Bible Study Preview: 01:00 PM - 03:00 PM Fellowship Hall</li>
                <li>Saturday Choir Reheasal: 03:00 PM - 05:00 PM Fellowship Hall</li>
                <li>Saturday Drama Reheasal: 05:00 PM - 07:00 PM Fellowship Hall</li>
                {/* Add more service times and locations as needed */}
              </ul>
            </div>
          </div>

          {/* Online Services */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-blue-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Online Services</h3>
              <p className="text-gray-200">
                Cant join us in person? Experience our services online through live streaming.
              </p>
              <p className="text-gray-200">
                Join us every Sunday at 9:00 AM and 11:00 AM on our website or social media platforms.
              </p>
              {/* Add any additional information about online services */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
