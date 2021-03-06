import React, {useCallback, useState} from 'react';
import ItemsList from './ItemsList';

function App() {
  
  // Задача useCallback
  
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? 'blue' : 'violet'
  }

  // generation count of elements
  // from count

  // const generateItemsFromAPI = () => {
  //   return new Array(count).fill('').map( (element, index) => `Element ${index + 1}`);
  // };

  const generateItemsFromAPI = useCallback( () => {
    return new Array(count).fill('').map( (element, index) => `Element ${index + 1}`);
  }, [count]);



  return (
    <>
      <h1 style={styles}>Count of properties: {count}</h1>
      <button className="btn btn-success" onClick={() => setCount(prev => prev+1)}>Add</button>
      <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Change</button>
      
      <ItemsList getItems={generateItemsFromAPI} />
      
    </>
  );
}

export default App;
