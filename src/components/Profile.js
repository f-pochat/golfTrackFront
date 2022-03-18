import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

function Profile(){

    const [editMode,setEditMode]=useState(false);

    const toggleEditMode = (e) => {
        e.preventDefault();
        setEditMode(true)
    }

    let navigate = useNavigate();
    const goToAddUser = () => {
        navigate("/addUser");
    }

    return(
        <div className="d-flex justify-content-center">
            <link rel="stylesheet" href={require('./Login.css')}/>
            <div className="col-4"/>
            <div className="col-4">
                <div className="d-flex flex-column">
                    <form>
                        <fieldset>
                            <div className="form-group">
                                <label htmlFor="exampleInputUsername1" className="form-label mt-4">Username</label>
                                <input disabled value="Alejo" className="form-control"
                                       placeholder="Enter username..."/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                                <input type="text" disabled={!editMode} className="form-control" id={"password"} defaultValue={"password"}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputRoll" className="form-label mt-4">Role</label>
                                <input disabled value="Editor" className="form-control"/>
                            </div>
                            <div className="flex-row">
                                <button className="btn btn-primary m-2" onClick={goToAddUser}>Add User</button>
                                <button className="btn btn-primary m-2" disabled={editMode} onClick={toggleEditMode} >Edit</button>
                                <button className="btn btn-primary m-2" disabled={!editMode} onClick={(e) => {e.preventDefault();setEditMode(false)}}>Save</button>
                            </div>

                        </fieldset>
                    </form>
                </div>
            </div>
            <div className="col-4"/>
        </div>
    );
}

export default Profile;