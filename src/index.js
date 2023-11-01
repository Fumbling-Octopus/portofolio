import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfudJx3Mwgh40I7Up_JqZ4dcLBo1IcH_A",
  authDomain: "only-meals.firebaseapp.com",
  databaseURL: "https://only-meals-default-rtdb.firebaseio.com",
  projectId: "only-meals",
  storageBucket: "only-meals.appspot.com",
  messagingSenderId: "851705665112",
  appId: "1:851705665112:web:8cfa0874a57d15fae81c2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);



