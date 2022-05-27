import React from 'react';
import About from './About';
import Carousel from './Carousel';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <About></About>
            <Tools></Tools>
        </div>
    );
};

export default Home;