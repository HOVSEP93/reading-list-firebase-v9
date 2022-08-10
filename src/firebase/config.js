/* Initializing the firebase app and exporting the firestore and auth services. */
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// init firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();

// init Auth
const auth = getAuth();

// timestamp
// const timestamp = firebase.firestore.Timestamp;

export { db, auth };
