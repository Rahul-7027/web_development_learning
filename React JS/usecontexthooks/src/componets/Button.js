import React, { useContext } from 'react'
import Data1 from './Data1'
import { counterContext } from './context/context'
const Button = () => {
    const value=useContext(counterContext)
  return (
    <div>
      <button onClickCapture={()=>{value.setcount(value.count+1)}}><span> <Data1/></span></button>
     
    </div>
  )
}

export default Button
