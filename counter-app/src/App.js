import React, {useState,useEffect, useRef} from 'react';


function App() {
  
  // Задача - посчитать сколько раз мы рендерили компонент
  const [renderCount, setRenderCount] = useState(1);

  useEffect( () => {
    setRenderCount( prev => prev +1);

  });
  
  
  return (
    <div>
      <h1>Count of Render: {renderCount} </h1>
    </div>
  );
}

export default App;
