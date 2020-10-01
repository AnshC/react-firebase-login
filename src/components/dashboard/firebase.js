import firebase from 'firebase/app';
import 'firebase/database';

var ref = firebase.database().ref('uploads');

export function logout(){
    firebase.auth().signOut()
    window.location.replace('/')
}

export function uploadData(){
    const uploadtitle = document.getElementById("dataSubmitTitle");
    const uploadbody = document.getElementById("dataSubmitBody");
    
    const upload ={
        title: uploadtitle.value,
        body: uploadbody.value
    };

    ref.push(upload);
    
    uploadtitle.value = '';
    uploadbody.value = '';
}