// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOFGfzS7iYgO8Xo8k5H70DjFpF1BNoAr0",
  authDomain: "frontend-expense.firebaseapp.com",
  projectId: "frontend-expense",
  storageBucket: "frontend-expense.appspot.com",
  messagingSenderId: "482750116591",
  appId: "1:482750116591:web:4a3f306b22030e7bc8a11a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export {auth};