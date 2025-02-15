// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvt8kXp-zjIgqKQsdgNOPZt9p7tQduasM",
  authDomain: "netflixgpt-b2a35.firebaseapp.com",
  projectId: "netflixgpt-b2a35",
  storageBucket: "netflixgpt-b2a35.firebasestorage.app",
  messagingSenderId: "683042401764",
  appId: "1:683042401764:web:b7a18d870f4a4273412bf1",
  measurementId: "G-VSHGZK9GPE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();