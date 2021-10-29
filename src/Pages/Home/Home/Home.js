import React from 'react';
import Destinations from '../../Destinations/Destinations';
import Packages from '../../Packages/Packages';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Packages></Packages>
            <Destinations></Destinations>

        </div>
    );
};

export default Home;