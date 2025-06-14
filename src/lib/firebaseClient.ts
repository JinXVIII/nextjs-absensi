// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3JWVOknegk09GoP7LKlLMVTW0_NVzhEc",
  authDomain: "absensi-2a956.firebaseapp.com",
  projectId: "absensi-2a956",
  storageBucket: "absensi-2a956.firebasestorage.app",
  messagingSenderId: "376332068871",
  appId: "1:376332068871:web:b237c0c565c9a94186a2a2",
  measurementId: "G-CP54NHJY0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
