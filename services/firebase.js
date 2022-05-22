import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
 

const firebaseConfig = {
  apiKey: "AIzaSyD51PlS8KP3gyn7wePpUvI2L74lH0byEC8",
  authDomain: "proyecto1-8c4a6.firebaseapp.com",
  databaseURL: "https://proyecto1-8c4a6.firebaseio.com",
  projectId: "proyecto1-8c4a6",
  storageBucket: "proyecto1-8c4a6.appspot.com",
  messagingSenderId: "829389443228",
  appId: "1:829389443228:web:ffdaff9c3e3e22368a5d59",
  measurementId: "G-2VK6RQED07"
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID
};


firebase.initializeApp(firebaseConfig)

const fbStorage = firebase.storage()
// const fbFirestore = firebase.firestore()

export { fbStorage }