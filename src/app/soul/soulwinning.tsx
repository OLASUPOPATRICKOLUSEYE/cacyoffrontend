// "use client";
import React from 'react';

const Soul: React.FC = () => {
  return (
<div className='pt-40'>
    <h1 className='text-black text-center font-bold text-2xl'>Soul Winning Information</h1> 
    <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
      <div className="sm:col-span-1">
        <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-gray-900">
          Full Name
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="full-name"
            id="full-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
          Gender
        </label>
        <div className="mt-2">
          <select
            name="gender"
            id="gender"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="date-of-birth" className="block text-sm font-medium leading-6 text-gray-900">
          Date of Birth
        </label>
        <div className="mt-2">
          <input
            type="date"
            name="date-of-birth"
            id="date-of-birth"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="contact-number" className="block text-sm font-medium leading-6 text-gray-900">
          Contact Number
        </label>
        <div className="mt-2">
          <input
            type="tel"
            name="contact-number"
            id="contact-number"
            autoComplete="tel"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Email Address
        </label>
        <div className="mt-2">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="home-address" className="block text-sm font-medium leading-6 text-gray-900">
          Home Address
        </label>
        <div className="mt-2">
          <textarea
            name="home-address"
            id="home-address"
            rows={3}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          ></textarea>
        </div>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
          City
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="city"
            id="city"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">
          State
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="state"
            id="state"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="zip-code" className="block text-sm font-medium leading-6 text-gray-900">
          Zip Code
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="zip-code"
            id="zip-code"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
          Country
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="country"
            id="country"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="marital-status" className="block text-sm font-medium leading-6 text-gray-900">
          Marital Status
        </label>
        <div className="mt-2">
          <select
            name="marital-status"
            id="marital-status"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          >
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>
        </div>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="occupation" className="block text-sm font-medium leading-6 text-gray-900">
          Occupation
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="occupation"
            id="occupation"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="educational-background" className="block text-sm font-medium leading-6 text-gray-900">
          Educational Background
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="educational-background"
            id="educational-background"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="spiritual-affiliation" className="block text-sm font-medium leading-6 text-gray-900">
          Spiritual Affiliation
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="spiritual-affiliation"
            id="spiritual-affiliation"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="languages-spoken" className="block text-sm font-medium leading-6 text-gray-900">
          Languages Spoken
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="languages-spoken"
            id="languages-spoken"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>

      {/* Add the rest of the fields based on the provided pattern... */}

    </div>

    <div className="sm:col-span-3 flex justify-center py-5 font-bold">
        <button
          type="submit"
          className="bg-indigo-900 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 w-full"
        >
          Register
        </button>
      </div>

</div>
  );
};

export default Soul;
