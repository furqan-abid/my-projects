// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBtKOOJxQX6DcblS6J0wcAkAr2FfcJ5lU",
  authDomain: "disneyplus-509d1.firebaseapp.com",
  projectId: "disneyplus-509d1",
  storageBucket: "disneyplus-509d1.appspot.com",
  messagingSenderId: "61412189844",
  appId: "1:61412189844:web:07dc7b2dbc29e5d0b07681",
  measurementId: "G-WDGM66XWJ6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
var db=firebase.firestore();
const auth=firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db