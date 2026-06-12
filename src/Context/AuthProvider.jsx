import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';

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


    useEffect(()=>{
        const unsubscrib = onAuthStateChanged(auth,(currentUser)=>{
          setUser(currentUser)
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
        googleSignIn
    }
    return (
        <AuthProvider value={authInfo}>
            {
                children
            }
        </AuthProvider>
    );
};

export default AuthProvider;