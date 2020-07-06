import firebase from 'firebase';
import 'firebase/firestore';
import firebase_key from '../keys/firebase_key.js'
import 'firebase/auth'
firebase.initializeApp(firebase_key)

export default firebase

// export default  Firebase {
    
//     getFirestore(){
//         return firebase.firestore()
//     }
// }
