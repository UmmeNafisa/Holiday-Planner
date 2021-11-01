import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';

const YourBookingItems = (props) => {
    const { imgUrl, countryName, packageName, status } = props.item;
    const [client, setClient] = useState([])

    useEffect(() => {
        fetch('https://stormy-inlet-84335.herokuapp.com/confirmBooking')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setClient(data)
            });
    }, []);
    return (
        <div>
            <Col>
                <Card className="border-0">
                    <Card.Img variant="top" src={imgUrl} className="img-fluid bookedImg" />
                    <Card.Body>
                        <Card.Title> Your Booked package: {packageName}</Card.Title>
                        <Card.Text>
                            <h6>  Destinations : {countryName}</h6>
                            <h6>Order Status: <span className="text-danger">{status} </span> </h6>
                            <p>   Shipping Address: {client[0]?.address}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default YourBookingItems;