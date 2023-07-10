 //import firebase from "firebase";
//import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
//working
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBF-MYb084BlMzZc1bF5BbhZHN8c40jbsk",
  authDomain: "my-messenger-2023.firebaseapp.com",
  projectId: "my-messenger-2023",
  storageBucket: "my-messenger-2023.appspot.com",
  messagingSenderId: "132447388358",
  appId: "1:132447388358:web:1a5f8eeb35017affcd0dc7",
  measurementId: "G-496JSM3HJY"
});

const db = firebaseApp.firestore();

export default db;