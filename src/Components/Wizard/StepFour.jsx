
import React from 'react';

const StepFour = ({ nextStep, prevStep, formData, handleChange  }) => {
  const handleSubmit = () => {
    nextStep();
  };

  return (
    <div className='wizard-container'>
      <h2>Step Four: Review</h2>
      <h3>Personal Info</h3>
      <p>Name: {formData.firstName} {formData.lastName}</p>
      <p>Email: {formData.email}</p>

      <h3>Details</h3>
      <p>Age: {formData.age}</p>
      <p>Gender: {formData.gender}</p>

      <h3>Location</h3>
      <p>Address: {formData.address}</p>
      <p>City: {formData.city}, State: {formData.state}, Country: {formData.country}</p>

      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default StepFour;