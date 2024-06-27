import React, { memo } from 'react'

const Nav = ({adjactive,getAdjactive,count}) => {
    console.log("I am navbar")
  return (
    <div>
      I am {adjactive} navbar
      <button onClick={()=>{getAdjactive()}}>{getAdjactive()}</button>
    </div>
  )
}

export default memo(Nav)
