// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtsgYbdjveh6o5UHxtT0uqJC8TOQBNwHA",
  authDomain: "user-tracker-3d30a.firebaseapp.com",
  projectId: "user-tracker-3d30a",
  storageBucket: "user-tracker-3d30a.appspot.com",
  messagingSenderId: "482644358592",
  appId: "1:482644358592:web:6792709fb95a061fc80425",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
