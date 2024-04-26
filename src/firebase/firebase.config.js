// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwydWhCcCFD5shjo1LQxbNgKVgeA0QmrQ",
  authDomain: "tourism-management-6d801.firebaseapp.com",
  projectId: "tourism-management-6d801",
  storageBucket: "tourism-management-6d801.appspot.com",
  messagingSenderId: "261770124879",
  appId: "1:261770124879:web:888e15d5ecf80db49d143a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;