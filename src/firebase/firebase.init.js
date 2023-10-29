import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLTAoCr86g5in98x6B2dRpeFBQ59F1mDI",
  authDomain: "brand-shop-fd015.firebaseapp.com",
  projectId: "brand-shop-fd015",
  storageBucket: "brand-shop-fd015.appspot.com",
  messagingSenderId: "164235176067",
  appId: "1:164235176067:web:f8c2bcce5ff265a73c53b6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);