import React from 'react';
import Packages from '../../Packages/Packages';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <About></About>
        </div>
    );
};

export default Home;