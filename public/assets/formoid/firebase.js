// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDvpBgH0-G4swuMmhz8Cyq4RDQEDLvDGj8",
  authDomain: "crimsons-crew-app.firebaseapp.com",
  databaseURL: "https://crimsons-crew-app-default-rtdb.firebaseio.com",
  projectId: "crimsons-crew-app",
  storageBucket: "crimsons-crew-app.firebasestorage.app",
  messagingSenderId: "825885490647",
  appId: "1:825885490647:web:587b0aa858a81d04ffdf92",
  measurementId: "G-X68G8GK7ZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
