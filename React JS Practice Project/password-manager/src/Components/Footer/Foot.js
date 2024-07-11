import React from 'react'
import "./foot.css"
const Foot = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <footer>

                <div className="bg-indigo-700 py-4 text-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="-mx-4 flex flex-wrap justify-between">
                            <div className="px-4 w-full text-center sm:w-auto sm:text-left">
                                Copyright ©  
                                ${currentYear }
                                All Rights Reserved.
                            </div>
                            <div className="px-4 w-full text-center sm:w-auto sm:text-left">
                                Made with ❤️ by RahulBhati.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Foot
