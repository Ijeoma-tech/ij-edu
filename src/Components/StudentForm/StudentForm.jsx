
import React, { useState } from "react";
const StudentForm = ({ addStudent }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [className, setClassName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName && lastName && dob && className) {
      addStudent({ firstName, lastName, dob, className });
      setFirstName("");
      setLastName("");
      setDob("");
      setClassName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <input
        type="date"
        placeholder="Date of Birth"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Class"
        value={className}
        onChange={(e) => setClassName(e.target.value)}
        required
      />
      <button type="submit">Save Student</button>
    </form>
  );
};

export default StudentForm;