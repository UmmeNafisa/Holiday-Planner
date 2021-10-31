
import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './BookItems.css'

const BookItems = (props) => {
    const { imgUrl, countryName, packageName, _id } = props.items;
    const [control, setControl] = useState(false);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteItems/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" }
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                } else {
                    setControl(false);
                }
            });


    }
    return (
        <div>
            <Col>
                <Card className="border-0">
                    <Card.Img variant="top" src={imgUrl} className="img-fluid bookedImg" />
                    <Card.Body>
                        <Card.Title>{packageName}</Card.Title>
                        <Card.Text>
                            {countryName}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Button className="btn-all me-2" > Confirm Booking </Button>
                <Button className="btn-all" onClick={() => handleDelete(_id)}  > Delete </Button>
            </Col>




        </div>
    );
};

export default BookItems;