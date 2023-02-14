import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyArOKOeEF8jHdbCi4BSfbu4vUuJZB9kh78",
  authDomain: "fir-bookshop-5318e.firebaseapp.com",
  projectId: "fir-bookshop-5318e",
  storageBucket: "fir-bookshop-5318e.appspot.com",
  messagingSenderId: "532550745378",
  appId: "1:532550745378:web:724aa25d97fc8e75eeb97b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
