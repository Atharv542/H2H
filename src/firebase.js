import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGgT7ilcOl2lxvgKZ_JbTH5n5eM_vQMyY",
  authDomain: "h2h-website-55397.firebaseapp.com",
  projectId: "h2h-website-55397",
  storageBucket: "h2h-website-55397.firebasestorage.app",
  messagingSenderId: "54273121829",
  appId: "1:54273121829:web:47a551d76ea0eb6436a9cc",
  measurementId: "G-CD1Y5N5RP1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);