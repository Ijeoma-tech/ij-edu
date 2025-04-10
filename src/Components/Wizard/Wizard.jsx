import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import Success from './Success';

const Wizard = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '',
    age: '', gender: '',
    address: '', city: '', state: '', country: ''
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  switch (step) {
    case 1:
      return <StepOne nextStep={nextStep} formData={formData} handleChange={handleChange} />;
    case 2:
      return <StepTwo nextStep={nextStep} prevStep={prevStep} formData={formData} handleChange={handleChange} />;
    case 3:
      return <StepThree nextStep={nextStep} prevStep={prevStep} formData={formData} handleChange={handleChange} />;
    case 4:
      return <StepFour nextStep={nextStep} prevStep={prevStep} formData={formData} />;
    case 5:
      return <Success />;
    default:
      return null;
  }
};

export default Wizard;