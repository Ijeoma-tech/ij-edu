
import React from 'react';

const StepTwo = ({ nextStep, prevStep, formData, handleChange }) => {
  const { age, dob, gender } = formData;
  const isValid = age && dob && gender;

  return (
    <div className="wizard-container">
      <h2>Step Two: Personal Info</h2>
      <input type="number" placeholder="Age" value={age} onChange={handleChange('age')} />
      <input type="text" placeholder="Date of Birth (DD/MM/YYYY)" value={dob} onChange={handleChange('dob')} />
      <select value={gender} onChange={handleChange('gender')}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep} disabled={!isValid}>Continue</button>
    </div>
  );
};

export default StepTwo;