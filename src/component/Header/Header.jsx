import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='bg-slate-100 flex items-center justify-between lg:px-36 px-8 py-5 '>

            <div className=' text-3xl font-extrabold '>
                <h2>Ashikuzzaman</h2>
            </div>

            <ul className='items-center hidden space-x-8 lg:flex'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About Me</Link></li>
                <li><Link to="/">Projects</Link></li>
                <li><Link to="/">Blog</Link></li>

            </ul>

            {/* <Link className='inline-flex hidden lg:flex items-center h-12 px-6 mb-3 font-medium text-white transition duration-200 rounded shadow-md  md:mb-0 bg-blue-400 hover:bg-blue-700
}' to="/">Sign Up</Link> */}

            {/* mobile navbar section */}

            <div className='lg:hidden'>

                <button
                    title='Open Menu'
                    onClick={() => setIsMenuOpen(true)}
                >
                    <Bars3Icon className="h-6 w-6 text-black-500" />

                </button>
                {isMenuOpen && (
                    <div className='absolute top-0 left-0 w-full z-10'>
                        <div className='p-5 bg-white border rounded shadow-sm'>
                            <div className='flex items-center justify-between mb-4'>
                                <div className=' text-xl font-bold '>
                                    <h2>Ashikuzzaman</h2>
                                </div>
                                {/* Dropdown menu close button */}
                                <div>
                                    <button
                                        aria-label='Close Menu'
                                        title='Close Menu'
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <XMarkIcon className='w-5 text-gray-600' />
                                    </button>
                                </div>

                            </div>
                            {/* Mobile Nav Items Section */}
                            <nav>
                                <ul className='space-y-4'>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/">About Me</Link></li>
                                    <li><Link to="/">Projects</Link></li>
                                    <li><Link to="/">Blog</Link></li>


                                </ul>

                            </nav>

                        </div>
                    </div>

                )}

            </div>

        </div>
    );
};

export default Header;