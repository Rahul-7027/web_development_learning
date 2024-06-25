import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  // let a = 0;  // because they are not work and update the value because data will be render then the value will be initial state


  const ref = useRef()
  const inpfocus = useRef(null);
  useEffect(() => {
    console.log(`first Rerendering`)
    ref.current.style.backgroundColor = "red";
  }, [])
  const handleInput = () => {
    inpfocus.current.focus();
    console.log("Input focus")
  }
  return (
    <div className="App">
      <h3>{count}</h3>
      <button ref={ref} onClick={() => setCount(count + 1)}>+</button>&nbsp;&nbsp;
      <button onClick={() => { setCount(count - 1) }}>-</button>
      &nbsp;&nbsp;
      <input ref={inpfocus} type="text" />&nbsp;&nbsp;
      <button onClick={handleInput}>Input focus Button</button>
    </div>
  );
}

export default App;
