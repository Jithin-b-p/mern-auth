// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-dbb5a.firebaseapp.com",
  projectId: "mern-auth-dbb5a",
  storageBucket: "mern-auth-dbb5a.appspot.com",
  messagingSenderId: "504526900449",
  appId: "1:504526900449:web:25d8c24318fd962c5bfba0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
