
import React, { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BookItems.css'

const BookItems = (props) => {
    const { imgUrl, countryName, packageName, _id } = props.items;
    const [bookItems, setBookItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bookItems')
            .then(res => res.json())
            .then(data => setBookItems(data))
    }, [])

    const handleDelete = (id) => {
        // console.log(id)
        fetch(`http://localhost:5000/bookItems/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('Deleted successfully')
                    const remainingItems = bookItems.filter(item => item._id !== id)
                    setBookItems(remainingItems)
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
                <Link to="/confirmBooking"> <Button className="btn-all me-2" > Confirm Booking </Button></Link>
                <Button className="btn-all" onClick={() => handleDelete(_id)}  > Delete </Button>
            </Col>




        </div>
    );
};

export default BookItems;