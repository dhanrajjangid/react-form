import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBtG-TaG0Wgm8IM_w5XFtbyPPw8VO7BPBw",
  authDomain: "my-form-97691.firebaseapp.com",
  projectId: "my-form-97691",
  storageBucket: "my-form-97691.appspot.com",
  messagingSenderId: "853530731973",
  appId: "1:853530731973:web:860b6a31e7c49cda8497ac"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);