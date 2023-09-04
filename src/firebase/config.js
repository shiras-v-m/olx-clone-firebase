// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8Y4fUbR0AD2iryejQjo-CVqoRpl88JMM",
  authDomain: "olx-app-b3686.firebaseapp.com",
  projectId: "olx-app-b3686",
  storageBucket: "olx-app-b3686.appspot.com",
  messagingSenderId: "1079877107559",
  appId: "1:1079877107559:web:4b8ee966e8face9e6e79c2",
  measurementId: "G-67YD6MPSYK"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);