"use client";
// pages/membership.tsx
import React, { useState } from 'react';
import PersonalInfo from './personalinfo';
import EducationalBackground from './educationinfo';
import SpiritualInfo from './spiritualinfo';

const Membership: React.FC = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="container mx-auto p-4">
      {step === 1 && <PersonalInfo />}
      {step === 2 && <EducationalBackground />}
      {step === 3 && <SpiritualInfo />}

      <div className="flex justify-between py-5 font-bold">
        {step > 1 && (
          <button onClick={prevStep} className="bg-blue-900 text-white px-4 py-2 rounded">
            Previous
          </button>
        )}

        {step < 3 && (
          <button onClick={nextStep} className="bg-blue-900 text-white px-4 py-2 rounded">
            Next
          </button>
        )}

        {step === 3 && (
          <button className="bg-green-900 text-white px-4 py-2 rounded">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Membership;
