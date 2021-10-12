import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STOREAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSEAGINSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID
};

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);