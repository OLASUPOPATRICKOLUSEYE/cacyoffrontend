"use client";
// components/CommunitySection.tsx
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import client from '../../lib/client'; // Import your shared createClient instance

interface Testimonial {
  content: string;
  author: string;
  image: {
    asset: {
      url: string;
    };
    alt: string;
  };
}

interface PhotoGallery {
  title: string;
  images: {
    asset: {
      url: string;
    };
    alt: string;
  }[];
}

const CommunitySection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [photoGalleries, setPhotoGalleries] = useState<PhotoGallery[]>([]);

  useEffect(() => {
    client
      .fetch<{ testimonials: Testimonial[]; photoGalleries: PhotoGallery[] }>(
        '*[_type == "communitySection"][0]{testimonials[], photoGalleries[]}'
      )
      .then((data: any) => {
        setTestimonials(data.testimonials || []); // Initialize with an empty array
        setPhotoGalleries(data.photoGalleries || []); // Initialize with an empty array
      })
      .catch((error: any) => console.error('Error fetching community data from Sanity:', error));
  }, []);

  // Filter galleries for specific programs
  const getProgramGalleries = (programName: string) => {
    return photoGalleries.filter(gallery => gallery.title.toLowerCase().includes(programName));
  };

  const sundayServiceGalleries = getProgramGalleries('sunday service');
  const revivalGalleries = getProgramGalleries('revival');
  const anyOtherProgramGalleries = getProgramGalleries('any other programme');

  return (
    <section id="community" className="px-2 bg-gradient-to-r from-yellow-500 to-red-500 py-8 md:py-12 text-white">
      <div className="container mx-auto">
        {/* ... (rest of the component) */}
        {/* Testimonials */}
        <div className="mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-red-700 p-4 rounded-lg">
              {testimonial.image && testimonial.image.asset && (
                <Image
                  src={testimonial.image.asset.url}
                  alt={testimonial.image.alt}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              )}
              <p className="text-gray-200">{testimonial.content}</p>
              <p className="text-gray-300 mt-2">- {testimonial.author}</p>
            </div>
          ))}

          </div>
        </div>
        {/* Sunday Service Galleries */}
        {sundayServiceGalleries.map((gallery, index) => (
          <div key={index} className="mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4">{gallery.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.images && gallery.images.length > 0 && gallery.images.map((image, imageIndex) => (
              <div key={imageIndex} className="w-full h-48 overflow-hidden rounded-lg">
                <Image
                  src={image.asset.url}
                  alt={image.alt}
                  width={400}
                  height={300}
                  objectFit="cover"
                />
              </div>
            ))}
            </div>
          </div>
        ))}
        {/* Revival Galleries */}
        {revivalGalleries.map((gallery, index) => (
          <div key={index} className="mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4">{gallery.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {gallery.images && gallery.images.length > 0 && gallery.images.map((image, imageIndex) => (
              <div key={imageIndex} className="w-full h-48 overflow-hidden rounded-lg">
                <Image
                  src={image.asset.url}
                  alt={image.alt}
                  width={400}
                  height={300}
                  objectFit="cover"
                />
              </div>
            ))}
            </div>
          </div>
        ))}
        {/* Any Other Programme Galleries */}
        {anyOtherProgramGalleries.map((gallery, index) => (
          <div key={index} className="mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4">{gallery.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.images && gallery.images.length > 0 && gallery.images.map((image, imageIndex) => (
                <div key={imageIndex} className="w-full h-48 overflow-hidden rounded-lg">
                  <Image
                    src={image.asset.url}
                    alt={image.alt}
                    width={400}
                    height={300}
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunitySection;
