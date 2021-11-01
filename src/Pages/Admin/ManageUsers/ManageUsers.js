import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageUsers = () => {
    const [client, SetClient] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/confirmBooking")
            .then((res) => res.json())
            .then((data) => SetClient(data));
    }, []);

    const handleSatusChange = (id) => {

    }

    return (
        <div>
            <h1> All Clients</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Orders details</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {client?.map((item, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{item?.clientName}</td>
                            <td>{item?.emailAddress}</td>
                            <td>{item?.address}</td>
                            <td></td>
                            <td> <button onClick={() => { handleSatusChange(item._id) }} className="btn btn-info p-2">{item?.status}</button> </td>
                            <td> <button className="btn bg-danger p-2">Delete</button></td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageUsers;