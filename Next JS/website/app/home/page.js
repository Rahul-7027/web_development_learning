import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div>
            I am home page

            <Image className='relative object-cover' src="https://www.menucool.com/slider/prod/image-slider-3.jpg" width={100} height={100} alt="" />
        </div>
    )
}

export default page

export const metadata = {
    title: "Welcome to Home Page",
    description: "Home page and description page",
};
