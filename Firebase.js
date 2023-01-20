// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABLxb0EvW1Nlpw8qOgaancU08CcCnv8eY",
  authDomain: "hexacore-a379e.firebaseapp.com",
  projectId: "hexacore-a379e",
  storageBucket: "hexacore-a379e.appspot.com",
  messagingSenderId: "322025778316",
  appId: "1:322025778316:web:14cc77609c903374071fa9",
  measurementId: "G-9RFZGP1RPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);