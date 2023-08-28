import React from 'react';

const Skills = () => {
    return (
        <div className='lg:mx-52 mt-20 mb-14'>
            <p className='text-center font-bold text-4xl my-14'>Skills</p>
            <div className='flex grid grid-cols-2 lg:grid-cols-3 mb-14' >

                <img src="/html.png" alt="" className='h-44 w-44 mb-14' />
                <img src="/css.png" alt="" className='h-44 w-44 mb-14' />
                <img src="/bootstrap.png" className='h-44 w-44 mb-14' alt="" />
                <img src="/tailwind.png" alt="" className='h-44 w-44 mb-14' />
                <img src="/javascript.png" alt="" className='h-44 w-44 mb-14' />
                <img src="/node-express.png" alt="" className='h-44 w-44 mb-14' />
                <img src="/mongodb.png" alt="" className='h-44 w-44 mb-14' />
            </div>
        </div>
    );
};

export default Skills;