import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD68VEiy9FAOFX7GpJCm4Cdh2sbE6ELgrM",
  authDomain: "blog-app-71f11.firebaseapp.com",
  databaseURL: "https://blog-app-71f11.firebaseio.com",
  projectId: "blog-app-71f11",
  storageBucket: "blog-app-71f11.appspot.com",
  messagingSenderId: "565235718455",
  appId: "1:565235718455:web:27204941ac79d4ad0e62b2",
  measurementId: "G-TK110F6FSX",
};

firebase.initializeApp(firebaseConfig);

export default firebase;