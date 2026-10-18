
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// YOUR FIREBASE CONFIGURATION
const firebaseConfig = {
  apiKey: "AIzaSyDrUoH93lNCX9W6uSer2NQApWPICAlRpNg",
  authDomain: "ecommerce-fc441.firebaseapp.com",
  projectId: "ecommerce-fc441",
  storageBucket: "ecommerce-fc441.firebasestorage.app",
  messagingSenderId: "847054802316",
  appId: "1:847054802316:web:21a9b03474e1c0de1a9aa9",
  measurementId: "G-3HSMZ03Z0Y",
};

// INITIALIZE FIREBASE
const app = getApps().length > 0
  ? getApp()
  : initializeApp(firebaseConfig);

// FIRESTORE DATABASE
export const db = getFirestore(app);

// FIREBASE STORAGE
export const storage = getStorage(app);

export const auth = getAuth(app);

export default app;
