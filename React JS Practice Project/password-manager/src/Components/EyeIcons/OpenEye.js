import React, { useRef } from 'react'

const OpenEye = ({ref1}) => {
    const ref=useRef(ref1)
    return (
        <div>
            <img ref={ref} src="https://i.pinimg.com/564x/c7/c8/7c/c7c87cc1cb7bb35e0af8e116a83db8f5.jpg" style={{ height: "21px", width: "41px", marginLeft: "-17px", marginTop: "5px", cursor: "pointer" }} alt="" />
        </div>
    )
}

export default OpenEye
