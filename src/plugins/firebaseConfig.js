import firebase from "firebase/app";
import 'firebase/firestore';



const firebaseConfig = {
    yourConfig
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore;