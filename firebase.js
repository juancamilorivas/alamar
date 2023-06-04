// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMpeKcxsOcqBt6gN84u0QhfjXupqWBo6g",
  authDomain: "alamar3-93b2d.firebaseapp.com",
  projectId: "alamar3-93b2d",
  storageBucket: "alamar3-93b2d.appspot.com",
  messagingSenderId: "864999022628",
  appId: "1:864999022628:web:2ae48b67e407ff5072b8b1",
  measurementId: "G-3NZJZYYT45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
