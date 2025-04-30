import React, {useEffect, useState} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/hero/hero';
import './App.css';
import Wizard from './Components/Wizard/wizard';
import './Components/Wizard/Wizard.css'
import StudentForm from './Components/StudentForm/StudentForm';
import StudentList from './Components/StudentList/StudentList';
import './Components/StudentForm//StudentForm.css'


const App =() => {
  const[counter, setCounter] = useState (50);

  const incrementHandler=()=>{
setCounter ((val) => val + 1);
  }

  const decrementHandler=()=>{
setCounter((val) => val - 1 );
  }
const [students, setStudents] = useState([]);

useEffect(() => {
  const savedStudents = JSON.parse(localStorage.getItem("students")) || [];
  setStudents(savedStudents);
}, []);

const addStudent = (newStudent) => {
  const updatedStudents = [...students, newStudent];
  setStudents(updatedStudents);
};

const editStudent = (index) => {
  const student = students[index];
  const updatedStudents = [...students];
  updatedStudents[index] = { ...student, firstName: "Edited" }; 
  setStudents(updatedStudents);
};

const deleteStudent = (index) => {
  const updatedStudents = students.filter((_, i) => i !== index);
  setStudents(updatedStudents);
};

  return (
    <div>
      <Navbar />
      <Hero />
      <div className='app'>
      <h1>Project</h1>
      <h3>Create Increment and Decrement counter</h3>
      <div className="box">
        <button onClick={decrementHandler}>decrement</button>
        <h1>{counter}</h1>
        <button onClick={incrementHandler}>increment</button>
      </div>
     </div>
<div>    
         <Wizard />
      </div>
      <div>
 <h1 className='student-form'>Student Record Management</h1>
      <StudentForm addStudent={addStudent} />
      <StudentList
        students={students}
        editStudent={editStudent}
        deleteStudent={deleteStudent}
      />
      </div>
    </div>

    
  )
}

export default App
