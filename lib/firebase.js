// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFg1L4vBX0ZrzBaDIBFQhtlmyT1ejPIbY",
  authDomain: "portfolio-projects-ed559.firebaseapp.com",
  projectId: "portfolio-projects-ed559",
  storageBucket: "portfolio-projects-ed559.appspot.com",
  messagingSenderId: "119374571276",
  appId: "1:119374571276:web:a5a88077d1343563b40b29",
  measurementId: "G-80DLCPQGSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export { firestore };