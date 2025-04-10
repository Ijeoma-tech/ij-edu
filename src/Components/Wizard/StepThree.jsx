
import React from 'react';

const StepOne = ({ nextStep, prevStep, formData, handleChange  }) => {
  const { address, city, state, country } = formData;
  const isValid = address && city && state && country;

  return (
    <div className='wizard-container'>
      <h2>Step One: Basic Info</h2>
      <input type="text" placeholder="Address" value={address} onChange={handleChange('address')} />
      <input type="text" placeholder="City" value={city} onChange={handleChange('city')} />
      <input type="text" placeholder="State" value={state} onChange={handleChange('state')} />
      <input type="text" placeholder="Country" value={country} onChange={handleChange('country')} />
      <button onClick={nextStep} disabled={!isValid}>Continue</button>
    </div>
  );
};

export default StepOne;