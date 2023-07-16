import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTLQpGODtI7vDam-RPa4MK0VKaBtKEI0c",
  authDomain: "twst-a45f2.firebaseapp.com",
  databaseURL: "https://twst-a45f2-default-rtdb.firebaseio.com",
  projectId: "twst-a45f2",
  storageBucket: "twst-a45f2.appspot.com",
  messagingSenderId: "42709873874",
  appId: "1:42709873874:web:2b3d8037dbb4dfe366290b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const storage = getStorage();
export const db = getFirestore(app);
