// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';

// import { initializeApp } from 'https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-app.js';
// import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-firestore-lite.js';
    
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaa2jXidjLXfF9dzMfIro9zavJ2zWer3k",
  authDomain: "todo-6db80.firebaseapp.com",
  projectId: "todo-6db80",
  storageBucket: "todo-6db80.appspot.com",
  messagingSenderId: "534177125076",
  appId: "1:534177125076:web:6a90bb2bd99ce878eda141",
  measurementId: "G-VBN8MQ1V3H"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase