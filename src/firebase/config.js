import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBJHIPqGuuRGTy1S048cB2ptm7KkLNRh-U",
  authDomain: "safouene-firegram.firebaseapp.com",
  databaseURL: "https://safouene-firegram.firebaseio.com",
  projectId: "safouene-firegram",
  storageBucket: "safouene-firegram.appspot.com",
  messagingSenderId: "56231953967",
  appId: "1:56231953967:web:3a0a61319a78f26b1328da",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// initilizing our dataBase
export const projectStorage = firebase.storage();
//initilizing our storage service
export const projectFirestore = firebase.firestore();
//creating timestamp
export const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
