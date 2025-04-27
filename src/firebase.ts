// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "northgatesf-maths.firebaseapp.com",
  projectId: "northgatesf-maths",
  storageBucket: "northgatesf-maths.firebasestorage.app",
  messagingSenderId: "404441021351",
  appId: "1:404441021351:web:5182170b4ed91e22479482"
};

// Initialize Firebase
export default function firebaseInit():void {
  initializeApp(firebaseConfig);
};