import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'; 

const firebaseConfig = {
    apiKey: "AIzaSyCAeY1cLX7pf09hz5DmLH9cZ42CWktB-ZM",
    authDomain: "loginjsx.firebaseapp.com",
    databaseURL: "https://loginjsx.firebaseio.com",
    projectId: "loginjsx",
    storageBucket: "loginjsx.appspot.com",
    messagingSenderId: "1009900675451",
    appId: "1:1009900675451:web:f5eafdba3876f372bfddde"
};

firebase.initializeApp(firebaseConfig);

export function login(){
    let usrEmail = document.getElementById('loginEmail').value;
    let usrPass = document.getElementById('loginPass').value;

    firebase.auth().signInWithEmailAndPassword(usrEmail, usrPass).catch(function(error) {
        // Handle Errors here.
        var errorMessage = error.message;
        window.alert("Error : " + errorMessage)
      });


}

