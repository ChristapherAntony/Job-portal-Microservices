


import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqTFKZc3j_icsAKT_Ho4YdorMuJuc17-w",
  authDomain: "careerconnect-1793c.firebaseapp.com",
  projectId: "careerconnect-1793c",
  storageBucket: "careerconnect-1793c.appspot.com",
  messagingSenderId: "527120165966",
  appId: "1:527120165966:web:07d380684d25286db2a71f",
  measurementId: "G-M9GHYYXHTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth(app);

export { provider, auth }










// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAqTFKZc3j_icsAKT_Ho4YdorMuJuc17-w",
//   authDomain: "careerconnect-1793c.firebaseapp.com",
//   projectId: "careerconnect-1793c",
//   storageBucket: "careerconnect-1793c.appspot.com",
//   messagingSenderId: "527120165966",
//   appId: "1:527120165966:web:07d380684d25286db2a71f",
//   measurementId: "G-M9GHYYXHTE"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);