// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCHXCbACWl7Kyk59GQpdZho0MY5a_L1LhI",

  authDomain: "blog-project-a8cfe.firebaseapp.com",

  projectId: "blog-project-a8cfe",

  storageBucket: "blog-project-a8cfe.appspot.com",

  messagingSenderId: "369804076058",

  appId: "1:369804076058:web:77cec705a3b3754760dda3"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();