import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDxl-POvkPl1zKXAyFBnx2y1Va4Izq1u_Q',
  authDomain: 'finance-flow-a89b2.firebaseapp.com',
  projectId: 'finance-flow-a89b2',
  storageBucket: 'finance-flow-a89b2.appspot.com',
  messagingSenderId: '1085818551636',
  appId: '1:1085818551636:web:ec30ef5c8259df8eb79cc1',
  measurementId: 'G-5VJ33KYEBY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

// Export the initialized services
export { db, auth };
// const analytics = getAnalytics(app);
