import Firebase, { firestore } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// need to seed the database

// a config
const config = {
    apiKey: "AIzaSyAGlmud_MgzygesjGXrkvRpbS7sLSDf5G0",
    authDomain: "netflix-cln-add75.firebaseapp.com",
    databaseURL: "https://netflix-cln-add75.firebaseio.com",
    projectId: "netflix-cln-add75",
    storageBucket: "netflix-cln-add75.appspot.com",
    messagingSenderId: "1032385845634",
    appId: "1:1032385845634:web:4ab936a4cb79d32485179b",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };

