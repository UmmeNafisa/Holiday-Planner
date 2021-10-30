import React from 'react';
import useAuth from '../../Context/useAuth';
import './ClientPage.css'

const ClientPage = () => {
    const { user } = useAuth()
    return (
        <div className="d-lg-flex justify-content-center align-items-center">
            <div>
                <img src={user?.photoURL} alt="" className="img-fluid profile-img" />
                <h4 className="profile-name"> {user?.displayName} </h4>
                <p> {user?.email}</p>
            </div>
            <div>

                <h4> Your selected booikng list is :  </h4>
            </div>
        </div>
    );
};

export default ClientPage;