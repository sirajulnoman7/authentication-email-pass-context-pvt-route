

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO7ru_A1algd2G3YJk0IrA4ToS1UGaz5E",
  authDomain: "fir-with-context-b3698.firebaseapp.com",
  projectId: "fir-with-context-b3698",
  storageBucket: "fir-with-context-b3698.appspot.com",
  messagingSenderId: "731316463270",
  appId: "1:731316463270:web:6c709f72ea43ddf4ac3667"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default (auth) ;