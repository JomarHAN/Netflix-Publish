import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "API_KEY",
    authDomain: "netflix-publish.firebaseapp.com",
    databaseURL: "https://netflix-publish.firebaseio.com",
    projectId: "netflix-publish",
    storageBucket: "netflix-publish.appspot.com",
    messagingSenderId: "450410592911",
    appId: "APP_ID",
    measurementId: "G-R2E0FYQHH3"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const store = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

export {
    provider,
    auth,
    store
};

export default db