import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App"
import "./assets/css/main.css"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAzSxrTyz8kKUS4RaBmDpJPDohgrjw5HA",
  authDomain: "deirdreq-df6f7.firebaseapp.com",
  projectId: "deirdreq-df6f7",
  storageBucket: "deirdreq-df6f7.appspot.com",
  messagingSenderId: "679578581730",
  appId: "1:679578581730:web:8f4d7209b4db1c5458fcbb",
  measurementId: "G-XY1PFDDCQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);