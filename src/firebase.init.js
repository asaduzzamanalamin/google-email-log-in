// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmvyjKn-Z4VLxBRTl6jDm0SaJPQjD6nIY",
  authDomain: "router-firbase-integration.firebaseapp.com",
  projectId: "router-firbase-integration",
  storageBucket: "router-firbase-integration.appspot.com",
  messagingSenderId: "197467566455",
  appId: "1:197467566455:web:04982e3b76daa55ffe7172"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;