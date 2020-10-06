import React, {useEffect, useMemo, useState} from 'react';

function App() {
  
  // Задача useCallback
  
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? 'blue' : 'violet'
  }

  return (
    <>
      <h1 style={styles}>Count of properties: {count}</h1>
      <button className="btn btn-success" onClick={() => setCount(prev => prev+1)}>Add</button>
      <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Change</button>
      
    </>
  );
}

export default App;
