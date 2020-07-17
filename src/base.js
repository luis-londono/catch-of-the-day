import Rebase from 're-base'; // react firebase
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB9ejHkZvpzppNv_gYV7jVrg2tv6-GV9nk",
    authDomain: "catch-of-the-day-ldono.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-ldono.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database()); // function that returns actual database

// this is a named export
export { firebaseApp };

// this is a default export. Main thing that that exported is base

export default base;