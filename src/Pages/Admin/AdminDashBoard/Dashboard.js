import React, { useState } from 'react';
import AddNewPackage from '../AddNewPackage/AddNewPackage';
import ManageUsers from '../ManageUsers/ManageUsers';
import './Dashboad.css'

const Dashboard = () => {
    const [control, setControl] = useState("allUsers");

    return (
        <div className="admin-container">
            <div className="dashboard">
                <div className="admin-box">
                    <div className="row admin-container">
                        <div className="col-md-2 ">
                            <div className="admin-area p-1">
                                <h4 className="fw-bold pt-3 ">Dashboard</h4>
                                <div className="all-menu mt-5">
                                    <li
                                        onClick={() => setControl("allUsers")}
                                        className="admin-menu p-2 ps-3"
                                    >
                                        &gt; All Bookings
                                    </li>
                                    <li
                                        onClick={() => setControl("addPackages")}
                                        className="admin-menu p-2 ps-3"
                                    >
                                        &gt; Add New Packages
                                    </li>

                                </div>
                            </div>
                        </div>
                        <div className=" col-md-10 text-center  text-center">
                            {control === "allUsers" && <ManageUsers></ManageUsers>}
                            {control === "addPackages" && <AddNewPackage></AddNewPackage>}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dashboard;