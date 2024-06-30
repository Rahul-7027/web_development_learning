import { useMemo, useState } from 'react';
import './App.css';

function App() {

  const nums = new Array(30_00_000).fill(0).map((_, i) => {
    return {
      index: i,
      isMagical: i === 29_00_000
    }
  })

  const handleCount = () => {
    setCount(count + 1);
    if(count===10){
      setNumbers(
        new Array(10_00_000).fill(0).map((_, i) => {
          return {
            index: i,
            isMagical: i === 9_00_000
          }
        })    
      )
    }
  }
  const [count, setCount] = useState(0)
  const [numbers, setNumbers] = useState(nums)
  // without usememo hooks used 
  // const magical = numbers.find(item => item.isMagical === true)


  // usememo hooks are used for expensive calcultion used 
  // only one time calculation are used and reduce the calculation time 
  // render rendering and cost are high 
  const magical = useMemo(() => numbers.find(item => item.isMagical === true), [numbers,count])
  return (
    <div className="App">
      <span>Magical number is {magical.index}</span>
      <button onClick={handleCount}>Count is {count}</button>
    </div>
  );
}

export default App;
