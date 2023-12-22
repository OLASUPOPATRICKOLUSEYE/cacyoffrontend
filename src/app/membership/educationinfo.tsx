import React from 'react';

const EducationalBackground: React.FC = () => {
  return (
  <div className='pt-40'>
    <h1 className='text-black font-bold text-2xl text-center'>Educational Information</h1> 
    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
      <div className="sm:col-span-1">
        <label htmlFor="school-name" className="block text-sm font-medium leading-6 text-gray-900">
          School Name
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="school-name"
            id="school-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="degree" className="block text-sm font-medium leading-6 text-gray-900">
          Degree Earned
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="degree"
            id="degree"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="field-of-study" className="block text-sm font-medium leading-6 text-gray-900">
          Field of Study
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="field-of-study"
            id="field-of-study"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="graduation-year" className="block text-sm font-medium leading-6 text-gray-900">
          Graduation Year
        </label>
        <div className="mt-2">
          <input
            type="number"
            name="graduation-year"
            id="graduation-year"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="gpa" className="block text-sm font-medium leading-6 text-gray-900">
          GPA (if applicable)
        </label>
        <div className="mt-2">
          <input
            type="number"
            step="0.01"
            name="gpa"
            id="gpa"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      {/* Add more fields as needed... */}

    </div>
  </div>
  );
};

export default EducationalBackground;
