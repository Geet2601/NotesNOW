import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCPLAyXSnBchRXYiCS57aZuAegk7llNzdI",
    authDomain: "notesnow-7b69d.firebaseapp.com",
    projectId: "notesnow-7b69d",
    storageBucket: "notesnow-7b69d.appspot.com",
    messagingSenderId: "484281627480",
    appId: "1:484281627480:web:aaa604bc4a773d237c2b2d",
    measurementId: "G-QD11E5483D"
  }

  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export {firebase };