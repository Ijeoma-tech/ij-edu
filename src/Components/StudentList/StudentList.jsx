

import React, { useState, useEffect } from "react";

const StudentList = ({ students, editStudent, deleteStudent }) => {
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.firstName} {student.lastName} - {student.dob} - {student.className}
            <button onClick={() => editStudent(index)}>Edit</button>
            <button onClick={() => deleteStudent(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;