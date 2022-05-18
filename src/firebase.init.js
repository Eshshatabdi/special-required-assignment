// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2PObMifUvLduPn4EUFHeg9y4726dK90s",
    authDomain: "special-to-do.firebaseapp.com",
    projectId: "special-to-do",
    storageBucket: "special-to-do.appspot.com",
    messagingSenderId: "503238871587",
    appId: "1:503238871587:web:324e0327b67745522e7f96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;