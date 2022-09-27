import firebase from 'firebase/app';
import 'firebase/auth';

// Your Firebase configuration object that contains keys and identifiers for your app:

const firebaseConfig = {
  apiKey: 'AIzaSyAYcqV5KQ3W9QxFdrE_mnRyfst4xVVZnLY',
  authDomain: 'clone-9143d.firebaseapp.com',
  projectId: 'clone-9143d',
  storageBucket: 'clone-9143d.appspot.com',
  messagingSenderId: '1016528754816',
  appId: '1:1016528754816:web:5c908d4825e059d9ecae65',
  measurementId: 'G-F3JFX0PTNC',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
