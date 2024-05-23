// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAByIxscsDz34bZPjGgHHni9zby-p-sEeE",
  authDomain: "campusebay-eb4c6.firebaseapp.com",
  projectId: "campusebay-eb4c6",
  storageBucket: "campusebay-eb4c6.appspot.com",
  messagingSenderId: "90517882541",
  appId: "1:90517882541:web:1f51fad1fb04fa42a4a824"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app)
export {fireDB,auth, storage } ;