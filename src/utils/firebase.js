// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUM_jnwtRqZF7vzgS5fJhfjvGrAmeKZzg",
  authDomain: "netflixgpt-24eb5.firebaseapp.com",
  projectId: "netflixgpt-24eb5",
  storageBucket: "netflixgpt-24eb5.firebasestorage.app",
  messagingSenderId: "985493028196",
  appId: "1:985493028196:web:125bb71f6cdb392d180e71",
  measurementId: "G-H6KX9GLT15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);