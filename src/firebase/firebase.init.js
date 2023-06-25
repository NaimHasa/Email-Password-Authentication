// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjB-_DoEdkjCK1xloPghpzDRE1TzuuS94",
    authDomain: "email-password-auth-700bb.firebaseapp.com",
    projectId: "email-password-auth-700bb",
    storageBucket: "email-password-auth-700bb.appspot.com",
    messagingSenderId: "730227329404",
    appId: "1:730227329404:web:591bcf6fe6ce8518887cf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;