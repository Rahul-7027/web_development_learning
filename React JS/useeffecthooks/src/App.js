
import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';


function App() {
  const [count, setcount] = useState(0)

  // Case1  Run on every render
  useEffect(()=>{
    console.log("Run on every render")
  })

  // case 2
  // jb jb component render tb hum dekhna to milga 
  // component ka mount hona pr chlta h 

  // Run Only first Render 
  useEffect(() => {
    alert("Hey Wlecome to page")
  }, [])


  // case 3
  //  ish useEffect ko hum jb chlta h jb ek particular state or props m change aya to wo apni state update kr dega
  // Run only when certain value is changed
  useEffect(() => {
    alert("Count is change")
  }, [count])



  return (
    <div className="App">
      {/* <Navbar color={"cyan"}/> */}
      <h3>{count}</h3>
      <button onClick={() => setcount(count + 1)}>+</button>&nbsp;&nbsp;
      <button disabled={count===0} onClick={() => setcount(count - 1)}>-</button>
    </div>
  );
}

export default App;
