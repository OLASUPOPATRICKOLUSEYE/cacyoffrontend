// In your HomePage component
import React from 'react';
import Hero from './Hero';
import ServicesSection from './ServicesSection';
import EventsSection from './EventSection';
import SermonsSection from './SermonSection';
import CommunitySection from './CommnunitySectin';
import ConnectSection from './ConnectSection';
import ContactSection from './ContactSection';

const HomePage = () => {
  // Dummy data, replace it with actual data
  const contactSectionData = {
    form: {
      name: '',
      contact: '',
      email: '',
      message: '',
    },
    locationMap: {
      mapUrl: 'https://example.com',
    },
  };

  return (
    <>
      <Hero />
      <ServicesSection />
      <EventsSection />
      <SermonsSection />
      <CommunitySection />
      <ConnectSection />
      <ContactSection contactSectionData={contactSectionData} />
    </>
  );
};

export default HomePage;
