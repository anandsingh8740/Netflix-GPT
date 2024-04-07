// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBbn3hi8euXtk8P_MreF3kKkH53UJz2J0",
  authDomain: "netflix-gpt-b55a6.firebaseapp.com",
  projectId: "netflix-gpt-b55a6",
  storageBucket: "netflix-gpt-b55a6.appspot.com",
  messagingSenderId: "1074284808136",
  appId: "1:1074284808136:web:cd224f766241b8512d62fd",
  measurementId: "G-71YWBPWLWK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth();