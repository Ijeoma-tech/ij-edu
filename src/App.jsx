import React, {useState} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/hero/hero';
import './App.css';
import Wizard from './Components/Wizard/wizard';
import './Components/Wizard/Wizard.css'


const App =() => {
  const[counter, setCounter] = useState (50);

  const incrementHandler=()=>{
setCounter ((val) => val + 1);
  }

  const decrementHandler=()=>{
setCounter((val) => val - 1 );
  }
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
    </div>

    
  )
}

export default App
