import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BookItems from '../BookItems/BookItems';
import './ClientPage.css'

const ClientPage = () => {
    const [bookItems, setBookItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bookItems')
            .then(res => res.json())
            .then(data => {
                setBookItems(data)
            })
    }, [])

    return (
        <Container className="my-5">
            <h3 className="pb-2 text-color fw-bold"> Your selected booking list is :{bookItems?.length}  </h3>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    bookItems.map(items => <BookItems key={items._id} items={items} ></BookItems>)
                }
            </Row>
        </Container>

    );
};

export default ClientPage;