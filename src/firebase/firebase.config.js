// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQgMefZbvJWpGptLFLU3EsYPYwPyuR6ZA",
  authDomain: "book-inventory-4b0de.firebaseapp.com",
  projectId: "book-inventory-4b0de",
  storageBucket: "book-inventory-4b0de.appspot.com",
  messagingSenderId: "196275216395",
  appId: "1:196275216395:web:02b5372adb8b3525afe70e",
  measurementId: "G-CJSQQ36K11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;