// DonationPage.js
import React from 'react';

const donation = () => {
  return (
    <div className="pt-28 bg-gradient-to-r from-gray-400 to-gray-800 py-16 mt-20 min-h-screen flex items-center justify-center px-2">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Make a Donation</h2>

        <form>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-600">
              Donation Amount (USD):
            </label>
            <input type="number" id="amount" name="amount" className="mt-1 p-2 w-full border rounded" required />
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Full Name:
            </label>
            <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded" required />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email:
            </label>
            <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded" required />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
              Message (optional):
            </label>
            <textarea id="message" name="message" className="mt-1 p-2 w-full border rounded"></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Make Donation
          </button>
        </form>
      </div>
    </div>
  );
};

export default donation;
