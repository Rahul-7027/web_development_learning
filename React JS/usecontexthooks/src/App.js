import { counterContext } from './componets/context/context';
import './App.css';
import { useState } from 'react';
import Navbar from './componets/Navbar';

function App() {

  const [count, setcount] = useState(0)
  return (
    <>
      <counterContext.Provider value={{count,setcount}}>
        <div className="App">
          <Navbar value={count}/>
          <p style={{ border: "2px solid black", display: "inline", marginTop: " 30px" }} onClick={() => { setcount(count + 1) }}>count is {count}</p>
        </div>
      </counterContext.Provider>

    </>

  );
}

export default App;
