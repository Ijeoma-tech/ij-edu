
import React from 'react';

const StepOne = ({ nextStep, formData, handleChange }) => {
  const { firstName, lastName, email } = formData;
  const isValid = firstName && lastName && email;

  return (
    <div className='wizard-container'>
      <h2>Step One: Basic Info</h2>
      <input type="text" placeholder="First Name" value={firstName} onChange={handleChange('firstName')} />
      <input type="text" placeholder="Last Name" value={lastName} onChange={handleChange('lastName')} />
      <input type="email" placeholder="Email" value={email} onChange={handleChange('email')} />
      <button onClick={nextStep} disabled={!isValid}>Continue</button>
    </div>
  );
};

export default StepOne;