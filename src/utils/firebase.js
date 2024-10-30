import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB57KXL1u5o_23hnSJisK_BK_0HK38kBLM",
  authDomain: "task81d-86c3b.firebaseapp.com",  // Fixed typo here
  projectId: "task81d-86c3b",
  storageBucket: "task81d-86c3b.appspot.com",
  messagingSenderId: "50937083591",
  appId: "1:50937083591:web:bd058b738670cb2a3af0e2"
};

// Ensure Firebase is initialized before using Firestore or Storage
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  // Initialize Firestore after app
const storage = getStorage(app);  // Initialize storage after app

export { db, storage };
