import React, { useState } from 'react';
import ClientPage from '../ClientSite/ClientPage';
import YourBooking from '../YourBooking/YourBooking';
import useAuth from '../../Context/useAuth';


const ClientDashbroad = () => {
    const [control, setControl] = useState("ManageBooking");
    const { user } = useAuth();

    return (
        <div className="admin-container">
            <div className="dashboard">
                <div className="admin-box">
                    <div className="row admin-container">
                        <div className="col-md-2 ">
                            <div className="admin-area p-1">
                                <img src={user?.photoURL} alt="" className="img-fluid profile-img" />
                                <h4 className="profile-name"> {user?.displayName} </h4>
                                <p> {user?.email}</p>
                                <div className="all-menu mt-5">
                                    <li
                                        onClick={() => setControl("ManageBooking")}
                                        className="admin-menu p-2 ps-3"
                                    >
                                        &gt; Your Selected Items
                                    </li>
                                    <li
                                        onClick={() => setControl("YourBooking")}
                                        className="admin-menu p-2 ps-3"
                                    >
                                        &gt; Your Booking Items
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10 text-center  text-center">
                            {control === "ManageBooking" && <ClientPage></ClientPage>}
                            {control === "YourBooking" && <YourBooking></YourBooking>}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientDashbroad;