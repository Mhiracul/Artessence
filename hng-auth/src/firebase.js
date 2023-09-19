// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIhXATB6BMSVz7NuV2oKFdFuf10aMVUTA",
  authDomain: "hng-auth.firebaseapp.com",
  projectId: "hng-auth",
  storageBucket: "hng-auth.appspot.com",
  messagingSenderId: "308984235058",
  appId: "1:308984235058:web:72ee34fbcdee1762c6282b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

// Import the functions you need from the SDKs you need
