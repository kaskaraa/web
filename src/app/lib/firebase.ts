import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyB34wU5CDeJl32OYiewBa5Eg2_yo5hqolE",
	authDomain: "admin-panel-13e00.firebaseapp.com",
	projectId: "admin-panel-13e00",
	storageBucket: "admin-panel-13e00.firebasestorage.app",
	messagingSenderId: "272999361810",
	appId: "1:272999361810:web:e269dbbabd3f8547d157cb",
	measurementId: "G-DXLMLY4RP7"
};
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


export { auth };
