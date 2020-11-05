import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBAh5Sg7QEA7ALTRE-i9sWYXkSrm21AmFs",
  authDomain: "messenger-48a8b.firebaseapp.com",
  databaseURL: "https://messenger-48a8b.firebaseio.com",
  projectId: "messenger-48a8b",
  storageBucket: "messenger-48a8b.appspot.com",
  messagingSenderId: "89731448736",
  appId: "1:89731448736:web:b6704d92f8a664fabe6ec5",
  measurementId: "G-YNDJYLB2WY",
});

const db = firebaseApp.firestore();

export default db;
  
