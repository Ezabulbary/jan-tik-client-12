import React from 'react';
import aboutImg from '../../images/about/about.png'
import Button from '../Shared/Button';

const About = () => {
    return (
        <div class="hero h-screen bg-white">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={aboutImg} class="rounded-lg shadow-2xl" />
                <div className='sm:p-20 md:p-10'>
                    <h1 class="text-5xl font-bold">About Us</h1>
                    <p class="py-6 text-justify lg:pr-10">Jantrik started to develop and manufacture ergonomic hand tools. The first products that were developed according to ergonomic principles were the screwdrivers (1983), the adjustable wrenches (1984), wood chisels (1985) and slip-joint pliers (1986). In 1996, the Bahco Ergo concept was presented and scientifically approved as a way of preventing repetitive strain injuries and to increase productivity. All Bahco tools that carry the Ergo trademark have undergone a scientific 11-point development program with regard to ergonomics and function</p>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default About;