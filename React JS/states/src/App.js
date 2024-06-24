import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>&nbsp;&nbsp;
      <button disabled={count===0} onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;
