// components/CommunitySection.js
import React from 'react';
import Image from 'next/image';

const CommunitySection = () => {

    const testimonials = [
        {
          author: 'John Doe',
          content: 'Being a part of this community has truly enriched my spiritual journey. The warmth and love I experience here are unparalleled.',
        },
        {
          author: 'Jane Smith',
          content: 'The sense of belonging and fellowship in this church is incredible. I have made lifelong friends and found a second family here.',
        },
        {
          author: 'Zach Pascal',
          content: 'The sense of belonging and fellowship in this church is incredible. I have made lifelong friends and found a second family here.',
        },
        // Add more testimonials as needed
      ];
    

      const photoGalleries = [
        {
          title: 'Sunday Worship',
          images: ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image1.jpg'],
        },
        {
          title: 'Outreach Events',
          images: ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image1.jpg'],
        },
        // Add more galleries as needed
      ];

  return (
    <section id="community" className="px-2 bg-gradient-to-r from-yellow-500 to-red-500 py-8 md:py-12 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold">Community</h2>
          <p className="text-gray-200 text-sm md:text-base">Discover what our members have to say and glimpse into our community life.</p>
        </div>

        {/* Testimonials */}
        <div className="mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-red-700 p-4 rounded-lg">
                <p className="text-gray-200">{testimonial.content}</p>
                <p className="text-gray-300 mt-2">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>


        {/* Photo Galleries */}
        {photoGalleries.map((gallery, index) => (
          <div key={index} className="mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4">{gallery.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {gallery.images.map((image, imageIndex) => (
                <div key={imageIndex} className="w-full h-48 overflow-hidden rounded-lg">
                  <Image
                    src={`/images/${image}`}
                    alt={`${gallery.title} ${imageIndex + 1}`}
                    width={400} // Set your desired width
                    height={300} // Set your desired height
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
