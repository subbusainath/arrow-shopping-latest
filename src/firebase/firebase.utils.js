import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAoy2Dfd6Ca86tZmZP_ODf4JgwkNsYmSzY",
    authDomain: "arrow-shopping-db.firebaseapp.com",
    databaseURL: "https://arrow-shopping-db.firebaseio.com",
    projectId: "arrow-shopping-db",
    storageBucket: "arrow-shopping-db.appspot.com",
    messagingSenderId: "351691001202",
    appId: "1:351691001202:web:996073f0e8a1aa15e461eb",
    measurementId: "G-S3MWP0X1C2"
  };

  export const createUserProfileDocument = async(userAuth,additionalData) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user',error.message);
        }
    }
    return userRef;
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () =>auth.signInWithPopup(provider);

  export default firebase;