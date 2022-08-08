// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqiD1vEcl8A2Uqh4gYUIt_K-mBo_ECzSI",
  authDomain: "genius-car-service-cee48.firebaseapp.com",
  projectId: "genius-car-service-cee48",
  storageBucket: "genius-car-service-cee48.appspot.com",
  messagingSenderId: "864132762342",
  appId: "1:864132762342:web:d3eb0ca9118b7516b70927",
  measurementId: "G-4KDMWP6Y0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;