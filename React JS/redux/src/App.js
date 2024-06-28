import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './redux/counter/counterSlice';
import { useState } from 'react';


function App() {
  const [incrementAmount, setIncrementAmount] = useState('2');
  const count = useSelector((state) => state.counter.value)
  console.log(1111, count)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button aria-label="Increment value" onClick={() => dispatch(increment())} > Increment</button>&nbsp;&nbsp;&nbsp;
      <span>{count}</span>&nbsp;&nbsp;&nbsp;
      <button disabled={count === 0} aria-label="Decrement value" onClick={() => dispatch(decrement())}> Decrement</button>&nbsp;&nbsp;&nbsp;
      <br /><br />
      <input aria-label="Set increment amount" value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)} />&nbsp;&nbsp;&nbsp;
      <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>Add Amount</button>
    </div>
  );
}

export default App;
