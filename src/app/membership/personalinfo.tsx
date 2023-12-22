import React from 'react';

const PersonalInfo: React.FC = () => {
  return (
  <div className='pt-40'>
    <h1 className='text-black font-bold text-2xl text-center'>Personal Information</h1> 
    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
      <div className="sm:col-span-1">
        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
          First Name
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="first-name"
            id="first-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
          Last Name
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="last-name"
            id="last-name"
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
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
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
          />
        </div>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
          Phone Number
        </label>
        <div className="mt-2">
          <input
            type="tel"
            name="phone"
            id="phone"
            autoComplete="tel"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="date-of-birth" className="block text-sm font-medium leading-6 text-gray-900">
          Date of Birth
        </label>
        <input
          type="date"
          name="date-of-birth"
          id="date-of-birth"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
          Address
        </label>
        <textarea
          name="address"
          id="address"
          rows={3}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        ></textarea>
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
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
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
        <label htmlFor="education" className="block text-sm font-medium leading-6 text-gray-900">
          Highest Education Level
        </label>
        <div className="mt-2">
          <select
            name="education"
            id="education"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          >
            <option value="high-school">High School</option>
            <option value="associate">Associates Degree</option>
            <option value="bachelor">Bachelors Degree</option>
            <option value="master">Masters Degree</option>
            <option value="doctorate">Doctorate</option>
          </select>
        </div>
      </div>

      {/* Add more fields as needed... */}

    </div>
  </div>
  );
};

export default PersonalInfo;
