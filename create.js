import React, { useContext, useState } from "react";
import UserContext from "./usercontext";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Create() {
   

    let users = useContext(UserContext);

    let [userName,setuserName]=useState("");
    let [userPosition,setuserPosition]=useState("");
    let [userOffice,setuserOffice]=useState("");
    let [userAge,setuserAge]=useState("");
    let [userDate,setuserDate]=useState("");
    
    let userData={
        userName,userPosition,userOffice,userAge,userDate
    };
    return (
        <>
         
            <div className="container">

                <form onSubmit={(e)=>{
                    e.preventDefault();
                    users.setUserlist([...users.userList,userData]);
                    setuserName("");
                    setuserOffice("");
                    setuserPosition("");
                    setuserAge("");
                    setuserDate("");
                }}>
                    <div className="row">
                        <div class="form-group col-lg-6">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" placeholder="Enter your Name" value={userName} onChange={(e)=>{
                               setuserName(e.target.value) ;
                            }} />
                          
                        </div>
                        <div class="form-group col-lg-6">
                            <label for="position">Position</label>
                            <input type="text" class="form-control" id="position" placeholder="Your Position" value={userPosition} onChange={(e)=>{
                               setuserPosition( e.target.value) ;
                            }}/>
                        </div>
                        <div class="form-group col-lg-6">
                            <label for="office">Office</label>
                            <input type="text" class="form-control" id="office" placeholder="Office" value={userOffice} onChange={(e)=>{
                               setuserOffice( e.target.value) ;
                            }}/>
                        </div>
                        <div class="form-group col-lg-6">
                            <label for="age">Age</label>
                            <input type="text" class="form-control" id="age" placeholder="Your Age" value={userAge} onChange={(e)=>{
                               setuserAge( e.target.value) ;
                            }}/>
                        </div>
                        <div class="form-group col-lg-6">
                            <label for="date">Start Date</label>
                            <input type="date" id="date" class="form-control" value={userDate} onChange={(e)=>{
                               setuserDate( e.target.value) ;
                            }}></input>
                        </div>
                    </div>
                    <button class="btn btn-primary col-lg-4 offset-1">Submit</button>
                    <Link to="/dashboard"><button class="btn btn-primary col-lg-4 offset-1"><i class="fas fa-fw fa-tachometer-alt"></i><span>Dashboard</span></button></Link>
                </form>
            </div>
        </>
    )
}

export default Create;