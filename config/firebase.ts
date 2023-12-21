// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyyqLPmtrMTZL_kFmnGPVfenXoATZlkC0",
  authDomain: "giphy-ab5c9.firebaseapp.com",
  projectId: "giphy-ab5c9",
  storageBucket: "giphy-ab5c9.appspot.com",
  messagingSenderId: "988262762651",
  appId: "1:988262762651:web:95ad6b8052f9dd37545e3e",
  measurementId: "G-C5N3QGQBYX"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
 
export const auth = getAuth(app);
export default function firebase(){ } ;