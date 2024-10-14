// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoEoHtrMHikzvFHaw-j3b3Xf4Jd-dmMsQ",
  authDomain: "ng-e-commerce-f3ffb.firebaseapp.com",
  projectId: "ng-e-commerce-f3ffb",
  storageBucket: "ng-e-commerce-f3ffb.appspot.com",
  messagingSenderId: "642342689892",
  appId: "1:642342689892:web:22d871c9be583250821371"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
