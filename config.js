import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
   //your firebase api and stuff
  }

  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export {firebase };
