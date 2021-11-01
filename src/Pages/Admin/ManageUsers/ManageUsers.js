import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageUsers = () => {
    const [orderInfo, SetOrderInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/finalConfirmation')
            .then((res) => res.json())
            .then((data) => SetOrderInfo(data));
    }, []);

    //update status 
    const handleSatusChange = (id) => {
        const updatedItems = orderInfo.find(item => item._id === id)
        fetch(`http://localhost:5000/finalConfirmation/:${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItems)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if (data.modifiedCount > 0) {
                //     alert("updated successfully")
                //     SetOrderInfo({})
                // }
            })
    }

    //delete items 

    const handleDeleteItems = id => {
        console.log(id);
        fetch(`http://localhost:5000/finalConfirmation/:${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('Deleted successfully')
                    const remainingItems = orderInfo.filter(item => item._id !== id)
                    SetOrderInfo(remainingItems)
                }
            });

    }

    return (
        <div>
            <h1> All Clients</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Package Name</th>
                        <th>Destination Country</th>
                        <th>Client Email</th>
                        <th> Order id</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orderInfo?.map((item, index) => (
                    < tbody >
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item?.packageName}</td>
                            <td>{item?.countryName}</td>
                            <td>{item?.email}</td>
                            <td>{item?._id}</td>
                            <td> <button onClick={() => { handleSatusChange(item._id) }} className="btn btn-info p-2">{item?.status}</button> </td>
                            <td> <button onClick={() => { handleDeleteItems(item._id) }} className="btn bg-danger p-2">Delete</button></td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div >
    );
};

export default ManageUsers;