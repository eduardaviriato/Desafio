import firebase from 'firebase/app'
import 'firebase/auth'
//import 'firebase/database'

import firebase_key from '../keys/firebase_key.js'
firebase.initializeApp(firebase_key)  

export default firebase

