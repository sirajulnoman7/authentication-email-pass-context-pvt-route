import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase/firebase.config';


export const FirebaseContext = createContext(null)
// google provider
const googleProvider= new GoogleAuthProvider()

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null)
    //    set loading spinner because private route added
    const [loader,setLoader]=useState(true)

    // firebase authentication added create user
    const firebaseAuthEmailPassword = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // signIn user 
    const signInUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // signIn with Google 
    const signInWithGoogle=()=>{
        setLoader(true)
        return signInWithPopup(auth,googleProvider)
    }
    const logOut = () => {
        setLoader(true)
        signOut(auth)

    }


    // observer set for get the current users //step-1.you must create observer in to the useEffect hooks
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            //  if i set to current user in the userState then must change and set loader state false 
            setLoader(false)
            console.log(currentUser, 'for observer')
        })
        return () => unSubscriber()
    }, [])

    const authInfo = { user,  
        firebaseAuthEmailPassword,
         signInUser, 
         signInWithGoogle,
         logOut ,
         loader}
    return (
        <FirebaseContext.Provider value={authInfo}>
            {children}
        </FirebaseContext.Provider>
    );
};

export default AuthContext;