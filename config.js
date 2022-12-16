// // Import the functions you need from the SDKs you need
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  databaseURL: 'https://judy-33123.firebaseio.com/',
  apiKey: 'AIzaSyCz4j8UcRAp-H-Tn_FfqLx-j1tr41omE54',
  authDomain: 'judy-33123.firebaseapp.com',
  projectId: 'judy-33123',
  storageBucket: 'judy-33123.appspot.com',
  messagingSenderId: '512440580248',
  appId: '1:512440580248:web:7bcfbf7944a0ac6ed3f8ed',
  //   measurementId: 'G-92TJYL0E9E',
};

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
// // Initialize Firebase
// export {firebase};
const app = initializeApp(firebaseConfig);
export const firebase = getFirestore(app);
