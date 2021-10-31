import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageUsers = () => {
    const [client, SetClient] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/confirmBooking")
            .then((res) => res.json())
            .then((data) => SetClient(data));
    }, []);


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
                    </tr>
                </thead>
                {client?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd?.clientName}</td>
                            <td>{pd?.emailAddress}</td>
                            <td>{pd?.address}</td>
                            <td></td>
                            <td>{pd?.status}</td>
                            <button className="btn bg-danger p-2">Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageUsers;