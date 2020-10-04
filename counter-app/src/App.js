import React, { useState } from 'react';

function App() {
  // hook: useState()
  const [counter, setCounter] = useState( 0 )
  
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button className="btn btn-success">Add</button>
      <button className="btn btn-danger">Delete</button> 
    </div>
  );
}

export default App;
