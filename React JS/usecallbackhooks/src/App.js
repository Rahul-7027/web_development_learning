import './App.css';
import { useCallback, useState } from 'react';
import Nav from './components/Navbar/Nav';

function App() {
  const [count, setcount] = useState(0)
  const [adjactive, setadjactive] = useState("good")

  const getAdjactive=useCallback(()=>{
    return "another"+count
  },[count])
  return (
    <div className="App">
      <Nav adjactive={"good"} getAdjactive={getAdjactive} />
      <button onClick={()=>setcount(count+1)}>Count is {count}</button>
    </div>
  );
}

export default App;
