import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMQ7bOTlJAI_PJcJ9AqlhFXpjxOAFr0_Q",
  authDomain: "reactjs-homeworks.firebaseapp.com",
  projectId: "reactjs-homeworks",
  storageBucket: "reactjs-homeworks.firebasestorage.app",
  messagingSenderId: "162965188088",
  appId: "1:162965188088:web:2eb286e3c315383984ba0d",
  measurementId: "G-HNV03Z3C45",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
