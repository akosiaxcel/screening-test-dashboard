import firebase from 'firebase/app';
import 'firebase/firestore'; // Import Firestore if you're using Firestore

const firebaseConfig = {
  apiKey: "AIzaSyAlK9OlgWiDksSQXmrMMMRlFXWxivA5ud0",
  authDomain: "screening-test-760d6.firebaseapp.com",
  projectId: "screening-test-760d6",
  storageBucket: "screening-test-760d6.appspot.com",
  messagingSenderId: "851350631716",
  appId: "1:851350631716:web:4d56224f0466b598f1efb1",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
// Add other Firebase services as needed (e.g., auth, storage)
