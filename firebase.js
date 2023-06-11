// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: secrets.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: secrets.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: secrets.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: secrets.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: secrets.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: secrets.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: secrets.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
