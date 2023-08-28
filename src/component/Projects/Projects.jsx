import React from 'react';

const Projects = () => {
    return (
        <div className='lg:mx-28 mx-8 my-14'>
            <p className='text-center font-bold text-4xl my-14'>My Projcts</p>
            <div className='flex grid grid-cols-1 lg:grid-cols-2 mb-14 gap-10'>
                <div className="card w-auto bg-base-100 shadow-xl">
                    <figure><img src="/1st project.png" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Summer Camp</h2>
                        <ol>
                            <li>- The website is designed for a summer camp, providing information about their programs and activities.</li>
                            <li>- It offers a visually appealing and user-friendly interface to engage visitors.
                            </li>
                            <li>- The site showcases different camp categories, including adventure, photography, and more.
                            </li>
                        </ol>
                        <div className='font-bold'>
                            <a href="https://summer-camp-26f80.web.app">Live Site||</a>
                            <a href="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-Ashikuz">Client Site||</a>
                            <a href="https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-Ashikuz">Server Site</a>
                        </div>
                    </div>
                </div>
                <div className="card w-auto bg-base-100 shadow-xl">
                    <figure><img src="/2nd project.png" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Animal Toy</h2>
                        <ol>
                            <li>- Responsive and attractive design with React , Tailwind the website is on the kids toy nicsh.</li>
                            <li>- Authentication system emplement with firebase..
                            </li>
                            <li>- Some pages are resticted by the owner of the website after login one can see details about the toys.
                            </li>
                        </ol>
                        <div className='font-bold'>
                            <a href=" https://toy-marketplace-b3a1a.web.app">Live Site||</a>
                            <a href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-Ashikuz">Client Site||</a>
                            <a href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-Ashikuz">Server Site</a>
                        </div>

                    </div>
                </div>
                <div className="card w-auto bg-base-100 shadow-xl">
                    <figure><img src="/3rd project.png" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Banglar Chef</h2>
                        <ol>
                            <li>- First of all collection recipe.</li>
                            <li>- Then registration and firebase authentication.
                            </li>
                            <li>- The website may feature community interaction elements, such as comments or ratings.
                            </li>
                        </ol>
                        <div className='font-bold'>
                            <a href="  https://assignment10-bdc37.web.app">Live Site||</a>
                            <a href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-Ashikuz">Client Site||</a>
                            <a href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-Ashikuz">Server Site</a>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    );
};

export default Projects;