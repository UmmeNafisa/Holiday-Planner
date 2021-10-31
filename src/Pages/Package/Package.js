import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Package.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUsers } from '@fortawesome/free-solid-svg-icons'



const Package = (props) => {
    const { imgUrl, countryName, description, packageName, duration, groupSize, packageFees } = props.pack;

    return (
        <div>
            <Col>
                <Card className="border-0 shadow bg-body rounded">
                    <Card.Img variant="top" src={imgUrl} className="img-fluid package-img" />
                    <Card.ImgOverlay>
                        <Card.Title className="text-uppercase text-white fw-bold countryName">{countryName} </Card.Title>
                    </Card.ImgOverlay>
                    <Card.Body className="card-border">
                        <Card.Title className="package-name">{packageName}</Card.Title>
                        <Card.Text className="description text-muted">
                            {description.slice(0, 150)}
                        </Card.Text>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex justify-content-between align-items-start">
                                <FontAwesomeIcon icon={faClock} className="icons" size='2x' />
                                <div>
                                    <span className="pb-3"> Duration</span> <br />
                                    <span className="text-muted">{duration} </span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-start">
                                <FontAwesomeIcon icon={faUsers} className="icons" size='2x' />
                                <div>
                                    <span>Group Size</span> <br />
                                    <span className="text-muted">{groupSize} </span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <h2 className="fees"> $ {packageFees}  </h2>
                            <Button className="btn-all fw-bold px-3 py-2" onClick={() => props.handleBookBtn(props.pack)}> BOOK NOW </Button>
                        </div>

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Package;