import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCSeRMDla7BWEsqCb8BhlNdDVIjuWh5wNE",
    authDomain: "meal-prep-e4538.firebaseapp.com",
    databaseURL: "https://meal-prep-e4538.firebaseio.com",
    projectId: "meal-prep-e4538",
    storageBucket: "meal-prep-e4538.appspot.com",
    messagingSenderId: "1039960517081",
    appId: "1:1039960517081:web:086fee99e4fd09e1ce51c8",
    measurementId: "G-LDWV085XL5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();  