// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRa2J65TZcODDgocV6k4KYFt1a2cq5F84",
  authDomain: "dawaafinder-files.firebaseapp.com",
  projectId: "dawaafinder-files",
  storageBucket: "dawaafinder-files.appspot.com",
  messagingSenderId: "542945999148",
  appId: "1:542945999148:web:f446242e572df9fa49d489",
  measurementId: "G-96282P2RR3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
