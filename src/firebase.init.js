// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFyu-Gy2GNxuE8APnEEsY40h9x_h7-T54",
  authDomain: "car-warehouse-client.firebaseapp.com",
  projectId: "car-warehouse-client",
  storageBucket: "car-warehouse-client.appspot.com",
  messagingSenderId: "483644367717",
  appId: "1:483644367717:web:5d13f3b52cf6aa2af1b78c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;