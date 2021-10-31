import React, { useState } from 'react';
import AddNewPackage from '../AddNewPackage/AddNewPackage';
import ManageUsers from '../ManageUsers/ManageUsers';
import './Dashboad.css'

const Dashboard = () => {
    const [control, setControl] = useState("allUsers");

    console.log(control);
    return (
        <div className="admin-container">
            <div className="dashboard">
                <div className="admin-box">
                    <div className="row admin-container">
                        <div className="col-md-3 ">
                            <div className="admin-area p-1">
                                <h6>Dashboard</h6>
                                <div className="all-menu mt-5">
                                    <li
                                        onClick={() => setControl("allUsers")}
                                        className="admin-menu p-2"
                                    >
                                        All Users
                                    </li>
                                    <li
                                        onClick={() => setControl("addPackages")}
                                        className="admin-menu p-2"
                                    >
                                        Add New Packages
                                    </li>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 text-center  text-center">
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