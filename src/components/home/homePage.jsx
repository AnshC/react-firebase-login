import React from 'react';
import {Link} from 'react-router-dom';

import './homepage.css';
import '../flexy.ss.css'

function Homepage(){
    return(
        <div className="homepage-content align-center">
            <div className="main">
                <h1 className="head">Welcome to Login.jsx</h1>
                <p className="headpara m-y1">A login website made with Firebase and ReactJS</p>
                <div className="buttons">
                    <p className="p1"><span><Link to="/login" className="a-none lrb">Login</Link></span></p>
                    <p className="p1"><span><Link to="/data" className="a-none databutton">Data</Link></span></p>
                </div>
            </div>
        </div>
    );
}

export default Homepage;