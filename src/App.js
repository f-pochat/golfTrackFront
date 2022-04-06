import './App.css';

import Login from "./components/login/Login";
import Profile from"./components/Profile";
import AddUser from "./components/AddUser";
import AddCourse from "./components/AddCourse";

import {isMobile} from 'react-device-detect';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, Navigate
} from 'react-router-dom';
import Home from "./components/home/Home";
import {Component, Profiler, useEffect, useState} from "react";
import AddHole from "./components/AddHole";
import ErrorPage from "./components/ErrorPage";



function App() {
    const [course, setCourse] = useState();
    document.title = 'Golf Track';

    const userEntered = (childData) => {
        localStorage.setItem('Name', childData.name);
        localStorage.setItem('Role', childData.role);
    }

    const getName = () => {
        return localStorage.getItem( 'Name' ) || '';
    }

    const getRole = () => {
        return localStorage.getItem( 'Role' ) || '';
    }

    const courseData = (childData) => {
        setCourse(childData);
    }

  return (
    <div className="App">
       <Router>
            <Routes>
                <Route
                    path = "/"
                    element = {<Login parentCallback = {userEntered} />}/>

                < Route path="/home"
                       element={getName() === '' ? <Navigate to="/" /> :  <Home/>}/>

                <Route path="/profile"
                       element={getName() === '' ? <Navigate to="/" /> :  <Profile/>}/>

                <Route path="/addUser"
                       element={(getName() === '' || getRole() === 'Editor') ? <Navigate to="/profile" /> :  <AddUser/>}/>

                <Route path="/addCourse"
                       element={isMobile? <ErrorPage /> : <AddCourse parentCallback = {courseData}/>}/>
                <Route path="/addCourse/:number" element={isMobile? <ErrorPage /> : <AddHole course = {course}/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
