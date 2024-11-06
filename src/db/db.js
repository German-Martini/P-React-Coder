
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd9Tl0BKgID5B8h3xqoOipzeV4JHtze24",
  authDomain: "proyecto-coder-react-1ca9a.firebaseapp.com",
  projectId: "proyecto-coder-react-1ca9a",
  storageBucket: "proyecto-coder-react-1ca9a.firebasestorage.app",
  messagingSenderId: "404560529930",
  appId: "1:404560529930:web:660b214e31facb04122df3"
};

// Initialize Firebase
initializeApp(firebaseConfig)

const db = getFirestore()

export default db;