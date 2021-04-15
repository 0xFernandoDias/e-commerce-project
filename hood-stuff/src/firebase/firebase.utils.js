import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDLkqkP_IyDBhb1Jb8Fl4Cq5yrNiBUabeA",
    authDomain: "hood-stuff.firebaseapp.com",
    projectId: "hood-stuff",
    storageBucket: "hood-stuff.appspot.com",
    messagingSenderId: "726449558952",
    appId: "1:726449558952:web:734c5c81cc09f7a9dfb99d",
    measurementId: "G-6GTXGCRTRL"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return
    
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
      const {displayName, email} = userAuth
      const createdAt = new Date()

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message)
      }
    }

    return userRef
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase