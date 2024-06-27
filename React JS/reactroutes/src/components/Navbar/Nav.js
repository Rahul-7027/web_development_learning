import React from 'react'
import { Link } from 'react-router-dom';
import "./nav.css";
const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <Link className={(e)=>{return e.isActive?"red":""}} to="/"><li>Home</li></Link>
                    <Link className={(e)=>{return e.isActive?"red":""}} to="/about"><li>About</li></Link>
                    <Link className={(e)=>{return e.isActive?"red":""}} to="/contact"><li>Contact US</li></Link>
                    {/* <Link to="/user"><li>USers</li></Link> */}
                </ul>
            </nav>
        </div>
    )
}

export default Nav
