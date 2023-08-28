import React from 'react';
import { Link, useRouteError } from 'react-router-dom'
import { NoSymbolIcon } from '@heroicons/react/24/solid'

const ErrorHandling = () => {
    const { error, status } = useRouteError()

    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className=' flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <NoSymbolIcon className='w-40 h-40 text-red-500' />
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-9xl text-red-500'>
                        <span className='sr-only'>Error</span>
                        {status || 404}
                    </h2>
                    <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
                        {error?.message}
                    </p>
                    <Link className='inline-flex hidden lg:flex items-center h-12 px-6 mb-3 font-medium text-white transition duration-200 rounded shadow-md  md:mb-0 bg-blue-400 hover:bg-blue-700
}' to="/">Back to homepage</Link>

                </div>
            </div>
        </section>
    );
};

export default ErrorHandling;