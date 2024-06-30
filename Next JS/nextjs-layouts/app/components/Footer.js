import React from 'react'
import "./footer.css"
const Footer = () => {
    return (
        <>
            <footer className="bg-gray-900">
                <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-10">
                    

                        <div className="text-center sm:flex sm:justify-between sm:text-left">
                            <p className="text-sm text-gray-400">
                                <span className="block sm:inline">All rights reserved.</span>

                                <a
                                    className="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                                    href="/"
                                >
                                    Terms & Conditions
                                </a>

                                <span>&middot;</span>

                                <a
                                    className="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                                    href="/"
                                >
                                    Privacy Policy
                                </a>
                            </p>

                            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                                &copy; 2022 Company Name
                            </p>
                        </div>
                    </div>
            </footer>
        </>
    )
}

export default Footer
