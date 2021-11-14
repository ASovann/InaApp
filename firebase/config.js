import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {

    apiKey: "AIzaSyBQTesFdWtlYUgr-bQSV7iMKWDcytHs9-c",
  
    authDomain: "myapp-8a147.firebaseapp.com",
  
    projectId: "myapp-8a147",
  
    storageBucket: "myapp-8a147.appspot.com",
  
    messagingSenderId: "118538564433",
  
    appId: "1:118538564433:web:40780196e1d57bae98d970"
  
};


    const firebase = initializeApp(firebaseConfig);
    const db = getFirestore()


export { firebase, db };