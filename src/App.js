import React, { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(1);

  const clickEvent = () => setCounter(counter * 2)
  return (
    <div className="App">
      <button
        className='btn'
        onClick={clickEvent}>{counter} 
      </button>
      <h2>click me</h2>
    </div>
  );
}

export default App;
