import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("LFkT4sEUVImHeyb78qOY")
  .collection("cartItem")
  .doc("7Pu0w7xVr7CswL2XxGiA");
firestore.doc("/users/LFkT4sEUVImHeyb78qOY/cartItems/7Pu0w7xVr7CswL2XxGiA");
firestore.collection("/users/LFkT4sEUVImHeyb78qOY/cartItems");
