import React from 'react';
import Cover from '../../images/portfolio/cover-ezabul.JPG';
import Site1 from '../../images/portfolio/weave-dreams-to-paint.png';
import Site2 from '../../images/portfolio/groseriar-shop.png';
import Site3 from '../../images/portfolio/blue-birds-shop.png';
import Button from '../Shared/Button';

const Portfolio = () => {
    return (
        <div>

            <div className="md:flex justify-between items-center my-20">
                <div className="m-5 md:m-10">
                    <div>
                        <h1 className="text-4xl py-5">Hello there, my lovely companion.</h1>
                        <p className='text-2xl'>I am<span className="text-accent font-bold"> Ezabul Bari</span></p>
                    </div>
                    <p className='text-justify'>
                        Front-end developer specialized in web development.All stages of the development cycle for dynamic web applications are familiar to me.HTML5, CSS3, Bootstrap, Tailwind, JavaScript, ES-6, nodejs, mongoDB and learning other web programming stacks. Strong project management and customer service experience. I also familiar with algorithm data structure and OOP. I am very much interested in Linux. Software Engineering and Cyber Security is my favorite field.
                    </p>
                    <div className='my-5'>
                        <Button>Linkedin</Button>
                        <Button>GitHub</Button>
                        <Button>Facebook</Button>
                        <Button>Email</Button>
                    </div>
                </div>
                <div className="lg:max-w-lg m-10">
                    <img src={Cover} alt='' />
                </div>
            </div>

            <div className="bg-base-200 p-20">
                <div>
                    <h1 className="text-xl font-bold">ACADEMIC CREDENTIALS</h1>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Examination</th>
                                    <th>CGPA/GPA</th>
                                    <th>Passing Year</th>
                                    <th>Subject/Group</th>
                                    <th>Board/University</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>BSS Hons</th>
                                    <td>3.27 (out of 4.00)</td>
                                    <td>2019</td>
                                    <td>Folklore Studies</td>
                                    <td>Islamic University, Kushtia</td>
                                </tr>
                                <tr>
                                    <th>HSC/Alim</th>
                                    <td>4.42 (out of 5.00)</td>
                                    <td>2014</td>
                                    <td>Science</td>
                                    <td>Madrasha</td>
                                </tr>
                                <tr>
                                    <th>HSC/Alim</th>
                                    <td>5.00 (out of 5.00)</td>
                                    <td>2012</td>
                                    <td>Science</td>
                                    <td>Madrasha</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h1 className="text-xl font-bold mt-10">PERSONAL INFORMATION</h1>
                    <div className="overflow-x-auto">
                        <table className="table w-full mt-5">
                            <tbody>
                                <tr>
                                    <th>Date of Birth</th>
                                    <td>December 31, 1997</td>
                                </tr>
                                <tr>
                                    <th>Nationality</th>
                                    <td>Bangladeshi</td>
                                </tr>
                                <tr>
                                    <th>Present Address</th>
                                    <td>Uttar Badda, Dhaka-1212</td>
                                </tr>
                                <tr>
                                    <th>Permanent Address</th>
                                    <td>147 Nagerbazar, bagerhat, Bangladesh, 9300</td>
                                </tr>
                                <tr>
                                    <th>Contact No</th>
                                    <td>(+880)1754155491</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <h1 className='text-4xl text-center font-bold mt-5'>My Top 3 Projects</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-20'>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl image-full">
                    <figure><img src={Site1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-center">
                            <a href="https://weave-dreams-to-paint.firebaseapp.com/" target="_blank"><Button>Live Site</Button></a>
                        </div>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl image-full">
                    <figure><img src={Site2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-center">
                            <a href="https://groseriar-shop-claint.web.app/home" target="_blank"><Button>Live Site</Button></a>
                        </div>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl image-full">
                    <figure><img src={Site3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-center">
                            <a href="https://blue-birds-shop.netlify.app/" target="_blank"><Button>Live Site</Button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;