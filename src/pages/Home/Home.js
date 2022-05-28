import React from 'react';
import About from './About';
import Carousel from './Carousel';
import Contact from './Contact';
import Reviews from './Reviews';
import Summary from './Summary';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <About></About>
            <Tools></Tools>
            <Summary></Summary>
            <Contact></Contact>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;