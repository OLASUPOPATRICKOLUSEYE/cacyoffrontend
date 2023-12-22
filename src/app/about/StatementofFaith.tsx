// components/StatementOfFaith.js
import React from 'react';

const StatementOfFaith = () => {
  return (
    <section id="faith" className="bg-gray-900 py-12 px-2">
      <div className="container mx-auto">
        <div className="text-center mb-8 text-white">
          <h2 className="text-3xl font-bold">Statement of Faith</h2>
          <p className="text-gray-100">Our foundational beliefs and doctrinal stance.</p>
        </div>

        {/* Faith Content */}
        <div className="max-w-3xl text-white mx-auto border border-gray-300 rounded-md p-6">
          <h3 className="text-2xl font-bold mb-4">Core Beliefs</h3>
          <p className="text-white">
            At [Your Church/Fellowship Name], we hold to the following core beliefs:
          </p>

          {/* List of Beliefs */}
          <ul className="list-disc pl-6 text-white">
            <li>The inspiration and authority of the Bible as the Word of God.</li>
            <li>The existence of one God in three persons: Father, Son, and Holy Spirit.</li>
            <li>The deity of Jesus Christ, His virgin birth, sinless life, death, and resurrection.</li>
            {/* Add more beliefs as needed */}
          </ul>
        </div>

        {/* Doctrinal Stance Content */}
        <div className="max-w-3xl mx-auto border border-white rounded-md p-6 mt-8">
          <h3 className="text-2xl font-bold my-4 text-white">Doctrinal Stance</h3>
          <p className="text-gray-100">
            Our doctrinal stance is founded on the following principles:
          </p>

          {/* List of Doctrinal Principles */}
          <ul className="list-disc pl-6 text-white">
            <li>The sovereignty of God in creation, providence, and salvation.</li>
            <li>The fallen nature of humanity and the need for salvation through faith in Jesus Christ.</li>
            <li>The role of the Holy Spirit in regeneration, sanctification, and empowering believers.</li>
            {/* Add more doctrinal principles as needed */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StatementOfFaith;
