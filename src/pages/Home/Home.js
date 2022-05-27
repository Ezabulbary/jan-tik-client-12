import React from 'react';
import About from './About';
import Carousel from './Carousel';
import Summary from './Summary';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <About></About>
            <Tools></Tools>
            <Summary></Summary>
        </div>
    );
};

export default Home;