import React, { useState } from 'react'

const Counte = () => {
    const [count, setCount] = useState(0);
    const handleInc=()=>{
        setCount(count+1)
    }
    const handleDec=()=>{
        setCount(count-1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <div className="button">
                <button onClick={handleInc}>+</button>&nbsp;&nbsp;
                <button disabled={count===0} onClick={handleDec}>-</button>
            </div>
        </div>
    )
}

export default Counte
