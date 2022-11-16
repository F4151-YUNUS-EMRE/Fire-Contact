import {
    initializeApp
} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC6pE6B6AgLze3R0lz44TFgkCcbEjWnz40",
    authDomain: "fire-contact-project-2.firebaseapp.com",
    databaseURL: "https://fire-contact-project-2-default-rtdb.firebaseio.com",
    projectId: "fire-contact-project-2",
    storageBucket: "fire-contact-project-2.appspot.com",
    messagingSenderId: "132091394606",
    appId: "1:132091394606:web:2c890d18cc908841a8fdbf"
};


const firebase = initializeApp(firebaseConfig);
export default firebase