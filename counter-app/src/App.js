import React, {useState} from 'react';

function App() {
  
  // Задача - useMemo - кеширование при вычислениях
  const [number, setNumber] = useState(42);

  function complexCompute(num) {
    let i = 0;
    while (i <1000000000){
      i++;
    }
    // new Array(9000000).fill().map( element => )
    return num * 2;
  }
  
  const computed = complexCompute(number);

  return (
    <div>
      <h1>Calculated property: {computed}</h1>
      <button className="btn btn-success" onClick={() => setNumber(prev => prev+1)}>Add</button>
      <button className="btn btn-danger" onClick={() => setNumber(prev => prev-1)}>Delete</button>
      
    </div>
  );
}

export default App;
