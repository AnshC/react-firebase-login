import React, {useEffect} from 'react';
import firebase from 'firebase/app';

import '../flexy.ss.css';
import './db.css';

import {logout} from './firebase';
import {uploadData} from './firebase';
 
function Dashboard(){

    useEffect(() =>{
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              document.getElementById('dashboard-content').style.display = 'flex';
              document.getElementById('usrstat').innerHTML = 'Welcome ' + user.email;
            } else {
              document.getElementById('dashboard-content').style.display = 'none';
              window.location.replace('/login')
            }
          });
    },[]);

    return(
        <div id="dashboard-content">
            <h1 id="usrstat">Welcome User!</h1>
            <div className="data-frame m2 p2">
              <h2 id="uploadData" className="">Upload Data!</h2>
              <div className="create-data">
                <input type="text" id="dataSubmitTitle" placeholder="Title" className="m1"/>
                <input type="text" id="dataSubmitBody" placeholder="Body Text" className=""/>
                <p className="uploadDataP"><span className="uploadData" onClick={uploadData}>Upload</span></p>
              </div>
            </div>
            <p className="m-y1"><span className="logoutbutton" onClick={logout}>Logout</span></p>
        </div>
    );
}

export default Dashboard;