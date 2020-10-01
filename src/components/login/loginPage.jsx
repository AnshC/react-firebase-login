import React from 'react';
import firebase from 'firebase';
import {useEffect} from 'react';
import '../flexy.ss.css';
import './login.css';

import {login} from './login';

function Loginpage(){

    useEffect(() =>{
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              window.location.replace('/dashboard')
            } else {
            }
          });
    },[]);

    return(
        <div className="login-content">
            <div className="container">
                <h1 className="login-head p2">Login</h1>
                <input type="text" placeholder="Email" className="input" id="loginEmail"/>
                <input type="password" placeholder="Password" className="input" id="loginPass"/>
                <p className="m-y2"><span onClick={login} className="login-button a-none">Login</span></p>
            </div>
        </div>
    );
}

export default Loginpage;