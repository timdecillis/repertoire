// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC3B0CadSVwaqWx7PhTbuoLm4pqqLU42po',
  authDomain: 'repertoire-24395.firebaseapp.com',
  projectId: 'repertoire-24395',
  storageBucket: 'repertoire-24395.appspot.com',
  messagingSenderId: '462585919489',
  appId: '1:462585919489:web:8f2d64bd1949cb850e2800'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);