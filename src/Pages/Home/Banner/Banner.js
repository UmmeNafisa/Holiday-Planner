import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../../Images/banner-slide-1.jpg'
import banner2 from '../../../Images/banner-slide-2.jpg'
import banner3 from '../../../Images/banner-slide-3.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-img"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption className="banner-caption">
                    <h1 className="banner-title fw-bold">Enjoy The Travel With <br /> <span>Holiday Planners</span> </h1>
                    <p>A journey of a 1000 miles starts with a simple step. </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-img"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption className="banner-caption">
                    <h1 className="banner-title fw-bold">Life is Sort and <br /> <span>The World is Wide</span> </h1>
                    <p>A journey of a 1000 miles starts with a simple step. </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-img"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption className="banner-caption">
                    <h1 className="banner-title fw-bold">Get Ready to Travel <br /> <span>The World</span> </h1>
                    <p>A journey of a 1000 miles starts with a simple step. </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );

};

export default Banner;