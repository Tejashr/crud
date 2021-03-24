import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import UserContext from "./usercontext";

function Read(props) {
    let users=useContext(UserContext);
    let [name, position, office, age, date, index] = props.match.params.id.split("+");
  
    return (
        <>
            <div class="container">
                <div class="row profile">
                    <div class="col-md-4 offset-3">
                        <div class="profile-sidebar bg-secondary">

                            <div class="profile-usertitle">
                                <div className="text-warning"><h3>Name: {name}</h3></div>
                                <div className="text-light">Position: {position}</div>
                                <div className="text-light">Office: {office}</div>
                                <div className="text-light">Age: {age}</div>
                                <div className="text-light">Date: {date}</div>
                            </div>

                            <div class="profile-userbuttons">
                               <Link to="/dashboard"><button type="button" class="btn btn-primary btn-sm">Dashboard</button></Link>
                               <Link to={`/update/${name}+${position}+${office}+${age}+${date}+${index}`}>
                                            <button className="btn btn-primary btn-sm" ><i class="fas fa-user"></i>
                                                <span>Update</span></button>
                                        </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Read;