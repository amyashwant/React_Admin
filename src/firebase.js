import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorial-cdb7e.firebaseapp.com",
  projectId: "tutorial-cdb7e",
  storageBucket: "tutorial-cdb7e.appspot.com",
  messagingSenderId: "879272574623",
  appId: "1:879272574623:web:aa83cd62dfe8be4c532caa",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
