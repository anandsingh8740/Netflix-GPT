// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnV1j4FMMoc2DlQK7HJIXUSRipEoV5rf8",
  authDomain: "netflix-gpt-1cf4d.firebaseapp.com",
  projectId: "netflix-gpt-1cf4d",
  storageBucket: "netflix-gpt-1cf4d.appspot.com",
  messagingSenderId: "298977713265",
  appId: "1:298977713265:web:54fbbe8660acc0b67b4fd0",
  measurementId: "G-1QSC2RSSK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();