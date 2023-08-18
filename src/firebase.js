// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe9eqiwVj9eVeCByKpVeg64zdkqfkxA8k",
  authDomain: "pcweb6-e4274.firebaseapp.com",
  projectId: "pcweb6-e4274",
  storageBucket: "pcweb6-e4274.appspot.com",
  messagingSenderId: "1038771549273",
  appId: "1:1038771549273:web:56e092eb0b57697bf82d48"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);