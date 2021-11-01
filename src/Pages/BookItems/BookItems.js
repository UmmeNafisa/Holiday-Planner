import React, { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import useAuth from '../../Context/useAuth';
import { Link } from 'react-router-dom';
import './BookItems.css'

const BookItems = (props) => {
    const { imgUrl, countryName, packageName, _id } = props.items;
    const { user } = useAuth();
    const [bookItems, setBookItems] = useState([]);

    useEffect(() => {
        fetch('https://stormy-inlet-84335.herokuapp.com/bookItems')
            .then(res => res.json())
            .then(data => setBookItems(data))
    }, [])

    //delete an item 
    const handleDelete = (id) => {
        // console.log(id)
        fetch(`https://stormy-inlet-84335.herokuapp.com/bookItems/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    alert('Deleted successfully')
                    const remainingItems = bookItems.filter(item => item._id !== id)
                    setBookItems(remainingItems)
                }
            });
    }


    // Confirm Booking btn to post the data 
    const handleConfirmBooking = (id) => {
        const finalItem = bookItems.find(item => item._id === id)
        finalItem.email = user?.email;
        finalItem.status = "Pending"
        delete finalItem._id
        fetch('https://stormy-inlet-84335.herokuapp.com/finalConfirmation', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(finalItem)
        })
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
                <Link to="/confirmBooking"> <Button onClick={() => handleConfirmBooking(_id)} className="btn-all me-2" > Confirm Booking </Button></Link>
                <Button className="btn-all" onClick={() => handleDelete(_id)}  > Delete </Button>
            </Col>
        </div>
    );
};

export default BookItems;