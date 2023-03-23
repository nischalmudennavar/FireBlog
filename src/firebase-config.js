import { initializeApp } from "firebase/app";
// import { getFireStore } from "firebase";
// import { getAuth, GoogleAuthProvider } from "firebaseh";

import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCMbuFKMjQeFHRQ34uDA2dq5D0b9Mo-Qc",
  authDomain: "fireblog-8a798.firebaseapp.com",
  projectId: "fireblog-8a798",
  storageBucket: "fireblog-8a798.appspot.com",
  messagingSenderId: "1061474873851",
  appId: "1:1061474873851:web:a254b8ad78bdac7d6e5b5e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); //database
export const auth = getAuth(app); // authentication
export const provider = new GoogleAuthProvider(); // google authentication
