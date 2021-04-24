import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyACj2_S0qgleaRdfzi4b_opcjIj4qqNJSE",
  authDomain: "crwn-db-e435e.firebaseapp.com",
  projectId: "crwn-db-e435e",
  storageBucket: "crwn-db-e435e.appspot.com",
  messagingSenderId: "661001994331",
  appId: "1:661001994331:web:e8d41f087836a97460bf7e",
  measurementId: "G-K9P8VQCF0L",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWihGoogle = () => auth.signInWithPopup(provider);

export default firebase;
