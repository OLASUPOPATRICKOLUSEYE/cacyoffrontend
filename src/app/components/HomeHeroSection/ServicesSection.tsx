"use client";
// components/ServicesSection.tsx
import React, { useState, useEffect } from 'react';
import client from '../../lib/client'; // Import your shared createClient instance

// TypeScript Types
interface ServiceCategory {
  category: string;
  details: string;
}

interface ServicesSection {
  title: string;
  description: string;
  services: ServiceCategory[];
}

const ServicesSection: React.FC = () => {
  const [servicesData, setServicesData] = useState<ServicesSection[]>([]);

  useEffect(() => {
    const fetchServicesData = async () => {
      try {
        // Fetch services data from Sanity using the shared client instance
        const response = await client.fetch('*[_type == "servicesSection"]{title, description, services}');
        setServicesData(response);
      } catch (error) {
        console.error('Error fetching services data:', error);
      }
    };

    fetchServicesData();
  }, []);

  return (
    <section id="services" className="bg-gradient-to-l from-red-900 to-blue-900 py-12 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="text-gray-200">Join us for worship and fellowship.</p>
        </div>

        <div className="flex flex-wrap justify-center">
          {servicesData.map((section) => (
            <div key={section.title} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-red-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                <p className="text-gray-200">{section.description}</p>
                <ul className="list-disc ml-6">
                  {section.services.map((service) => (
                    <li key={service.category} className="text-gray-200">{service.category}: {service.details}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
