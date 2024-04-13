// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD88ecxhPhwkeiMCugibNuy7w1vMAAW8vI",
  authDomain: "theestatemarket.firebaseapp.com",
  projectId: "theestatemarket",
  storageBucket: "theestatemarket.appspot.com",
  messagingSenderId: "17588080603",
  appId: "1:17588080603:web:2f005d4c1489c62ee121fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;