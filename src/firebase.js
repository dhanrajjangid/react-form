import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAqZiqeOx7KcXu0wGw7Jx9K2fFuXJoRM0k",
  authDomain: "form-app-c4459.firebaseapp.com",
  projectId: "form-app-c4459",
  storageBucket: "form-app-c4459.appspot.com",
  messagingSenderId: "1008425855183",
  appId: "1:1008425855183:web:f1ad527a6dbbd754406fba"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);