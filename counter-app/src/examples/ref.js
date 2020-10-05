import React, {useState,useEffect, useRef} from 'react';

// let renderCount = 1;
function App() {
  
  // Задача - посчитать сколько раз мы рендерили компонент
  // const [renderCount, setRenderCount] = useState(1);
  // ref часто используют для фокуса элемента

  const [value, setValue] = useState('initial');

  const renderCount = useRef(1);

  const inputRef = useRef(null);

  const focus = () => inputRef.current.focus();

  const prevValue = useRef('');

  useEffect( () => {
    // setRenderCount( prev => prev +1);
    renderCount.current++;
    console.log(inputRef.current.value)

  });

  useEffect(  () => {
    prevValue.current = value;
  }, [value])


  
  
  return (
    <div>
      <h1>Count of Render: {renderCount.current} </h1>
      <h2>Prev value: {prevValue.current}</h2>
      <input ref={inputRef} onChange={e => setValue(e.target.value)} value={value} />

      <button className="btn btn-success" onClick={focus} >Focus</button>

    </div>
  );
}

export default App;
