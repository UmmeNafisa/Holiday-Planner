import React from 'react';
import footerImg from '../../../Images/white-logo.png'
import { Col, Container, Row } from 'react-bootstrap';
import cashPic from '../../../Images/payment-companies-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faVoicemail } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'

const Footer = () => {
    return (
        <div className="pt-5 pb-3 text-white footer-back-img" >
            <Container>
                <Row xs={1} md={1} lg={3} className="g-4 pb-5">
                    <Col>
                        <img src={footerImg} alt="" />
                        <p className="my-3 header-front lh-lg text-align"> <span> Holiday Plannes </span> Organized world wide tour with different groups in several time. Just a click and go around the world from Dhaka, Bangladesh.  </p>
                        <input className="px-5 py-2" type="text" name="" id="" placeholder="Write your opinion" />
                        <input className="btn-all p-2" type="button" value="Opinion" />

                    </Col>
                    <Col className="text-align ps-5">
                        <h2 className="header-front"> Need Help ?</h2>
                        <hr className="text-white fw-bolder" />

                        <p className=" header-front">Call Us</p>
                        <h5 className="stylish-front"> +880-1760498732 </h5>

                        <p className="mt-3 header-front">Email for Us</p>
                        <h5 className="stylish-front">  holidayPlanner@gmail.com </h5>

                        <p className="mt-3 header-front">Location</p>
                        <h5 className="stylish-front"> 32A/4, Lake Road,Gulsan Tower </h5>
                    </Col>
                    <Col className="text-align">
                        <h2 className=" text-white px-3 header-front"> Follow us</h2>
                        <hr className="text-white fw-bolder" />
                        <h6 className="mt-3 header-front text-align">To know more about us Click here</h6>
                        <div className=" d-flex justify-content-start pe-4 icons px-3 ">
                            <p><FontAwesomeIcon icon={faFacebook} /></p>
                            <p><FontAwesomeIcon icon={faYoutube} /></p>
                            <p><FontAwesomeIcon icon={faTwitter} /></p>
                            <p><FontAwesomeIcon icon={faInstagram} /></p>
                            <p><FontAwesomeIcon icon={faVoicemail} /></p>
                        </div>
                        <p className=" header-front">We supports</p>
                        <img src={cashPic} alt="" className="w-75 mt-3 mb-5" />
                    </Col>
                </Row>
                <hr className="text-white fw-bolder" />
                <div className="fw-bold d-lg-flex justify-content-between">
                    <div> <p>Copyright © 2021 Holiday planners. All Rights Reserved.</p></div>
                    <div>Privacy Policy | Terms of Use | Cookie Policy </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;