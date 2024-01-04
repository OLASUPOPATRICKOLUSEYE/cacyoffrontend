"use client";
// src/components/ContactSection.tsx
import React, { useEffect, useState } from 'react';
import { client } from '../../lib/client';

interface ContactSectionProps {
  contactSectionData: {
    form?: {
      name: string;
      contact: string;
      email: string;
      message: string;
    };
    locationMap: {
      mapUrl: string;
    };
  };
}

const ContactSection: React.FC<ContactSectionProps> = ({ contactSectionData }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [highlightedField, setHighlightedField] = useState<string | null>(null);

  useEffect(() => {
    if (contactSectionData.form) {
      setFormData({
        name: contactSectionData.form.name || '',
        contact: contactSectionData.form.contact || '',
        email: contactSectionData.form.email || '',
        message: contactSectionData.form.message || '',
      });
    }
  }, [contactSectionData.form]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Use the Sanity client to store the form data
      await client.create({
        _type: 'contactSection', // Use the correct type for your document
        form: {
          ...formData,
        },
      });

      // Success UI Updates
      console.log('Form submitted successfully to Sanity!');
      setSuccessMessage('Thank you for submitting the form!');

      // Reset the form data
      setFormData({
        name: '',
        contact: '',
        email: '',
        message: '',
      });
    } catch (error) {
      // Error UI Updates
      console.error('Error submitting form to Sanity:', error);
      setErrorMessage('Form submission failed. Please try again.');
    }
  };

  return (
    <section id="contact" className="px-2 bg-gradient-to-r from-green-500 to-teal-500 py-12 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="text-gray-200">Get in touch with us for inquiries or prayer requests.</p>
        </div>

        <div className="mb-8 p-6 bg-white rounded-md shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-blue-900">Contact Form</h3>
          <form onSubmit={handleSubmit}>
          {successMessage && <p className="text-green-600">{successMessage}</p>}
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
            {contactSectionData.form && (
              <>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-800">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`text-blue-900 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
                      highlightedField === 'name' ? 'border-red-500' : ''
                    }`}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="contact" className="block text-gray-800">
                    Your Phone Number
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className={`w-full px-4 text-blue-900 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
                      highlightedField === 'contact' ? 'border-red-500' : ''
                    }`}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-800">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border text-blue-900 rounded-md focus:outline-none focus:border-blue-500 ${
                      highlightedField === 'email' ? 'border-red-500' : ''
                    }`}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-800">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 text-blue-900 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
                      highlightedField === 'message' ? 'border-red-500' : ''
                    }`}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-900 font-bold text-white px-4 py-2 rounded hover:bg-blue-800 transition duration-300"
                >
                  Submit
                </button>
              </>
            )}
          </form>
      </div>

        <div className="p-6 bg-white rounded-md shadow-md">
          <h3 className="text-2xl text-blue-900 font-bold mb-4">Fellowship Location Map</h3>
          <iframe
            title="Church Location"
            src={contactSectionData.locationMap?.mapUrl || ''}
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
