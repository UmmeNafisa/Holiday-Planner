import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Package.css'

const Package = (prop) => {
    const { imgUrl, countryName, description, packageName, duration, groupSize, packageFees } = prop.pack;
    return (
        <div>
            <Col>
                <Card className="border-0 shadow bg-body rounded">
                    <Card.Img variant="top" src={imgUrl} />
                    <Card.ImgOverlay>
                        <Card.Title className="text-uppercase text-white fw-bold countryName">{countryName} </Card.Title>
                    </Card.ImgOverlay>
                    <Card.Body className="card-border">
                        <Card.Title className="package-name">{packageName}</Card.Title>
                        <Card.Text className="description text-muted">
                            {description}
                        </Card.Text>
                        <hr />
                        <div className="d-flex">
                            <div>
                                <p> Duration</p>
                                <p>{duration} </p>
                            </div>
                            <div>
                                <p>Group Size</p>
                                <p>{groupSize} </p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Package;