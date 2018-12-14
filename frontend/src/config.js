import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyAJjR4Ug5hlcte-7qTO7uRb15R1DXpaoO4",
    authDomain: "classistance-6cc39.firebaseapp.com",
    databaseURL: "https://classistance-6cc39.firebaseio.com",
    projectId: "classistance-6cc39",
    storageBucket: "classistance-6cc39.appspot.com",
    messagingSenderId: "911061243061"
};
var app = firebase.initializeApp(config)
const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);
export default app