import React, { useState } from 'react'

const Handles = () => {
    const [value, setValue] = useState("")
    const [form, setForm] = useState({ name: "", phone: "" })

    const handleClick = () => {
        alert("Yes , I am Click")
    }

    const handleMouse = () => {
        console.log("I am mouseOver")
    }

    const handleChange = (e) => {
        setValue(e.target.value)
        console.log(33333, e.keyCode)
    }

    const handleChangeInput = (e) => {
        // Update the form state with the new input value
        setForm({
            ...form,           // Copy the existing form state
            [e.target.name]: e.target.value  // Update the specific field based on the input's name attribute

        });
        e.preventDefault()
    };
    return (
        <div>
            <div className="button">
                <button onClick={handleClick}>Click me</button>
            </div>

            <div className="mouse" onMouseOver={handleMouse}>
                I am MouseOver
            </div>

            <div className="input">
                <input type="text" value={value} onChange={handleChange} />
            </div>


            <div className="group-Input">
                <form>
                    <label> Name: </label>
                    <input type="text" name="name" value={form.name ? form.name : ""} onChange={handleChangeInput} />
                    <br />
                    <label>Email: </label>
                    <input type="email" name="email" value={form.email ? form.email : ""} onChange={handleChangeInput} />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Handles
