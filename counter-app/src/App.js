import React, {useState,useEffect, useRef} from 'react';

let renderCount = 1;
function App() {
  
  // Задача - посчитать сколько раз мы рендерили компонент
  // const [renderCount, setRenderCount] = useState(1);


  const [value, setValue] = useState('initial');

  useEffect( () => {
    // setRenderCount( prev => prev +1);
    renderCount++;

  });
  
  
  return (
    <div>
      <h1>Count of Render: {renderCount} </h1>
      <input onChange={e => setValue(e.target.value)} value={value} />
    </div>
  );
}

export default App;
