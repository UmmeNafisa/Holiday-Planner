import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import YourBookingItems from '../YourBookingItems/YourBookingItems';

const YourBooking = () => {
    const [orderInfo, SetOrderInfo] = useState([]);

    useEffect(() => {
        fetch('https://stormy-inlet-84335.herokuapp.com/finalConfirmation')
            .then((res) => res.json())
            .then((data) => SetOrderInfo(data));
    }, []);
    return (
        <div>
            <h3 className="text-color fw-bold py-3"> Your Booked Items</h3>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    orderInfo.map(item => <YourBookingItems
                        key={item._id} item={item}></YourBookingItems>)
                }
            </Row>
        </div>
    );
};

export default YourBooking;