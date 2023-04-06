


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFkckabclvo9LSLal7ry4McG9TnHLd0Hs",
  authDomain: "otp-verification-a9e0a.firebaseapp.com",
  projectId: "otp-verification-a9e0a",
  storageBucket: "otp-verification-a9e0a.appspot.com",
  messagingSenderId: "1044039273691",
  appId: "1:1044039273691:web:43765717f747e1132890fe",
  measurementId: "G-F9QELD22MY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth(app);

export { provider, auth }