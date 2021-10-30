import React from 'react';
import useAuth from '../../Context/useAuth';
import './ClientPage.css'

const ClientPage = () => {
    const { user } = useAuth()
    return (
        <div className="d-lg-flex">
            <div>
                <img src={user?.photoURL} alt="" className="img-fluid" />
                <p> {user?.email}</p>
            </div>
            <div>
                <h1> Hi, {user?.displayName} </h1>
                <h4> Your selected booikng list is :  </h4>
            </div>
        </div>
    );
};

export default ClientPage;