// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPSdUqoWooPeFHkR9Jed4zBjJwoj_4w68",
  authDomain: "docs-clone-bd45c.firebaseapp.com",
  projectId: "docs-clone-bd45c",
  storageBucket: "docs-clone-bd45c.firebasestorage.app",
  messagingSenderId: "636768006323",
  appId: "1:636768006323:web:593e91ca5f1ce3de2ac0c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)