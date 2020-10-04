import React, {useState,useEffect} from 'react';


function App() {
  const [type, setType] = useState('users');

  return (
    <div>
      <h1>Resource: {type}</h1>
    </div>
  );
}

export default App;
