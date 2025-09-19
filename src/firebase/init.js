
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVO-yIXYwNb46GGsszbYSu8nMSNFWkWKw",
  authDomain: "week7-lianzhen.firebaseapp.com",
  projectId: "week7-lianzhen",
  storageBucket: "week7-lianzhen.firebasestorage.app",
  messagingSenderId: "874820938963",
  appId: "1:874820938963:web:e5b51bb456d5dc4745b826"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()
export default db
