// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMlHJO0Pu3Vy836ESPhdoNSdTmxOEIaVg",
  authDomain: "cvcv-83e7c.firebaseapp.com",
  projectId: "cvcv-83e7c",
  storageBucket: "cvcv-83e7c.firebasestorage.app",
  messagingSenderId: "780837931481",
  appId: "1:780837931481:web:8b5c23dc295143029eb1c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;
