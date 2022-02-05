// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2DOmdgqfpRtaBKXGMvpQ5vmdln1o0Y64",
  authDomain: "task-manager-66f7e.firebaseapp.com",
  projectId: "task-manager-66f7e",
  storageBucket: "task-manager-66f7e.appspot.com",
  messagingSenderId: "611977355928",
  appId: "1:611977355928:web:444d98759ba71a6bc9e6ed",
  measurementId: "G-RXK8RGW3TG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}