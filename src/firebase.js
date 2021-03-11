// import firebase module
import firebase from "firebase/app";
// import the database info from the firebase module
import "firebase/database";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAZGbWUXtjM4dNvM6XwQam7qUgUTtbhp1g",
  authDomain: "shopping-cart-7b025.firebaseapp.com",
  projectId: "shopping-cart-7b025",
  storageBucket: "shopping-cart-7b025.appspot.com",
  messagingSenderId: "828407016631",
  appId: "1:828407016631:web:7708d9f53d7df36dc8b132",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// exporting our initialized specifically configured version of OUR firebase app
export default firebase;
