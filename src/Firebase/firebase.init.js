import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAj-xGnFmja3988nBiBE9Gvkl87gMMf97M",
  authDomain: "bill-payment-ease.firebaseapp.com",
  projectId: "bill-payment-ease",
  storageBucket: "bill-payment-ease.firebasestorage.app",
  messagingSenderId: "536759370646",
  appId: "1:536759370646:web:fd623147e2e2350f6093b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;