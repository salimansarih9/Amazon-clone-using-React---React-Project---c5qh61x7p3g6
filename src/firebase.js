import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyCcPSKlYtpdzBoAC8soeSmIARMzVKzrf5I",
//   authDomain: "challenge-4b2b2.firebaseapp.com",
//   databaseURL: "https://challenge-4b2b2.firebaseio.com",
//   projectId: "challenge-4b2b2",
//   storageBucket: "challenge-4b2b2.appspot.com",
//   messagingSenderId: "962418448875",
//   appId: "1:962418448875:web:f6cce5eeaf819481f661ae",
// };
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBay9Rva0qeDxgAJ_yfnG31euyZo6eYJKU",
  authDomain: "clone-fb3bd.firebaseapp.com",
  projectId: "clone-fb3bd",
  storageBucket: "clone-fb3bd.appspot.com",
  messagingSenderId: "210384993585",
  appId: "1:210384993585:web:e058663a684812e894c410",
  measurementId: "G-BSPEL5M5KQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };