import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-gray-800">
            <div className="topnav">
                <Link className="" href="/home">Home</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/about">About</Link>
            </div>
        </nav>

    )
}

export default Navbar
