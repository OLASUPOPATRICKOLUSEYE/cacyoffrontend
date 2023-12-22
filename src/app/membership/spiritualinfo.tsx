import React from 'react';

const SpiritualInfo: React.FC = () => {
  return (
<div className='pt-40'>
    <h1 className='text-black font-bold text-2xl text-center'>Spirituality Information</h1> 
    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
      <div className="sm:col-span-1">
        <label htmlFor="church-name" className="block text-sm font-medium leading-6 text-gray-900">
          Church Name
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="church-name"
            id="church-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="pastor-name" className="block text-sm font-medium leading-6 text-gray-900">
          Pastors Name
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="pastor-name"
            id="pastor-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="ministry" className="block text-sm font-medium leading-6 text-gray-900">
          Ministry Involvement
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="ministry"
            id="ministry"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="spiritual-gifts" className="block text-sm font-medium leading-6 text-gray-900">
          Spiritual Gifts
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="spiritual-gifts"
            id="spiritual-gifts"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="baptism-date" className="block text-sm font-medium leading-6 text-gray-900">
          Baptism Date
        </label>
        <div className="mt-2">
          <input
            type="date"
            name="baptism-date"
            id="baptism-date"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      {/* Add more fields as needed... */}

    </div>
  </div>
  );
};

export default SpiritualInfo;
