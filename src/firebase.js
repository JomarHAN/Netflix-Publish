import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBzCaPgvBkM_n-17s54V2E8X8WKdH9_R20",
    authDomain: "netflix-publish.firebaseapp.com",
    databaseURL: "https://netflix-publish.firebaseio.com",
    projectId: "netflix-publish",
    storageBucket: "netflix-publish.appspot.com",
    messagingSenderId: "450410592911",
    appId: "1:450410592911:web:945447fc131a4eb1f0cefa",
    measurementId: "G-R2E0FYQHH3"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const store = firebase.firestore()

export {
    db,
    auth,
    store
};