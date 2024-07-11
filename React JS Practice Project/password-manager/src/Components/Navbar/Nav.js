import React from 'react'

const Nav = () => {
    return (
        <div>
            <header
                className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
                <div className="px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex shrink-0">
                            <a aria-current="page" className="flex items-center" href="/">
                                <img className="h-7 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="" />
                                <p className="sr-only">Website Title</p>
                            </a>

                        </div>

                        <div className="flex items-center justify-end gap-3">
                            <a aria-current="page"
                                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                                href="#">Home</a>
                            <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                                href="#">About</a>
                            <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                                href="#">Contact US</a>

                            <a aria-current="page" className="flex items-cente py-4r" href="https://github.com/Rahul-7027" target='_blank'>
                                <img className="h-7 w-auto" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" />
                                <p className="sr-only">Website Title</p>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Nav
