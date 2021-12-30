import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAtgFq5oJSttld_o8P_hQg9rkcNTrk3wb0",
  authDomain: "linkedin-clone-8c373.firebaseapp.com",
  projectId: "linkedin-clone-8c373",
  storageBucket: "linkedin-clone-8c373.appspot.com",
  messagingSenderId: "934073455270",
  appId: "1:934073455270:web:41334431ef1730bbdada67",
  measurementId: "G-CVB67MLCS0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };