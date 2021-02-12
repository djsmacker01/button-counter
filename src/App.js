import React, { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(1);
  return (
    <div className="App">
      <button
        className='btn'
        onClick={() => setCounter(counter*2)}>{counter} 
      </button>
      <h2>click me</h2>
    </div>
  );
}

export default App;
