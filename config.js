import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
  apiKey: "AIzaSyA06kwHhwhMmsikt5DCJ9a50E-M2PPTD1Y",
  authDomain: "let-s-ride-47f84.firebaseapp.com",
  projectId: "let-s-ride-47f84",
  storageBucket: "let-s-ride-47f84.appspot.com",
  messagingSenderId: "226303895954",
  appId: "1:226303895954:web:b03567b572bbccc615b94b",
  measurementId: "G-4R8T3J9FN1"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

