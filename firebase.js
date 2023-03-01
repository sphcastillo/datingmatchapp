import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAt6ai0U6pW6R_O1Tipd5_K-K2iS7H0kZI",
    authDomain: "tinderdatingapp-8795d.firebaseapp.com",
    databaseURL: "https://tinderdatingapp-8795d-default-rtdb.firebaseio.com",
    projectId: "tinderdatingapp-8795d",
    storageBucket: "tinderdatingapp-8795d.appspot.com",
    messagingSenderId: "948270443930",
    appId: "1:948270443930:web:f383a9c476001807f31e23"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export { firebase, auth }