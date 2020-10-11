import React from 'react';
import {useEffect } from 'react';
import {Link} from 'react-router-dom';

import '../flexy.ss.css';
import './data.css';

import {jsdata} from './firedataview'

function Datapage () {
    useEffect(()=>{
            jsdata();
    },[])

    return(
        <div className="data-content">
            <h1 className="head p3">
                <span><Link to="/data" className="a-none head-data">Data</Link></span>
                <span className="head-sep"> | </span>
                <span><Link to="/" className="a-none head-home">Home</Link></span>
                <span className="head-sep"> | </span>
                <span><Link to="/dashboard" className="a-none head-home">Dashboard</Link></span>
            </h1>
            <div className="data-container">
                <h1 id="data-container-head" className="m-y2">Login.jsx Data</h1>
                <div className="data" id="dataArea"></div>
            </div>
        </div>
    );
}

export default Datapage;
