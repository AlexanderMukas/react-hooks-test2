import React, { useState } from 'react';

function computeInitialCounter() {
  console.log('Some calculations');
  return Math.trunc(Math.random() * 20);
}

function App() {
  // hook: useState()
  const [counter, setCounter] = useState( () => computeInitialCounter() );

  // object
  const [state, setState] = useState( {
    title: 'Counter',
    date: Date.now()
  });

  function increment() {
    setCounter( (prevState) => prevState+1);
    // setCounter( (prevState) => prevState+1);
  };

  function decrement() {
    setCounter( prevState => prevState-1);
  };
  function updateTitle() {
    setState({
      title: 'New title'
    });
  };

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button className="btn btn-success" onClick={increment}>Add</button>
      <button className="btn btn-danger" onClick={decrement}>Delete</button> 

      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button className="btn btn-default" onClick={updateTitle}>Rename title</button>

    </div>
  );
}

export default App;
