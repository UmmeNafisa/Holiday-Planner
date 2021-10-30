import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import packageImg from '../../Images/wave-design.jpg'
import './Destination.css'
import desImg1 from "../../Images/destination/destination-img1.jpg"
import desImg2 from "../../Images/destination/destination-img3.jpg"
import desImg3 from "../../Images/destination/offer-img2.jpg"
import desImg4 from "../../Images/destination/destination-img4.jpg"

const Destinations = () => {
    return (
        <div style={{ backgroundImage: `url(${packageImg})` }}>
            <Container className="pb-5">
                <div>
                    <h3 className="all-headers text-color fw-bolder pt-5 text-align"> <span className="fw-bolder text-color">|</span> Amazing Destination</h3>
                    <h2 className="text-align mb-3">Choose The Destination Just Right For Your Vacation </h2>
                </div>
                <Row xs={1} md={1} lg={2} className="g-4">
                    <Col>
                        <Row xs={1} md={1} lg={1} className="g-4">
                            <Col>
                                <Card.Img src={desImg1} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Button className="btn-all"> Greece </Button>
                                </Card.ImgOverlay>
                            </Col>

                        </Row>
                        <Row xs={1} md={1} lg={2} className="g-4">
                            <Col>
                                <img src={desImg2} alt="" className="img-fluid rounded-3" />
                                <Button className="btn-all"> Italy </Button>
                            </Col>
                            <Col>
                                <img src={desImg3} alt="" className="img-fluid des-img-3 rounded-3" />
                                <Button className="btn-all"> Switzerland </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <img src={desImg4} alt="" className=" h-100 w-100 rounded-3" />
                        <Button className="btn-all"> India </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Destinations;