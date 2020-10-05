import React, {useState,useEffect} from 'react';


function App() {
  const [type, setType] = useState('users');

  const [data, setData] = useState( [] );

  // координаты мышки
  const [pos, setPos] = useState( {
    x: 0, y: 0
  });


  useEffect( ()=>{
    fetch(`https://jsonplaceholder.typicode.com/${type}/`)
      .then(response => response.json())
      .then(json => setData(json));

      return () => {
        console.log('Clean type');

      }

  }, [type])


  const mouseMoveHandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY
    });
  }
  useEffect( () => {
    console.log('ComponentsDidMount');
    window.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    }
  }, [] );

  return (
    <div>
      <h1>Resource: {type}</h1>
      <button onClick={() => setType('users')}>Users</button>
      <button onClick={() => setType('todos')}>Todos</button>
      <button onClick={() => setType('posts')}>Posts</button>

      {/* { <pre>{JSON.stringify(data, null, 2)}</pre> } */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
}

export default App;