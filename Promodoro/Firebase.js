// Import the functions you need from the SDKs you need
import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOgnXZLo7VPQO5PIb07eyrBma_9ndr9xI",
  authDomain: "login-counter-app.firebaseapp.com",
  projectId: "login-counter-app",
  storageBucket: "login-counter-app.appspot.com",
  messagingSenderId: "1063951405891",
  appId: "1:1063951405891:web:18391ccefe7e8cd75015f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export {auth};