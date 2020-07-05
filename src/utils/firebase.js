import firebase from 'firebase/app';
import 'firebase/firestore';
import firebase_key from '../keys/firebase_key.js'
//import 'firebase/auth'
firebase.initializeApp(firebase_key)
export default class Firebase {
    
    getFirestore(){
        return firebase.firestore()
    }
}

//export default firebase
