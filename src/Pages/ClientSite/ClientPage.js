import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../Context/useAuth';
import BookItems from '../BookItems/BookItems';
import './ClientPage.css'

const ClientPage = () => {
    const { user } = useAuth();
    const [bookItems, setBookItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bookItems')
            .then(res => res.json())
            .then(data => {
                data.emailAddress = user?.email;
                setBookItems(data)
            })
    }, [])

    return (
        <Container className="my-5">
            <Row xs={1} md={1} lg={2}>
                <Col>
                    <img src={user?.photoURL} alt="" className="img-fluid profile-img" />
                    <h4 className="profile-name"> {user?.displayName} </h4>
                    <p> {user?.email}</p>
                </Col>
                <Col>
                    <h4> Your selected booking list is :{bookItems?.length}  </h4>
                    <Row xs={1} md={1} lg={2} className="g-4">
                        {
                            bookItems.map(items => <BookItems key={items._id} items={items} ></BookItems>)
                        }
                    </Row>
                </Col>
            </Row>
        </Container>

    );
};

export default ClientPage;