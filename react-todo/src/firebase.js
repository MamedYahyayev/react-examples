import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDtIXCUrBTxE6LjMr2K1G1YhhBNCanj5q8",
  authDomain: "todoapp-2108d.firebaseapp.com",
  databaseURL: "https://todoapp-2108d.firebaseio.com",
  projectId: "todoapp-2108d",
  storageBucket: "todoapp-2108d.appspot.com",
  messagingSenderId: "180623129919",
  appId: "1:180623129919:web:6894bdd1413509451fe78a",
  measurementId: "G-EQG98JP883",
});

const db = firebaseApp.firestore();

export default db;
