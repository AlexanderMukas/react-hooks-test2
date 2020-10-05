import React, {useState} from 'react';

function App() {
  
  // Задача - 
  const [number, setNumber] = useState(42);
  
  return (
    <div>
      <h1>Calculated property: {number}</h1>
      <button className="btn btn-success" onClick={() => setNumber(prev => prev+1)}>Add</button>
      <button className="btn btn-danger" onClick={() => setNumber(prev => prev-1)}>Delete</button>

      
    </div>
  );
}

export default App;
