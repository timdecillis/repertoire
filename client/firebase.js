// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDAgYxxdRw4cHMNr5h1nyKt1xty9X6N-68',
  authDomain: 'fir-practice-3e324.firebaseapp.com',
  projectId: 'fir-practice-3e324',
  storageBucket: 'fir-practice-3e324.appspot.com',
  messagingSenderId: '634697170792',
  appId: '1:634697170792:web:0108b3d2f20e05ba28e0dd',
  measurementId: 'G-1686JYEEYE'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
const googleProvider = new GoogleAuthProvider();
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
