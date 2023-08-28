import React from 'react';
import "./banner.css"

const Banner = () => {
    return (


        <div className="lg:img relative">
            <img src="/128332362_2745470719050548_7385075766198644963_n.jpg" alt="Image" className="w-full h-full" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25">
                <div className='lg:ml-96 '>

                    <p className="text-teal-950 lg:text-4xl font-bold text-shadow lg:ml-24">Hi,  I'm </p>
                    <p className="text-teal-950 lg:text-6xl font-extrabold text-shadow lg:ml-24"> Ashikuzzaman</p>
                    <p className="text-teal-950 lg:text-5xl font-bold text-shadow lg:ml-24"> Full Stack Developer</p>

                </div>
            </div>
        </div>
    );
};

export default Banner;