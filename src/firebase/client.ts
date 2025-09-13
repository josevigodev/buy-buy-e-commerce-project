import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCWB59jI1kzEGIn3T9RsNN0Kuq82udUwIE',
  authDomain: 'buy-buy-912f1.firebaseapp.com',
  projectId: 'buy-buy-912f1',
  storageBucket: 'buy-buy-912f1.firebasestorage.app',
  messagingSenderId: '1021680460797',
  appId: '1:1021680460797:web:7ccb1edc06edb7da5caf94',
  measurementId: 'G-H9EYCRBHTV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const signUp = async (email: string, password: string) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};
