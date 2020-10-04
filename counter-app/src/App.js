import React, { useState } from 'react';

function App() {
  // hook: useState()
  const [counter, setCounter] = useState( 0 )
  
  function increment() {
    setCounter(counter+1);
  };

  function decrement() {
    setCounter(counter-1);
  };


  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button 
        className="btn btn-success"
        onClick={increment}
      > Add
      </button>
      <button 
        className="btn btn-danger"
        onClick={decrement}
      >Delete
      </button> 
    </div>
  );
}

export default App;
