// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDczcrliO01iZGdp9PbwhpBXhYRSux5CZU",
  authDomain: "elite-queue.firebaseapp.com",
  projectId: "elite-queue",
  storageBucket: "elite-queue.appspot.com",
  messagingSenderId: "702554325402",
  appId: "1:702554325402:web:e72dd821d26a622ecdba23",
  measurementId: "G-GNPC3NZ8JW"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// connecting db
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth , provider};
export default db;
