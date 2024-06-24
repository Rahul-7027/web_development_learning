import React, { useEffect } from 'react'

const Navbar = ({ color }) => {
    useEffect(() => {
      alert("Color was changed")
    }, [color])


    useEffect(() => {
     alert("Run on every first render")
    
      return () => {
        alert("Component was unmount")
      }
    }, [])
    
    
    return (
        <div>
            {`I am navbar heee ${color}`}
        </div>
    )
}

export default Navbar
