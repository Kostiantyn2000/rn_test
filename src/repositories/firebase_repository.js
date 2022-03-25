// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAzRzDIlpBbIe7BBjF3MGRArr9qCpbkU24',
  authDomain: 'rn-users-2dce8.firebaseapp.com',
  projectId: 'rn-users-2dce8',
  storageBucket: 'rn-users-2dce8.appspot.com',
  messagingSenderId: '425779084911',
  appId: '1:425779084911:web:2f996d862cb4fe3d5b579a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
