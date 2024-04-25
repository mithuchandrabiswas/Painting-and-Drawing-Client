// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqTftGjK6n65RbChg8gbG9vE_7xwtBXN0",
  authDomain: "assignment-ten-art-and-craft.firebaseapp.com",
  projectId: "assignment-ten-art-and-craft",
  storageBucket: "assignment-ten-art-and-craft.appspot.com",
  messagingSenderId: "519652130047",
  appId: "1:519652130047:web:2b1e2db7ab8b7cf7f220ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;