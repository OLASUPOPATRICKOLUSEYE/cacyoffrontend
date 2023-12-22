"use client";
// components/ContactSection.js
import React from 'react';

const ContactSection = () => {
  // Dummy state for form fields
  const [formData, setFormData] = React.useState({
    name: '',
    contact: '',
    email: '',
    message: '',
  });

  // Handler for form field changes
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handler for form submission (replace with your form submission logic)
  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., API call)
    console.log('Form submitted:', formData);
    // Reset form fields
    setFormData({
      name: '',
      contact: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="px-2 bg-gradient-to-r from-green-500 to-teal-500 py-12 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="text-gray-200">Get in touch with us for inquiries or prayer requests.</p>
        </div>

        {/* Contact Form */}
        <div className="mb-8 p-6 bg-white rounded-md shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-blue-900">Contact Form</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-800">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800">Your Phone Number</label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-800">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"              
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-900 font-bold text-white px-4 py-2 rounded hover:bg-blue-800 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Location Map */}
        <div className="p-6 bg-white rounded-md shadow-md">
          <h3 className="text-2xl text-blue-900 font-bold mb-4">Fellowship Location Map</h3>
          {/* Add your embedded map component here */}
          <iframe
              title="Church Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.432458708582!2d3.299081573926725!3d7.417297012134138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a427ce0e3fff1%3A0xb81fc41e48f5b5e1!2sIgbo-Ora%20High%20School!5e0!3m2!1sen!2sng!4v1702061635301!5m2!1sen!2sng"
              width="100%"
              height="300"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
