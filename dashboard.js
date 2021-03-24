import React, { useContext, useState } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import UserContext from "./usercontext";

function Dash() {


    let users = useContext(UserContext);

    return (
        <>
            {console.log(users)}
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                <Link class="nav-link collapsed" to="/create">
                    <button className="btn btn-primary"><i class="fas fa-user"></i>
                        <span>Create</span></button>
                </Link>
            </div>
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Update</th>
                        <th>delete</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.userList.map((user, index) => {
                            return (

                                <tr>
                                    <td><Link to={`/read/${user.userName}+${user.userPosition}+${user.userOffice}+${user.userAge}+${user.userDate}+${index} `}>{user.userName}</Link></td>
                                    <td>{user.userPosition}</td>
                                    <td>{user.userOffice}</td>
                                    <td>{user.userAge}</td>
                                    <td>{user.userDate}</td>
                                    <td>
                                        <Link to={`/update/${user.userName}+${user.userPosition}+${user.userOffice}+${user.userAge}+${user.userDate}+${index}`}>
                                            <button className="btn btn-primary btn-sm" ><i class="fas fa-user"></i>
                                                <span>Update</span></button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger btn-sm" onClick={() => {
                                            users.setUserlist(users.userList.splice(index, 1));
                                            users.setUserlist([...users.userList]);
                                        }}><i class="fas fa-user"></i>
                                            <span>Delete</span></button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </>
    )
}

export default Dash;