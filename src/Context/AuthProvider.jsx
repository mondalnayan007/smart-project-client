import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState();
    const [loading,setLoading] = useState();
    const provider = new GoogleAuthProvider();



    const signUpUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleSignIn =()=>{
        return signInWithPopup(auth,provider)

    }
    const signOutUser = ()=>{
        return signOut(auth);
    }


    useEffect(()=>{
        const unsubscrib = onAuthStateChanged(auth,(currentUser)=>{
          setUser(currentUser)
          setLoading(false)
        })
        return()=>{
             unsubscrib();
        }
    },[])




    const authInfo = {

        user,
        loading,
        signInUser,
        signUpUser,
        googleSignIn,
        signOutUser
    }
    return (
        <AuthContext value={authInfo}>
            {
                children
            }
        </AuthContext>
    );
};

export default AuthProvider;