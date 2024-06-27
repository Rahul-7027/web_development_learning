import React from 'react'
import { useContext } from 'react'
import { counterContext } from './context/context'

const Data1 = () => {
    const value=useContext(counterContext)
  return (
    <div>
      Data1
      <p>Count value is {value.count}</p>
    </div>
  )
}

export default Data1
