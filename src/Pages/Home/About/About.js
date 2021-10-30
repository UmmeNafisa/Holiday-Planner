import React from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import './About.css'
import aboutImgBig from '../../../Images/about-big-image.jpg'
import aboutImgSmall from '../../../Images/about-small-image.jpg'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-back py-5">
            <Container>
                <div className="d-lg-flex justify-content-around justify-content-between">
                    <div >
                        <div >
                            <Image src={aboutImgBig} className="about-img-border big-img img-fluid" />
                        </div>
                        <div >
                            <Image src={aboutImgSmall} alt="" className="about-img-border mt-5 small-img img-fluid" />
                        </div>
                    </div>
                    <div className="pt-2 w-75 about-us">
                        <h3 className="all-headers text-color fw-bolder pt-5 text-align"> <span className="fw-bolder text-color">|</span> About us</h3>
                        <h2 className="text-align mb-3 stylish-front">Plan Your Trip with Us </h2>
                        <p className="text-muted header-front text-align">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic. Italic Mountains, she had a last view back on the skyline</p>
                        <Link to=""> <Button className="btn-all fw-bold px-3 py-2 ms-0"> LEARN MORE </Button> </Link>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default About;