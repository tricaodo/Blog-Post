import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";




firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;